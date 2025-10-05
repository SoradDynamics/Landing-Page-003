
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "AI & Machine Learning",
    "Software Development", 
    "SaaS Solutions",
    "IoT & Smart Devices"
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
                            <img src="/Sorad.png" alt="" height={35} width={35} />

              <div>
                <span className="text-2xl font-bold text-gray-900">Sorad Dynamics</span>
                <div className="text-sm text-gray-500">Innovation Partner</div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md">

            प्रविधिको शक्तिले नेपालको भविष्यलाई आकार दिँदै। 
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
             Empowering Nepal's digital 
              transformation through innovative technology solutions that bridge vision and reality.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>soraddynamics@gmail.com</span>
              </div>
             
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-200 hover:bg-blue-600 hover:border-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group shadow-sm"
              >
                <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-200 hover:bg-blue-600 hover:border-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group shadow-sm"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-600 text-sm leading-relaxed block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm">
                &copy; 2024 Sorad Dynamics. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors text-transparent">Privacy Policy</a>
              <a href="/terms-and-conditions" className="text-gray-600 hover:text-blue-600 transition-colors text-transparent">Terms of Service</a>
              <a href="/cancellations-refunds" className="text-gray-600 hover:text-blue-600 transition-colors text-transparent">Refundy</a>
        <a href="/shipping-policy" className="text-gray-600 hover:text-blue-600 transition-colors text-transparent">Shipping</a>
              <a href="/contact-us" className="text-gray-600 hover:text-blue-600 transition-colors text-transparent">Contact</a>
       
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
