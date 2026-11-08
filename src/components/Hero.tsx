import { ArrowRight, Download } from "lucide-react";
import { profile, stats } from "../data/portfolio";
import {
  DoodleArrow,
  DoodleAt,
  DoodleBolt,
  DoodleBubble,
  DoodleMagnifier,
  DoodlePlus,
  DoodleStar,
  DoodleWave,
  SketchRing,
  type DoodleComponent,
} from "./Doodles";

type Doodle = {
  key: string;
  Draw: DoodleComponent;
  left: string;
  top: string;
  size: number;
  rotate: number;
  delay: string;
  hideOnMobile: boolean;
};

const doodles: Doodle[] = [
  {
    key: "arrow",
    Draw: DoodleArrow,
    left: "2%",
    top: "15%",
    size: 64,
    rotate: -8,
    delay: "0.2s",
    hideOnMobile: false,
  },
  {
    key: "star",
    Draw: DoodleStar,
    left: "94%",
    top: "8%",
    size: 44,
    rotate: 12,
    delay: "1.1s",
    hideOnMobile: false,
  },
  {
    key: "at",
    Draw: DoodleAt,
    left: "-1%",
    top: "57%",
    size: 48,
    rotate: -6,
    delay: "0.7s",
    hideOnMobile: true,
  },
  {
    key: "magnifier",
    Draw: DoodleMagnifier,
    left: "95%",
    top: "59%",
    size: 50,
    rotate: 6,
    delay: "1.5s",
    hideOnMobile: true,
  },
  {
    key: "bubble",
    Draw: DoodleBubble,
    left: "7%",
    top: "83%",
    size: 56,
    rotate: -6,
    delay: "0.9s",
    hideOnMobile: false,
  },
  {
    key: "bolt",
    Draw: DoodleBolt,
    left: "87%",
    top: "84%",
    size: 42,
    rotate: 8,
    delay: "1.7s",
    hideOnMobile: false,
  },
  {
    key: "plus",
    Draw: DoodlePlus,
    left: "45%",
    top: "1%",
    size: 24,
    rotate: 14,
    delay: "0.4s",
    hideOnMobile: false,
  },
  {
    key: "wave",
    Draw: DoodleWave,
    left: "54%",
    top: "100%",
    size: 44,
    rotate: -2,
    delay: "1.3s",
    hideOnMobile: true,
  },
];

export default function Hero() {
  return (
    <section className="border-b border-line">
      <div className="container-x pb-16 pt-16 text-center md:pb-24 md:pt-24 lg:pt-28">
        <div
          className="relative mx-auto h-72 w-72 animate-fadeUp md:h-[22rem] md:w-[22rem]"
          style={{ animationDelay: "0.05s" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 text-line"
          >
            <SketchRing className="h-full w-full" />
          </div>

          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={224}
            height={224}
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line object-cover md:h-56 md:w-56"
          />

          {doodles.map(
            ({ key, Draw, left, top, size, rotate, delay, hideOnMobile }) => (
              <span
                key={key}
                aria-hidden="true"
                className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 text-ink/75 ${
                  hideOnMobile ? "hidden sm:block" : ""
                }`}
                style={{ left, top }}
              >
                <span className="block animate-float" style={{ animationDelay: delay }}>
                  <span
                    className="block"
                    style={{ transform: `rotate(${rotate}deg)` }}
                  >
                    <Draw width={size} height={size} />
                  </span>
                </span>
              </span>
            )
          )}
        </div>

        <h1
          className="display-1 mx-auto mt-10 max-w-4xl animate-fadeUp text-balance"
          style={{ animationDelay: "0.1s" }}
        >
          {profile.name}
        </h1>

        <p
          className="mx-auto mt-6 animate-fadeUp font-display text-[clamp(18px,2vw,24px)] font-semibold tracking-[-0.01em] text-ink"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.role}
        </p>

        <p
          className="mx-auto mt-6 max-w-xl animate-fadeUp text-[17px] leading-[1.65] text-secondary"
          style={{ animationDelay: "0.3s" }}
        >
          Computer Science undergraduate specializing in AI &amp; ML. I build
          machine learning applications, forecasting workflows and automated API
          tests in Python — and care about whether they hold up outside a
          notebook.
        </p>

        <div
          className="mt-10 flex animate-fadeUp flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.46s" }}
        >
          <a href="#contact" className="btn btn-primary w-full sm:w-auto">
            Get in touch
            <ArrowRight size={18} strokeWidth={1.5} />
          </a>
          <a href="#work" className="btn btn-ghost w-full sm:w-auto">
            See selected work
          </a>
        </div>

        <a
          href={profile.resume}
          download
          className="mt-6 inline-flex animate-fadeUp items-center gap-2 text-sm font-medium text-secondary underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-ink"
          style={{ animationDelay: "0.52s" }}
        >
          <Download size={16} strokeWidth={1.5} />
          Download résumé (PDF)
        </a>

        <ul className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-y-8 border-t border-line pt-10 sm:grid-cols-4 sm:divide-x sm:divide-line">
          {stats.map((stat, index) => (
            <li
              key={stat.label}
              className="animate-fadeUp px-2 text-center sm:px-6"
              style={{ animationDelay: `${0.6 + index * 0.08}s` }}
            >
              <span className="block font-display text-[26px] font-bold leading-none tracking-[-0.02em] text-ink">
                {stat.value}
              </span>
              <span className="mt-2 block text-xs text-muted">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
