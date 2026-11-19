import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import AboutSection from "@/components/sections/About";
import BookingSection from "@/components/sections/Booking";
import FaqSection from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import NumbersSection from "@/components/sections/Numbers";
import { HiddenCost } from "@/components/sections/HiddenCost";
import { HowToFix } from "@/components/sections/HowToFix";
import { Problem } from "@/components/sections/Problem";
import QualificationSection from "@/components/sections/QualificationSection";
import RoadmapSection from "@/components/sections/Roadmap";
import TestimonialsSection from "@/components/sections/Testimonials";
import { WhatYouGet } from "@/components/sections/WhatYouGet";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
      <TestimonialsSection/>
      <Problem/>
      <HiddenCost/>
      <HowToFix/>
      <WhatYouGet/>
      <RoadmapSection/>
      <NumbersSection/>
      <QualificationSection/>
      <AboutSection/>
      <BookingSection/>
      <FaqSection/>
      </main>
      <Footer/>
    </>
  );
}
