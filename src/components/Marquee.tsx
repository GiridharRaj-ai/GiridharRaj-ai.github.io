import { techMarquee } from "../data/portfolio";

export default function Marquee() {
  return (
    <div className="group overflow-hidden border-b border-line bg-paper py-7">
      <div className="marquee-mask">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center opacity-60"
            >
              {techMarquee.map((item) => (
                <li
                  key={`${copy}-${item}`}
                  className="flex items-center gap-8 px-8 text-sm font-medium text-secondary"
                >
                  <span className="whitespace-nowrap">{item}</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
