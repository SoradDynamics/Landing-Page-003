
import { Shield, Zap, Users, Target, Award, Globe } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Security",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technology stack"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Skilled professionals with years of industry experience"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Built to grow with your business needs and requirements"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes"
    },
    // {
    //   icon: <Globe className="w-6 h-6" />,
    //   title: "Global Standards",
    //   description: "International best practices with local understanding"
    // }
  ];

  // const stats = [
  //   { number: "500+", label: "Projects Completed", color: "text-blue-600" },
  //   { number: "98%", label: "Client Satisfaction", color: "text-green-600" },
  //   { number: "50+", label: "Enterprise Clients", color: "text-purple-600" },
  //   { number: "24/7", label: "Support Available", color: "text-orange-600" }
  // ];

  return (
    <section className="py-32  relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-animate">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200/50">
              ⭐ Why Choose Us
            </div>
            
            <h2 className="text-4xl lg:text-5xl  flex flex-col font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r pb-2 from-blue-600 to-purple-600 bg-clip-text text-transparent block lg:inline">
                Why Partner With Us
              </span>
              <span className="text-gray-800 text-3xl mt-2">
              किन हामीलाई छान्नुहोस् 
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our proven track record of delivering 
              innovative solutions that drive real business results.
            </p>
          </div>

          {/* Stats section
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 scroll-animate">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                  <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div> */}

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 scroll-animate">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Checkmark indicator */}
                  <div className="mt-6 flex items-center text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg> */}
                    {/* <span className="text-sm font-medium">Verified Advantage</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          {/* <div className="mt-20 text-center scroll-animate">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-12 backdrop-blur-sm border border-blue-200/30">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Trusted by Leading Organizations
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our solutions.
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="w-24 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">Client 1</span>
                </div>
                <div className="w-24 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">Client 2</span>
                </div>
                <div className="w-24 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">Client 3</span>
                </div>
                <div className="w-24 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">Client 4</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
