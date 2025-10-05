
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 sm:py-20 md:py-28">
    {/* Removed the extra flex flex-col wrapper as section already handles centering */}
  
    {/* Animated background shapes */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Smaller pings, fine as is or slightly adjust delay/duration if needed */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/30 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-400/30 rounded-full animate-ping" style={{ animationDelay: '3s', animationDuration: '3s' }}></div>
      
      {/* Abstract tech shapes - adjust size for smaller screens */}
      <div className="absolute top-1/3 right-[10%] md:right-1/4 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border border-blue-200/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/3 left-[10%] md:left-1/4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border border-purple-200/30 rounded-full animate-pulse"></div>
    </div>
  
    <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Grid: stack on mobile, 2 cols on large. Responsive gap. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 py-16 gap-y-12 md:gap-y-16 gap-x-0 lg:gap-x-16 xl:gap-x-24 items-center">
          
          {/* Left Column */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm text-blue-700 rounded-full text-xs sm:text-sm font-semibold border border-blue-200/50 shadow-sm">
                🚀 Next-Generation Technology Solutions
              </span>
            </div>
            
            {/* Responsive font sizes and margins */}
            <h1 className="text-2xl sm:text-3xl gap-8 flex-row lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 sm:mb-8">
              <span className="bg-gradient-to-r pb-1 flex from-blue-600 via-purple-600 to-blue-800  bg-clip-text text-transparent animate-gradient">
                Innovating
              </span>
              {/* <br /> */}
<span className=" text-[10px] flex text-transparent">dfs</span>
{/* <br /> */}
              <span className="bg-gradient-to-r flex from-blue-600 via-purple-600 to-blue-800  bg-clip-text text-transparent animate-gradient">
                  {/* Innovating */}
              Tomorrow.
              </span>
<span className=" text-[10px] flex text-transparent">dfs</span>
              
              {/* <br /> */}
              <span className="text-gray-900 pb-8">Today.</span>
            </h1>
            
            <div className="space-y-4 mb-8 sm:mb-10">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                प्रविधिको शक्तिले नेपालको भविष्यलाई आकार दिँदै
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Empowering Nepal's digital transformation through cutting-edge software development, 
                AI/ML innovations, IoT solutions, and integrated technology platforms that bridge 
                the gap between vision and reality.
              </p>
            </div>
  
            {/* Buttons: stack on mobile, row on sm+. Responsive padding and gap */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
              >
               <a href="#contact"> Contact Now</a>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* <Button 
                variant="outline" 
                size="lg" 
                className="text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
              >
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                Explore Services
              </Button> */}
            </div>
  
            {/* Stats: 1 col on mobile, 3 cols on sm+. Responsive gap */}
            {/* <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="group">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">100+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="group">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Support Available</div>
              </div>
              <div className="group">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">99.9%</div>
                <div className="text-xs sm:text-sm text-gray-600">System Uptime</div>
              </div>
            </div> */}
          </div>
  
          {/* Right Column */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl transform rotate-6 -inset-2 sm:-inset-4"></div>
              
              {/* Responsive padding for dashboard */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-white/50">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1.5 sm:space-x-2">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">Sorad Dynamics Platform</div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="h-3 sm:h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-2.5 sm:h-3 bg-gray-200 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                      <div className="h-16 sm:h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center group hover:scale-105 transition-transform p-2">
                        <div className="text-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-md sm:rounded-lg mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm"></div>
                          </div>
                          <p className="text-[10px] sm:text-xs text-blue-700">AI Analytics</p>
                        </div>
                      </div>
                      <div className="h-16 sm:h-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center group hover:scale-105 transition-transform p-2">
                        <div className="text-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-md sm:rounded-lg mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                          </div>
                          <p className="text-[10px] sm:text-xs text-purple-700">IoT Control</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-20 sm:h-24 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center mt-3 sm:mt-4 group hover:scale-105 transition-transform p-2">
                      <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                          <Play className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <p className="text-xs sm:text-sm text-green-700 font-medium">Live Demo Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/* Animated scroll hint - adjust bottom position for smaller screens if needed */}
    <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <button
        onClick={scrollToNext}
        className="w-9 h-9 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  </section>
  );
};

export default Hero;
