import { Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section className="border-b border-line bg-subtle">
      <div className="container-x py-16 md:py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            overline="Certifications"
            title="Credentials that back the fundamentals"
            description="Formal coursework in data foundations and warehouse design, alongside the engineering work above."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <Reveal
              key={certification.title}
              delay={index * 0.08}
              className="h-full"
            >
              <article className="card card-hover flex h-full flex-col p-7 md:p-8">
                <Award size={24} strokeWidth={1.5} className="text-ink" />
                <h3 className="display-3 mt-6">{certification.title}</h3>
                <p className="mt-1 text-sm text-secondary">
                  {certification.issuer}
                </p>
                <p className="mt-4 text-[15px] leading-[1.6] text-secondary">
                  {certification.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
