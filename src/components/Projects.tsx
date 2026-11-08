import { useState, type KeyboardEvent } from "react";
import { ArrowUpRight, Check, Github } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  const moveTab = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = projects.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (event.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`tab-${projects[next].id}`)?.focus();
  };

  return (
    <section id="work" className="border-b border-line bg-paper">
      <div className="container-x py-16 md:py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            overline="Selected work"
            title="Three projects, each built end to end"
            description="Churn prediction, time-series forecasting and API testing — with the preprocessing, evaluation and tooling behind every result."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Selected projects"
            onKeyDown={moveTab}
            className="mt-10 flex flex-wrap gap-2"
          >
            {projects.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.id}
                  id={`tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-[180ms] ease-out active:scale-[0.98] ${
                    selected
                      ? "border-ink bg-ink text-paper"
                      : "border-line bg-paper text-secondary hover:bg-subtle hover:text-ink"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          key={project.id}
          id={`panel-${project.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${project.id}`}
          tabIndex={0}
          className="mt-10 animate-fadeUp focus:outline-none"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="overline-label">
                Project {String(active + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")} · {project.category}
              </p>
              <h3 className="display-2 mt-4 text-[clamp(24px,2.4vw,32px)]">
                {project.title}
              </h3>
              <p className="mt-4 max-w-lg text-[17px] leading-[1.65] text-secondary">
                {project.description}
              </p>

              <ul className="mt-6 space-y-3">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-[15px] leading-[1.6] text-secondary"
                  >
                    <Check
                      size={18}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-ink"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="pill">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  <Github size={18} strokeWidth={1.5} />
                  Repository
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Live demo
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="flex items-center justify-between gap-4 border-b border-line bg-subtle px-5 py-3">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full border border-line bg-paper" />
                  <span className="h-2.5 w-2.5 rounded-full border border-line bg-paper" />
                  <span className="h-2.5 w-2.5 rounded-full border border-line bg-paper" />
                </div>
                <span className="font-mono text-[11px] text-muted">
                  pipeline.py
                </span>
              </div>
              <div className="p-6 md:p-8">
                <p className="overline-label">Pipeline</p>
                <ol className="mt-5">
                  {project.pipeline.map((step, index) => (
                    <li
                      key={step}
                      className="relative flex gap-4 pb-5 last:pb-0"
                    >
                      {index < project.pipeline.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-[9px] top-6 w-px bg-line"
                        />
                      ) : null}
                      <span className="relative z-10 mt-0.5 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border border-line bg-paper">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                      </span>
                      <span className="font-mono text-[12px] leading-6 text-secondary">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4">
                  <span className="overline-label">Highlight</span>
                  <span className="font-display text-sm font-semibold tracking-[-0.01em] text-ink">
                    {project.highlight}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
