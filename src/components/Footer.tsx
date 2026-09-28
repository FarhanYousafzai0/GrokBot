import { contact } from "@/data/contact";
import { HashLink } from "./HashLink";

export function Footer() {
  return (
    <footer className="py-12 px-6 container mx-auto border-t border-ink/10 mt-12 reveal">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display font-medium text-xl tracking-tight">Farhan Yousafzai</div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm font-medium text-ink/70">
          <HashLink href="/#work" className="hover:text-ink transition-colors" id="footer-work">
            Work
          </HashLink>
          <HashLink href="/#about" className="hover:text-ink transition-colors" id="footer-about">
            About
          </HashLink>
          <HashLink href="/#writing" className="hover:text-ink transition-colors" id="footer-blog">
            Blog
          </HashLink>
          <HashLink href="/#contact" className="hover:text-ink transition-colors" id="footer-contact">
            Contact
          </HashLink>
          <span className="w-1 h-1 rounded-full bg-ink/20 hidden md:block" />
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors" id="footer-github">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors" id="footer-linkedin">
            LinkedIn
          </a>
        </div>
        <div className="text-xs text-ink/50">© 2026 Farhan Yousafzai. Based in Pakistan.</div>
      </div>
    </footer>
  );
}
