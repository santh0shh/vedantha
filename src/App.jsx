import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ServicesSection from './components/sections/ServicesSection'
import WhyUsSection from './components/sections/WhyUsSection'
import OpportunitiesSection from './components/sections/OpportunitiesSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CtaSection from './components/sections/CtaSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <div className="dark min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <OpportunitiesSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
