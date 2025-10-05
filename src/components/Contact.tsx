// Code B - Updated for Small, Clickable Cards, No Business Hours, Modern Design
import React from 'react';
import { Facebook, Linkedin, Mail, Phone, MessageCircle, ExternalLink } from "lucide-react"; // Added ExternalLink
// Card and CardContent might not be strictly needed if we simplify enough, but can keep for structure
import { Card, CardContent } from "@/components/ui/card"; // Adjust path if necessary

const Contact = () => {
  const contactMethodsData = [
    {
      icon: <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />,
      title: "Email Us",
      contactInfo: "soraddynamics@gmail.com",
      color: "bg-gradient-to-br from-green-500 to-emerald-600", // Background color
      hoverColor: "hover:from-green-600 hover:to-emerald-700", // Hover for gradient change
      textColor: "text-white",
      actionLink: "mailto:soraddynamics@gmail.com",
    },
    {
      icon: <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />,
      title: "Facebook",
      contactInfo: "@SoradDynamics",
      color: "bg-gradient-to-br from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
      textColor: "text-white",
      actionLink: "https://www.facebook.com/profile.php?id=61569291325991",
    },
    {
      icon: <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />,
      title: "LinkedIn",
      contactInfo: "Sorad Dynamics",
      color: "bg-gradient-to-br from-sky-600 to-indigo-700",
      hoverColor: "hover:from-sky-700 hover:to-indigo-800",
      textColor: "text-white",
      actionLink: "https://np.linkedin.com/in/sorad-dynamics-a84087346",
    },
    // {
    //   icon: <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />,
    //   title: "Call Us",
    //   contactInfo: "+977-98X XXX XXXX",
    //   color: "bg-gradient-to-br from-purple-500 to-violet-600",
    //   hoverColor: "hover:from-purple-600 hover:to-violet-700",
    //   textColor: "text-white",
    //   actionLink: "tel:+9779800000000",
    // }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-100 relative overflow-hidden"> {/* Lighter background */}
      {/* Subtle Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-80"></div>
      <div className="absolute top-10 right-5 md:right-10 w-40 h-40 md:w-60 md:h-60 bg-blue-200/20 rounded-full blur-2xl -z-0 opacity-50"></div>
      <div className="absolute bottom-10 left-5 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-purple-200/20 rounded-full blur-2xl -z-0 opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md mb-5 ring-1 ring-slate-200">
            <MessageCircle className="w-4 h-4 text-blue-500 mr-1.5" />
            <span className="text-blue-500 font-medium text-xs sm:text-sm">Get in Touch</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
            Let's Connect
          </h1>
          <p className="text-md sm:text-lg text-slate-600 max-w-xl mx-auto">
            Have questions or a project in mind? We're here to help.
          </p>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
  
          {/* Image Column */}
          <div className="order-last lg:order-first flex justify-center lg:sticky lg:top-24 max-h-[500px] lg:max-h-none">
             {/* Wrapper to control image height better relative to cards */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:self-stretch">
                <img 
                src='/contact.png' 
                alt="Contact illustration with communication icons"
                className=" object-contain rounded-xl" 
                // For a more fixed height approach on image, if cards have a more fixed total height:
                // className="w-full h-[400px] md:h-[450px] lg:h-full object-cover rounded-xl" 
                />
            </div>
          </div>
  
          {/* Contact Methods Column */}
          <div className="lg:col-span-1">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-6 text-center lg:text-left">
              Reach Out Directly
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 pr-6 sm:grid-cols-2 gap-4 md:gap-4">
              {contactMethodsData.map((method) => (
                <a
                  key={method.title}
                  href={method.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 ${method.color} ${method.hoverColor} ${method.textColor}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white/20 rounded-lg">
                      {method.icon}
                    </div>
                    <div className='text-center pr-6'>
                      <h3 className="text-lg font-semibold tracking-wide">{method.title}</h3>
                      <p className="text-md opacity-90 break-words">{method.contactInfo}</p>
                    </div>
                    {!(method.actionLink.startsWith('mailto:') || method.actionLink.startsWith('tel:')) && (
                      <ExternalLink className="w-3 h-3 opacity-70 absolute top-2.5 right-2.5 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;