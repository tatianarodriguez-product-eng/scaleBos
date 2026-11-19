import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — ScaleBos",
  description: "What personal data scalebos.net collects, why, who it is shared with and your rights.",
};

// Text = Notion "Privacy Policy (website)". Keep the two in sync: change Notion first, then here.
// Business address and tax ID are added once ScaleBos is registered.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="16 November 2026">
      <p>This policy explains what personal data we collect on scalebos.net, why we collect it, who we share it with and what your rights are.</p>

      <h2>1. Who is responsible for your data</h2>
      <p>The controller of your personal data is <strong>Przemysław Szanowski, trading as ScaleBos</strong>, based in Poland.</p>
      <p>For anything about your data, write to <a href="mailto:przemek@scalebos.net">przemek@scalebos.net</a>.</p>

      <h2>2. What we collect</h2>
      <p><strong>When you fill in the form to book a free system audit:</strong></p>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Coaching niche (fitness, nutrition, health or other)</li>
        <li>Instagram handle or website</li>
        <li>Monthly revenue range</li>
        <li>Team size</li>
        <li>Where you came from: the campaign details in the link you clicked (utm_source, utm_medium, utm_campaign, utm_content, utm_term)</li>
      </ul>
      <p><strong>When you book a call in Calendly:</strong> your name, email, the time you chose and anything you write in the optional notes field.</p>
      <p><strong>During the call:</strong> we talk over Google Meet. We do not record calls unless we ask you first and you agree.</p>
      <p><strong>When you email us:</strong> your email address and what you write.</p>
      <p><strong>When you browse the site:</strong> technical data such as your IP address, browser and device, which our hosting provider logs to keep the site running and secure. If you accept cookies, also how you use the site (see section 5).</p>

      <h2>3. Why we use it and on what legal basis</h2>
      <table>
        <thead>
          <tr><th>Purpose</th><th>Legal basis (GDPR)</th></tr>
        </thead>
        <tbody>
          <tr><td>Replying to your form, preparing and holding the audit call</td><td>Taking steps at your request before a possible contract (Art. 6(1)(b))</td></tr>
          <tr><td>Following up after the call about our services</td><td>Our legitimate interest in replying to people who asked about our services (Art. 6(1)(f)). You can object at any time</td></tr>
          <tr><td>Measuring how the site and our ads perform, and showing our ads to the right people</td><td>Your consent, given in the cookie banner (Art. 6(1)(a))</td></tr>
          <tr><td>Keeping the site secure and working</td><td>Our legitimate interest (Art. 6(1)(f))</td></tr>
          <tr><td>Invoicing and accounting if you become a client</td><td>Legal obligation (Art. 6(1)(c))</td></tr>
        </tbody>
      </table>
      <p>Giving us your data is voluntary, but without the form details we cannot prepare or book the call.</p>
      <p>We do not make automated decisions about you that have legal or similarly significant effects. Everyone who fills in the form can book a call.</p>

      <h2>4. Who we share it with</h2>
      <p>We do not sell your data. We use these providers to run the site and the booking process. They process data on our behalf:</p>
      <ul>
        <li><strong>Netlify</strong> (website hosting)</li>
        <li><strong>Notion</strong> (where form answers are stored, our client list)</li>
        <li><strong>Calendly</strong> (booking the call)</li>
        <li><strong>Google</strong> (email, calendar and Google Meet; Google Analytics if you accept cookies)</li>
        <li><strong>Vimeo</strong> (playing the testimonial videos)</li>
        <li><strong>Meta</strong> (Meta Pixel, only if you accept cookies). For the data the Pixel collects on our site and sends to Meta, Meta Platforms Ireland and we are joint controllers. Meta&apos;s own use of that data is explained in Meta&apos;s privacy policy.</li>
        <li><strong>Microsoft Clarity</strong> (heatmaps and session recordings, only if you accept cookies)</li>
      </ul>
      <p>Some of these providers are based in, or transfer data to, the United States. Where data leaves the European Economic Area, they rely on safeguards recognised by EU law, such as the EU-US Data Privacy Framework or the European Commission&apos;s Standard Contractual Clauses.</p>

      <h2>5. Cookies and tracking</h2>
      <p>On your first visit, a banner asks whether you accept non-essential cookies. <strong>Nothing below runs until you accept.</strong> You can change your choice at any time through the Cookie settings link in the footer.</p>
      <ul>
        <li><strong>Google Analytics:</strong> counts visits and shows which pages work.</li>
        <li><strong>Meta Pixel:</strong> tells us which Instagram and Facebook ads bring people who book a call, and lets us show ads to people who visited the site.</li>
        <li><strong>Microsoft Clarity:</strong> heatmaps and session recordings, so we can see where the page is confusing. What you type into the form is masked, so we never see it in the recordings.</li>
        <li><strong>Vimeo:</strong> the video player loads with tracking turned off (do-not-track mode).</li>
      </ul>
      <p>Strictly necessary storage (for example the one that remembers your cookie choice) does not need consent.</p>

      <h2>6. How long we keep it</h2>
      <ul>
        <li><strong>People who booked or filled in the form but did not become clients:</strong> up to 24 months after our last contact, then deleted.</li>
        <li><strong>Clients:</strong> for the length of the work, and invoices for as long as Polish tax law requires.</li>
        <li><strong>Analytics data:</strong> according to each tool&apos;s settings (14 months in Google Analytics).</li>
        <li><strong>Emails:</strong> as long as needed to handle the conversation.</li>
      </ul>

      <h2>7. Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>access the data we hold about you and get a copy</li>
        <li>correct it</li>
        <li>have it deleted</li>
        <li>restrict how we use it</li>
        <li>receive it in a portable format</li>
        <li>object to us using it on the basis of legitimate interest, including follow-ups</li>
        <li>withdraw your consent at any time (this does not affect anything done before you withdrew it)</li>
      </ul>
      <p>To use any of these, email <a href="mailto:przemek@scalebos.net">przemek@scalebos.net</a>. We reply within one month.</p>
      <p>You can also complain to the Polish data protection authority: <strong>Prezes Urzędu Ochrony Danych Osobowych (UODO)</strong>, ul. Stawki 2, 00-193 Warszawa, <a href="https://uodo.gov.pl" target="_blank" rel="noopener">uodo.gov.pl</a>. If you live in another EU country, you can complain to the authority there.</p>

      <h2>8. Children</h2>
      <p>The site and our services are for business owners. We do not knowingly collect data from anyone under 16.</p>

      <h2>9. Changes</h2>
      <p>If we change this policy, we update the date at the top. If the change is significant, we say so on the site. See also our <Link href="/terms">Terms of Service</Link>.</p>
    </LegalPage>
  );
}
