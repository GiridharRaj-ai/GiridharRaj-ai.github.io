import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { faqs } from "../data/portfolio";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-line bg-paper">
      <div className="container-x py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                overline="FAQ"
                title="Questions worth answering"
                description="The practical details — roles, location and how to reach me."
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="border-t border-line">
                {faqs.map((faq, index) => {
                  const expanded = open === index;
                  return (
                    <div key={faq.question} className="border-b border-line">
                      <button
                        type="button"
                        onClick={() => setOpen(expanded ? null : index)}
                        aria-expanded={expanded}
                        aria-controls={`faq-panel-${index}`}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      >
                        <span className="text-[17px] font-medium text-ink">
                          {faq.question}
                        </span>
                        <ChevronDown
                          size={20}
                          strokeWidth={1.5}
                          className={`shrink-0 text-secondary transition-transform duration-[350ms] ease-out ${
                            expanded ? "rotate-45" : ""
                          }`}
                        />
                      </button>
                      <div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-hidden={!expanded}
                        className={`overflow-hidden transition-all duration-[350ms] ease-out ${
                          expanded
                            ? "max-h-56 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="max-w-xl pb-6 pr-8 text-[15px] leading-[1.65] text-secondary">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
