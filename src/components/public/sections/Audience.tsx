import { Building2, Factory, Globe2, Check, type LucideIcon } from "lucide-react";
import { SectionHeading } from "../Section";
import { audienceCards } from "../content";

const meta: Record<string, { icon: LucideIcon; ring: string; chip: string }> = {
  pink: { icon: Building2, ring: "hover:border-[#e3a0ab]", chip: "bg-[#fdeef0] text-[#b53349]" },
  yellow: { icon: Factory, ring: "hover:border-[#e6cf86]", chip: "bg-[#fff5d6] text-[#9a7400]" },
  blue: { icon: Globe2, ring: "hover:border-[#9fc0ee]", chip: "bg-[#e6eefb] text-[#1b2a78]" },
};

export function AudienceSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
      <SectionHeading lead="A unified platform for the entire" highlight="MSME ecosystem" />
      <p className="mx-auto mt-3 max-w-2xl text-center text-[16px] leading-relaxed text-muted">
        Whether you represent an Industry Association or run a Micro, Small or
        Medium Enterprise, DIA brings the network, knowledge and support you need.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {audienceCards.map((c) => {
          const m = meta[c.tone];
          const Icon = m.icon;
          return (
            <div
              key={c.key}
              className={`rounded-[12px] border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] ${m.ring}`}
            >
              <span className={`grid size-12 place-items-center rounded-[12px] ${m.chip}`}>
                <Icon className="size-6" />
              </span>
              <h3 className="mt-4 text-[18px] font-semibold text-ink">{c.title}</h3>
              <ul className="mt-3 space-y-2.5">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[14px] leading-snug text-muted">
                    <span className={`mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full ${m.chip}`}>
                      <Check className="size-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
