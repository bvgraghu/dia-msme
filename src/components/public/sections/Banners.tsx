import Link from "next/link";
import { Briefcase, IdCard, ArrowRight } from "lucide-react";

const banners = [
  {
    title: "BDS Service Providers",
    subtitle: "Empowering Business Growth, One Step at a Time",
    icon: Briefcase,
    from: "#1d2540",
    to: "#3a4668",
  },
  {
    title: "Member Profiles",
    subtitle: "Profiles That Power Progress",
    icon: IdCard,
    from: "#8a6d1c",
    to: "#c79a2a",
  },
];

export function BannersSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {banners.map((b) => (
          <div
            key={b.title}
            className="relative flex min-h-44 flex-col justify-end overflow-hidden rounded-[16px] p-7 text-white shadow-[var(--shadow-card)]"
            style={{
              backgroundImage: `linear-gradient(120deg, ${b.from}, ${b.to})`,
            }}
          >
            <b.icon className="pointer-events-none absolute -right-4 -top-4 size-40 text-white/10" strokeWidth={1} />
            <h3 className="text-[22px] font-bold">{b.title}</h3>
            <p className="mt-1 text-[14px] text-white/85">{b.subtitle}</p>
            <Link
              href="#"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-[10px] bg-[#f5c518] px-4 py-2 text-[13px] font-semibold text-ink hover:bg-[#e6b800]"
            >
              Know More <ArrowRight className="size-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
