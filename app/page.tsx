import { Audience } from "@/components/audience";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { WaitlistSection } from "@/components/waitlist-section";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <div id="top" />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Audience />
      <Pricing />
      <Faq />
      <WaitlistSection />
    </main>
  );
}
