import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

const navigate = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-xl font-extrabold tracking-[-0.02em] text-ink">
              {profile.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-[1.65] text-secondary">
              AI/ML engineer and software developer based in Chennai, India.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block break-all font-display text-xl font-bold tracking-[-0.02em] text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors duration-200 hover:decoration-ink"
            >
              {profile.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="overline-label">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm text-secondary">
              {navigate.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="overline-label">Elsewhere</p>
            <ul className="mt-5 space-y-3 text-sm text-secondary">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-ink"
                >
                  <Github size={16} strokeWidth={1.5} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-ink"
                >
                  <Linkedin size={16} strokeWidth={1.5} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-ink"
                >
                  <Mail size={16} strokeWidth={1.5} />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-ink"
                >
                  <FileText size={16} strokeWidth={1.5} />
                  Résumé (PDF)
                </a>
              </li>
              <li>{profile.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">Chennai, India</p>
        </div>
      </div>
    </footer>
  );
}
