"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Award, Star } from "lucide-react";
import { ambassadors, bseChampions } from "../content";

export function AmbassadorsSection() {
  const [ai, setAi] = useState(0);
  const [bi, setBi] = useState(0);
  const amb = ambassadors[ai];
  const champ = bseChampions[bi];

  return (
    <section className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* DIA Ambassadors — navy */}
        <div className="overflow-hidden rounded-[16px] bg-gradient-to-br from-[#1b2a78] to-[#0e2f7a] p-7 text-white shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-2 text-[#f5c518]">
            <Award className="size-5" />
            <h3 className="text-[18px] font-bold">DIA Ambassadors — FY 2025-26</h3>
          </div>
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-white/80">
            We are pleased to announce the DIA Ambassadors for FY 2025-26,
            recognizing Industry Associations for their contribution and impact
            under the DIA Programme.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <Arrow onClick={() => setAi((ai - 1 + ambassadors.length) % ambassadors.length)} dark aria-label="Previous ambassador">
              <ChevronLeft className="size-5" />
            </Arrow>
            <div className="flex flex-1 items-center gap-5 rounded-[14px] bg-white p-5 text-ink">
              <div className="grid size-20 shrink-0 place-items-center rounded-full bg-primary-soft ring-4 ring-[#f5c518]/40">
                <span className="text-[22px] font-bold text-[#1b2a78]">
                  {initials(amb.name)}
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-[16px] font-bold text-[#1b2a78]">{amb.org}</p>
                <p className="mt-0.5 text-[15px] font-medium text-ink">{amb.name}</p>
                <p className="text-[13px] text-muted">{amb.role}</p>
              </div>
              <Quote className="ml-auto hidden size-10 shrink-0 text-[#f5c518] sm:block" />
            </div>
            <Arrow onClick={() => setAi((ai + 1) % ambassadors.length)} dark aria-label="Next ambassador">
              <ChevronRight className="size-5" />
            </Arrow>
          </div>
        </div>

        {/* BSE Champions — yellow */}
        <div className="overflow-hidden rounded-[16px] bg-[#fbe7a6] p-7 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-2 text-[#9a7400]">
            <Star className="size-5" />
            <h3 className="text-[18px] font-bold text-[#7a5c00]">
              BSE Champions — FY 2025-26
            </h3>
          </div>
          <div className="mt-5 rounded-[14px] bg-white p-5">
            <p className="text-[16px] font-bold text-[#1b2a78]">{champ.name}</p>
            <p className="mt-1 text-[14px] text-ink">{champ.org}</p>
            <p className="mt-0.5 text-[13px] text-muted">{champ.city}</p>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Arrow onClick={() => setBi((bi - 1 + bseChampions.length) % bseChampions.length)} aria-label="Previous champion">
              <ChevronLeft className="size-5" />
            </Arrow>
            <Arrow onClick={() => setBi((bi + 1) % bseChampions.length)} aria-label="Next champion">
              <ChevronRight className="size-5" />
            </Arrow>
          </div>
        </div>
      </div>
    </section>
  );
}

function initials(name: string) {
  const parts = name.replace(/^Shri\s+/i, "").split(" ");
  return (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
}

function Arrow({
  dark,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { dark?: boolean }) {
  return (
    <button
      type="button"
      className={
        "grid size-9 shrink-0 place-items-center rounded-full transition-colors " +
        (dark
          ? "border border-white/30 text-white/80 hover:bg-white/10"
          : "border border-[#caa53a] text-[#9a7400] hover:bg-white/60") +
        (className ? " " + className : "")
      }
      {...props}
    />
  );
}
