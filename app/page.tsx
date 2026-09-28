import { Blog } from "@/components/Blog";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { TestPackage } from "@/components/TestPackage";
import { Trust } from "@/components/Trust";
import { WhyDrivecab } from "@/components/WhyDrivecab";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhyDrivecab />
      <Reviews />
      <Trust />
      <Blog />
      <TestPackage />
      <Faq />
    </main>
  );
}
