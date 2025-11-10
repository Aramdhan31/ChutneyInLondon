const TWEMOJI_BASE = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg";

export function flagToTwemoji(flag: string) {
  if (!flag) return null;
  const codePoints = Array.from(flag)
    .map((char) => char.codePointAt(0))
    .filter((point): point is number => typeof point === "number")
    .map((point) => point.toString(16).padStart(4, "0"));

  if (!codePoints.length) return null;

  return `${TWEMOJI_BASE}/${codePoints.join("-")}.svg`;
}

