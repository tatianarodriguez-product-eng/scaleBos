import type { ReactNode } from "react";
import { numbers } from "@/lib/content";
import { NumberCard } from "@/components/ui/NumberCard";

// 4 flip cards, 2×2 on desktop (row by row: €50k+, 60h+ / 90%, 5+ tools), stacked on phones.
// Front = the number + what it means; back = a small screen from the workspace that shows it.

function Screen({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="w-full max-w-95 overflow-hidden rounded-xl border border-border-soft bg-card text-small shadow-subtle" aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b border-border-soft bg-screen-bar px-3 py-2.25 text-small font-bold text-foreground">
        <i className="h-1.75 w-1.75 rounded-full bg-screen-dot" />
        <i className="h-1.75 w-1.75 rounded-full bg-screen-dot" />
        <i className="h-1.75 w-1.75 rounded-full bg-screen-dot" />
        <span className="ml-1.5">{title}</span>
      </div>
      {children}
    </div>
  );
}

function Row({ label, value, total = false }: { label: string; value: ReactNode; total?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-screen-line px-3 py-2 text-muted last:border-b-0">
      {total ? <strong className="font-bold text-foreground">{label}</strong> : <span>{label}</span>}
      {value}
    </div>
  );
}

const pill = "rounded-full px-2 py-0.75 text-mini font-bold";
const total = (v: string) => <span className={`${pill} bg-primary-soft font-extrabold text-primary`}>{v}</span>;
const renewed = <span className={`${pill} bg-success-soft text-success-deep`}>Renewed</span>;
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const tools = ["CRM", "Sales", "Content", "Docs", "Chats"];
const cell = "mt-1 block h-5.5 rounded-[0.3125rem] bg-screen-cell text-center text-mini font-bold leading-5.5";

const screens: Record<(typeof numbers)[number]["id"], ReactNode> = {
  money: (
    <Screen title="Finance">
      {["January", "February", "March"].map((m) => (
        <Row key={m} label={m} value={<span>€4,000</span>} />
      ))}
      <Row label="This year" value={total("€50k+")} total />
    </Screen>
  ),
  time: (
    <Screen title="Your week">
      <div className="grid grid-cols-5 gap-1.5 px-3 py-2.5">
        {days.map((d) => (
          <div key={d} className="text-center text-mini font-bold text-muted">
            {d}
            <span className={cell} />
            <span className={`${cell} bg-primary text-white`}>+3h</span>
            <span className={cell} />
          </div>
        ))}
      </div>
      <Row label="Time back this week" value={total("15 hours")} total />
    </Screen>
  ),
  retention: (
    <Screen title="Clients">
      {["Client 1", "Client 2", "Client 3"].map((c) => (
        <Row key={c} label={c} value={renewed} />
      ))}
      <Row label="9 in 10 renew" value={total("90%")} total />
    </Screen>
  ),
  tools: (
    <Screen title="Your tools">
      <div className="grid grid-cols-5 gap-1.5 px-3 pt-2.5">
        {tools.map((t) => (
          <div key={t} className="text-center text-mini font-bold text-muted">
            {t}
            <span className={`${cell} text-screen-faint`}>✕</span>
            <span className="mt-1 block h-5.5 text-small leading-5.5 text-primary">↓</span>
          </div>
        ))}
      </div>
      <div className="mx-3 mt-0 mb-2.5 h-5.5 rounded-[0.3125rem] bg-primary text-center text-mini font-bold leading-5.5 text-white">One workspace</div>
      <Row label="Tools replaced" value={total("5+")} total />
    </Screen>
  ),
};

export default function NumbersSection() {
  return (
    <section aria-labelledby="numbers-title" className="bg-navy-muted">
      <div className="mx-auto w-full max-w-page px-5 md:px-8 py-14 lg:py-24">
        <div className="lg:mx-auto lg:max-w-192 lg:text-center">
          <p className="text-tag font-bold uppercase text-primary">By the numbers</p>
          <h2 id="numbers-title" className="text-h2 lg:text-h2-lg font-bold text-foreground mt-3 text-balance lg:mt-4">
            Different coaching niches,<br className="hidden lg:block" /> same outcomes
          </h2>
        </div>

        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:mt-14 lg:gap-6">
          {numbers.map((n) => (
            <li key={n.id}>
              <NumberCard value={n.value} label={n.label} line={n.line}>
                {screens[n.id]}
              </NumberCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
