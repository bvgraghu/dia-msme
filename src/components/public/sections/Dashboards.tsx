import { CalendarDays, Video } from "lucide-react";
import { eventStats, webinarStats } from "../content";

export function DashboardsSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <DashCard
          title="Event Dashboard"
          accent="#1b2a78"
          chip="bg-[#e6eafb] text-[#1b2a78]"
          icon={<CalendarDays className="size-4" />}
          stats={eventStats}
        />
        <DashCard
          title="Webinar Dashboard"
          accent="#9a7400"
          chip="bg-[#fdf2cf] text-[#9a7400]"
          icon={<Video className="size-4" />}
          stats={webinarStats}
        />
      </div>
    </section>
  );
}

function DashCard({
  title,
  accent,
  chip,
  icon,
  stats,
}: {
  title: string;
  accent: string;
  chip: string;
  icon: React.ReactNode;
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="rounded-[16px] border border-border bg-surface p-5 shadow-[var(--shadow-card)]">
      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-semibold ${chip}`}>
        {icon}
        {title}
      </span>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-[12px] border border-border bg-canvas px-3 py-4 text-center"
          >
            <span
              className="mx-auto grid size-9 place-items-center rounded-full bg-surface"
              style={{ color: accent }}
            >
              {icon}
            </span>
            <p className="mt-2 text-[26px] font-bold leading-none" style={{ color: accent }}>
              {s.value}
            </p>
            <p className="mt-1 text-[12px] text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
