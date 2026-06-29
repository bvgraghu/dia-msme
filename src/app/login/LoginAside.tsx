import { ShieldCheck, Zap, BadgeIndianRupee } from "lucide-react";

export function LoginAside() {
  return (
    <aside className="relative hidden overflow-hidden bg-gradient-to-br from-[#0b5ed7] via-[#0e4fb0] to-[#0d1b6b] p-12 text-white lg:flex lg:flex-col">
      <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 size-80 rounded-full bg-[#ff9933]/15 blur-3xl" />

      {/* Brand */}
      <div className="relative flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-[12px] bg-white font-bold text-primary">
          D
        </span>
        <div className="leading-tight">
          <p className="text-[18px] font-bold">DIA Portal</p>
          <p className="text-[12px] text-white/70">Digital Industrial Assistance</p>
        </div>
      </div>

      {/* Mission */}
      <div className="relative my-auto max-w-md">
        <h2 className="text-[34px] font-bold leading-tight">
          Simple, transparent &amp; timely industrial assistance for every MSME.
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-white/80">
          Sign in to file applications, track approvals and receive subsidy
          directly through DBT — all in one secure government workspace.
        </p>

        <ul className="mt-8 space-y-4">
          {features.map((f) => (
            <li key={f.title} className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-white/15 ring-1 ring-white/20">
                <f.icon className="size-5" />
              </span>
              <div>
                <p className="text-[15px] font-semibold">{f.title}</p>
                <p className="text-[13px] text-white/70">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="relative text-[13px] text-white/60">
        © {new Date().getFullYear()} Ministry of MSME, Government of India.
      </p>
    </aside>
  );
}

const features = [
  {
    icon: ShieldCheck,
    title: "Secure & verified",
    desc: "Aadhaar-linked, Udyam-authenticated access.",
  },
  {
    icon: Zap,
    title: "Fully online",
    desc: "Paperless filing with real-time status tracking.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Direct Benefit Transfer",
    desc: "Subsidy credited straight to your bank account.",
  },
];
