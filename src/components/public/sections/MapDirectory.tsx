"use client";

import { useState } from "react";
import { MapPin, Search, Building2, Users, ArrowUpRight, RotateCcw } from "lucide-react";
import { SectionHeading } from "../Section";
import { industryAssociations } from "../content";
import { cn } from "@/lib/utils";

const views = ["Industry Associations", "Association Members"] as const;

// rough state label for each association (display chip)
const stateOf = (name: string) => {
  const map: Record<string, string> = {
    Adityapur: "Jharkhand",
    Alwar: "Rajasthan",
    Ambad: "Maharashtra",
    Ambattur: "Tamil Nadu",
    Andhra: "Andhra Pradesh",
    Assam: "Assam",
    "Madhya Pradesh": "Madhya Pradesh",
    Rajasthan: "Rajasthan",
    Shapar: "Gujarat",
    Plastic: "Rajasthan",
    Jamnagar: "Gujarat",
    Dediyasan: "Gujarat",
  };
  const hit = Object.keys(map).find((k) => name.includes(k));
  return hit ? map[hit] : "India";
};

export function MapDirectorySection() {
  const [view, setView] = useState<(typeof views)[number]>(views[0]);
  const [q, setQ] = useState("");
  const list = industryAssociations.filter((a) =>
    a.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <section id="network" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
        <SectionHeading lead="Our National" highlight="Network" />
        <p className="mx-auto mt-3 max-w-2xl text-center text-[16px] leading-relaxed text-muted">
          Explore the reach of the DIA programme across India — switch the view
          and browse the directory of participating Industry Associations.
        </p>

        {/* Segmented control */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-[12px] border border-border bg-canvas p-1">
            {views.map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={cn(
                  "rounded-[9px] px-5 py-2.5 text-[14px] font-medium transition-colors",
                  view === v
                    ? "bg-[#1b2a78] text-white shadow-sm"
                    : "text-muted hover:text-ink",
                )}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Left: real India map */}
          <div className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-[16px] border border-border bg-gradient-to-b from-[#f4f7fd] to-surface p-6 shadow-[var(--shadow-card)]">
              {/* floating coverage chips */}
              <div className="absolute left-6 top-6 z-10 space-y-2">
                <Chip icon={<Building2 className="size-4" />} value="106" label="Associations" />
                <Chip icon={<Users className="size-4" />} value="63,059" label="Members" />
              </div>
              <div className="absolute right-6 top-6 z-10 rounded-full bg-[#1b2a78] px-3 py-1.5 text-[12px] font-semibold text-white shadow-sm">
                Pan-India · All States &amp; UTs
              </div>

              <div className="grid place-items-center py-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/india-map.svg"
                  alt="Map of India showing DIA network coverage"
                  className="h-[420px] w-auto max-w-full drop-shadow-sm"
                />
              </div>

              <div className="flex items-center justify-center gap-5 border-t border-border pt-4 text-[12.5px] text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="size-3 rounded-sm bg-[#d7e1f6] ring-1 ring-[#1b2a78]/30" />
                  State / UT boundary
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#f5c518]" />
                  Showing {view}
                </span>
              </div>
            </div>
          </div>

          {/* Right: directory */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-[16px] border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-between">
                <h3 className="text-card-title text-ink">Association Directory</h3>
                <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[12px] font-semibold text-[#1b2a78]">
                  {list.length} listed
                </span>
              </div>

              <div className="relative mt-4">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-muted" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by association name…"
                  className="h-12 w-full rounded-[12px] border border-border bg-canvas pl-11 pr-4 text-[14px] focus:border-primary focus:bg-surface focus:outline-none focus:ring-[3px] focus:ring-primary/15"
                />
              </div>

              {q && (
                <button
                  onClick={() => setQ("")}
                  className="mt-2 flex items-center gap-1.5 self-start text-[13px] font-medium text-primary hover:underline"
                >
                  <RotateCcw className="size-3.5" /> Clear search
                </button>
              )}

              <ul className="mt-3 flex-1 space-y-2 overflow-y-auto pr-1 lg:max-h-[420px]">
                {list.map((a) => (
                  <li key={a}>
                    <button className="group flex w-full items-center gap-3 rounded-[12px] border border-border bg-canvas px-3.5 py-3 text-left transition-all hover:border-primary/40 hover:bg-primary-soft/40">
                      <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-surface text-[#1b2a78] ring-1 ring-border">
                        <Building2 className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[14px] font-medium text-ink">
                          {a}
                        </span>
                        <span className="flex items-center gap-1 text-[12px] text-muted">
                          <MapPin className="size-3" />
                          {stateOf(a)}
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-muted transition-colors group-hover:text-primary" />
                    </button>
                  </li>
                ))}
                {list.length === 0 && (
                  <li className="py-10 text-center text-[14px] text-muted">
                    No associations match “{q}”.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-[10px] border border-border bg-surface/95 px-3 py-2 shadow-sm backdrop-blur">
      <span className="grid size-8 place-items-center rounded-full bg-primary-soft text-[#1b2a78]">
        {icon}
      </span>
      <div className="leading-none">
        <p className="text-[15px] font-bold text-[#1b2a78]">{value}</p>
        <p className="mt-0.5 text-[11px] text-muted">{label}</p>
      </div>
    </div>
  );
}
