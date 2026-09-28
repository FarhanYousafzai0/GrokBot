import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { contact } from "@/data/contact";
import { FooterStamp } from "./FooterStamp";
import { HashLink } from "./HashLink";

const explore = [
  { href: "/#work", label: "Work", id: "footer-work" },
  { href: "/#about", label: "About", id: "footer-about" },
  { href: "/#writing", label: "Blog", id: "footer-blog" },
  { href: "/#contact", label: "Contact", id: "footer-contact" },
];

const socials = [
  { href: contact.github, label: "GitHub", handle: "@FarhanYousafzai0", icon: Github, id: "footer-github" },
  { href: contact.linkedin, label: "LinkedIn", handle: "Muhammad Farhan", icon: Linkedin, id: "footer-linkedin" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-3 sm:px-5 pb-3 sm:pb-5 mt-8">
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] lg:rounded-[48px] bg-paper border border-ink/10 shadow-soft">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-8 px-6 sm:px-10 lg:px-14 pt-10 sm:pt-14 lg:pt-16">
          <p className="max-w-[18.5rem] font-display text-[1.05rem] sm:text-lg font-medium leading-snug tracking-tight text-ink">
            Clients don&apos;t hire more code. They hire someone who will tell the truth, ship on purpose, and still be there after launch.
          </p>

          <div>
            <p className="text-[13px] text-ink/45 mb-4">Explore</p>
            <ul className="flex flex-col gap-2.5 text-[15px] text-ink/55">
              {explore.map((item) => (
                <li key={item.href}>
                  <HashLink
                    href={item.href}
                    id={item.id}
                    className="group inline-flex items-center gap-1.5 hover:text-ink transition-colors"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-x-0.5 group-hover:-translate-y-1"
                    />
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] text-ink/45 mb-4">Follow me</p>
            <ul className="flex flex-col gap-2">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={item.id}
                      className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-[13px] text-ink/80 hover:border-ink/30 hover:text-ink transition-colors"
                    >
                      <Icon size={14} />
                      <span className="text-ink/40">{item.label}</span>
                      {item.handle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-8 xl:pl-4">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-call"
              className="group block"
            >
              <span className="inline-flex items-center gap-2 text-[#e24b2a] font-medium">
                Call {contact.name.split(" ").pop()}
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#e24b2a] text-paper transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={14} />
                </span>
              </span>
              <span className="mt-1 block text-[13px] text-ink/40">Let&apos;s work together</span>
            </a>
            <div className="border-t border-ink/10 pt-6">
              <HashLink href="/#work" id="footer-work-cta" className="group inline-flex items-center gap-2 font-medium">
                See the work
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={14} />
                </span>
              </HashLink>
              <p className="mt-1 text-[13px] text-ink/40">Case studies</p>
            </div>
          </div>
        </div>

        <div className="footer-wordmark mt-6 sm:mt-2 select-none pointer-events-none" aria-hidden="true">
          farhan
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-6 sm:px-10 lg:px-14 pb-6 pt-1 text-[11px] text-ink/40">
          <p>
            {contact.name} ©{year}
          </p>
          <FooterStamp />
        </div>
      </div>
    </footer>
  );
}
