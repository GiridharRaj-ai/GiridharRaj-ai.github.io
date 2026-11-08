import { useState, type FormEvent } from "react";
import { FileText, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!emailPattern.test(email))
      next.email = "Please enter a valid email address.";
    if (message.length < 10)
      next.message = "A sentence or two helps — 10 characters minimum.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSent(false);
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="border-b border-line bg-subtle">
      <div className="container-x py-16 md:py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                overline="Contact"
                title="Let's build something worth shipping."
                description="Have a role, a project or a dataset worth discussing? Email is the fastest way to reach me."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href={`mailto:${profile.email}`}
                className="mt-10 block break-all font-display text-[clamp(22px,3.2vw,34px)] font-bold tracking-[-0.02em] text-ink underline decoration-line decoration-1 underline-offset-8 transition-colors duration-200 hover:decoration-ink"
              >
                {profile.email}
              </a>
            </Reveal>

            <Reveal delay={0.16}>
              <ul className="mt-10 space-y-3 text-sm text-secondary">
                <li className="flex items-center gap-3">
                  <Phone size={18} strokeWidth={1.5} className="text-ink" />
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="transition-colors duration-200 hover:text-ink"
                  >
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} strokeWidth={1.5} className="text-ink" />
                  {profile.location}
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-line bg-paper text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <Github size={18} strokeWidth={1.5} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-line bg-paper text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <Linkedin size={18} strokeWidth={1.5} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Send an email"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-line bg-paper text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <Mail size={18} strokeWidth={1.5} />
                </a>
                <a
                  href={profile.resume}
                  download
                  aria-label="Download résumé as PDF"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-line bg-paper text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <FileText size={18} strokeWidth={1.5} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="card p-7 md:p-8"
              >
                <h3 className="display-3">Send a message</h3>
                <p className="mt-2 text-sm text-secondary">
                  Opens your email app with the message pre-filled.
                </p>

                <div className="mt-7 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.08em] text-muted"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`field ${errors.name ? "field-invalid" : ""}`}
                    />
                    {errors.name ? (
                      <p
                        id="name-error"
                        role="alert"
                        className="mt-2 text-xs font-medium text-ink"
                      >
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.08em] text-muted"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={`field ${errors.email ? "field-invalid" : ""}`}
                    />
                    {errors.email ? (
                      <p
                        id="email-error"
                        role="alert"
                        className="mt-2 text-xs font-medium text-ink"
                      >
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.08em] text-muted"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="What are you working on?"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      className={`field resize-none ${
                        errors.message ? "field-invalid" : ""
                      }`}
                    />
                    {errors.message ? (
                      <p
                        id="message-error"
                        role="alert"
                        className="mt-2 text-xs font-medium text-ink"
                      >
                        {errors.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mt-7 w-full">
                  Send message
                </button>

                <p
                  role="status"
                  className={`mt-4 text-xs leading-[1.6] ${
                    sent ? "text-ink" : "text-muted"
                  }`}
                >
                  {sent
                    ? "Your email app is opening with the message. If nothing happens, write to giridharrajsonti@gmail.com directly."
                    : "No data is stored — the message goes straight to my inbox."}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
