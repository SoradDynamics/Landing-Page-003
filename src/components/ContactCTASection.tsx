
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactCTASection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-soft-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-soft-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
              <span className="text-white font-semibold">📞 Let's Connect</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Start Your
              <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Digital Journey?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-12 max-w-3xl mx-auto">
              हामीसँग सम्पर्क गर्नुहोस् | Transform your vision into reality with our 
              expert technology solutions. Let's build something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-lg px-10 py-4 shadow-xl group"
              >
                <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/50 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg px-10 py-4 backdrop-blur-sm group"
              >
                <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Schedule Call
              </Button>
            </div>

            {/* Contact info cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-blue-200 text-sm">contact@soraddynamics.com</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-blue-200 text-sm">+977-9800000000</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-200 text-sm">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
