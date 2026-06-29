/* ============================================================
   DIA — Development of Industry Associations (an initiative of
   SIDBI). Real portal content, presented in the eMigrate visual
   design language.
   ============================================================ */

export const ticker = [
  "MSME Samvaad Episode 7 is now live!",
  "MSME Samvaad",
  "DIA Ambassadors FY 2025-26 announced",
  "BSE Champions FY 2025-26 felicitated",
];

export const primaryNav: {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}[] = [
  { label: "Home", href: "/" },
  {
    label: "About DIA",
    href: "#",
    children: [
      { label: "About the Programme", href: "#" },
      { label: "Connect · Collaborate · Catalyze", href: "#" },
      { label: "DIA Ambassadors", href: "#" },
      { label: "About SIDBI", href: "#" },
    ],
  },
  {
    label: "For IAs",
    href: "#",
    children: [
      { label: "Register your Association", href: "#" },
      { label: "Industry Association Directory", href: "#" },
      { label: "Events & Webinars", href: "#" },
      { label: "Publications & Reports", href: "#" },
    ],
  },
  {
    label: "For MSMEs",
    href: "#",
    children: [
      { label: "MSME Profiles", href: "#" },
      { label: "Discussion Forums", href: "#" },
      { label: "Surveys", href: "#" },
      { label: "BDS Service Providers", href: "#" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Publications & Reports", href: "#" },
      { label: "SIDBI Loan / Scheme Offerings", href: "#" },
      { label: "MSME Samvaad", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  { label: "Participate", href: "#" },
];

/* Announcement marquee (below hero, eMigrate-style) */
export const announcements = [
  "MSME Samvaad Episode 7 is now live — watch the latest session on the DIA platform.",
  "DIA Ambassadors for FY 2025-26 have been announced across leading Industry Associations.",
  "BSE Champions FY 2025-26 felicitated for outstanding contribution to the MSME ecosystem.",
  "106 Industry Associations and 63,059 members are now connected through the DIA network.",
];

/* Footer columns (eMigrate-style multi-column) */
export const footerColumns = [
  {
    title: "About",
    links: ["About DIA", "About SIDBI", "Connect · Collaborate · Catalyze", "DIA Ambassadors", "MSME Samvaad"],
  },
  {
    title: "For Industry Associations",
    links: ["Register your Association", "IA Directory", "Events & Webinars", "Publications & Reports"],
  },
  {
    title: "For MSMEs",
    links: ["MSME Profiles", "Discussion Forums", "Surveys", "BDS Service Providers", "SIDBI Loan Offerings"],
  },
];

/* Hero — three audience benefit cards */
export const audienceCards = [
  {
    key: "ia",
    title: "For Industry Associations",
    tone: "pink",
    points: [
      "Collaborate Nationally to share best practices.",
      "Stay Updated on events and industry news.",
      "Influence Policy through collective data and surveys.",
      "Enhance Capacity to expand your reach and improve member services.",
    ],
  },
  {
    key: "msme",
    title: "For MSMEs",
    tone: "yellow",
    points: [
      "Collaborate with other MSME members.",
      "Gain a Stronger Voice through a connected association.",
      "Participate in Surveys / Discussion Forums.",
      "Access Better Support from a more robust support system.",
    ],
  },
  {
    key: "general",
    title: "General Features",
    tone: "blue",
    points: [
      "Access to Publications and Reports.",
      "Get in touch with SIDBI.",
      "Access to MSME Profiles.",
    ],
  },
] as const;

export const heroStats = [
  { value: "106", label: "Industry Associations" },
  { value: "63,059", label: "Association Members" },
  { value: "183", label: "Events conducted" },
  { value: "19", label: "Webinars hosted" },
];

export const ambassadors = [
  {
    name: "Shri Ramjibhai A. Gadhiya",
    role: "President",
    org: "Jamnagar Factory Owners Association",
  },
  {
    name: "Shri Suresh Agrawal",
    role: "President",
    org: "Federation of Rajasthan Trade & Industry (FORTI), Jaipur",
  },
  {
    name: "Shri Amrutbhai Gadhia",
    role: "President",
    org: "Shapar Veraval Industrial Association, Rajkot",
  },
];

export const bseChampions = [
  {
    name: "Nishij Mukeshbhai Patel",
    org: "Dediyasan Industrial Estate Association, Mehsana",
    city: "Ahmedabad",
  },
  {
    name: "Pradeep Kumar Jain",
    org: "Adityapur Small Industries Association",
    city: "Jamshedpur",
  },
];

export const industryAssociations = [
  "Adityapur Small Industries Association",
  "Alwar Chamber of Commerce & Industry (ACCI)",
  "Ambad Industries Association",
  "Ambattur Industrial Estate Manufacturers Association (AIEMA)",
  "Andhra Chamber of Commerce (ACC)",
  "Assam Chamber of Commerce (ACC)",
  "Association of Industries Madhya Pradesh (AIMP)",
  "Federation of Rajasthan Trade & Industry (FORTI)",
  "Shapar Veraval Industrial Association (SVIA)",
  "Plastic Manufacturing Association Rajasthan (PMAR)",
  "Jamnagar Factory Owners Association",
  "Dediyasan Industrial Estate Association",
];

export const eventStats = [
  { value: "183", label: "Total Events" },
  { value: "0", label: "Upcoming Events" },
  { value: "183", label: "Past Events" },
];

export const webinarStats = [
  { value: "19", label: "Total Webinars" },
  { value: "0", label: "Upcoming Webinars" },
  { value: "19", label: "Past Webinars" },
];

export const testimonials = [
  {
    name: "Shri Suresh Agrawal",
    role: "President, FORTI",
    org: "Federation of Rajasthan Trade & Industry (FORTI), Jaipur",
    length: "4:24",
  },
  {
    name: "Shri Amrutbhai Gadhia",
    role: "President, SVIA",
    org: "Shapar Veraval Industrial Association, Rajkot",
    length: "4:23",
  },
  {
    name: "Shri Tolaram Gattani",
    role: "General Secretary, PMAR",
    org: "Plastic Manufacturing Association Rajasthan, Jaipur",
    length: "3:37",
  },
];

export const footerLinks = [
  "Terms & Conditions",
  "Privacy Policy",
  "Copyright Policy",
  "Hyperlink Policy",
  "Accessibility",
  "Disclaimer",
];
