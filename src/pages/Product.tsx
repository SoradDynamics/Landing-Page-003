import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Bell,
  FileText,
  Camera,
  MessageSquare,
  BarChart3,
  BookOpen,
  Clock,
  Shield,
  Bus,
  Zap,
  Target,
  TrendingUp,
  Star,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/School/Footer";
import CommunicationSection from "@/components/CommunicationSection";
import ContactSection from "@/components/ContactSection";
import Contact from "@/components/Contact";


import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Sorad Dynamics</title>
  <meta name="description" content="School Management System - Sorad Dynamics" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Sorad Dynamics" />
  <meta property="og:image" content="/favicon.ico" />
</Helmet>



const Product = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsVisible(true);

    // Set up intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Unobserve to prevent re-triggering
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    // Observe all animated elements after a short delay
    const timer = setTimeout(() => {
      const animatedElements = document.querySelectorAll(".scroll-animate");
      animatedElements.forEach((el) => {
        observerRef.current?.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, []);

  const keyFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Attendance Management",
      description:
        "उपस्थिति व्यवस्थापन - Smart digital attendance tracking with real-time reporting",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Nepali Calendar Integration",
      description:
        "नेपाली क्यालेन्डर - Full support for Bikram Sambat with festival dates",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Bus Live Tracking",
      description:
        "बस ट्र्याकिङ - Real-time GPS tracking for student transportation safety",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Notification System",
      description: "सूचना प्रणाली - Instant notifications to parents and staff",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const allFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Attendance Management",
      description:
        "हाजिरी व्यवस्थापन",
        details: "Smart digital attendance tracking with real-time reporting",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Nepali Calendar Integration",
      description:
        "नेपाली पात्रो",
        details:  "Full support for Bikram Sambat with festival dates",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Bus Live Tracking",
      description:
        "बस ट्र्याकिङ",
        details: " Real-time GPS tracking for student transportation safety",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Bell className="w-10 h-10" />,
      title: "Notification System",
      description: "सूचना प्रणाली",
      details:
        "Instant SMS and email notifications for parents, teachers, and students about important school events and updates.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Leave Management",
      description: "बिदा व्यवस्थापन",
      details:
        "Streamlined leave application process for students and staff with approval workflows and automatic record keeping.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Customizable Nepali Calendar",
      description: "नेपाली पात्रो",
      details:
        "Full Bikram Sambat calendar integration with national holidays, local festivals, and custom school events.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Exam Management & Results",
      description: "परीक्षा व्यवस्थापन",
      details:
        "Complete exam scheduling, grade management, report card generation, and result publishing system.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Bus Live Location Tracking",
      description: "बस ट्र्याकिङ",
      details:
        "Real-time GPS tracking of school buses with route optimization, safety alerts, and parent notifications.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Assignments",
      description: "गृहकार्य",
      details:
        "Digital assignment distribution, submission tracking, and automated grading with plagiarism detection.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Lesson Planning",
      description: "पाठ योजना",
      details:
        "Comprehensive lesson planning tools with curriculum mapping, resource sharing, and progress tracking.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Photo Gallery",
      description: "फोटो ग्यालेरी",
      details:
        "Secure photo and video sharing for school events, achievements, and daily activities with privacy controls.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Study Notes",
      description: "अध्ययन सामग्री",
      details:
        "Centralized digital library for study materials, notes, and educational resources with search functionality.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Student Feedback",
      description: "विद्यार्थी प्रतिक्रिया",
      details:
        "Anonymous feedback system for continuous improvement with sentiment analysis and actionable insights.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Library Management",
      description: "पुस्तकालय व्यवस्थापन",
      details:
        "Complete library automation with book cataloging, issue/return tracking, and fine management.",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Class Routine",
      description: "कक्षा तालिका",
      details:
        "Dynamic timetable management with conflict detection, substitute teacher assignments, and real-time updates.",
      color: "from-rose-500 to-rose-600",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Streamlined Operations",
      description:
        "विद्यालय संचालन सुव्यवस्थित - Reduce administrative workload by 70%",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Enhanced Communication",
      description:
        "संचार सुधार - Better parent-school communication and engagement",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data-Driven Decisions",
      description:
        "डाटा आधारित निर्णय - Make informed decisions with comprehensive analytics",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Cost Effective",
      description:
        "लागत प्रभावी - Significant reduction in paper-based processes",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/50 via-indigo-100/50 to-purple-100/50">
      {/* <Navbar /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div> */}

      {/* Hero Section */}
      <section  id='hero' className="min-h-screen flex items-center justify-center -20 relative overflow-hidden py-24">
        <div className="container mx-auto px-6 relative z-10">
          {/* NEW: Flex container for responsive two-column layout */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-16 xl:gap-24">
            {/* Left Column: Text Content, Buttons, and Visual Stats */}
            <div
              className={`flex-1 text-center lg:text-left transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
                  <span className="text-blue-600 font-semibold text-sm">
                    🚀 Revolutionary School Management
                  </span>
                </div>
              </div>

              <h1 className="text-4 xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight lg:max-w-none lg:mx-0">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  School Management
                </span>
                <br />
                <span className="text-gray-800">System</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-2 leading-relaxed max-w-3xl mx-auto lg:max-w-none lg:mx-0">
                विद्यालय व्यवस्थापनका लागि एक संपूर्ण समाधान।{" "}
              </p>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto lg:max-w-none lg:mx-0">
                A comprehensive solution designed specifically for Nepali
                schools with modern features and local customizations.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start transform transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                                 <a href="#contact"> Contact Now</a>

                  <ArrowRight className="ml-2" size={20} href="#contact" />
                </Button>

                <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-4 border-2 hover:bg-gray-50/80 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                    onClick={() => window.open('#blank', '_blank')}
                    >
                    <img src="/play.png" height='27' width='27' />

                    Demo
                    {/* <PlayCircleIcon size={40} className="text-blue-600" /> */}
                    </Button>
                {/* <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300">
            Download Brochure
          </Button> */}
              </div>

              {/* Visual Stats */}
              <div className="grid grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto lg:mx-0">
                {/* <div className="text-center"> */}
                {/* <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div> */}
                {/* <div className="text-gray-600">Schools Ready</div> */}
                {/* </div> */}
                {/* <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div> */}
              </div>
            </div>{" "}
            {/* End of Left Column */}
            {/* Right Column: Mockup */}
            <div
              className={`flex-1 flex justify-center lg:justify-end mt-16 lg:mt-0 transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[400px]">
                {" "}
                {/* Responsive width control for mockup */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
                  <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Play className="text-white" size={24} />{" "}
                            {/* Ensure 'Play' icon is imported */}
                          </div>
                          <p className="text-gray-600">
                            School Management Dashboard
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-8 bg-blue-100 rounded"></div>
                        <div className="h-8 bg-purple-100 rounded"></div>
                        <div className="h-8 bg-green-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End of Right Column (Mockup) */}
          </div>
        </div>
      </section>

      {/* Product Overview with Visual Elements */}
      <section id="overview" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 "></div>

        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="scroll-animate">
                <div className="inline-flex items-center px-4 py-2 rounded-full mb-6">
                  <span className="text-blue-600 font-semibold text-sm">
                    ✨ Complete Solution
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Overview
                </h2>

                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Our software integrates all aspects of school management into
                  one unified platform. From student enrollment to graduation,
                  manage everything efficiently with features tailored for
                  Nepali educational institutions.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 bg-gradient-to-r from-gray-50 to-transparent p-4 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300`}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="scroll-animate relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
                <Card className="relative bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                  <CardContent className="p-10">
                    <div className="space-y-8">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-900">
                          Live Overview Preview
                        </h3>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-200"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 cursor-pointer">
                          <div className="text-4xl font-bold text-blue-600 mb-2">
                            1,234
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            Total Students
                          </div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 cursor-pointer">
                          <div className="text-4xl font-bold text-purple-600 mb-2">
                            56
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            Teachers
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="font-bold text-green-700">
                                Today's Attendance
                              </span>
                            </div>
                            <span className="text-3xl font-bold text-green-600">
                              96.5%
                            </span>
                          </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                              <span className="font-bold text-blue-700">
                                Active Buses
                              </span>
                            </div>
                            <span className="text-xl font-bold text-blue-600">
                              12/12 Live
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Overview with Enhanced Visuals */}

      {/* Complete Features Grid with Enhanced Design */}
      <section id="features" className="py-24  relative">
        <div className="container mx-auto px-6">
          <div className="scroll-animate text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-8">
              <span className="text-blue-600 font-semibold">
                🌟 Complete Features
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
              Complete Features
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              सम्पूर्ण विशेषताहरू
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive feature set designed to transform your school
              management experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-white/40 overflow-hidden scroll-animate relative rounded-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50/40 to-transparent rounded-full -mr-16 -mt-16 blur-2xl"></div>

                <CardContent className="p-8 relative justify-center flex flex-col items-center text-center">
                  <div
                    className={`w-16   h-16 rounded-3xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>

                  <p className="text-blue-600 font-semibold mb-4 text-xl">
                    {feature.description}
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.details}
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      Ready to use
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-32 text-center">
            <div className="scroll-animate inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <span className="text-blue-600 font-semibold">
                🔔 New Features Coming Soon
              </span>
            </div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are constantly working on new features. 
            </p>
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <CommunicationSection />

      {/* Why Choose Section with Graphics */}
      <section className="py-24 relative overflow-hidden">
        {/* <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div> */}

        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="scroll-animate mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8">
                <span className="text-blue-600 font-semibold">
                  🏆 Why Choose Us
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Solution?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center scroll-animate">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl hover:scale-110 transition-all duration-300">
                    <Shield className="w-12 h-12" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Secure & Reliable
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Enterprise-grade security with 99.9% uptime guarantee. Your
                  data is always safe and accessible.
                </p>
              </div>

              <div className="text-center scroll-animate">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl hover:scale-110 transition-all duration-300">
                    <Users className="w-12 h-12" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  User Friendly
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Intuitive design that anyone can use without extensive
                  training. Get started in minutes.
                </p>
              </div>

              <div className="text-center scroll-animate">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl hover:scale-110 transition-all duration-300">
                    <Clock className="w-12 h-12" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  24/7 Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock technical support in Nepali and English. We're
                  here when you need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <ContactSection /> */}
      <Contact/>

      {/* CTA Section */}
        {/* <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <pattern
                  id="pattern"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="30" cy="30" r="2" fill="white" fillOpacity="0.1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-6 text-center relative">
            <div className="scroll-animate max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Transform Your School?
              </h2>
              <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
                Join the digital revolution in education. Schedule a demo today
                and see how Sorad Dynamics can streamline your school operations.
              </p>
              <div className="flex flex-col   sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg px-10 py-4 shadow-xl"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 text-lg px-10 py-4"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section> */}

      <Footer />
    </div>
  );
};

<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://soraddynamics.com",
    "@type": "Organization",
    name: "Sorad Dynamics",
    url: "https://soraddynamics.com"
  })}
</script>


export default Product;
