import { HeroSection } from "@/components/blocks/hero-section-5";
import Component from "@/components/ui/saa-s-template";

export const metadata = {
  title: "Dr Schaida Schirwani | Consultant Clinical Geneticist",
  description: "Private genetics practice specialising in neurodevelopmental disorders, rare diseases, and prenatal genetics. Book a consultation in London or via video.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-slate-900 focus:rounded-b-md">Skip to main content</a>
      <HeroSection />
      <div id="main-content"><Component /></div>
    </div>
  );
}
