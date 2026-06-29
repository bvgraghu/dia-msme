import Link from "next/link";
import {
  Building2,
  Users,
  CalendarDays,
  ArrowRight,
  UserPlus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const stats = [
  { icon: Building2, value: "106", label: "Industry Associations onboarded" },
  { icon: Users, value: "63,059", label: "Association members connected" },
  { icon: CalendarDays, value: "183", label: "Events conducted nationally" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1b2a78] via-[#27358c] to-[#0e2f7a] text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 size-96 rounded-full bg-[#f5c518]/12 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-8 px-4 pb-24 pt-14 sm:px-6 lg:grid-cols-12 lg:pb-28 lg:pt-16">
        {/* Left: copy + stat cards */}
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[13px] font-medium ring-1 ring-white/20">
            <span className="size-1.5 rounded-full bg-[#f5c518]" />
            An initiative of SIDBI
          </span>

          <h1 className="mt-5 text-[32px] font-bold leading-[1.14] tracking-tight sm:text-[42px]">
            A national digital platform empowering
            <span className="mt-1 block text-[#f5c518]">
              Industry Associations through a unified network
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/85">
            The DIA platform connects Industry Associations and MSMEs across the
            country to collaborate, share best practices, influence policy and
            access stronger support — building a more resilient MSME ecosystem.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex h-12 items-center gap-2 rounded-[12px] bg-white px-6 text-[15px] font-semibold text-[#1b2a78] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <UserPlus className="size-4.5" /> Register your Association
            </Link>
            <Link
              href="#network"
              className="inline-flex h-12 items-center gap-2 rounded-[12px] border border-white/40 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore the Network <ArrowRight className="size-4.5" />
            </Link>
          </div>

          {/* Stat cards — eMigrate style: white, left accent */}
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[14px] border-l-[3px] border-[#f5c518] bg-white/95 p-4 text-ink shadow-lg backdrop-blur"
              >
                <div className="flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-full bg-primary-soft text-[#1b2a78]">
                    <s.icon className="size-4.5" />
                  </span>
                  <span className="text-[22px] font-bold leading-none text-[#1b2a78]">
                    {s.value}
                  </span>
                </div>
                <p className="mt-2 text-[12.5px] leading-snug text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: illustration (event image) */}
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-[18px] bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur">
            <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-[12px] bg-gradient-to-br from-[#2a3a92] to-[#152562] p-8 text-center">
              <ConclaveArt />
              <p className="mt-4 text-[17px] font-semibold">
                Developmental Industry Associations
              </p>
              <p className="text-[14px] text-white/75">National Conclave 2025</p>
              <p className="mt-0.5 text-[12px] text-white/55">24th September 2025</p>
            </div>
            <div className="absolute bottom-5 right-5 flex gap-2">
              <button className="grid size-8 place-items-center rounded-full bg-white/20 backdrop-blur hover:bg-white/30" aria-label="Previous">
                <ChevronLeft className="size-4" />
              </button>
              <button className="grid size-8 place-items-center rounded-full bg-white/20 backdrop-blur hover:bg-white/30" aria-label="Next">
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <svg
        className="absolute bottom-0 left-0 w-full text-canvas"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,80 L1440,80 L1440,30 C1080,80 360,0 0,40 Z" fill="currentColor" />
      </svg>
    </section>
  );
}

function ConclaveArt() {
  return (
    <svg viewBox="0 0 220 140" className="w-56" aria-hidden>
      {/* lamp / diya */}
      <ellipse cx="110" cy="120" rx="26" ry="6" fill="#f5c518" opacity="0.4" />
      <path d="M96 118 q14 10 28 0 q-2-10-14-10 q-12 0-14 10z" fill="#f5c518" />
      <path d="M110 96 q-6 8 0 14 q6-6 0-14z" fill="#ff7a18" />
      <path d="M110 84 q-9 12 0 22 q9-10 0-22z" fill="#ff9933" />
      {/* people silhouettes */}
      {[
        [40, 18],
        [70, 14],
        [150, 14],
        [180, 18],
      ].map(([x, s], i) => (
        <g key={i} fill="#cdd9f3">
          <circle cx={x} cy={70 - 0} r={s / 2.6} />
          <rect x={x - s / 2} y={78} width={s} height={34} rx={s / 3} />
        </g>
      ))}
    </svg>
  );
}
