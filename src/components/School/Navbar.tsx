
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Overview', href: '#overview' },
    { name: 'Features', href: '#features' },
    { name: 'Ecosystem', href: '#ecosystem' }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className={`flex items-center space-x-3 group ${
      scrolled 
        ? ' backdrop-blur-md px-6 bg-blue-50/50 py-2 rounded-full mt-3 shadow-lg ' 
        : ' backdrop-blur-sm'
    }`}>
            <div className="w-10 h-10  rounded-xl flex items-center justify-center  group-hover:scale-110 transition-transform duration-300">
              {/* <span className="text-white font-bold text-lg">S</span> */}

              <img src="/Sorad.png" alt="" height={35} width={35} />

            </div>
            <div className="flex">
              <img src="/name.png" height={50} width={180} alt="" />
              {/* <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors"></span> */}
              {/* <span className="text-xs text-gray-500 -mt-1">Innovation Partner</span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 ${
      scrolled 
        ? ' backdrop-blur-md px-6 py-3 bg-blue-50/50 rounded-full mt-3 shadow-lg ' 
        : ' backdrop-blur-sm'
    }`}>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            {/* <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Demo
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-white/20 bg-white/90 backdrop-blur-md rounded-b-2xl mt-2 shadow-xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  {link.name}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
