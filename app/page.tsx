import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { WhyDrivecab } from "@/components/WhyDrivecab";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhyDrivecab />
      <Reviews />
      <Faq />
    </main>
  );
}
