
import { Brain, Smartphone, Globe, Database, Cog, Users, Code, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "कृत्रिम बुद्धिमत्ता र मेसिन लर्निङ समाधान",
      details: "Advanced AI solutions for intelligent automation",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      neonColor: "shadow-blue-500/50",
      delay: "0s"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "व्यापारिक सफ्टवेयर र एप्लिकेसन निर्माण",
      details: "Custom software tailored to your business needs",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      neonColor: "shadow-purple-500/50",
      delay: "0.1s"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SaaS Solutions",
      description: "क्लाउड-आधारित सेवा प्लेटफर्म",
      details: "Scalable cloud-based software solutions",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      neonColor: "shadow-green-500/50",
      delay: "0.2s"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile & Web Apps",
      description: "मोबाइल र वेब एप्लिकेसन डेभलपमेन्ट",
      details: "Cross-platform mobile and web applications",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      neonColor: "shadow-orange-500/50",
      delay: "0.3s"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Processing & Analytics",
      description: "डाटा प्रशोधन र विश्लेषण सेवा",
      details: "Transform raw data into actionable insights",
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100",
      neonColor: "shadow-teal-500/50",
      delay: "0.4s"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "IoT & Smart Devices",
      description: "स्मार्ट उपकरण र IoT समाधान",
      details: "Connected devices and intelligent systems",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      neonColor: "shadow-indigo-500/50",
      delay: "0.5s"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Integrated Solutions",
      description: "एकीकृत हार्डवेयर-सफ्टवेयर समाधान",
      details: "Seamless hardware-software integration",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      neonColor: "shadow-pink-500/50",
      delay: "0.6s"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Research & Innovation",
      description: "अनुसन्धान र नवाचार केन्द्र",
      details: "Cutting-edge technology research and development",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100",
      neonColor: "shadow-yellow-500/50",
      delay: "0.7s"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/30 to-transparent rounded-full blur-3xl animate-soft-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl animate-soft-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header with scroll animation */}
          <div className="text-center mb-20 scroll-animate opacity-0 translate-y-8 transition-all duration-800 ease-out">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-lg">
              <span className="animate-pulse mr-2">🛠️</span>
              Our Expertise
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Services & Solutions
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              हाम्रो विशेषज्ञता | Comprehensive technology solutions designed to accelerate 
              your digital transformation journey with cutting-edge innovation.
            </p>
          </div>

          {/* Services grid with enhanced animations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 place gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-${service.neonColor} hover:-translate-y-6 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative`}
                style={{ 
                  animationDelay: service.delay,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Neon glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                
                <CardContent className="p-8 relative z-20 flex items-center justify-center flex-col">
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-20 flex items-center justify-center flex-col text-center">
                  {/* <div className="relative z-20 flex-col "> */}
                    {/* Icon with enhanced animations */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:${service.neonColor}`}>
                      <div className="group-hover:animate-bounce transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-blue-600 font-medium mb-3 text-sm group-hover:text-blue-700 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                      {service.details}
                    </p>

                    {/* Enhanced hover effect indicator */}
                    <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      {/* <span className="text-sm font-medium">Learn More</span> */}
                      {/* <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
