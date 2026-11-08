import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 bg-paper transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/90 shadow-[0_1px_0_rgba(15,14,12,0.04)] backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <a
          href="#top"
          className="font-display text-[15px] font-extrabold tracking-[-0.02em] text-ink"
        >
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-sm"
          >
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-primary btn-sm">
            Hire me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-btn border border-line text-ink transition-colors duration-200 hover:bg-subtle md:hidden"
        >
          {open ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={20} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-paper md:hidden"
        >
          <nav
            aria-label="Mobile primary"
            className="container-x flex flex-col gap-1 py-6"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-[17px] font-medium text-ink last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="btn btn-primary"
              >
                Hire me
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                GitHub
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
