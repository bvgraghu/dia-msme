import { Play } from "lucide-react";
import { SectionHeading } from "../Section";
import { testimonials } from "../content";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6">
      <div className="flex items-center justify-center gap-4">
        <span className="hidden h-px w-16 bg-border sm:block" />
        <SectionHeading lead="" highlight="Testimonials" />
        <span className="hidden h-px w-16 bg-border sm:block" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="overflow-hidden rounded-[14px] border border-border bg-surface shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
          >
            {/* Video thumbnail */}
            <div className="relative grid aspect-video place-items-center bg-gradient-to-br from-[#1b2a78] to-[#0e2f7a]">
              <button className="grid size-14 place-items-center rounded-full bg-white/90 text-[#1b2a78] shadow-lg transition-transform hover:scale-105" aria-label={`Play ${t.name}`}>
                <Play className="size-6 fill-current" />
              </button>
              <span className="absolute bottom-2 right-2 rounded bg-black/55 px-1.5 py-0.5 text-[11px] font-medium text-white">
                {t.length}
              </span>
            </div>
            <div className="p-5 text-center">
              <p className="text-[15px] font-bold text-[#1b2a78]">{t.name}</p>
              <p className="text-[13px] font-medium text-ink">{t.role}</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">{t.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
