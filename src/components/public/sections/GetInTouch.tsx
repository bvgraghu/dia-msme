import Link from "next/link";
import { RefreshCw, Send, RotateCcw, Landmark, Boxes } from "lucide-react";

export function GetInTouchSection() {
  return (
    <section className="grid lg:grid-cols-2">
      {/* Get in touch */}
      <div className="bg-gradient-to-br from-[#1b2a78] to-[#0e2f7a] px-4 py-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-xl">
          <h2 className="text-center text-[26px] font-semibold">Get in touch</h2>
          <p className="mt-1 text-center text-[14px] text-white/75">
            Please contact us if you have any query.
          </p>

          <form className="mt-7 rounded-[16px] bg-white p-6 text-ink shadow-[var(--shadow-elevated)]">
            <p className="text-[15px] font-semibold text-[#1b2a78]">
              Please raise your query
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Input placeholder="Name *" />
              <Input placeholder="Mobile Number *" />
              <Input placeholder="Email Id *" />
              <Input placeholder="Zip Code *" />
              <Input placeholder="Address *" className="sm:col-span-1" />
              <Input placeholder="Query *" className="sm:col-span-1" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="flex h-11 select-none items-center rounded-[10px] border border-border bg-gray-soft px-4 text-[16px] font-semibold italic tracking-[0.25em] text-ink line-through decoration-border">
                3LTVU6
              </span>
              <button type="button" className="grid size-10 place-items-center rounded-[10px] border border-border text-muted hover:bg-gray-soft" aria-label="Refresh captcha">
                <RefreshCw className="size-4.5" />
              </button>
              <Input placeholder="Enter Captcha *" className="min-w-32 flex-1" />
            </div>

            <div className="mt-5 flex gap-3">
              <button type="submit" className="inline-flex h-11 items-center gap-2 rounded-[10px] bg-[#1b2a78] px-5 text-[14px] font-semibold text-white hover:bg-[#16215f]">
                <Send className="size-4" /> Submit
              </button>
              <button type="reset" className="inline-flex h-11 items-center gap-2 rounded-[10px] border border-border px-5 text-[14px] font-semibold text-muted hover:bg-gray-soft">
                <RotateCcw className="size-4" /> Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* SIDBI loan/scheme offering */}
      <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0e1530] to-[#1b2a55] px-4 py-14 text-white sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-[#f5c518]/10 blur-3xl" />
        <div className="relative mx-auto max-w-xl">
          <h2 className="text-center text-[26px] font-semibold">
            SIDBI loan / scheme offering
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <OfferCard
              icon={<Landmark className="size-9" />}
              title="MSME Loans"
              bg="bg-[#3b2f86]"
            />
            <OfferCard
              icon={<Boxes className="size-9" />}
              title="Other Loan Products"
              bg="bg-[#f5c518] text-ink"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={
        "h-11 w-full rounded-[10px] border border-border bg-canvas px-3.5 text-[14px] text-ink placeholder:text-muted focus:border-primary focus:bg-surface focus:outline-none focus:ring-[3px] focus:ring-primary/15 " +
        (className ?? "")
      }
      {...props}
    />
  );
}

function OfferCard({
  icon,
  title,
  bg,
}: {
  icon: React.ReactNode;
  title: string;
  bg: string;
}) {
  return (
    <Link
      href="#"
      className={`group flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-[14px] text-center shadow-lg transition-transform hover:-translate-y-1 ${bg}`}
    >
      <span className="transition-transform group-hover:scale-110">{icon}</span>
      <span className="px-4 text-[15px] font-bold uppercase tracking-wide">
        {title}
      </span>
    </Link>
  );
}
