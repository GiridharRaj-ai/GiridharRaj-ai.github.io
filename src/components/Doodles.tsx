import type { ComponentType, SVGProps } from "react";

export type DoodleComponent = ComponentType<SVGProps<SVGSVGElement>>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function DoodleArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M5 51c10-2 17-7 23-14 6-7 12-16 20-24" />
      <path d="M34 10c5 0 10 1 14 3" />
      <path d="M48 13c-1 5-3 10-4 14" />
      <path d="M6 55c10-3 18-8 25-16" opacity=".35" />
    </svg>
  );
}

export function DoodleStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M31 6c3 6 5 12 7 18 6 1 12 1 17 2-5 4-9 7-13 11 2 6 3 12 5 18-6-3-11-6-16-10-5 4-10 7-16 9 2-6 4-12 5-18-4-4-9-7-13-11 6-1 11-1 17-2 2-6 4-12 7-17Z" />
    </svg>
  );
}

export function DoodleAt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M42 21c-8-6-19-3-23 6-4 10 4 20 14 20 9 0 15-8 12-15-2-6-11-8-15-3-3 4-1 10 5 11 6 1 10-4 9-9" />
      <path d="M46 42c4 4 10 3 11-4" />
    </svg>
  );
}

export function DoodleMagnifier(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M20 27c4-9 17-12 25-5 8 7 6 20-4 24-10 5-22-2-21-12 0-3 1-5 2-7Z" />
      <path d="M43 46c4 4 8 8 12 12" />
      <path d="M30 29v12" />
      <path d="M24 35h12" />
    </svg>
  );
}

export function DoodleBubble(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M9 15c12-4 34-4 47-1 4 7 4 16 0 22-11 3-30 3-40 0-4-6-5-14-7-21Z" />
      <path d="M22 36l-5 11 12-9" />
      <circle cx="23" cy="24" r="2" fill="currentColor" stroke="none" />
      <circle cx="33" cy="24" r="2" fill="currentColor" stroke="none" />
      <circle cx="43" cy="24" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DoodleBolt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M37 5c-6 9-11 18-17 28 4 1 9 1 13 0-3 9-6 18-8 27 9-11 17-23 22-34-4-1-8-1-12 0 2-7 2-14 2-21Z" />
    </svg>
  );
}

export function DoodlePlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" {...base} strokeWidth={2.2} {...props}>
      <path d="M6 20c5 0 10 0 15 1" />
      <path d="M14 6c1 5 1 10 0 15" />
    </svg>
  );
}

export function DoodleWave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 32" {...base} {...props}>
      <path d="M5 22c4-12 9-12 12 0s8 12 11 0 8-12 11 0 8 12 11 0" />
      <path d="M9 29c4-3 8-3 12 0" opacity=".4" />
    </svg>
  );
}

export function SketchRing(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" {...props}>
      <path
        d="M100 7c46 0 86 39 86 88s-40 96-88 94S8 148 9 100 54 7 100 7"
        strokeWidth={1.5}
        strokeDasharray="2 9"
        strokeLinecap="round"
      />
      <path
        d="M100 13c44-1 80 36 80 84"
        strokeWidth={1}
        strokeDasharray="1 13"
        strokeLinecap="round"
        opacity=".6"
      />
    </svg>
  );
}
