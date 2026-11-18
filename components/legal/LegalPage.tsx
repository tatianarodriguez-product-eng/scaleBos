import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

// Shared shell for /privacy and /terms: one readable column, site header + footer.
// Source text: Notion Company Wiki (Privacy Policy / Terms and Conditions (website)).
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-[45rem] px-5 py-12 lg:px-8 lg:py-20">
          <Link href="/" className="text-small font-semibold text-primary hover:underline">← Back to the site</Link>
          <h1 className="mt-6 text-h2 font-bold text-foreground lg:text-h2-lg">{title}</h1>
          <p className="mt-3 text-small text-subtle">Last updated: {updated}</p>
          <div
            className="mt-8 text-body leading-7 lg:text-body-lg text-muted
              [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-title [&_h2]:font-bold [&_h2]:text-foreground
              [&_p]:mt-4 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1.5
              [&_strong]:font-semibold [&_strong]:text-foreground
              [&_a]:font-semibold [&_a]:text-primary [&_a]:underline
              [&_table]:mt-4 [&_table]:w-full [&_table]:text-small [&_th]:border-b [&_th]:border-border-soft [&_th]:py-2 [&_th]:pr-4 [&_th]:text-left [&_th]:font-semibold [&_th]:text-foreground
              [&_td]:border-b [&_td]:border-border-soft [&_td]:py-2 [&_td]:pr-4 [&_td]:align-top"
          >
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
