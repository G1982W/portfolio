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

const COSTCO = "/Portfolio Links/Screens/Costco Screens";
const IH = "/Portfolio Links/Screens/Intermountain Health/jpg";
const SMYL = "/Portfolio Links/Screens/Smyl Screens";

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
          "One search for the whole domain. I collapsed three separate lookups (item number, order number, vendor) into one cross-domain flyout with wildcard matching, so buyers no longer need to know which screen a record lives on.",
          "Advanced search for the hard cases. Catalog and warehouse selectors, removable filter chips, and recent searches let buyers narrow very large result sets without starting over.",
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
        src: `${COSTCO}/001.png`,
        width: 1440,
        height: 1174,
        caption: "Item management home with the quick search flyout open.",
        alt: "Item management dashboard with a feature banner, open quick search menu, metric cards, quick links and recent activity.",
      },
      {
        src: `${COSTCO}/002.png`,
        width: 1440,
        height: 1174,
        caption: "Advanced search with catalog and warehouse scoping and filter chips.",
        alt: "Advanced search form with catalog and warehouse selectors, removable filter chips, dropdown filters and recent searches.",
      },
      {
        src: `${COSTCO}/003.png`,
        width: 1440,
        height: 1174,
        caption: "Search results with a filter sidebar, export, and status badges.",
        alt: "Item search results table with a checkbox filter sidebar, export and refine actions, status badges and pagination.",
      },
      {
        src: `${COSTCO}/004.png`,
        width: 1440,
        height: 1050,
        caption: "Carrier and ship code management with nested code tables.",
        alt: "Carrier and ship code table with one row expanded to a nested code table, plus create, export and pagination controls.",
      },
      {
        src: `${COSTCO}/005.png`,
        width: 1440,
        height: 1050,
        caption: "Editing a carrier, including delivery eligibility.",
        alt: "Edit carrier form with basic details, tracking site URL fields, a delivery eligibility table and an editable code table.",
      },
      {
        src: `${COSTCO}/006.png`,
        width: 1440,
        height: 1050,
        caption: "Adding a shipping code in a side panel without leaving the form.",
        alt: "Add shipping code side panel with tabs, code and method fields, option checkboxes and cutoff time over the edit form.",
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
};
