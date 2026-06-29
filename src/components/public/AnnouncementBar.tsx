import { Megaphone } from "lucide-react";
import { announcements } from "./content";

export function AnnouncementBar() {
  const items = [...announcements, ...announcements];
  return (
    <div className="relative z-10 -mt-6 mx-auto max-w-[1280px] px-4 sm:px-6">
      <div className="flex items-center gap-3 overflow-hidden rounded-[12px] border border-border bg-surface px-4 py-3 shadow-[var(--shadow-card)]">
        <span className="flex shrink-0 items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-[#1b2a78]">
          <Megaphone className="size-4" /> Latest
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
            {items.map((a, i) => (
              <span key={i} className="flex items-center gap-12 text-[14px] text-ink">
                {a}
                <span className="size-1.5 rounded-full bg-border" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
