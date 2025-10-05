
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactCTASection from "@/components/ContactCTASection";
import ProductShowcase from "@/components/ProductShowcase";
import Contact from "@/components/Contact";

import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Sorad Dynamics</title>
  <meta name="description" content="Sorad Dynamics - Empowering Future with Technology" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Sorad Dynamics" />
  <meta property="og:image" content="/favicon.ico" />
</Helmet>

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Enhanced scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('animate-fade-in-up');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    // Observe all scroll-animate elements
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    // Show/hide scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-soft-pulse"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-br from-green-200/15 to-blue-200/15 rounded-full blur-3xl animate-soft-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-200/10 to-pink-200/10 rounded-full blur-3xl animate-soft-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <Navbar />
      <Hero />
      {/* <AboutSection /> */}
      <ServicesSection />
      <ProductShowcase />
      <WhyChooseUsSection />
      {/* <ContactCTASection /> */}
      <Contact/>
      <Footer />
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white/80 backdrop-blur-sm text-blue-600 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg border border-blue-100/50 rounded-full flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      )}
    </div>
  );
};


<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://soraddynamics.com",
    "@type": "Organization",
    name: "Sorad Dynamics",
    url: "https://soraddynamics.com"
  })}
</script>

export default Index;
