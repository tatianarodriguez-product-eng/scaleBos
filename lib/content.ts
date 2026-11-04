export const faqs = [
  {
    id: "faq-different",
    question: "How is this different from other tools?",
    answer:
      "This isn't another empty app you have to set up yourself, but a done-for-you implementation where I first learn exactly how your business operates. Then I build the system around the way you and your team already work, so every page, pipeline, and dashboard fits your business 100%.",
  },
  {
    id: "faq-duration",
    question: "How long does it take?",
    answer:
      "The full install runs across 8 weeks: one week to map the business, two to build the system, one to train your team, then 30 days of hands-on support after delivery.",
  },
  {
    id: "faq-disrupt",
    question: "Will switching disrupt my business?",
    answer:
      "No. I design the system around how you already work and move client data, financial records, and documents in the background. You keep coaching. Training happens in week 4, after the system is already in place.",
  },
  {
    id: "faq-team",
    question: "Will my team actually be able to use it?",
    answer:
      "Yes. Every team member gets their own workspace, and I train you and your team separately so nobody is left behind. If they aren't independently running the system after 30 days, I keep working with you at no extra cost until they are.",
  },
  {
    id: "faq-small",
    question: "Aren't we too small for this right now?",
    answer:
      "If you're under €10k/mo, still solo with no plan to hire, or looking for a template to set up yourself, this isn't the right fit. I only take fitness, nutrition, and health coaching businesses that already have demand and a team — or are building one.",
  },
] as const;

export const niches = ["Fitness", "Nutrition", "Health", "Hybrid / other"] as const;

export const revenueRanges = [
  "€10k–€20k/mo",
  "€20k–€50k/mo",
  "€50k–€100k/mo",
  "€100k+/mo",
] as const;

export const teamSizes = [
  "Just me (building a team)",
  "2–5 people",
  "6–10 people",
  "10+ people",
] as const;

export const testimonials = [
  {
    id: "rocco",
    name: "Rocco",
    role: "Fitness coach",
    quote: "[Result quote from the video]",
    posterLabel: "PLACEHOLDER · Rocco testimonial video (30–60s)",
    videoSrc: "",
  },
  {
    id: "letizia",
    name: "Letizia",
    role: "Nutrition coach",
    quote: "[Result quote from the video]",
    posterLabel: "PLACEHOLDER · Letizia testimonial video (30–60s)",
    videoSrc: "",
  },
  {
    id: "marco",
    name: "Marco",
    role: "Health coach",
    quote: "[Result quote from the video]",
    posterLabel: "PLACEHOLDER · Marco testimonial video (30–60s)",
    videoSrc: "",
  },
] as const;

export const hubs = [
  {
    name: "Company",
    body: "Your processes, documents, and training materials in one place your team can reach without asking you.",
  },
  {
    name: "Operations",
    body: "Projects, tasks, goals, and KPIs in one view, where nothing slips, and nobody waits for your involvement.",
  },
  {
    name: "Marketing",
    body: "A content calendar holding every reel, post, and campaign, planned weeks ahead across all your platforms.",
  },
  {
    name: "Sales",
    body: "One pipeline for every lead, with every call tracked to give you show-up and conversion rates per rep and setter.",
  },
  {
    name: "Clients",
    body: "Sessions, check-ins, progress, and payments tracked from a client's first call through to their next renewal.",
  },
  {
    name: "Finance",
    body: "Income, expenses, subscriptions, profit, and margins in one dashboard, updated without you touching anything.",
  },
  {
    name: "Team",
    body: "A private workspace for every member, with their own access and commissions calculated automatically each month.",
  },
] as const;

export const steps = [
  {
    week: "WEEK 1",
    title: "Map the business",
    description: "One call where you walk me through your workflows and tools, so I can see where things get stuck.",
  },
  {
    week: "WEEKS 2–3",
    title: "Build the system",
    description: "I design the system around how your business works and move all client data, financial records, and documents in.",
  },
  {
    week: "WEEK 4",
    title: "Train the team",
    description: "Every team member gets their own workspace. Next, I train you and your team separately, so nobody is left behind.",
  },
  {
    week: "WEEKS 5–8",
    title: "Hands-on support",
    description: "For 30 days after delivery, I stay by your side to remove any friction and answer every question until your team settles in.",
  }
] as const;

export const idealFit = [
  "You run a fitness, nutrition, or health coaching business making over €10k/mo",
  "You have a team (or you're building one), and you've become its bottleneck",
  "You sign new clients every month, so your demand is already proven",
  "You're ready to organize your business so it can run without you"
] as const;

export const notFit = [
  "You're under €10k/mo, so the chaos isn't costing you enough yet",
  "You're a solo coach or PT with no plans to build a team yet",
  "Your income comes mainly from brand deals instead of coaching clients",
  "You want a template, a shortcut, or a build-it-yourself solution"
] as const;

export const BOOKING_FORM_OPTIONS = {
  niches: [
    { value: "fitness", label: "Fitness" },
    { value: "nutrition", label: "Nutrition" },
    { value: "health", label: "Health" },
    { value: "other", label: "Other" }
  ],
  revenues: [
    { value: "under10k", label: "Under €10k/mo" },
    { value: "10k-50k", label: "€10k - €50k/mo" },
    { value: "50k-100k", label: "€50k - €100k/mo" },
    { value: "over100k", label: "Over €100k/mo" }
  ],
  teamSizes: [
    { value: "solo", label: "Just me" },
    { value: "2-5", label: "2 - 5 members" },
    { value: "6-10", label: "6 - 10 members" },
    { value: "11+", label: "11+ members" }
  ]
};

export const BOOKING_ERROR_MESSAGES = {
  fullName: {
    required: "Full name is required.",
    invalid: "Please enter a valid first and last name."
  },
  email: {
    required: "Email address is required.",
    invalid: "Please enter a valid email address."
  },
  phone: {
    required: "Phone number is required.",
    invalid: "Please enter a valid phone number (e.g., +1 555 000 0000)."
  },
  niche: {
    required: "Please select your coaching niche."
  },
  revenue: {
    required: "Please select your monthly revenue."
  },
  teamSize: {
    required: "Please select your team size."
  },
  handle: {
    required: "Instagram handle or website is required.",
    invalid: "Please enter a valid handle or URL (no spaces allowed)."
  }
};

// Interfaces
interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

// Datos de las FAQs
export const faqData: FaqItem[] = [
  {
    question: "How is this different from other tools?",
    answer: "This isn't another empty app you have to set up yourself, but a done-for-you implementation where I first learn exactly how your business operates. Then I build the system around the way you and your team already work, so every page, pipeline, and dashboard fits your business 100%."
  },
  {
    question: "How long does it take?",
    answer: "Most installs take around 4 weeks, depending on your team size and how much needs to be moved in, which is way shorter than hiring an operations manager or trying to fix it yourself. The fastest ones happen when you send me every client file, payment record, and Google Doc in the first few days."
  },
  {
    question: "Will switching disrupt my business?",
    answer: "No, you and your team keep working exactly the way you do now while I build the system and move all your data in. Once everything's ready, I train you and your team separately, and everyone moves over with every client, payment, and document already inside."
  },
  {
    question: "Will my team actually be able to use it?",
    answer: "I build a system powerful enough to run your entire business from one place, but simple enough for people who've never used a tool like this. After the training, I stay by your side for 30 days, and if your team still isn't running it on their own, I keep working with you at no extra cost until they are."
  },
  {
    question: "Aren't we too small for this right now?",
    answer: "It's easier to set this up while your team is small, because 5 people learn a new way of working much faster than 20. If you wait, you'll have more clients, more files, and more team members to move over, so the same job gets bigger, slower, and more expensive."
  }
] as const;