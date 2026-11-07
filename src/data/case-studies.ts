// Case studies shown in the "Read case study" modal, keyed by project title.
// Screens: `mobile: true` renders phone screens two-up instead of full width.

export type CaseStudyScreen = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  mobile?: boolean;
};

export type CaseStudy = {
  eyebrow: string;
  headline: string;
  summary: string;
  facts: { label: string; value: string }[];
  sections: { heading: string; body?: string; points?: string[] }[];
  screens: CaseStudyScreen[];
};

const COSTCO = "/Portfolio Links/Screens/Costco Case Study";
const IH = "/Portfolio Links/Screens/Intermountain Health/jpg";
const SMYL = "/Portfolio Links/Screens/Smyl Screens";
const CARBON = "/Portfolio Links/Screens/CarbonHRM";

export const CASE_STUDIES: Record<string, CaseStudy> = {
  Costco: {
    eyebrow: "Costco · Order Management System",
    headline: "Taking Costco's order management off the VPN and into the cloud",
    summary:
      "Costco's inventory and order management ran on a locally hosted, networked system that buyers could only reach while signed in to the VPN. I designed the cloud-based version and built search around how Costco's domain actually works: items, orders, and vendors.",
    facts: [
      { label: "Role", value: "Principal Product Designer" },
      { label: "Engagement", value: "Via Unify Consulting" },
      { label: "Team", value: "Led 5 designers" },
      { label: "Timeline", value: "Jan 2023 – Present" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Buyers had to be on the VPN to reach a locally hosted system. Vendor, item, and order records lived on separate screens, so buyers built their own manual workarounds to reconcile them during multi-vendor purchasing.",
      },
      {
        heading: "My role",
        body: "I led a team of 5 designers, owned the search experience end to end, and wrote the developer specs engineering built from.",
      },
      {
        heading: "Key decisions",
        points: [
          "One search for the whole domain. A global search on every page covers orders, customers, POs, and picktickets, with recent searches tagged by type. It replaced three separate lookups (item number, order number, vendor) with wildcard matching, so buyers no longer need to know which screen a record lives on.",
          "Results grouped by business area. One query returns orders, POs, and picktickets side by side with the match highlighted, plus filters for which field it was found in.",
          "Advanced search that explains itself. A condition builder handles complex queries and restates them in plain language, so buyers can check what they asked for before running it.",
          "Tables built for heavy use. Column filters, amount ranges with a distribution, and saved column presets let each team see the data it needs.",
          "A design system that scales past search. Components, tokens, and documentation now carry the same UI patterns across Inventory, Payroll, and HR.",
          "AI in the workflow. I used Claude and Gemini for fast prototyping and to reason through logic across very large databases.",
        ],
      },
      {
        heading: "Outcome",
        body: "Buyers complete multi-vendor purchasing in one place, in the browser, without the manual workarounds they had built to reconcile records across separate screens.",
      },
    ],
    screens: [
      {
        src: `${COSTCO}/00-global-search-flyout.png`,
        width: 2880,
        height: 1094,
        caption: "Global search from any page, with recent searches tagged by type.",
        alt: "Order Management home with the global search flyout open, showing a business area selector and recent searches tagged Order, Customer, Pickticket, and PO, with Advanced Search and View All Results actions.",
      },
      {
        src: `${COSTCO}/01-advanced-search-orders.png`,
        width: 2892,
        height: 2124,
        caption: "Advanced search as a condition builder, summarized in plain language.",
        alt: "Advanced Search for Orders panel with warehouse, date range, and fulfillment center fields, a list of Where and And conditions, multiple order numbers as chips, and a plain-language summary of the search above Search and Cancel.",
      },
      {
        src: `${COSTCO}/02-search-results-all-areas.png`,
        width: 2880,
        height: 2100,
        caption: "One search, results grouped by business area with the match highlighted.",
        alt: "Search results for values starting with 1032, grouped into Orders, POs, and Picktickets tables with the matching digits highlighted, plus Found in, Warehouse, and Date filters on the left.",
      },
      {
        src: `${COSTCO}/03-advanced-search-items.webp`,
        width: 1080,
        height: 881,
        caption: "Item advanced search with department chips and inline guidance.",
        alt: "Item advanced search form with catalog and warehouse selectors, a description field, removable department chips, vendor and suffix fields, a tips panel, and recently searched values.",
      },
      {
        src: `${COSTCO}/04-order-results-amount-filter.png`,
        width: 2880,
        height: 2100,
        caption: "Column filters on results, including an amount range with a distribution.",
        alt: "Order search results table with a filter row under the headers and an open Total filter showing amount ranges with counts, a histogram, a range slider, and minimum and maximum fields.",
      },
      {
        src: `${COSTCO}/05-column-management.png`,
        width: 2880,
        height: 2100,
        caption: "Column presets so each team sees the data it needs.",
        alt: "Column Management panel over order results with presets like Default, Customer care, and Finance, grouped available fields with checkboxes, and a reorderable list of selected columns.",
      },
      {
        src: `${COSTCO}/06-order-fulfillment-picktickets.png`,
        width: 2880,
        height: 2100,
        caption: "Order detail with POs and picktickets expanded to line items.",
        alt: "Order detail page on the Fulfillment tab showing purchase orders and picktickets, with one row expanded to line items showing status, quantity, vendor SKU, and expected ship date, and a saved confirmation toast.",
      },
      {
        src: `${COSTCO}/07-shipping-expectation-vendor.png`,
        width: 2880,
        height: 2108,
        caption: "Shipping expectations set per vendor without leaving the list.",
        alt: "Shipping Item Expectation list filtered by vendor with a Vendor Master side panel open, showing vendor details and shipping expectation fields for time frame and cut-off time.",
      },
    ],
  },

  "Intermountain Health": {
    eyebrow: "Intermountain Health · Clinical Scheduling & Prescription Portal",
    headline: "A purpose-built clinical CRM instead of an off-the-shelf one",
    summary:
      "Intermountain Health wanted its own CRM for patients, prescriptions, and medications rather than buying one off the shelf. I led product design for the portal, including AI-powered predictive scheduling.",
    facts: [
      { label: "Role", value: "Principal Product Designer" },
      { label: "Timeline", value: "Jul 2024 – Jul 2025" },
      { label: "Platform", value: "Internal web portal" },
      { label: "Constraints", value: "HIPAA, clinical compliance review" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Clinicians needed prescriptions, patient history, and medication alerts in one place, built around Intermountain's own workflows. Buying a generic CRM would have meant bending those workflows to fit the software.",
      },
      {
        heading: "My role",
        body: "I led product design for the portal, from early concepts through developer-ready screens, working against clinical compliance review and engineering constraints.",
      },
      {
        heading: "Key decisions",
        points: [
          "One role-based dashboard. Prescriptions, patient history, and medication alerts sit together, and each role sees what it needs.",
          "Predictive scheduling. Scheduling suggestions are driven by live patient traffic and historical trends instead of a static calendar.",
          "Structured clinical workflows. Monitoring plans, consultation logs, and health trackers follow step-by-step flows so nothing is missed.",
          "Reusable components. A shared component library keeps new screens consistent across the portal.",
          "AI in the workflow. I used Claude to prototype the AI scheduling system, and Claude and Gemini to reason through large datasets and edge cases.",
        ],
      },
      {
        heading: "Outcome",
        body: "A HIPAA-compliant portal built on a reusable component library, with prescriptions, history, alerts, and AI-powered scheduling in one place.",
      },
    ],
    screens: [
      {
        src: `${IH}/1-Group 9.jpg`,
        width: 1440,
        height: 1374,
        caption: "Clinician dashboard: appointment requests, schedule, and patients.",
        alt: "Clinician dashboard with stat cards, appointment requests, patient stats charts, a daily schedule and patients table.",
      },
      {
        src: `${IH}/4-Group 6.jpg`,
        width: 1440,
        height: 1036,
        caption: "Monitoring plan with consultation notes, trackers, and vitals.",
        alt: "Monitoring plan detail with consultation notes, a clinical summary, a trackers table and a patient vitals sidebar.",
      },
      {
        src: `${IH}/5-Group 5.jpg`,
        width: 1440,
        height: 1008,
        caption: "Step one of the monitoring plan wizard.",
        alt: "First step of a monitoring plan wizard with a plan name field, file upload area and aim field beside a patient sidebar.",
      },
      {
        src: `${IH}/7-Group 3.jpg`,
        width: 1440,
        height: 1268,
        caption: "Choosing health trackers and reminder times.",
        alt: "Monitoring plan wizard step for selecting health trackers from a checklist table with reminder times and edit controls.",
      },
      {
        src: `${IH}/6-Group 4.jpg`,
        width: 1440,
        height: 1550,
        caption: "Logging a consultation with follow-up actions.",
        alt: "Log consultation form with provider and patient lookups, a date picker, notes, attachments and follow-up actions.",
      },
      {
        src: `${IH}/8-Group 2.jpg`,
        width: 1440,
        height: 992,
        caption: "Patient list with filters and an add patient modal.",
        alt: "Patient list table with filters and row actions, overlaid by an add new patient modal with contact and reason fields.",
      },
      {
        src: `${IH}/3-Group 7.jpg`,
        width: 1440,
        height: 908,
        caption: "Secure messaging with attachments and voice notes.",
        alt: "Messaging screen with a searchable recent chat list and a conversation thread supporting attachments and voice notes.",
      },
      {
        src: `${IH}/2-Group 8.jpg`,
        width: 1328,
        height: 1009,
        caption: "Clinician profile and patient reviews.",
        alt: "Clinician profile settings page with a profile card, rating summary and a tabbed list of patient reviews.",
      },
    ],
  },

  "Smyl Fitness": {
    eyebrow: "Smyl Fitness · Minute Moves & Smyl Insight",
    headline: "Making health data and exercise manageable for older adults",
    summary:
      "Smyl Fitness needed a way to present health data to older adults so they could understand it and keep up with exercise they could actually manage. I led design across Minute Moves, the mobile app for older adults, and Smyl Insight, the clinical CRM behind it.",
    facts: [
      { label: "Role", value: "Principal Product Designer" },
      { label: "Team", value: "Directed 6 front-end designers" },
      { label: "Timeline", value: "Oct 2025 – Jul 2026" },
      { label: "Platforms", value: "Mobile app and clinical web platform" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Older adults needed to see their own health data and stay with an exercise routine, and clinicians needed to track the same people's assessments. Most fitness and health apps assume younger users, smaller text, and dense data.",
      },
      {
        heading: "My role",
        body: "I led design for Minute Moves and designed Smyl Insight, directing 6 front-end designers on branding, color, and component standards.",
      },
      {
        heading: "Key decisions",
        points: [
          "Accessibility first. Onboarding and workout flows went from wireframe to interactive Figma prototype with interaction patterns built for older adults, including a falls risk screener written at a Grade 3 reading level.",
          "Short, manageable sessions. Workouts are framed as minutes, with streaks and points to encourage coming back without pressure.",
          "Data clinicians can act on. Smyl Insight lets clinicians log, track, and review patient fitness assessments in structured, role-based views, with risk summaries across a population.",
          "One design system. The same system serves a consumer mobile app and a clinical-grade desktop platform.",
          "AI in the workflow. I used Claude for AI system prototyping, and Claude and Gemini to reason through large datasets across the app and clinical platform.",
        ],
      },
      {
        heading: "Outcome",
        body: "Smyl Insight is in use at 5+ Chicago-area hospitals, and Minute Moves gives older adults a fitness app designed around them.",
      },
    ],
    screens: [
      {
        src: `${SMYL}/m000.png`,
        width: 1320,
        height: 2868,
        mobile: true,
        caption: "Minute Moves: workout feed with streaks and points.",
        alt: "Mobile screen: workout program feed with a streak and points bar, photo program cards, a locked card, and a tab bar.",
      },
      {
        src: `${SMYL}/m003.png`,
        width: 1320,
        height: 2868,
        mobile: true,
        caption: "Exercise view with a clear safety stop button.",
        alt: "Mobile screen: exercise activity view with a demo photo, start button, progress crowns, and a safety stop button.",
      },
      {
        src: `${SMYL}/m001.png`,
        width: 1320,
        height: 2868,
        mobile: true,
        caption: "Onboarding tooltip explaining daily points.",
        alt: "Mobile screen: onboarding tooltip explaining the daily points stat, shown over a dimmed workout program feed.",
      },
      {
        src: `${SMYL}/m002.png`,
        width: 1320,
        height: 2868,
        mobile: true,
        caption: "Setup complete, pointing out where the profile lives.",
        alt: "Mobile screen: setup complete dialog previewing the app menu with the profile item highlighted and a finish button.",
      },
      {
        src: `${SMYL}/002.jpg`,
        width: 1440,
        height: 1273,
        caption: "Smyl Insight: population list with a risk summary.",
        alt: "Population list with a risk summary strip and a member table with search, filters, bulk actions, and pagination.",
      },
      {
        src: `${SMYL}/005.jpg`,
        width: 1440,
        height: 1692,
        caption: "Screening results with clinical recommendations.",
        alt: "Member screening results page with a profile sidebar, clinical recommendations, outcome tiles, and summary cards.",
      },
      {
        src: `${SMYL}/004.jpg`,
        width: 1440,
        height: 1273,
        caption: "Provider view with member risk badges.",
        alt: "Provider detail page with a member risk summary sidebar and a filterable, sortable members table with risk badges.",
      },
      {
        src: `${SMYL}/001.jpg`,
        width: 1440,
        height: 1342,
        caption: "Clinic home with quick actions.",
        alt: "Home dashboard with a clinic details panel and action cards for viewing the population, adding members, and screening.",
      },
    ],
  },

  "Carbon HRM": {
    eyebrow: "Bii Consulting · Carbon HRM Payroll Platform",
    headline: "A payroll and finance portal built for churches",
    summary:
      "Churches needed their own portal for payroll and finance, and an off-the-shelf HR system did not fit how they pay and manage staff. I designed Carbon HRM, an online dashboard where staff manage their teams and handle payroll and finance in one place.",
    facts: [
      { label: "Role", value: "Senior UX/UI Designer" },
      { label: "Engagement", value: "Via Bii Consulting" },
      { label: "Timeline", value: "Jun 2024 – Apr 2025" },
      { label: "Scale", value: "Multi-campus, 500+ staff" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "A multi-campus organization of 500+ staff was running payroll reporting by hand across separate systems. Church payroll has its own rules, including giving-based payroll, so they needed a custom CRM rather than a generic HR tool.",
      },
      {
        heading: "My role",
        body: "I ran user research with church administrators and staff, then designed the dashboard, payroll reporting, and team management workflows.",
      },
      {
        heading: "Key decisions",
        points: [
          "One dashboard for every employee. Pay, leave balances, holidays, time-off history, and direct reports sit on a single home screen.",
          "Managers manage their people. Team calendars, timesheet review, and new hire onboarding let staff manage the employees who report to them.",
          "Payroll reporting in one place. Multi-campus reporting steps that administrators had been completing by hand across separate systems are consolidated into one workflow.",
          "Built from research. Interviews with administrators and staff turned into PTO tracking, giving-based payroll automation, and role-based access controls.",
        ],
      },
      {
        heading: "Outcome",
        body: "Payroll, finance, and team management for a 500+ staff, multi-campus organization now live in one portal instead of separate systems and manual steps.",
      },
    ],
    screens: [
      {
        src: `${CARBON}/1.png`,
        width: 920,
        height: 690,
        caption: "Employee home: pay, leave balances, direct reports, and time off.",
        alt: "Employee dashboard with a profile card, pay and leave balance tiles, direct reports, holidays, and time-off history.",
      },
      {
        src: `${CARBON}/2.png`,
        width: 920,
        height: 690,
        caption: "Team time-away calendar with color-coded leave types.",
        alt: "Team time-away calendar in month view with color-coded leave type filters and multi-day absence bars.",
      },
      {
        src: `${CARBON}/4.png`,
        width: 920,
        height: 690,
        caption: "Timesheet review grouped by employee, with bulk actions.",
        alt: "Timesheet review table grouped by employee with a bulk action toolbar and an expanded row of weekly hours.",
      },
      {
        src: `${CARBON}/3.png`,
        width: 920,
        height: 690,
        caption: "New hire onboarding tracker with checklist steps.",
        alt: "New hire onboarding tracker table with progress indicators and an expanded row showing checklist steps.",
      },
      {
        src: `${CARBON}/6.png`,
        width: 1444,
        height: 1019,
        caption: "Employee directory with department, location, and manager.",
        alt: "Employee directory table with a search bar, avatars, contact icons, and department, location, and manager columns.",
      },
      {
        src: `${CARBON}/5.png`,
        width: 1600,
        height: 1180,
        caption: "Alternate dashboard layout explored during design.",
        alt: "Alternate employee dashboard layout with profile card, pay summary, leave balances, holidays, and time-off history.",
      },
    ],
  },
};
