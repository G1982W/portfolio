import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Greg Walker — Principal Product Designer | Enterprise & Health Tech",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Principal Product Designer with 16+ years building enterprise software and health tech products that people actually want to use.",
  summary:
    "I'm a Principal Product Designer with 16+ years of experience leading product design across enterprise software, health tech, and consumer platforms. I specialize in turning high-complexity systems — clinical workflows, order management, payroll, and AI-assisted tooling — into interfaces that are fast, intuitive, and built to scale. My work has measurably improved team efficiency by up to 40%, and I bring the same rigor to design systems, UX research, and cross-functional leadership. I've shipped products for Fortune 500 companies, government agencies, and health systems — always grounded in real user needs and engineered for long-term impact.",
  avatarUrl: "/me.png",
  metaDescription:
    "Principal Product Designer with 16+ years in enterprise software and health tech. Helping teams ship faster, smarter, and at scale.",
  OG: {
    title: "Greg Walker — Principal Product Designer",
    description:
      "16+ years designing enterprise software and health tech products for Costco, Intermountain Health, T-Mobile, and more. Available for contract engagements.",
    siteName: "Greg Walker",
  },
  skills: [
    "UX/UI Research",
    "UX/UI Design",
    "Webflow",
    "Figma",
    "Adobe Creative Cloud",
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "LLM models",
    "Cursor",
    "RooCode",
    "Moonshot",
    "Qwen",
    "Context Engineering",
    "Retrieval Augmented Generation",
    "Command Line Interface",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Smyl Fitness",
      href: "",
      badges: [],
      location: "Remote",
      title: "Principal Product Designer",
      logoUrl: "/Logos/smylfitness.jpg",
      start: "10/2025",
      end: "Present",
      description: `- **Led end-to-end UX/UI design for Minute Moves**, a fitness app built for older adults — covering onboarding, workout screens, and feature pages with accessibility-first interaction patterns.
- **Designed Smyl Insight, a custom enterprise CRM for desktop** that enables hospitals and clinicians to log, track, and review patient fitness assessments in a structured, role-appropriate interface.
- **Bridged consumer and enterprise product needs within a single design practice** — maintaining design consistency across a patient-facing mobile app and a clinical-grade desktop platform simultaneously.`,
    },
    {
      company: "Costco",
      href: "",
      badges: [],
      location: "Remote",
      title: "Principal UX/UI Designer",
      logoUrl: "/Logos/Costco.png",
      start: "01/2023",
      end: "Present",
      description: `- **Redesigned Costco's internal Order Management System (OMS)**, reducing manual entry errors by **35%** and streamlining multi-vendor purchasing workflows across departments.
- **Redesigned the OMS search experience** to unify item number, order number, and vendor lookup into a single, cohesive interface — reducing search friction and helping fulfillment teams locate what they need faster across all purchasing workflows.
- **Architected a scalable Figma design system** — components, tokens, and documentation — unifying UI patterns across Inventory, Payroll, and HR, accelerating developer handoff company-wide.`,
    },
    {
      company: "Intermountain Health",
      badges: [],
      href: "",
      location: "Remote",
      title: "Principal Product Designer",
      logoUrl: "/Logos/intermountain health.webp",
      start: "04/2024",
      end: "08/2025",
      description: `- **Led product design for their healthcare CRM**, introducing intelligent scheduling powered by live patient traffic and historical trends — reducing scheduling friction and improving daily clinic flow.
- **Designed HIPAA-compliant, role-based dashboards** consolidating prescriptions, patient history, and medication alerts into a single unified view, enabling faster cross-team coordination.
- **Partnered with clinical and engineering stakeholders** to ensure designs met strict compliance requirements without sacrificing usability.`,
    },
    {
      company: "Bii Consulting",
      href: "",
      badges: [],
      location: "Santa Clara, CA",
      title: "Lead UX/UI Designer",
      logoUrl: "/Logos/bii consulting.jpg",
      start: "06/2024",
      end: "05/2025",
      description: `- **Redesigned multi-campus payroll reporting workflows**, cutting processing time by **40%** in the first **8 weeks** and enabling accurate, error-free payouts for **500+ staff**.
- **Built admin and employee dashboards in Figma** optimized for non-technical users across **mobile** and **desktop**, driving rapid adoption of the new system.
- **Led user research with church administrators and pastors**, translating insights into concrete product features: **PTO tracking**, **giving-based payroll automation**, and **role-based access controls**.`,
  },
    {
      company: "State of Washington",
      href: "",
      badges: [],
      location: "San Jose, CA",
      title: "Mobile UX/UI Designer • Full-time Seattle",
      logoUrl: "/Logos/state of washington.svg",
      start: "08/2020",
      end: "01/2023",
      description: `- **Designed a statewide veterans employment app**, centralizing **jobs, training programs, and local resources** — significantly expanding access to support services for veterans across Washington.
- **Led UX strategy and Figma prototyping** for a **simple, accessible interface** serving **older adults** and **first-time smartphone users**, driving strong engagement in pilot testing.
- **Shipped in a 3-month sprint**, coordinating with **legal**, **accessibility**, and **engineering** to meet **state compliance** requirements while maintaining a user-first experience.`,
    },
    {
      company: "Safe Home Security, Inc.",
      href: "",
      badges: [],
      location: "San Francisco, CA",
      title: "Creative Director • Full-time Draper",
      logoUrl: "/Logos/Safe home security.png",
      start: "12/2017",
      end: "01/2020",
      description: `- **Designed a real-time sales performance dashboard** giving reps clear visibility into **commissions, bonuses, and regional performance metrics** in a single view.
- **Simplified the pay-transparency experience** in Figma, measurably **reducing inbound payroll questions** and **improving rep satisfaction** based on internal feedback.`,
    },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Creative Director",
    //   logoUrl: "/mitremedia.png",
    //   start: "12/2017",
    //   end: "01/2020",
    //   description:
    //     "Designed a sales payroll dashboard for reps to easily track commissions, bonuses, and sales performance in real time across multiple regions, providing greater transparency into earnings. Built streamlined workflows in Figma that simplified pay transparency, reducing payroll-related support tickets and improving sales rep satisfaction based on internal survey feedback.",
    // },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Utah",
      href: "https://www.utah.edu",
      degree: "Bachelor of Fine Arts in Graphic Design",
      logoUrl: "/utah.jpeg",
      start: "2003",
      end: "2005",
    },
  ],
  projects: [
    {
      title: "BlakeUI",
      href: "https://www.blakeui.com/",
      dates: "Feb 2026 - present",
      active: true,
      description:
        "Designed the UI components for use with health-tech startups.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Supabase",
        "Stripe",
        "Shadcn UI",
        "Radix UI",
        "Fumadocs",
        "Framer Motion",
        "Zustand",
        "React Hook Form + Zod",
        "TanStack Table",
        "Recharts",
        "Lucide Icons",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.blakeui.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      images: [],
      video: "/Portfolio Links/BlakeUI.mp4",
    },
    {
      title: "Smyl Fitness",
      href: "https://smylfitness.com/",
      dates: "Feb 2026 - present",
      active: true,
      description:
        "Designed the Minute Moves fitness mobile health app & the desktop CRM Insights which tracks patient mobility data.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Supabase",
        "Stripe",
        "Shadcn UI",
        "Radix UI",
        "Fumadocs",
        "Framer Motion",
        "Zustand",
        "React Hook Form + Zod",
        "TanStack Table",
        "Recharts",
        "Lucide Icons",
      ],
      links: [
        {
          type: "Website",
          href: "https://smylfitness.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Screen",
          href: "Screen",
          icon: <Icons.framermotion className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/Portfolio Links/Screens/Smyl Screens/001.jpg",
        "/Portfolio Links/Screens/Smyl Screens/002.jpg",
        "/Portfolio Links/Screens/Smyl Screens/003.jpg",
        "/Portfolio Links/Screens/Smyl Screens/004.jpg",
        "/Portfolio Links/Screens/Smyl Screens/005.jpg",
        "/Portfolio Links/Screens/Smyl Screens/006.jpg",
        "/Portfolio Links/Screens/Smyl Screens/m000.png",
        "/Portfolio Links/Screens/Smyl Screens/m001.png",
        "/Portfolio Links/Screens/Smyl Screens/m002.png",
        "/Portfolio Links/Screens/Smyl Screens/m003.png",
      ],
      video: "",
    },
    {
      title: "AskBlake",
      href: "https://www.askblake.dev",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed AskBlake, that turns prompts into production-ready web apps: FinTech dashboards, and enterprise components.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.askblake.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      images: [],
      video: "/Portfolio Links/askblake.mp4",
    },
    {
      title: "Intermountain Health",
      href: "",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed and launched an AI-powered employee portal for scheduling and prescription access, improving task completion rates by 30% within the first 60 days of rollout across clinics.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Screen",
          href: "Screen",
          icon: <Icons.framermotion className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/Portfolio Links/Screens/Intermountain Health/jpg/1-Group 9.jpg",
        "/Portfolio Links/Screens/Intermountain Health/jpg/2-Group 8.jpg",
        "/Portfolio Links/Screens/Intermountain Health/jpg/3-Group 7.jpg",
        "/Portfolio Links/Screens/Intermountain Health/jpg/4-Group 6.jpg",
        "/Portfolio Links/Screens/Intermountain Health/jpg/5-Group 5.jpg",
        "/Portfolio Links/Screens/Intermountain Health/jpg/6-Group 4.jpg",
        "/Portfolio Links/Screens/Intermountain Health/jpg/7-Group 3.jpg",
        "/Portfolio Links/Screens/Intermountain Health/jpg/8-Group 2.jpg",
      ],
      video: "",
    },
    {
      title: "blakebill",
      href: "blakebill.com",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed Blakebill, a file transfer service that pays you before delivery. Upload files, set a price, and share a secure link.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://blakebill.com",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Screen",
        //   href: "Screen",
        //   icon: <Icons.framermotion className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      images: [],
      video: "/Portfolio Links/blakebill.mp4",
    },
    {
      title: "Carbon HRM",
      href: "https://carbonHRM.com",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Designed & Developed the payroll reporting workflow for a multi-campus organizations.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://carbonHRM.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Screen",
          href: "Screen",
          icon: <Icons.framermotion className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/Portfolio Links/Screens/CarbonHRM/1.png",
        "/Portfolio Links/Screens/CarbonHRM/2.png",
        "/Portfolio Links/Screens/CarbonHRM/3.png",
        "/Portfolio Links/Screens/CarbonHRM/4.png",
        "/Portfolio Links/Screens/CarbonHRM/5.png",
        "/Portfolio Links/Screens/CarbonHRM/6.png",
      ],
      video: "/Portfolio Links/CarbonHRM.mp4",
    },
    {
      title: "Costco",
      href: "https://carbonHRM.com",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Redesigned Costco’s internal order management platform, streamlining multi-vendor purchasing workflows across departments.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Screen",
          href: "Screen",
          icon: <Icons.framermotion className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/Portfolio Links/Screens/Costco Screens/001.png",
        "/Portfolio Links/Screens/Costco Screens/002.png",
        "/Portfolio Links/Screens/Costco Screens/003.png",
        "/Portfolio Links/Screens/Costco Screens/004.png",
        "/Portfolio Links/Screens/Costco Screens/005.png",
        "/Portfolio Links/Screens/Costco Screens/006.png",
      ],
      video: "",
    },
    {
      title: "Thatch",
      href: "https://carbonHRM.com",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed the UX/UI backend and Point-Of-Sale UI for the startup Thatch.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Screen",
          href: "Screen",
          icon: <Icons.framermotion className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/Portfolio Links/Screens/Thatch POS/Dashboard/jpg/Add Product - Retailer View - Populated.jpg",
        "/Portfolio Links/Screens/Thatch POS/Dashboard/jpg/DEMO - Dashboard – 1.jpg",
        "/Portfolio Links/Screens/Thatch POS/Dashboard/jpg/DEMO - Inventory Allocation 03 – 2.jpg",
        "/Portfolio Links/Screens/Thatch POS/Dashboard/jpg/DEMO - Thatchat – 2.jpg",
        "/Portfolio Links/Screens/Thatch POS/Dashboard/jpg/History Detailed View Fullscreen.jpg",
        "/Portfolio Links/Screens/Thatch POS/Dashboard/jpg/History.jpg",
        // "/Portfolio Links/Screens/Thatch POS/PoS/jpg/1_Login Screen.jpg",
        // "/Portfolio Links/Screens/Thatch POS/PoS/jpg/2_Checkout Screen - Populated.jpg",
        // "/Portfolio Links/Screens/Thatch POS/PoS/jpg/4_Sale Page Receipt.jpg",
        // "/Portfolio Links/Screens/Thatch POS/PoS/jpg/5_Receive IA.jpg",
        // "/Portfolio Links/Screens/Thatch POS/PoS/jpg/6_Work Orders - Populated – 1.jpg",
        // "/Portfolio Links/Screens/Thatch POS/PoS/jpg/7_Inventory Allocated Detailed VIEW - Purchase Order – 2.jpg",
        // "/Portfolio Links/Screens/Thatch POS/PoS/jpg/Inventory Allocated Detailed VIEW - Purchase Order-Shipped - Confirm Payment.jpg",
        // "/Portfolio Links/Screens/Thatch POS/PoS/jpg/Split Pay.jpg",
      ],
      video: "",
    },
    {
      title: "Orizn Energy",
      href: "https://OrizonEnergy.ca",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Designed & developed the site of Orizon energy, is the elading solar company in western Canada",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://OrizonEnergy.ca",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      images: [],
      video: "/Portfolio Links/OrizonEnergy.mp4",
    },
    // {
    //   title: "Kept by Safe Home Security",
    //   href: "KeptDIY.com",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Designed the UI of Kept DIY that is a wireless home security system you install in minutes.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://KeptDIY.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Screen",
    //       href: "Screen",
    //       icon: <Icons.framermotion className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   images: [
    //     "/Portfolio Links/Screens/Kept UI/jpg/1-Home – 1.jpg",
    //     "/Portfolio Links/Screens/Kept UI/jpg/2-Home Open – 2.jpg",
    //     "/Portfolio Links/Screens/Kept UI/jpg/3-Rooms open – 1.jpg",
    //     "/Portfolio Links/Screens/Kept UI/jpg/4-Groups – Open – 2.jpg",
    //     "/Portfolio Links/Screens/Kept UI/jpg/5-No Select wireless – 1.jpg",
    //     "/Portfolio Links/Screens/Kept UI/jpg/6-Password – 1.jpg",
    //     "/Portfolio Links/Screens/Kept UI/jpg/7-Join Wireless – 1.jpg",
    //     "/Portfolio Links/Screens/Kept UI/jpg/8-Events – 1.jpg",
    //     "/Portfolio Links/Screens/Kept UI/jpg/9-Motion – 1.jpg",
    //   ],
    //   video: "/Portfolio Links/KeptDIY.mp4",
    // },
    // {
    //   title: "Lightfusion",
    //   href: "https://lightfusion.io",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Designed & developed the site of Lightfusion.io which is an AR-powered solar proposal platform that builds accurate designs in minutes.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://lightfusion.io",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   images: [],
    //   video: "/Portfolio Links/LightFusion.mp4",
    // },
    // {
    //   title: "Callpilot",
    //   href: "Callpilot.app",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Designed the site, UI and dashboard of Callpilot which automates third-party verification with AI-driven digital surveys.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://Callpilot.app",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   images: [],
    //   video: "/Portfolio Links/Callpilot.mp4",
    // },
    // {
    //   title: "Core365",
    //   href: "Callpilot.app",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Designed & developed the site of Core365, an AI-powered, all-in-one ERP that unifies your sales stack.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://core365.app",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   images: [],
    //   video: "/Portfolio Links/Core365.mp4",
    // },
  ],
  hackathons: [
    {
      title: "Core365",
      href: "core365.app",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Designed & developed the site of Core365, an AI-powered, all-in-one ERP that unifies your sales stack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
