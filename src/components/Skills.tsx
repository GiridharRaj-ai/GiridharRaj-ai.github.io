import {
  BarChart3,
  Brain,
  Code2,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups, type SkillIcon } from "../data/portfolio";

const icons: Record<SkillIcon, typeof Code2> = {
  Code2,
  Brain,
  BarChart3,
  Layers,
  ShieldCheck,
  Cpu,
  Database,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-paper">
      <div className="container-x py-16 md:py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            overline="Skills"
            title="What I work with"
            description="A working stack rather than a keyword list — each group comes from a project or course I have actually finished."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon];
            return (
              <Reveal
                key={group.category}
                delay={(index % 3) * 0.08}
                className="h-full"
              >
                <article className="card card-hover flex h-full flex-col p-7">
                  <Icon size={24} strokeWidth={1.5} className="text-ink" />
                  <h3 className="display-3 mt-6 text-[20px]">
                    {group.category}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-secondary">
                    {group.summary}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="pill">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
