import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { footerColumns, footerLinks } from "./content";

const NAVY = "#1b2a78";

const socials: { label: string; path: string }[] = [
  { label: "Facebook", path: "M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14v-2c0-.6.4-1 1-1z" },
  { label: "Instagram", path: "M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1zM17 5.8a1.1 1.1 0 1 0 1.1 1.1A1.1 1.1 0 0 0 17 5.8zM12 4.6c2.4 0 2.7 0 3.6.05a4.9 4.9 0 0 1 1.7.3 2.9 2.9 0 0 1 1.7 1.7 4.9 4.9 0 0 1 .3 1.7c.04.9.05 1.2.05 3.6s0 2.7-.05 3.6a4.9 4.9 0 0 1-.3 1.7 2.9 2.9 0 0 1-1.7 1.7 4.9 4.9 0 0 1-1.7.3c-.9.04-1.2.05-3.6.05s-2.7 0-3.6-.05a4.9 4.9 0 0 1-1.7-.3 2.9 2.9 0 0 1-1.7-1.7 4.9 4.9 0 0 1-.3-1.7C4.6 14.7 4.6 14.4 4.6 12s0-2.7.05-3.6a4.9 4.9 0 0 1 .3-1.7 2.9 2.9 0 0 1 1.7-1.7 4.9 4.9 0 0 1 1.7-.3c.9-.04 1.2-.05 3.6-.05z" },
  { label: "X", path: "M17.5 5h2.4l-5.3 6 6.2 8h-4.9l-3.8-5-4.4 5H5.3l5.6-6.4L4.9 5h5l3.5 4.6L17.5 5z" },
  { label: "LinkedIn", path: "M6.9 8.4A1.5 1.5 0 1 1 8.4 6.9 1.5 1.5 0 0 1 6.9 8.4zM8.2 18H5.6V9.7h2.6zm10.4 0H16v-4.3c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V18h-2.6V9.7h2.5v1.1h.04a2.8 2.8 0 0 1 2.5-1.4c2.7 0 3.2 1.8 3.2 4.1z" },
  { label: "YouTube", path: "M21.6 8.2a2.5 2.5 0 0 0-1.7-1.7C18.3 6 12 6 12 6s-6.3 0-7.9.4a2.5 2.5 0 0 0-1.7 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.7 1.7C5.7 18 12 18 12 18s6.3 0 7.9-.4a2.5 2.5 0 0 0 1.7-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.8zM10 15V9l5.2 3z" },
];

export function SiteFooter() {
  return (
    <footer className="text-white" style={{ backgroundColor: NAVY }}>
      {/* Main */}
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-[10px] bg-white text-[15px] font-bold text-[#1b2a78]">
                DIA
              </span>
              <div className="leading-tight">
                <p className="text-[16px] font-bold">Development of Industry Associations</p>
                <p className="text-[12px] text-white/70">An initiative of SIDBI</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/75">
              A national digital platform empowering Industry Associations and
              MSMEs through a unified, collaborative network.
            </p>
            <ul className="mt-5 space-y-2.5 text-[14px] text-white/80">
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-white/60" /> 1800-XXX-XXXX
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-white/60" /> support@dia-msme.in
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-white/60" />
                SIDBI, SIDBI Tower, 15 Ashok Marg, Lucknow – 226001
              </li>
            </ul>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[14px] font-semibold uppercase tracking-wider text-white/90">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-[14px] text-white/70 hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/15 pt-6">
          <span className="text-[14px] font-medium text-white/80">Social Connections</span>
          {socials.map((s) => (
            <Link
              key={s.label}
              href="#"
              aria-label={s.label}
              className="grid size-9 place-items-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-[#f5c518] hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="size-4 fill-current">
                <path d={s.path} />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Policy links row */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-[13px] text-white/75 sm:px-6">
          {footerLinks.map((l) => (
            <Link key={l} href="#" className="hover:text-white">
              {l}
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/25">
        <div className="mx-auto max-w-[1280px] px-4 py-4 text-center text-[12.5px] text-white/60 sm:px-6 sm:text-left">
          Copyright © {new Date().getFullYear()} Small Industries Development
          Bank of India (SIDBI). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
