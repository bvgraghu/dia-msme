import type { Metadata } from "next";
import Link from "next/link";
import {
  FolderKanban,
  Clock,
  Eye,
  CheckCircle2,
  XCircle,
  CalendarClock,
  Users,
  Bell,
  Plus,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { StatusBadge, type StatusTone } from "@/components/ui/Badge";
import { greeting } from "@/lib/utils";

export const metadata: Metadata = { title: "Dashboard" };

const stats = [
  { icon: <FolderKanban className="size-5" />, value: 24, label: "Total Projects", tone: "primary" as const, trend: { value: "12%", up: true } },
  { icon: <Clock className="size-5" />, value: 6, label: "Pending Applications", tone: "warning" as const },
  { icon: <Eye className="size-5" />, value: 4, label: "Under Review", tone: "purple" as const },
  { icon: <CheckCircle2 className="size-5" />, value: 13, label: "Approved", tone: "success" as const, trend: { value: "8%", up: true } },
  { icon: <XCircle className="size-5" />, value: 2, label: "Rejected", tone: "danger" as const },
  { icon: <CalendarClock className="size-5" />, value: 3, label: "Upcoming Deadlines", tone: "warning" as const },
  { icon: <Users className="size-5" />, value: 48, label: "Active Users", tone: "primary" as const },
  { icon: <Bell className="size-5" />, value: 9, label: "Notifications", tone: "muted" as const },
];

const recent: { id: string; name: string; scheme: string; date: string; status: StatusTone }[] = [
  { id: "APP-2041", name: "Sri Lakshmi Industries", scheme: "Digital MSME", date: "28 Jun 2026", status: "approved" },
  { id: "APP-2038", name: "Konark Engineering Works", scheme: "Tech Upgradation", date: "27 Jun 2026", status: "review" },
  { id: "APP-2035", name: "Vaibhav Plastics", scheme: "CLCSS", date: "26 Jun 2026", status: "submitted" },
  { id: "APP-2031", name: "Anand Auto Components", scheme: "Cluster Dev.", date: "24 Jun 2026", status: "returned" },
  { id: "APP-2028", name: "Meghana Textiles", scheme: "Digital MSME", date: "22 Jun 2026", status: "draft" },
];

const deadlines = [
  { title: "PRJ-118 progress report", due: "in 3 days", date: "02 Jul 2026" },
  { title: "APP-2035 document re-upload", due: "in 5 days", date: "04 Jul 2026" },
  { title: "Quarterly utilisation certificate", due: "in 8 days", date: "07 Jul 2026" },
];

const activity = [
  { who: "Implementing Agency", what: "approved application APP-2041", when: "12 min ago" },
  { who: "You", what: "uploaded GST certificate to APP-2035", when: "2 hours ago" },
  { who: "DSP Infotech Ltd.", what: "was linked to project PRJ-118", when: "Yesterday" },
  { who: "Reviewer", what: "requested clarification on APP-2031", when: "2 days ago" },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Dashboard" }]}
        title={`${greeting()}, Raghu`}
        description="Manage your MSME projects and applications from a single workspace."
        actions={
          <>
            <Button href="/reports" variant="secondary" icon={<BarChart3 className="size-4.5" />}>
              View Reports
            </Button>
            <Button href="/applications/new" icon={<Plus className="size-4.5" />}>
              Create Project
            </Button>
          </>
        }
      />

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </section>

      {/* Main grid */}
      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Recent applications */}
        <Card className="lg:col-span-2">
          <CardHeader
            title="Recent Applications"
            description="Latest applications across your enterprises"
            action={
              <Button href="/applications" variant="ghost" size="sm" iconRight={<ArrowRight className="size-4" />}>
                View all
              </Button>
            }
          />
          <CardBody className="px-0 pb-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[14px]">
                <thead>
                  <tr className="border-y border-border bg-canvas text-[12px] uppercase tracking-wider text-muted">
                    <th className="px-6 py-3 font-semibold">Application</th>
                    <th className="px-6 py-3 font-semibold">Scheme</th>
                    <th className="hidden px-6 py-3 font-semibold sm:table-cell">Date</th>
                    <th className="px-6 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map((r) => (
                    <tr key={r.id} className="border-b border-border transition-colors last:border-0 hover:bg-canvas">
                      <td className="px-6 py-3.5">
                        <Link href={`/applications/${r.id}`} className="font-medium text-ink hover:text-primary">
                          {r.name}
                        </Link>
                        <p className="text-[12px] text-muted">{r.id}</p>
                      </td>
                      <td className="px-6 py-3.5 text-muted">{r.scheme}</td>
                      <td className="hidden px-6 py-3.5 text-muted sm:table-cell">{r.date}</td>
                      <td className="px-6 py-3.5">
                        <StatusBadge tone={r.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>

        {/* Deadlines */}
        <Card>
          <CardHeader title="Upcoming Deadlines" />
          <CardBody className="space-y-3">
            {deadlines.map((d) => (
              <div key={d.title} className="flex items-start gap-3 rounded-[12px] border border-border p-3.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-warning-soft text-warning">
                  <CalendarClock className="size-4.5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[14px] font-medium text-ink">{d.title}</p>
                  <p className="text-[12px] text-muted">
                    {d.date} · <span className="text-warning">{d.due}</span>
                  </p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </section>

      {/* Activity + announcements */}
      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader title="Recent Activity" />
          <CardBody>
            <ol className="relative space-y-5 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
              {activity.map((a, i) => (
                <li key={i} className="relative flex gap-4 pl-6">
                  <span className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-primary bg-surface" />
                  <p className="text-[14px] text-ink">
                    <span className="font-semibold">{a.who}</span> {a.what}.
                    <span className="ml-2 text-[12px] text-muted">{a.when}</span>
                  </p>
                </li>
              ))}
            </ol>
          </CardBody>
        </Card>

        <Card className="bg-gradient-to-br from-primary to-[#0d1b6b] text-white">
          <CardBody className="p-6">
            <h3 className="text-[18px] font-semibold">Announcement</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/85">
              Online filing for FY 2026-27 Digital MSME assistance is now open.
              Submit your applications before 30 September 2026.
            </p>
            <Button href="/applications/new" variant="secondary" className="mt-5 bg-white text-primary hover:text-primary">
              Start an application
            </Button>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
