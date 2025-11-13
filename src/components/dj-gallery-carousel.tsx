"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState, useCallback, useRef } from "react";

import { Button } from "@/components/ui/button";
import type { DJProfile } from "@/config/site";

interface DJGalleryCarouselProps {
  djs: DJProfile[];
}

export function DJGalleryCarousel({
  djs,
}: DJGalleryCarouselProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const manualScrollRef = useRef(false);
  const currentOffsetRef = useRef(0);
  const [transformX, setTransformX] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  
  // Touch and drag handlers
  const touchStartRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number>(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef<number>(0);
  
  // Create exactly 2 sets for seamless marquee loop
  // When first set scrolls -50%, duplicate set is in exact same position = seamless loop
  const duplicatedDjs = [...djs, ...djs];

  // Calculate animation duration based on number of items and screen size
  const getAnimationDuration = useCallback(() => {
    if (typeof window === 'undefined') return djs.length * 2;
    const isMobile = window.innerWidth < 768;
    return isMobile ? djs.length * 1.5 : djs.length * 3;
  }, [djs.length]);
  
  const [animationDuration, setAnimationDuration] = useState(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      return isMobile ? djs.length * 1.5 : djs.length * 3;
    }
    return djs.length * 2;
  });
  
  useEffect(() => {
    const updateDuration = () => {
      setAnimationDuration(getAnimationDuration());
    };
    
    updateDuration();
    window.addEventListener('resize', updateDuration);
    return () => window.removeEventListener('resize', updateDuration);
  }, [getAnimationDuration]);

  // Pause auto-scroll and switch to manual mode
  const pauseAutoScroll = useCallback(() => {
    if (!marqueeRef.current || !isAutoScroll) return;
    
    const container = marqueeRef.current;
    
    // Get the computed transform from the running animation
    const computedStyle = window.getComputedStyle(container);
    const transform = computedStyle.transform;
    
    let currentPos = 0;
    if (transform && transform !== 'none') {
      const matrix = new DOMMatrix(transform);
      currentPos = matrix.e;
    }
    // If no transform, animation is at 0% or just started, so currentPos stays 0
    
    // Stop animation and switch to manual
    setIsAutoScroll(false);
    manualScrollRef.current = true;
    currentOffsetRef.current = currentPos;
    setTransformX(currentPos);
    container.style.animation = 'none';
    container.style.animationDelay = '0s';
    container.style.transform = `translateX(${currentPos}px)`;
    container.style.transition = 'none';
  }, [isAutoScroll]);

  // Get current animation position from computed style
  const getCurrentAnimationPosition = useCallback(() => {
    if (!marqueeRef.current) return 0;
    const container = marqueeRef.current;
    const computedStyle = window.getComputedStyle(container);
    const transform = computedStyle.transform;
    if (transform && transform !== 'none') {
      const matrix = new DOMMatrix(transform);
      return matrix.e; // e is the translateX value
    }
    return currentOffsetRef.current;
  }, []);

  // Get item width helper
  const getItemWidth = useCallback(() => {
    if (typeof window === 'undefined') return 200;
    if (window.innerWidth < 640) return 200 + 8; // width + gap
    if (window.innerWidth < 768) return 280 + 12;
    if (window.innerWidth < 1024) return 320 + 12;
    if (window.innerWidth < 1280) return 380 + 16;
    if (window.innerWidth < 1536) return 420 + 16;
    return 450 + 16;
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!marqueeRef.current) return;
    
    // Pause auto-scroll if it's still running
    if (isAutoScroll) {
      pauseAutoScroll();
    }
    
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartRef.current = Date.now();
    isDraggingRef.current = true;
    
    // Pause animation
    const container = marqueeRef.current;
    const currentPos = manualScrollRef.current 
      ? currentOffsetRef.current 
      : getCurrentAnimationPosition();
    
    manualScrollRef.current = true;
    container.style.animation = 'none';
    container.style.animationDelay = '0s';
    currentOffsetRef.current = currentPos;
    setTransformX(currentPos);
  }, [isAutoScroll, pauseAutoScroll, getCurrentAnimationPosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDraggingRef.current || !marqueeRef.current || touchStartXRef.current === null) return;
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const container = marqueeRef.current;
    
    // Apply drag offset
    container.style.transition = 'none';
    container.style.transform = `translateX(${currentOffsetRef.current + deltaX}px)`;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!isDraggingRef.current || !marqueeRef.current || touchStartXRef.current === null) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaTime = touchStartRef.current ? Date.now() - touchStartRef.current : 0;
    
    isDraggingRef.current = false;
    touchStartRef.current = null;
    
    // Calculate swipe velocity
    const velocity = Math.abs(deltaX) / Math.max(deltaTime, 1);
    const minSwipeDistance = 50; // Minimum pixels to trigger swipe
    
    if (Math.abs(deltaX) > minSwipeDistance || velocity > 0.5) {
      // Determine scroll amount based on swipe distance
      const itemWidth = getItemWidth();
      const scrollAmount = Math.round(deltaX / itemWidth) * itemWidth;
      
      if (Math.abs(scrollAmount) >= itemWidth * 0.3) {
        // Significant swipe - scroll by item
        currentOffsetRef.current += scrollAmount;
      } else {
        // Small swipe - snap back
        currentOffsetRef.current += deltaX;
      }
    } else {
      // Small movement - snap back to nearest item
      const itemWidth = getItemWidth();
      const nearestItem = Math.round(currentOffsetRef.current / itemWidth) * itemWidth;
      currentOffsetRef.current = nearestItem;
    }
    
    const container = marqueeRef.current;
    container.style.transition = 'transform 0.3s ease-out';
    setTransformX(currentOffsetRef.current);
    container.style.transform = `translateX(${currentOffsetRef.current}px)`;
  }, [getItemWidth]);

  // Mouse drag handlers for desktop
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!marqueeRef.current) return;
    e.preventDefault();
    
    // Pause auto-scroll if it's still running
    if (isAutoScroll) {
      pauseAutoScroll();
    }
    
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    
    // Pause animation
    const container = marqueeRef.current;
    const currentPos = manualScrollRef.current 
      ? currentOffsetRef.current 
      : getCurrentAnimationPosition();
    
    manualScrollRef.current = true;
    container.style.animation = 'none';
    container.style.animationDelay = '0s';
    currentOffsetRef.current = currentPos;
    setTransformX(currentPos);
  }, [isAutoScroll, pauseAutoScroll, getCurrentAnimationPosition]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current || !marqueeRef.current) return;
    
    const deltaX = e.clientX - dragStartXRef.current;
    const container = marqueeRef.current;
    
    // Apply drag offset
    container.style.transition = 'none';
    container.style.transform = `translateX(${currentOffsetRef.current + deltaX}px)`;
  }, []);

  const handleMouseUp = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current || !marqueeRef.current) return;
    
    const deltaX = e.clientX - dragStartXRef.current;
    isDraggingRef.current = false;
    
    // Calculate scroll amount
    const itemWidth = getItemWidth();
    const scrollAmount = Math.round(deltaX / itemWidth) * itemWidth;
    
    if (Math.abs(scrollAmount) >= itemWidth * 0.3) {
      // Significant drag - scroll by item
      currentOffsetRef.current += scrollAmount;
    } else {
      // Small drag - snap back to nearest item
      const nearestItem = Math.round((currentOffsetRef.current + deltaX) / itemWidth) * itemWidth;
      currentOffsetRef.current = nearestItem;
    }
    
    const container = marqueeRef.current;
    container.style.transition = 'transform 0.3s ease-out';
    setTransformX(currentOffsetRef.current);
    container.style.transform = `translateX(${currentOffsetRef.current}px)`;
  }, [getItemWidth]);

  // Add global mouse event listeners for drag
  useEffect(() => {
    const handleMouseMoveGlobal = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMouseMove(e);
      }
    };
    
    const handleMouseUpGlobal = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMouseUp(e);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMoveGlobal);
    window.addEventListener('mouseup', handleMouseUpGlobal);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMoveGlobal);
      window.removeEventListener('mouseup', handleMouseUpGlobal);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Manual scroll functions - pause auto-scroll when arrows are clicked
  const handleScrollPrev = useCallback(() => {
    if (!marqueeRef.current) return;
    
    // Pause auto-scroll if it's still running
    if (isAutoScroll) {
      pauseAutoScroll();
    }
    
    const container = marqueeRef.current;
    
    // Get current position
    const currentPos = manualScrollRef.current 
      ? currentOffsetRef.current 
      : getCurrentAnimationPosition();
    
    // Enable manual scrolling
    manualScrollRef.current = true;
    container.style.animation = 'none';
    container.style.animationDelay = '0s';
    
    const itemWidth = getItemWidth();
    currentOffsetRef.current = currentPos + itemWidth;
    
    // Apply manual scroll
    setTransformX(currentOffsetRef.current);
    container.style.transform = `translateX(${currentOffsetRef.current}px)`;
    container.style.transition = 'transform 0.4s ease-out';
  }, [isAutoScroll, pauseAutoScroll, getCurrentAnimationPosition, getItemWidth]);

  const handleScrollNext = useCallback(() => {
    if (!marqueeRef.current) return;
    
    // Pause auto-scroll if it's still running
    if (isAutoScroll) {
      pauseAutoScroll();
    }
    
    const container = marqueeRef.current;
    
    // Get current position
    const currentPos = manualScrollRef.current 
      ? currentOffsetRef.current 
      : getCurrentAnimationPosition();
    
    // Enable manual scrolling
    manualScrollRef.current = true;
    container.style.animation = 'none';
    container.style.animationDelay = '0s';
    
    const itemWidth = getItemWidth();
    currentOffsetRef.current = currentPos - itemWidth;
    
    // Apply manual scroll
    setTransformX(currentOffsetRef.current);
    container.style.transform = `translateX(${currentOffsetRef.current}px)`;
    container.style.transition = 'transform 0.4s ease-out';
  }, [isAutoScroll, pauseAutoScroll, getCurrentAnimationPosition, getItemWidth]);

  return (
    <div className="mt-6 sm:mt-8 md:mt-10">
      <div className="mb-6 flex items-center justify-end gap-2 sm:mb-8">
        <Button
          size="icon"
          variant="outline"
          onClick={handleScrollPrev}
          onTouchStart={(e) => {
            e.preventDefault();
            handleScrollPrev();
          }}
          className="border-white/20 text-white hover:border-gold hover:text-gold hover:bg-gold/10 touch-manipulation active:bg-gold/20 min-h-[44px] min-w-[44px]"
        >
          <ArrowLeft className="size-5" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={handleScrollNext}
          onTouchStart={(e) => {
            e.preventDefault();
            handleScrollNext();
          }}
          className="border-white/20 text-white hover:border-gold hover:text-gold hover:bg-gold/10 touch-manipulation active:bg-gold/20 min-h-[44px] min-w-[44px]"
        >
          <ArrowRight className="size-5" />
        </Button>
      </div>
      <div 
        className="w-full -mx-4 sm:mx-0 overflow-hidden"
      >
        <div className="relative">
          {/* Auto-scroll carousel that switches to manual when user interacts */}
          <div 
            ref={marqueeRef}
            className="flex gap-2 sm:gap-3 md:gap-4 will-change-transform cursor-grab active:cursor-grabbing select-none"
            style={
              isAutoScroll
                ? {
                    animation: `marquee ${animationDuration}s linear infinite`,
                  }
                : {
                    transform: `translateX(${transformX}px)`,
                  }
            }
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
          >
            {/* First set of items */}
            {duplicatedDjs.map((dj, index) => (
              <div 
                key={`set1-${dj.id}-${index}`} 
                className="flex-shrink-0 w-[200px] sm:w-[280px] md:w-[320px] lg:w-[380px] xl:w-[420px] 2xl:w-[450px]"
              >
                <div className="group flex flex-col">
                  <div className="flex aspect-[4/5] sm:aspect-[3/4] md:aspect-[3/2] overflow-hidden rounded-xl border border-white/12 bg-[rgba(26,0,3,0.85)] shadow-[0_20px_45px_-18px_rgba(216,15,36,0.55)] transition-shadow group-hover:border-gold/30 group-hover:shadow-[0_24px_50px_-18px_rgba(243,193,68,0.4)]">
                    <div className="flex-1 relative w-full flex items-center justify-center">
                      <div className="relative w-full h-full min-h-full origin-center transition-transform duration-500 ease-out group-hover:scale-105">
                        {dj.image ? (
                          <Image
                            src={dj.image}
                            alt={dj.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 85vw, (max-width: 1024px) 60vw, (max-width: 1280px) 45vw, (max-width: 1536px) 35vw, 30vw"
                            className="h-full w-full object-contain"
                            style={{ objectPosition: "center center" }}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f3c144] via-[#f9d969] to-[#d5a12c] text-2xl sm:text-3xl font-bold text-[#2a0204]">
                            {dj.name
                              .split(" ")
                              .map((part) => part.charAt(0))
                              .slice(0, 2)
                              .join("")
                              .toUpperCase()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 text-center">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white transition-colors group-hover:text-gold">
                      {dj.name}
                    </h3>
                    {dj.role && (
                      <p className="mt-1 text-xs sm:text-sm text-muted">
                        {dj.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop - appears right after first set */}
            {duplicatedDjs.map((dj, index) => (
              <div 
                key={`set2-${dj.id}-${index}`} 
                className="flex-shrink-0 w-[200px] sm:w-[280px] md:w-[320px] lg:w-[380px] xl:w-[420px] 2xl:w-[450px]"
              >
                <div className="group flex flex-col">
                  <div className="flex aspect-[4/5] sm:aspect-[3/4] md:aspect-[3/2] overflow-hidden rounded-xl border border-white/12 bg-[rgba(26,0,3,0.85)] shadow-[0_20px_45px_-18px_rgba(216,15,36,0.55)] transition-shadow group-hover:border-gold/30 group-hover:shadow-[0_24px_50px_-18px_rgba(243,193,68,0.4)]">
                    <div className="flex-1 relative w-full flex items-center justify-center">
                      <div className="relative w-full h-full min-h-full origin-center transition-transform duration-500 ease-out group-hover:scale-105">
                        {dj.image ? (
                          <Image
                            src={dj.image}
                            alt={dj.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 85vw, (max-width: 1024px) 60vw, (max-width: 1280px) 45vw, (max-width: 1536px) 35vw, 30vw"
                            className="h-full w-full object-contain"
                            style={{ objectPosition: "center center" }}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f3c144] via-[#f9d969] to-[#d5a12c] text-2xl sm:text-3xl font-bold text-[#2a0204]">
                            {dj.name
                              .split(" ")
                              .map((part) => part.charAt(0))
                              .slice(0, 2)
                              .join("")
                              .toUpperCase()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 text-center">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white transition-colors group-hover:text-gold">
                      {dj.name}
                    </h3>
                    {dj.role && (
                      <p className="mt-1 text-xs sm:text-sm text-muted">
                        {dj.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

