export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  platform: "instagram" | "soundcloud" | "eventbrite" | "facebook" | "youtube" | "tiktok" | "mixcloud" | "whatsapp" | "email";
  href: string;
};

export type EventCard = {
  id: string;
  title: string;
  date: string;
  location: string;
  blurb: string;
  ticketLink?: string;
  thumbTheme: {
    from: string;
    to: string;
  };
};

export type MediaFeature = {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  cta?: {
    label: string;
    href: string;
  };
};

export type DJProfile = {
  id: string;
  name: string;
  role?: string;
  bio?: string;
  image?: string | null;
  socials?: {
    label: string;
    href: string;
  }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: "All" | "Carnival" | "Soca Nights" | "Bollywood Fusion" | "Festival";
  year: number;
  palette: {
    from: string;
    via: string;
    to: string;
  };
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FeaturedEvent = {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  date: string;
  time: string;
  location: string;
  venue: string;
  address: string;
  ticketLink: string;
  ticketLabel?: string;
  contact: string;
  image: string;
  genres: string[];
  djs: string[];
  hosts: string[];
  services: string[];
  notes: string[];
  widgetUrl?: string;
};

export type SocialSpotlight = {
  id: string;
  platform: "instagram" | "soundcloud" | "eventbrite" | "mixcloud";
  title: string;
  handle: string;
  description: string;
  href: string;
  embedUrl?: string;
};

export const siteConfig = {
  name: "Chutney in London",
  tagline: "Where Caribbean Rhythm Meets London Energy",
  foundedBy: "DJ Stylz UK",
  location: "London, United Kingdom",
  url: "https://chutneyinlondon.com",
  description:
    "Chutney in London is DJ Stylz UK's home for Indo-Caribbean, Caribbean, and multicultural nightlife. We blend Chutney, Soca, Dancehall, Bollywood, and Afro fusion to unite the community.",
  keywords: [
    "Chutney in London",
    "DJ Stylz UK",
    "Chutney music UK",
    "Soca events London",
    "Indo-Caribbean culture",
    "London nightlife",
  ],
  navItems: [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Music & Media", href: "/music-media" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  socialLinks: [
    {
      label: "@chutneyinlondon",
      platform: "instagram",
      href: "https://www.instagram.com/chutneyinlondon/",
    },
    {
      label: "@djstylzuk",
      platform: "instagram",
      href: "https://www.instagram.com/djstylzuk/",
    },
    {
      label: "SoundCloud",
      platform: "soundcloud",
      href: "https://soundcloud.com/chutneyinlondon",
    },
    {
      label: "TikTok",
      platform: "tiktok",
      href: "https://www.tiktok.com/@chutneyinlondon",
    },
    {
      label: "Eventbrite",
      platform: "eventbrite",
      href: "https://www.eventbrite.co.uk/o/chutney-in-london-42463638213",
    },
    {
      label: "Facebook",
      platform: "facebook",
      href: "https://www.facebook.com/Chutneyinlondon/?locale=en_GB",
    },
  ] satisfies SocialLink[],
  accentFlags: ["🇬🇧", "🇬🇾", "🇹🇹", "🇮🇳", "🇸🇷", "🇯🇲", "🇬🇩", "🇲🇺", "🇧🇧", "🇫🇯", "🇻🇨", "🇩🇲", "🇧🇸", "🇱🇨"],
  upcomingEvents: [
    {
      id: "carnival-city-2025",
      title: "Carnival City: Chutney in London 2025",
      date: "Saturday 22 March 2025 • 9:00 PM",
      location: "Electric Brixton, London",
      blurb:
        "A night of Chutney, Soca, and Bollywood club heaters with DJ Stylz UK + international surprise guests.",
      ticketLink: "https://www.eventbrite.co.uk/o/chutney-in-london-42463638213",
      thumbTheme: {
        from: "#d80f24",
        to: "#f3c144",
      },
    },
    {
      id: "bollywood-fete",
      title: "Bollywood x Soca Rooftop Fete",
      date: "Friday 9 May 2025 • 7:00 PM",
      location: "Queen of Hoxton, Shoreditch",
      blurb:
        "Sunset vibes with live percussion, dancers, and DJs blending chutney soca, afrobeats, and desi anthems.",
      ticketLink: "https://www.eventbrite.co.uk/o/chutney-in-london-42463638213",
      thumbTheme: {
        from: "#850012",
        to: "#f3c144",
      },
    },
    {
      id: "mas-band-launch",
      title: "Mas Band Launch: Carnival Warm-Up",
      date: "Saturday 14 June 2025 • 8:00 PM",
      location: "The Steel Yard, London",
      blurb:
        "Notting Hill warm-up session featuring tassa drummers, steel pan, soca dancers, and exclusive costume reveals.",
      ticketLink: "https://www.eventbrite.co.uk/o/chutney-in-london-42463638213",
      thumbTheme: {
        from: "#f3c144",
        to: "#d80f24",
      },
    },
  ] satisfies EventCard[],
  pastEvents: [
    {
      id: "diwali-bass-2024",
      title: "Diwali Bass 2024",
      date: "November 2024",
      location: "Dock X, Canada Water",
      blurb: "Sold-out festival of light featuring chutney soca royalty and a 360° LED stage experience.",
      thumbTheme: {
        from: "#850012",
        to: "#f3c144",
      },
    },
    {
      id: "island-fusion-2024",
      title: "Island Fusion Weekender",
      date: "August 2024",
      location: "Boxpark Wembley",
      blurb: "Two-day celebration of Caribbean food, rum, and riddims with surprise guest performances.",
      thumbTheme: {
        from: "#d80f24",
        to: "#f6d47a",
      },
    },
    {
      id: "soca-boat-2023",
      title: "Soca On The Thames",
      date: "July 2023",
      location: "Tower Millennium Pier",
      blurb: "High-energy Thames sunset cruise featuring live tassa, carnival costumes, and global chutney hits.",
      thumbTheme: {
        from: "#f3c144",
        to: "#d80f24",
      },
    },
  ] satisfies EventCard[],
  mediaFeatures: [
    {
      id: "mixcloud-feature",
      title: "Mix of the Month: Carnival Countdown",
      description:
        "Jump into 45 minutes of nonstop chutney soca, dancehall, and afrobeats expertly blended by DJ Stylz UK.",
      embedUrl:
        "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fchutneyinlondon%2Fchutney-in-london-carnival-countdown%2F",
      cta: {
        label: "Follow on Mixcloud",
        href: "https://www.mixcloud.com/chutneyinlondon/",
      },
    },
    {
      id: "youtube-feature",
      title: "Live from Chutney in London: Diwali Bass",
      description: "Relive the electric atmosphere from our 2024 Diwali Bass finale featuring tassa drummers on stage.",
      embedUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?si=playlist",
    },
  ] satisfies MediaFeature[],
  blogPosts: [
    {
      slug: "chutney-in-london-carnival-2025",
      title: "Carnival 2025: What To Expect From Chutney in London",
      date: "2025-01-15",
      excerpt: "We’re bringing tassa, steel pan, and a fresh lineup of vocal powerhouses to Carnival City.",
      category: "Announcements",
    },
    {
      slug: "dj-stylz-uk-top-10-chutney-anthems",
      title: "DJ Stylz UK’s Top 10 Chutney Anthems Right Now",
      date: "2024-12-05",
      excerpt: "From classics to new heat, here are the tunes running every fete.",
      category: "Music",
    },
    {
      slug: "how-to-book-chutney-in-london",
      title: "How To Book Chutney in London For Your Event",
      date: "2024-11-18",
      excerpt: "Everything you need to know about packages, travel, and how we bring the vibes.",
      category: "Bookings",
    },
  ] satisfies BlogPost[],
  galleryItems: [
    {
      id: "gallery-01",
      title: "Flag Waving Finale",
      category: "Carnival",
      year: 2024,
      palette: { from: "#d80f24", via: "#f3c144", to: "#850012" },
    },
    {
      id: "gallery-02",
      title: "Bollywood Fete Dancers",
      category: "Bollywood Fusion",
      year: 2024,
      palette: { from: "#850012", via: "#d80f24", to: "#f6d47a" },
    },
    {
      id: "gallery-03",
      title: "Soca Nation Crowd",
      category: "Soca Nights",
      year: 2023,
      palette: { from: "#4a0208", via: "#f3c144", to: "#d80f24" },
    },
    {
      id: "gallery-04",
      title: "Notting Hill Warm Up",
      category: "Festival",
      year: 2023,
      palette: { from: "#f3c144", via: "#850012", to: "#350104" },
    },
    {
      id: "gallery-05",
      title: "Tassa Drum Line",
      category: "Carnival",
      year: 2022,
      palette: { from: "#850012", via: "#350104", to: "#d80f24" },
    },
    {
      id: "gallery-06",
      title: "Caribbean Fusion Stage",
      category: "Festival",
      year: 2022,
      palette: { from: "#350104", via: "#d80f24", to: "#f3c144" },
    },
  ] satisfies GalleryItem[],
  testimonials: [
    {
      quote:
        "Chutney in London delivered the most dynamic lineup we’ve hosted—our audience was on their feet from doors open to close.",
      name: "Alicia B.",
      role: "Programming Lead, Boxpark Wembley",
    },
    {
      quote:
        "DJ Stylz UK brought a cross-cultural experience to our corporate Diwali celebration that still has the team talking.",
      name: "Rahul Singh",
      role: "Events Director, Global Fusion Group",
    },
    {
      quote:
        "No one blends chutney, dancehall, and afrobeats like this crew. The energy is unmatched and the production is tight.",
      name: "Kezia James",
      role: "Artist & Host",
    },
  ] satisfies Testimonial[],
  faqs: [
    {
      question: "What services do you offer for private bookings?",
      answer:
        "We provide curated DJ sets, live tassa drummers, hosts, dancers, custom lighting packages, and AV production for weddings, corporate events, and festivals.",
    },
    {
      question: "Do you travel outside of London?",
      answer:
        "Yes—our team covers the UK and international bookings across Europe, North America, and the Caribbean. Travel fees are customised per event.",
    },
    {
      question: "How far in advance should we book?",
      answer:
        "Prime summer and festive season dates fill 4–6 months ahead. Reach out early so we can hold your date and build a bespoke experience.",
    },
    {
      question: "Can we collaborate on mixtapes or branded content?",
      answer:
        "Absolutely. We partner with brands and artists on custom mixes, pop-up activations, and content takeovers. Drop us a line with your brief.",
    },
  ] satisfies FAQItem[],
  partners: [
    "BBC Asian Network",
    "Boxpark",
    "Notting Hill Carnival",
    "Trini Vibes UK",
    "Southbank Centre",
  ],
  contact: {
    email: "info@chutneyinlondon.com",
    whatsapp: "https://wa.me/447000000000",
    pressKit: "#",
  },
  newsletter: {
    description: "Be first to know about new events, mixes, and exclusive drops.",
  },
  socialSpotlights: [
    {
      id: "instagram",
      platform: "instagram",
      title: "Instagram",
      handle: "@chutneyinlondon",
      description:
        "Reels, live footage, and snapshots from the dancefloor. Follow for nightly highlights and flyers.",
      href: "https://www.instagram.com/chutneyinlondon/",
    },
    {
      id: "soundcloud",
      platform: "soundcloud",
      title: "SoundCloud",
      handle: "Chutney in London",
      description:
        "Live sets, exclusive dubs, and Indo-Caribbean blends recorded across the UK and Caribbean circuit.",
      href: "https://soundcloud.com/chutneyinlondon",
      embedUrl:
        "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/chutneyinlondon&color=%23f3c144&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      id: "mixcloud",
      platform: "mixcloud",
      title: "Mixcloud",
      handle: "DJ Stylz UK",
      description:
        "Archived mixtapes and throwback sessions from DJ Stylz UK — perfect for warming up the crew before the night.",
      href: "https://www.mixcloud.com/djstylz18/",
      embedUrl:
        "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fdjstylz18%2F",
    },
    {
      id: "eventbrite",
      platform: "eventbrite",
      title: "Eventbrite",
      handle: "Chutney In London Events",
      description:
        "Lock in tickets to the next fete, launch parties, and one-off cultural celebrations across the UK.",
      href: "https://www.eventbrite.co.uk/o/chutney-in-london-42463638213",
    },
  ] satisfies SocialSpotlight[],
  featuredEvent: {
    id: "bring-ah-bottle-pt4",
    title: "Bring Ah Bottle & Come Pt 4",
    subtitle: "Christmas Edition • Back by Popular Demand",
    description: [
      "We’re back and it’s only right we end the year with vibes! Join the Chutney in London family for our Christmas takeover.",
      "DJ Stylz UK and crew deliver non-stop energy from 8PM with a BYOB experience, food on sale, and the best Indo-Caribbean soundtrack in the city.",
    ],
    date: "Saturday 27 December 2025",
    time: "Doors 8:00 PM • Vibes all night",
    location: "London, United Kingdom",
    venue: "Royal Mahal (The Classic)",
    address: "32-36 Upper Tooting Road, Tooting Bec, London SW17 7PD",
    ticketLink:
      "https://www.eventbrite.co.uk/e/bring-ah-bottle-come-part-4-christmas-edition-tickets-1735955653089?aff=ebdsoporgprofile",
    ticketLabel: "Get Eventbrite Tickets",
    contact: "+44 7508 600379",
    image: "/ezgif-frame-033.jpg",
    genres: ["Soca", "Chutney", "Bollywood Remixes", "Dancehall"],
    djs: ["DJ Stylz UK", "Selecta A", "DJ CJ", "Rikkie D", "Majikal", "Katash"],
    hosts: ["DJ CJ", "Sophia Estelle"],
    services: [
      "Bring your own bottle (BYOB) • Cups & ice provided",
      "Food on sale",
      "Seating and tables available (first come, first served)",
    ],
    notes: [
      "No alcohol sold at the venue",
      "Powered by VIP Sounds",
      "Contact the team for advance tickets and info",
    ],
    widgetUrl:
      "https://www.eventbrite.co.uk/e/bring-ah-bottle-come-part-4-christmas-edition-tickets-1735955653089/widget?ref=etckt",
  } satisfies FeaturedEvent,
  residentDJs: [
    {
      id: "dj-stylz-uk",
      name: "DJ Stylz UK",
      role: "Founder • Resident DJ",
      bio: "Chutney in London visionary blending chutney, soca, dancehall, and Bollywood for the UK and beyond.",
      image: "/StylzUK.jpg",
      socials: [
        { label: "Instagram", href: "https://www.instagram.com/djstylzuk/" },
        { label: "Mixcloud", href: "https://www.mixcloud.com/djstylz18/" },
      ],
    },
    {
      id: "rikkie-d",
      name: "Rikkie D",
      image: "/Rikkie%20d.PNG",
    },
    {
      id: "dj-cj",
      name: "DJ CJ",
      image: "/DJ%20CJ.jpg",
    },
    {
      id: "selecta-a",
      name: "Selecta A",
      image: "/djSelectaa.jpg",
    },
    {
      id: "majikal",
      name: "Majikal",
      image: "/Majikal.PNG",
    },
    {
      id: "katash",
      name: "Katash",
      image: "/Katash.PNG",
    },
  ] satisfies DJProfile[],
};

export type SiteConfig = typeof siteConfig;

