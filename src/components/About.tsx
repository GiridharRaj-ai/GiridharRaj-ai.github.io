import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-subtle">
      <div className="container-x py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                overline="About"
                title="Applied machine learning, grounded in the fundamentals."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-6 max-w-xl space-y-5 text-[17px] leading-[1.65] text-secondary">
                <p>{profile.objective}</p>
                <p>
                  My work sits between data cleaning and model evaluation:
                  understanding why a dataset looks the way it does, then
                  choosing the simplest model that answers the question. Three
                  projects so far — churn prediction, EV battery forecasting and
                  an automated API test suite — each built end to end in Python.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <dl className="mt-10 grid max-w-xl grid-cols-2 gap-8 border-t border-line pt-8">
                <div>
                  <dt className="overline-label">Based in</dt>
                  <dd className="mt-2 text-[15px] font-medium text-ink">
                    {profile.location}
                  </dd>
                </div>
                <div>
                  <dt className="overline-label">Focus</dt>
                  <dd className="mt-2 text-[15px] font-medium text-ink">
                    ML & data engineering
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="card p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <GraduationCap
                    size={24}
                    strokeWidth={1.5}
                    className="text-ink"
                  />
                  <p className="overline-label">Education</p>
                </div>
                <h3 className="display-3 mt-6">{profile.university}</h3>
                <p className="mt-2 text-[15px] text-secondary">
                  {profile.degree}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6 text-sm">
                  <span className="text-secondary">{profile.year}</span>
                  <span className="pill">CGPA {profile.gpa}</span>
                </div>
                <div className="mt-6 border-t border-line pt-6">
                  <h4 className="text-[15px] font-semibold text-ink">
                    {profile.school}
                  </h4>
                  <p className="mt-1 text-sm text-secondary">
                    {profile.schoolDetail}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
