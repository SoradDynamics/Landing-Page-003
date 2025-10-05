import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, Calendar, MapPin, Bell, BookOpen, 
  MessageSquare, Bot, Zap, Clock 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Animation Variants for Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};


const SaasShowcase = () => {
  const schoolFeatures = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Nepali Calendar Support",
      description: "नेपाली पात्रो अनुसार"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Bus Live Tracking",
      description: "Real-time location tracking"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Notification",
      description: "Send notifications and updates"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Assignment Management",
      description: "Assignments and homework tracking"
    }
  ];

  const chatFeatures = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Powered Conversations",
      description: "Engage customers with intelligent, human-like responses."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Replies",
      description: "Provide immediate answers to common questions, 24/7."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Multi-Platform Support",
      description: "Seamlessly manage conversations on Messenger and Instagram."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-Saving Automation",
      description: "Free up your team to focus on more complex customer needs."
    }
  ];

  return (
    <section id="project" className="py-24 md:py-36 h-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-32 md:space-y-48">

          {/* Chat Flow AI Section */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            // variants={sectionVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3 -translate-x-20 gap-6">
<img src="/chatflow.png" alt=""  width={60} height={60} className=" "/>
                Chat Flow AI
              </h2>
              <p className="text-xl text-gray-600 mb-2 leading-relaxed">
                Automate your social media conversations with the power of AI.
              </p>
              <p className=" text-xl text-gray-600 mb-12  leading-relaxed">
                An intelligent AI SaaS that automatically replies to messages on Facebook Messenger and Instagram, helping you enhance customer engagement and save time.
              </p>
              <div className="grid sm:grid-cols-2 gap-y-8 gap-x-5 mb-8">
                {chatFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="https://chatflow.soraddynamics.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div className="relative" variants={itemVariants}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20 -z-10"></div>
              <Card className="relative bg-white/70 backdrop-blur-sm shadow-2xl rounded-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Conversation Analytics</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">2,500+</div>
                        <div className="text-sm text-gray-600">Messages Handled</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">85%</div>
                        <div className="text-sm text-gray-600">Automation Rate</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">95%</div>
                        <div className="text-sm text-gray-600">Satisfaction</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Active Conversations</span>
                        <span className="text-sm font-semibold text-blue-600">58 Active</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Response Time</span>
                        <span className="text-sm font-semibold text-green-600">Under 1 min</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Leads Generated</span>
                        <span className="text-sm font-semibold text-orange-600">120+</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* School Management System Section */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            // variants={sectionVariants}
          >
             <motion.div className="relative lg:order-2" variants={itemVariants}>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 rounded-3xl blur-3xl opacity-20 -z-10"></div>
              <Card className="relative bg-white/70 backdrop-blur-sm shadow-2xl rounded-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Dashboard Overview</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">1,234</div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                      <div className="text-center p-4 bg-teal-50 rounded-lg">
                        <div className="text-2xl font-bold text-teal-600">56</div>
                        <div className="text-sm text-gray-600">Teachers</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">98%</div>
                        <div className="text-sm text-gray-600">Attendance</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Today's Classes</span>
                        <span className="text-sm font-semibold text-green-600">12 Active</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Bus Status</span>
                        <span className="text-sm font-semibold text-teal-600">All On Route</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Pending Tasks</span>
                        <span className="text-sm font-semibold text-orange-600">5 Items</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div className="lg:order-1" variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-6 w-full -translate-x-20">
                <BookOpen className="w-12 h-12 text-green-600" />
                School Ecosystem
              </h2>
              <p className="text-xl text-gray-600 mb-2 leading-relaxed">
                विद्यालय व्यवस्थापनका लागि एक संपूर्ण समाधान। 
              </p>
              <p className=" text-xl text-gray-600 mb-12  leading-relaxed">
                Complete school management solution designed for Nepali educational institutions with modern features and local customizations.
              </p>
              <div className="grid sm:grid-cols-2 gap-y-8 gap-x-5 mb-8">
                {schoolFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/school-management-system">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SaasShowcase;