import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/portfolio";

export default function Process() {
  return (
    <section id="process" className="border-b border-line bg-subtle">
      <div className="container-x py-16 md:py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            overline="Process"
            title="How the work gets done"
            description="Three steps I follow on every project, from the first look at a dataset to the final handover."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <div className="border-t border-line pt-6">
                <span className="font-display text-[44px] font-bold leading-none tracking-[-0.03em] text-muted/60">
                  {step.number}
                </span>
                <h3 className="display-3 mt-5">{step.title}</h3>
                <p className="mt-2 max-w-xs text-[15px] leading-[1.6] text-secondary">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
