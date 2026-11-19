import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — ScaleBos",
  description: "The terms for using scalebos.net and booking the free system audit.",
};

// Text = Notion "Terms and Conditions (website)". Keep the two in sync: change Notion first, then here.
// Business address and tax ID are added once ScaleBos is registered.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="16 November 2026">
      <p>These terms apply to your use of scalebos.net and to booking the free system audit. By using the site, you agree to them.</p>

      <h2>1. Who we are</h2>
      <p>scalebos.net is run by <strong>Przemysław Szanowski, trading as ScaleBos</strong>, based in Poland. Email: <a href="mailto:przemek@scalebos.net">przemek@scalebos.net</a>.</p>

      <h2>2. What the site is for</h2>
      <p>The site describes the ScaleBos Install, a done-for-you operating system for fitness, nutrition and health coaching businesses, and lets you book a free system audit call. The content is general information. It is not legal, financial or tax advice for your business.</p>

      <h2>3. The free system audit</h2>
      <ul>
        <li>The call is free and takes about 45 minutes, over Google Meet.</li>
        <li>Booking it does not commit you to buy anything.</li>
        <li>If you can&apos;t make it, please reschedule or cancel through the links in your Calendly confirmation email.</li>
        <li>We may reschedule or cancel a call if we need to. We will let you know as early as we can.</li>
        <li>We do not record calls unless we ask first and you agree.</li>
        <li>We keep what you tell us about your business confidential and use it only to prepare for and run the call.</li>
      </ul>

      <h2>4. Paid services</h2>
      <p>Nothing on this site is a binding offer. If you decide to work with us, the scope, price, timeline and guarantee are set out in a separate written agreement, and that agreement governs the work.</p>

      <h2>5. Results and testimonials</h2>
      <p>The testimonials and results on this site are real experiences of real clients. Every business is different, so we cannot promise you the same results.</p>

      <h2>6. Using the site</h2>
      <p>Please don&apos;t misuse the site: no attempts to break it, scrape it at scale, or submit false details in the form.</p>

      <h2>7. Intellectual property</h2>
      <p>The text, design, images, videos and logos on this site belong to ScaleBos or are used with permission. You may not copy or reuse them for commercial purposes without our written permission.</p>

      <h2>8. Other services we use</h2>
      <p>Booking happens in Calendly and the videos play from Vimeo. Those services have their own terms and privacy policies, and we are not responsible for how they work.</p>

      <h2>9. Liability</h2>
      <p>We work hard to keep the site accurate and available, but we can&apos;t guarantee it is always error-free or online. To the extent the law allows, we are not liable for losses arising from your use of the site or the free call. Nothing in these terms limits liability that cannot be limited by law, or any rights you have as a consumer.</p>

      <h2>10. Privacy</h2>
      <p>How we handle your personal data is explained in our <Link href="/privacy">Privacy Policy</Link>.</p>

      <h2>11. Law and disputes</h2>
      <p>These terms are governed by Polish law. Disputes go to the competent courts in Poland. If you are a consumer, you keep the protections of the law of the country where you live.</p>

      <h2>12. Changes</h2>
      <p>We may update these terms. The date at the top shows when they last changed.</p>

      <h2>13. Contact</h2>
      <p>Questions about these terms: <a href="mailto:przemek@scalebos.net">przemek@scalebos.net</a></p>
    </LegalPage>
  );
}
