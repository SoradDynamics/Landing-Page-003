import React from "react";
import { 
  MessageSquare, Users, Bell, Video, Mail, Phone, Calendar, FileText, 
  Heart, Star, Send, CheckCircle, ArrowRight, Shield, Clock,
  GraduationCap, BriefcaseBusiness, Zap 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Ensure animation keyframes are in your global CSS or tailwind.config.js
// (pulse-slow, ping-slow, ping-slower)

const CommunicationSection = () => {
  const stakeholders = [
    {
      id: "teachers",
      title: "Teachers",
      nepali: "शिक्षकहरू",
      icon: <BriefcaseBusiness />,
      color: "from-sky-500 to-blue-600",
      positionClasses: "absolute top-[2%] sm:top-[5%] left-1/2 transform -translate-x-1/2",
      nodeAnchor: { x: 33, y: 20 }, 
      features: ["Student Progress", "Parent Updates", "Class Management"],

      featureLayout: "right" // Point 1: Demonstrate 'above' layout
    },
    {
      id: "students",
      title: "Students",
      nepali: "विद्यार्थीहरू",
      icon: <GraduationCap />,
      color: "from-green-500 to-emerald-600",
      positionClasses: "absolute bottom-[2%] sm:bottom-[5%] left-[5%] sm:left-[10%]",
      nodeAnchor: { x: 20, y: 80 },
      features: ["Assignment Updates", "Live Classes", "Grade Reports"],

      featureLayout: "left"
    },
    {
      id: "parents",
      title: "Parents",
      nepali: "अभिभावकहरू",
      icon: <Heart />,
      color: "from-purple-500 to-fuchsia-600",
      positionClasses: "absolute bottom-[2%] sm:bottom-[5%] right-[5%] sm:right-[10%]",
      nodeAnchor: { x: 80, y: 80 },
      features: ["Child's Progress", "School Updates", "Teacher Communication"],

      featureLayout: "right"
    }
  ];

  const centralHubAnchor = { x: 50, y: 50 };

  return (
    <section id="ecosystem" className="py-24  relative overflow-hidden">
      <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/10 to-pink-200/10 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white backdrop-blur-sm rounded-full shadow-lg mb-8">
              <span className="text-blue-600 font-semibold">💬 Communication Hub</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seamless Communication Bridge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              विद्यार्थी, शिक्षक र अभिभावक बीच निर्बाध संचार व्यवस्था
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
               Creating a unified communication ecosystem for educational excellence.
            </p>
          </div>

          <div className="scroll-animate">
            <Card className="relative bg-white/60 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
              <CardContent className="p-6 sm:p-8 md:p-12">
                {/* <div className="text-center mb-8 md:mb-12">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Communication Ecosystem</h4>
                  <p className="text-gray-600">संचार प्रवाह | Connecting Our School Community</p>
                </div> */}
                
                 {/* May need to slightly increase min-height if 'above' features take more space, especially for the top node */}
                <div className="relative w-full min-h-[500px] sm:min-h-[550px] md:min-h-[650px]">
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative group text-center">
                      <div className="absolute -inset-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse-slow"></div>
                      <div className="w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex flex-col items-center justify-center text-white shadow-2xl relative z-10 p-2">
                        <Zap className="w-10 h-10 md:w-12 md:h-12 mb-1" />
                        <p className="text-xs md:text-sm font-semibold">Our Platform</p>
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-ping-slow opacity-50 group-hover:opacity-75"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping-slower opacity-30 group-hover:opacity-50 m-2.5"></div>
                    </div>
                  </div>

                  {/* Stakeholder Nodes */}
                  {stakeholders.map((stakeholder) => {
                    const IconTitleBlock = (
                      <div className={`flex flex-col items-center text-center flex-shrink-0 
                                     ${stakeholder.featureLayout === 'above' ? 'mt-2' : ''} 
                                     ${stakeholder.featureLayout === 'below' ? 'mb-2' : ''}`}>
                        <div className={`
                          w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${stakeholder.color} 
                          flex items-center justify-center text-white shadow-xl 
                          transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl
                           ${stakeholder.featureLayout === 'above' ? 'mb-0' : 'mb-2'}
                        `}>
                          {React.cloneElement(stakeholder.icon, { className: "w-10 h-10 md:w-12 md:h-12" })}
                        </div>
                        <h5 className="font-bold text-gray-800 text-md md:text-base mb-0.5">{stakeholder.title}</h5>
                        <p className="text-md text-gray-500">{stakeholder.nepali}</p>
                      </div>
                    );

                    const FeaturesBlock = (
                      <div className={`
                        hidden md:flex flex-col space-y-1.5  // Point 3: Hidden on mobile, flex on md+
                        ${stakeholder.featureLayout === 'below' ? 'mt-2 text-center w-full' : ''}
                        ${stakeholder.featureLayout === 'above' ? 'mb-2 text-center w-full' : ''}
                        ${(stakeholder.featureLayout === 'left' || stakeholder.featureLayout === 'right') ? 'text-left mx-3' : ''}
                        max-w-[200px] sm:max-w-[240px] md:max-w-[260px] // Point 2: Increased width
                      `}>
                        {stakeholder.features.map((feature, idx) => (
                          <span key={idx} className="block bg-white/90 px-2.5 py-1.5 rounded-lg text-[10px] sm:text-sm text-gray-700 shadow-sm border border-gray-200/80 truncate hover:whitespace-normal hover:overflow-visible hover:z-30 relative group-hover:shadow-md transition-shadow">
                            {feature}
                          </span>
                        ))}
                      </div>
                    );
                    
                    let layoutClasses = "flex flex-col items-center"; // Default for 'below'
                    let contentOrder = ( // Default order for 'below'
                      <>
                        {IconTitleBlock}
                        {FeaturesBlock}
                      </>
                    );

                    if (stakeholder.featureLayout === 'above') { // Point 1: Handle 'above'
                      layoutClasses = "flex flex-col items-center";
                      contentOrder = (
                        <>
                          {FeaturesBlock}
                          {IconTitleBlock}
                        </>
                      );
                    } else if (stakeholder.featureLayout === 'right') {
                      layoutClasses = "flex flex-row items-center gap-2 sm:gap-3 md:gap-4";
                      // contentOrder remains default (Icon then Features)
                    } else if (stakeholder.featureLayout === 'left') {
                      layoutClasses = "flex flex-row-reverse items-center gap-2 sm:gap-3 md:gap-4";
                       // contentOrder remains default (Icon then Features, but flex-row-reverse handles visual order)
                    }
                    
                    return (
                      <div 
                        key={stakeholder.id} 
                        className={`${stakeholder.positionClasses} z-10 p-2 group 
                                   ${(stakeholder.featureLayout === 'below' || stakeholder.featureLayout === 'above') 
                                      ? 'w-auto min-w-[180px] sm:min-w-[220px] md:min-w-[280px]' // Accommodate wider features
                                      : 'w-auto'}`}
                      >
                        <div className={layoutClasses}>
                          {contentOrder}
                        </div>
                      </div>
                    );
                  })}

                  {/* SVG for Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="flowPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(96, 165, 250, 0.3)" />
                        <stop offset="50%" stopColor="rgba(59, 130, 246, 0.9)" />
                        <stop offset="100%" stopColor="rgba(96, 165, 250, 0.3)" />
                      </linearGradient>
                    </defs>
                    
                    {stakeholders.map((stakeholder, index) => {
                      const P0 = stakeholder.nodeAnchor; 
                      const P1 = centralHubAnchor;     

                      const midX = (P0.x + P1.x) / 2;
                      const midY = (P0.y + P1.y) / 2;
                      
                      const vecX = P1.x - P0.x;
                      const vecY = P1.y - P0.y;

                      let curveFactor = 0.25;
                      if (stakeholder.id === "teachers") { 
                        curveFactor = 0.2; 
                      }
                      
                      const controlX = midX - vecY * curveFactor * (stakeholder.id === 'teachers' ? (index % 2 === 0 ? 1.5 : -1.5) : 1);
                      const controlY = midY + vecX * curveFactor;
                      
                      const pathD = `M ${P0.x},${P0.y} Q ${controlX},${controlY} ${P1.x},${P1.y}`;
                      
                      return (
                        <g key={`path-group-${stakeholder.id}`}>
                          <path
                            d={pathD}
                            stroke="url(#flowPathGradient)"
                            strokeWidth="0.7" 
                            fill="none"
                            className="opacity-70"
                          />
                          <circle r="0.9" fill="#8B5CF6" >
                            <animateMotion dur={`${3 + index * 0.7}s`} repeatCount="indefinite" path={pathD} begin={`${index * 0.5}s`} />
                          </circle>
                           <circle r="0.7" fill="#3B82F6" >
                            <animateMotion dur={`${3.5 + index * 0.6}s`} repeatCount="indefinite" path={pathD} begin={`${1 + index * 0.5}s`} />
                          </circle>
                        </g>
                      );
                    })}
                  </svg>
                </div>
                
                {/* Communication Performance Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-gray-200">
                   <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-green-600 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-2xl md:text-3xl font-bold">100%</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Message Delivery</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-blue-600 mb-2">
                      <Clock className="w-5 h-5" />
                      <span className="text-2xl md:text-3xl font-bold">&lt;3s</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Avg. Response Time</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-purple-600 mb-2">
                      <Star className="w-5 h-5" />
                      <span className="text-2xl md:text-3xl font-bold">24/7</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Platform Availability</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 md:mt-20 scroll-animate">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <CardContent className="p-10 md:p-12 relative">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Bridge the Communication Gap Today
                </h3>
                <p className="text-lg md:text-xl mb-1 opacity-90 max-w-2xl mx-auto">
                  सबै सरोकारवालाहरू बीच प्रभावकारी संचार स्थापना गर्नुहोस्।
                </p>

                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Unite your educational community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg px-8 sm:px-10 py-3 sm:py-4 shadow-xl">
                   <a href="#contact"> Start Connecting Now</a>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 text-lg px-8 sm:px-10 py-3 sm:py-4">
                    View Demo
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationSection;