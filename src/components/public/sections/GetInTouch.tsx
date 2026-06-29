import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Headset,
  RefreshCw,
  Send,
  RotateCcw,
  Landmark,
  Boxes,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "../Section";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

const contacts = [
  { icon: Headset, label: "DIA Help Desk", value: "Mon–Fri · 9:30 AM – 6:00 PM" },
  { icon: Phone, label: "Helpline", value: "+91-11-2688-5021 · 1800 11 3090" },
  { icon: Mail, label: "Email", value: "support@dia-msme.in" },
  { icon: MapPin, label: "Address", value: "SIDBI Tower, 15 Ashok Marg, Lucknow – 226001" },
];

export function GetInTouchSection() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
        <SectionHeading lead="Get in" highlight="Touch" />
        <p className="mx-auto mt-3 max-w-2xl text-center text-[16px] leading-relaxed text-muted">
          Have a question about the DIA programme or SIDBI offerings? Reach out
          and our support team will get back to you.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: info panel */}
          <div className="relative overflow-hidden rounded-[16px] bg-gradient-to-br from-[#1b2a78] to-[#0e2f7a] p-8 text-white shadow-[var(--shadow-card)]">
            <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-white/10 blur-2xl" />
            <h3 className="text-[20px] font-semibold">Contact &amp; Support</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/80">
              We&apos;re here to help Industry Associations and MSMEs make the
              most of the DIA platform.
            </p>

            <ul className="mt-6 space-y-4">
              {contacts.map((c) => (
                <li key={c.label} className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-white/12 text-[#f5c518] ring-1 ring-white/15">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold">{c.label}</p>
                    <p className="text-[13px] text-white/75">{c.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="my-6 h-px bg-white/15" />

            <p className="text-[13px] font-semibold uppercase tracking-wider text-white/70">
              SIDBI Loan / Scheme Offerings
            </p>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              <Offer icon={<Landmark className="size-5" />} label="MSME Loans" />
              <Offer icon={<Boxes className="size-5" />} label="Other Products" />
            </div>
          </div>

          {/* Right: form card */}
          <form className="rounded-[16px] border border-border bg-surface p-7 shadow-[var(--shadow-card)] sm:p-8">
            <h3 className="text-card-title text-ink">Send us your query</h3>
            <p className="text-caption text-muted mt-1">
              Fields marked with <span className="text-danger">*</span> are required.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" htmlFor="g-name" required>
                <Input id="g-name" placeholder="Enter your name" />
              </Field>
              <Field label="Mobile Number" htmlFor="g-mobile" required>
                <Input id="g-mobile" type="tel" placeholder="10-digit mobile number" />
              </Field>
              <Field label="Email Address" htmlFor="g-email" required>
                <Input id="g-email" type="email" placeholder="you@example.com" />
              </Field>
              <Field label="PIN Code" htmlFor="g-zip" required>
                <Input id="g-zip" placeholder="6-digit PIN code" />
              </Field>
              <Field label="Address" htmlFor="g-addr" className="sm:col-span-2">
                <Input id="g-addr" placeholder="Address (optional)" />
              </Field>
              <Field label="Your Query" htmlFor="g-query" required className="sm:col-span-2">
                <Textarea id="g-query" placeholder="Describe your query…" />
              </Field>
            </div>

            {/* Captcha */}
            <div className="mt-5">
              <Field label="Captcha" htmlFor="g-captcha" required>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-12 select-none items-center rounded-[12px] border border-border bg-gray-soft px-4 text-[18px] font-semibold italic tracking-[0.25em] text-ink line-through decoration-border">
                    3LTVU6
                  </span>
                  <button
                    type="button"
                    className="grid size-11 place-items-center rounded-[10px] border border-border text-muted hover:bg-gray-soft hover:text-ink"
                    aria-label="Refresh captcha"
                  >
                    <RefreshCw className="size-4.5" />
                  </button>
                  <Input id="g-captcha" placeholder="Enter captcha" className="min-w-40 flex-1" />
                </div>
              </Field>
            </div>

            <div className="mt-6 flex gap-3">
              <Button type="submit" icon={<Send className="size-4.5" />}>
                Submit Query
              </Button>
              <Button type="reset" variant="secondary" icon={<RotateCcw className="size-4.5" />}>
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Offer({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Link
      href="#"
      className="group flex items-center gap-2.5 rounded-[10px] bg-white/10 px-3.5 py-3 ring-1 ring-white/15 transition-colors hover:bg-white/15"
    >
      <span className="text-[#f5c518]">{icon}</span>
      <span className="text-[14px] font-medium">{label}</span>
      <ArrowRight className="ml-auto size-4 text-white/60 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
