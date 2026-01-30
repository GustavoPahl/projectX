import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  )
}
