import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react';

const Hero = () => {

      const [isVisible, setIsVisible] = useState(false);
    
  return (
    // <div>
  <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
                <span className="text-blue-600 font-semibold text-sm">🚀 Revolutionary School Management</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                School Management
              </span>
              <br />
              <span className="text-gray-800">Software</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              विद्यालय व्यवस्थापनका लागि एक संपूर्ण समाधान। A comprehensive solution designed 
              specifically for Nepali schools with modern features and local customizations.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Request Demo
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300">
                Download Brochure
              </Button>
            </div>

            {/* Visual Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Schools Ready</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    // </div>
  )
}

export default Hero