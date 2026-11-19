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
    business: "RokYourBody",
    role: "Fitness coach",
    quote: "“Since my team moved onto the new system, I don’t want to say I do nothing anymore, but I do very little compared to before.”",
    cover: "/images/testimonials/rocco-cover-v4.jpg",
    videoSrc: "https://player.vimeo.com/video/1245084933?h=0ad24aa31b",
    videoShape: "landscape",
  },
  {
    id: "letizia",
    name: "Letizia",
    business: "Balance Consulting",
    role: "Nutrition coach",
    quote: "“My team doesn’t come to me asking ‘where is this?’ anymore. They find everything by themselves, and that’s the best part.”",
    cover: "/images/testimonials/letizia-cover-v4.jpg",
    videoSrc: "https://player.vimeo.com/video/1245084932?h=06fc8ec043",
    videoShape: "landscape",
  },
  {
    id: "marco",
    name: "Marco",
    business: "Marco Alive",
    role: "Health coach",
    quote: "“With the entire program and all the videos in one place, my clients work through it more easily, and they’re even more motivated.”",
    cover: "/images/testimonials/marco-cover-v5.jpg",
    videoSrc: "https://player.vimeo.com/video/1245084934?h=640b45686e",
    videoShape: "portrait",
  },
] as const;

export const hubs = [
  {
    name: "Company",
    body: "Your processes, documents, updates, and training materials in one place your team can reach without asking you.",
  },
  {
    name: "Operations",
    body: "Projects, tasks, meetings, goals, and KPIs in one view, where nothing slips, and nobody waits for your involvement.",
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
  {
    // Approved by Przemek 16 Nov
    name: "Personal",
    body: "A space just for you to collect and track what you love outside work, like recipes, books, and travel plans.",
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

// Where the roadmap arrives: the last card in the roadmap zigzag, marked with a blue dot + outline
export const roadmapOutcome = {
  label: "THE RESULT",
  title: "Ready to scale",
  description: "With every process in place and your team working on their own, you finally get your time back to grow the business.",
} as const;

// "\n" = Figma's desktop line break (mobile wraps naturally)
export const idealFit = [
  "You run a fitness, nutrition, or health\ncoaching business making over €10k/mo",
  "You have a team (or you're building one),\nand you've become its bottleneck",
  "You sign new clients every month, so your\ndemand is already proven",
  "You're ready to organize your business so it\ncan run without you"
] as const;

export const notFit = [
  "You're under €10k/mo, so the chaos isn't\ncosting you enough yet",
  "You're a solo coach or PT with no plans to\nbuild a team yet",
  "Your income comes mainly from brand deals\ninstead of coaching clients",
  "You want a template, a shortcut, or a\nbuild-it-yourself solution"
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
    { value: "10k-25k", label: "€10k - €25k/mo" },
    { value: "25k-50k", label: "€25k - €50k/mo" },
    { value: "50k-100k", label: "€50k - €100k/mo" },
    { value: "over100k", label: "Over €100k/mo" }
  ],
  teamSizes: [
    { value: "solo", label: "Just me" },
    { value: "2-5", label: "2 - 5 members" },
    { value: "6-15", label: "6 - 15 members" },
    { value: "16+", label: "16+ members" }
  ]
};

// The 3 steps of the free audit call, shown in the hero and in the booking section
export const AUDIT_STEPS = [
  "You show me how you run your business",
  "We uncover where you lose the most time",
  "You leave knowing exactly what to fix first",
] as const;

export const BOOKING_SUBMIT_ERROR =
  "Something went wrong saving your details. Please try again, or email przemek@scalebos.net.";

export const BOOKING_ERROR_MESSAGES = {
  fullName: {
    required: "Full name is required.",
    invalid: "Please enter a valid first and last name."
  },
  email: {
    required: "Email address is required.",
    invalid: "Please enter a valid email address."
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
    answer: "I build a system powerful enough to run your entire business from one place, but simple enough for people who've never used a tool like this. After the training, I stay by your side for 30 days."
  },
  {
    question: "Aren't we too small for this right now?",
    answer: "It's easier to set this up while your team is small, because 5 people learn a new way of working much faster than 20. If you wait, you'll have more clients, more files, and more team members to move over, so the same job gets bigger, slower, and more expensive."
  }
] as const;
// "By the numbers" section (between Is this for you? and About me). Number in blue + rest of the heading, then one line.
export const numbers = [
  { id: "money", value: "€50k+", label: "saved per year", line: "On average, that's about €4,000 a month you keep instead of spending it on admin work." },
  { id: "time", value: "60h+", label: "saved per month", line: "On average, that's about 15 hours a week you stop losing to admin and babysitting your team." },
  { id: "retention", value: "90%", label: "client retention rate", line: "On average, 9 in 10 coaching clients stay, with every check-in and renewal date tracked." },
  { id: "tools", value: "5+ tools", label: "replaced", line: "On average, your separate apps for clients, sales and content all move into one workspace." },
] as const;

// "The real problem" list. Each item is [first line, second line]; on desktop the second part starts a new line.
export const chaosItems = [
  ["Client sessions get missed, and nobody", "notices until the client messages you"],
  ["Documents are scattered everywhere,", "and no one can find anything"],
  ["Nobody knows which leads have been", "followed up on and which haven't"],
  ["You spend your evenings getting", "new team members up to speed"],
  ["You're never sure who's already", "paid this month and who hasn't"],
] as const;

// "How to fix it" list, same two-line format.
export const fixOutcomes = [
  ["All client sessions, check-ins, and", "progress are tracked and stored"],
  ["Every document has its own place,", "so anyone can find it in 2 clicks"],
  ["Setters and sales reps work on", "every lead from one clear pipeline"],
  ["New staff onboard themselves", "with simple step-by-step tutorials"],
  ["Finance dashboards show who's", "paid and who hasn't at a glance"],
] as const;
