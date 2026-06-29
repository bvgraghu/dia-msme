import { SiteHeader } from "@/components/public/SiteHeader";
import { Hero } from "@/components/public/Hero";
import { AnnouncementBar } from "@/components/public/AnnouncementBar";
import { AudienceSection } from "@/components/public/sections/Audience";
import { AmbassadorsSection } from "@/components/public/sections/Ambassadors";
import { MapDirectorySection } from "@/components/public/sections/MapDirectory";
import { DashboardsSection } from "@/components/public/sections/Dashboards";
import { BannersSection } from "@/components/public/sections/Banners";
import { TestimonialsSection } from "@/components/public/sections/Testimonials";
import { GetInTouchSection } from "@/components/public/sections/GetInTouch";
import { SiteFooter } from "@/components/public/SiteFooter";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-canvas">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <AnnouncementBar />
        <AudienceSection />
        <AmbassadorsSection />
        <MapDirectorySection />
        <DashboardsSection />
        <BannersSection />
        <TestimonialsSection />
        <GetInTouchSection />
      </main>
      <SiteFooter />
    </div>
  );
}
