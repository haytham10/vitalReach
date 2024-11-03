import Navbar from './components/Layout/Navbar';
import HeroSection from './components/Home/Hero/HeroSection';
import ServicesSection from './components/Home/Services/ServicesSection';
import PricingSection from './components/Home/Pricing/PricingSection';
import TestimonialsSection from './components/Home/Testimonials/TestimonialsSection';
import ContactSection from './components/Home/Contact/ContactSection';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
	  <ServicesSection />
	  <PricingSection />
	  <TestimonialsSection />
	  <ContactSection />
	  <Footer />
    </div>
  );
}

export default App;