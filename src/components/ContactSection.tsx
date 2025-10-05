
import { Facebook, Linkedin, Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Facebook className="w-8 h-8" />,
      title: "Facebook",
      description: "फेसबुकमा हामीसँग जोडिनुहोस्",
      details: "Latest updates and community",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: "LinkedIn",
      description: "व्यावसायिक सञ्जालमा जोडिनुहोस्",
      details: "Professional networking",
      color: "from-blue-700 to-indigo-600",
      hoverColor: "hover:from-blue-800 hover:to-indigo-700"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "contact@soraddynamics.com",
      details: "Direct communication",
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:from-green-600 hover:to-emerald-600"
    },
    // {
    //   icon: <Phone className="w-8 h-8" />,
    //   title: "Phone",
    //   description: "+977-9800000000",
    //   details: "Instant support",
    //   color: "from-purple-500 to-purple-600",
    //   hoverColor: "hover:from-purple-600 hover:to-purple-700"
    // }
  ];

  const businessHours = [
    { day: "Sunday - Thursday", time: "9:00 AM - 6:00 PM" },
    { day: "Friday", time: "9:00 AM - 5:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-animate">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-8 shadow-lg">
              <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold">सम्पर्क गर्नुहोस् | Get in Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Let's Connect &
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Build Together
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              तपाईंको विद्यालयको डिजिटल यात्रा सुरु गर्न हामीसँग सम्पर्क गर्नुहोस्। 
              Ready to transform your educational institution? We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Contact Methods */}
            <div className="scroll-animate">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Multiple Ways to Reach Us
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index} 
                    className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-gradient-to-br ${method.color} ${method.hoverColor} cursor-pointer`}
                  >
                    <CardContent className="p-8 text-center text-white">
                      <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                        {method.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-2">{method.title}</h4>
                      <p className="text-white/90 font-medium mb-2">{method.description}</p>
                      <p className="text-white/80 text-sm">{method.details}</p>
                      
                      <div className="mt-6 pt-4 border-t border-white/20">
                        <Button 
                          variant="ghost" 
                          className="text-white hover:bg-white/20 transition-all duration-300 w-full"
                        >
                          Connect Now
                          <Send className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Info & Hours */}
            <div className="scroll-animate space-y-8">
              {/* Location Card */}
              {/* <Card className="bg-gradient-to-br from-gray-50 to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Our Location</h4>
                      <p className="text-lg text-gray-600 mb-2">Kathmandu, Nepal</p>
                      <p className="text-blue-600 font-medium">हाम्रो कार्यालय</p>
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        Visit us at our headquarters in the heart of Kathmandu. 
                        We're always excited to meet with educational institutions 
                        looking to embrace digital transformation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              {/* Business Hours */}
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <Clock className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Business Hours</h4>
                      <p className="text-purple-600 font-medium mb-4">कार्यालय समय</p>
                      
                      <div className="space-y-3">
                        {businessHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between items-center py-2 px-4 bg-white/60 rounded-lg">
                            <span className="font-medium text-gray-700">{schedule.day}</span>
                            <span className="text-purple-600 font-semibold">{schedule.time}</span>
                          </div>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 mt-4 text-sm">
                        Available for emergency support 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          {/* <div className="text-center scroll-animate">
            <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 border-0 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40"></div>
              
              <CardContent className="p-16 relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Get Started?
                </h3>
                <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  आज नै हामीसँग सम्पर्क गर्नुहोस् र आफ्नो विद्यालयको डिजिटल यात्रा सुरु गर्नुहोस्।
                  Let's discuss how we can transform your educational institution.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg px-12 py-4 shadow-xl font-semibold"
                  >
                    Schedule Demo
                    <MessageCircle className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 text-lg px-12 py-4 font-semibold"
                  >
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
