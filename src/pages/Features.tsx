
import { useState, useEffect } from "react";
import { Calendar, MapPin, Users, Bell, FileText, Camera, MessageSquare, BarChart3, BookOpen, Clock, Shield, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Attendance Management",
      description: "उपस्थिति व्यवस्थापन",
      details: "Digital attendance tracking with biometric integration, real-time reporting, and automated parent notifications.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Bell className="w-10 h-10" />,
      title: "Notification System", 
      description: "सूचना प्रणाली",
      details: "Instant SMS and email notifications for parents, teachers, and students about important school events and updates.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Leave Management",
      description: "बिदा व्यवस्थापन",
      details: "Streamlined leave application process for students and staff with approval workflows and automatic record keeping.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Customizable Nepali Calendar",
      description: "नेपाली पात्रो",
      details: "Full Bikram Sambat calendar integration with national holidays, local festivals, and custom school events.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Exam Management & Results",
      description: "परीक्षा व्यवस्थापन",
      details: "Complete exam scheduling, grade management, report card generation, and result publishing system.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Bus Live Location Tracking",
      description: "बस ट्र्याकिङ",
      details: "Real-time GPS tracking of school buses with route optimization, safety alerts, and parent notifications.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Assignments",
      description: "गृहकार्य",
      details: "Digital assignment distribution, submission tracking, and automated grading with plagiarism detection.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Lesson Planning",
      description: "पाठ योजना",
      details: "Comprehensive lesson planning tools with curriculum mapping, resource sharing, and progress tracking.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Photo Gallery",
      description: "फोटो ग्यालेरी",
      details: "Secure photo and video sharing for school events, achievements, and daily activities with privacy controls.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Study Notes",
      description: "अध्ययन सामग्री",
      details: "Centralized digital library for study materials, notes, and educational resources with search functionality.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Student Feedback",
      description: "विद्यार्थी प्रतिक्रिया",
      details: "Anonymous feedback system for continuous improvement with sentiment analysis and actionable insights.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Library Management",
      description: "पुस्तकालय व्यवस्थापन",
      details: "Complete library automation with book cataloging, issue/return tracking, and fine management.",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Class Routine",
      description: "कक्षा तालिका",
      details: "Dynamic timetable management with conflict detection, substitute teacher assignments, and real-time updates.",
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Interactive Dashboard",
      description: "इन्टरएक्टिभ ड्यासबोर्ड",
      details: "Comprehensive analytics dashboard with customizable widgets, performance metrics, and data visualization.",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              सम्पूर्ण विशेषताहरू | Complete Features
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover all the powerful features designed to transform your school management 
              experience. Each feature is crafted with Nepal's educational context in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-8">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-blue-600 font-medium mb-4">
                    {feature.description}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Why Choose Our Solution?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`text-center transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee</p>
              </div>
              
              <div className={`text-center transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">User Friendly</h3>
                <p className="text-gray-600">Intuitive design that anyone can use without extensive training</p>
              </div>
              
              <div className={`text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock technical support in Nepali and English</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
