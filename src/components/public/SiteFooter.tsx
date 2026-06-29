import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Headset,
  MessageCircle,
} from "lucide-react";

const NAVY = "#1b2a78";

const quickLinks = [
  "About DIA",
  "Register your Association",
  "IA Directory",
  "Events & Webinars",
  "MSME Profiles",
  "FAQs",
];

const bottomLinks = [
  "Home",
  "About DIA",
  "SIDBI",
  "Terms & Conditions",
  "Copyright Policy",
  "Hyperlink Policy",
  "Privacy Policy",
  "Accessibility",
  "Sitemap",
  "Feedback",
];

export function SiteFooter() {
  return (
    <footer className="relative">
      {/* Semi-circular curved top — rises into the section above */}
      <svg
        className="absolute -top-[58px] left-0 h-[60px] w-full"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,90 L0,48 C360,4 1080,4 1440,48 L1440,90 Z" fill={NAVY} />
        <path
          d="M0,48 C360,4 1080,4 1440,48"
          fill="none"
          stroke="#3a49b5"
          strokeWidth="2.5"
        />
      </svg>

      {/* Main */}
      <div
        className="bg-gradient-to-b from-[#1b2a78] to-[#142060] text-white"
        style={{ backgroundColor: NAVY }}
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[1.2fr_1fr_1.2fr_1.1fr]">
          {/* Brand */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="grid size-28 place-items-center rounded-full border-2 border-dashed border-white/40 bg-white/95 p-3">
              <div className="leading-tight text-[#1b2a78]">
                <p className="text-[22px] font-extrabold tracking-tight">DIA</p>
                <p className="text-[9px] font-semibold">an initiative of SIDBI</p>
              </div>
            </div>
            <p className="mt-4 max-w-[16rem] text-[15px] font-semibold leading-snug">
              Development of Industry Associations:
              <span className="block text-white/80">
                Connecting India&apos;s MSME Ecosystem
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[16px] font-bold">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <Link
                    href="#"
                    className="flex items-center gap-1.5 text-[14px] text-white/80 hover:text-white"
                  >
                    <ChevronRight className="size-3.5 text-[#f5c518]" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-[16px] font-bold">Contact &amp; Support</h4>
            <ul className="mt-4 space-y-3.5 text-[14px] text-white/85">
              <li className="flex items-center gap-3">
                <FIcon><Headset className="size-4" /></FIcon>
                DIA Help Desk
              </li>
              <li className="flex items-center gap-3">
                <FIcon><Phone className="size-4" /></FIcon>
                +91-11-2688-5021
              </li>
              <li className="flex items-center gap-3">
                <FIcon><Mail className="size-4" /></FIcon>
                support[at]dia-msme[dot]in
              </li>
              <li className="flex items-start gap-3">
                <FIcon><MapPin className="size-4" /></FIcon>
                <span>
                  SIDBI, SIDBI Tower, 15 Ashok Marg,
                  <br />
                  Lucknow – 226001
                </span>
              </li>
            </ul>
          </div>

          {/* Helpline + app */}
          <div>
            <h4 className="text-[16px] font-bold">Helpline</h4>
            <ul className="mt-4 space-y-3.5 text-[14px] text-white/85">
              <li className="flex items-center gap-3">
                <FIcon><Phone className="size-4" /></FIcon>
                +91-11-2688-5021
              </li>
              <li className="flex items-center gap-3">
                <FIcon><Phone className="size-4" /></FIcon>
                1800 11 3090 (Toll Free)
              </li>
              <li className="flex items-center gap-3">
                <FIcon><MessageCircle className="size-4" /></FIcon>
                +91 74283 21144 (WhatsApp)
              </li>
            </ul>

            <p className="mt-5 text-[14px] font-bold">Download the DIA app</p>
            <div className="mt-2.5 flex flex-wrap gap-2.5">
              <StoreBadge store="play" />
              <StoreBadge store="apple" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom black bar */}
      <div className="bg-[#0c1024] text-white">
        <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6">
          <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[13.5px]">
            {bottomLinks.map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                <Link href="#" className="text-white/85 hover:text-[#f5c518]">
                  {l}
                </Link>
                {i < bottomLinks.length - 1 && (
                  <span className="text-white/25">|</span>
                )}
              </span>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3 text-[12.5px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Copyright © {new Date().getFullYear()}. All Rights Reserved by{" "}
              <span className="font-semibold text-white/80">SIDBI</span>.
            </p>
            <p>Developed and Managed by the DIA Project Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/10 text-[#f5c518]">
      {children}
    </span>
  );
}

function StoreBadge({ store }: { store: "play" | "apple" }) {
  const isPlay = store === "play";
  return (
    <Link
      href="#"
      className="flex items-center gap-2.5 rounded-[8px] border border-white/25 bg-black/40 px-3 py-1.5 transition-colors hover:bg-black/60"
      aria-label={isPlay ? "Get it on Google Play" : "Download on the App Store"}
    >
      {isPlay ? (
        <svg viewBox="0 0 24 24" className="size-6">
          <path d="M3.6 2.3 13.4 12 3.6 21.7c-.3-.2-.5-.6-.5-1V3.3c0-.4.2-.8.5-1z" fill="#34d399" />
          <path d="M16.8 8.6 13.4 12l3.4 3.4 3.3-1.9c.8-.5.8-1.6 0-2l-3.3-1.9z" fill="#fbbf24" />
          <path d="m13.4 12-9.8 9.7c.3.2.7.2 1 0l11.2-6.3-2.4-3.4z" fill="#f87171" />
          <path d="m13.4 12 2.4-3.4L4.6 2.3c-.3-.2-.7-.2-1 0L13.4 12z" fill="#60a5fa" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-6 fill-white">
          <path d="M17.05 12.04c-.03-2.86 2.34-4.23 2.44-4.3-1.33-1.95-3.4-2.22-4.13-2.25-1.76-.18-3.43 1.03-4.32 1.03-.89 0-2.26-1.01-3.72-.98-1.91.03-3.68 1.11-4.66 2.82-1.99 3.45-.51 8.56 1.42 11.36.94 1.37 2.06 2.91 3.53 2.86 1.42-.06 1.95-.92 3.66-.92 1.71 0 2.19.92 3.69.89 1.52-.03 2.49-1.4 3.42-2.78 1.08-1.59 1.52-3.13 1.55-3.21-.03-.01-2.97-1.14-3-4.19zM14.28 4.82c.78-.95 1.31-2.27 1.16-3.58-1.12.05-2.49.75-3.3 1.69-.72.83-1.36 2.18-1.19 3.46 1.25.1 2.54-.63 3.33-1.57z" />
        </svg>
      )}
      <span className="leading-tight">
        <span className="block text-[9px] uppercase text-white/60">
          {isPlay ? "Get it on" : "Download on the"}
        </span>
        <span className="block text-[13px] font-semibold text-white">
          {isPlay ? "Google Play" : "App Store"}
        </span>
      </span>
    </Link>
  );
}
