
import { Brain, Smartphone, Globe, Cog, Users, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Software Development",
      description: "सफ्टवेयर विकास गर्ने र मोबाइल एप्स, वेब एप्लिकेसन निर्माण गर्ने",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SaaS Solutions",
      description: "SaaS आधारित सेवा प्रदान गर्ने र कस्टम सफ्टवेयर समाधान तयार गर्ने",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "कृत्रिम बुद्धिमत्ता, मेसिन लर्निङ तथा डाटा प्रोसेसिङ सम्बन्धी अनुसन्धान",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "IoT Solutions",
      description: "स्मार्ट उपकरण तथा इन्टरनेट अफ थिङ्स समाधान निर्माण गर्ने",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Integrated Solutions",
      description: "हार्डवेयर तथा सफ्टवेयरको एकीकृत समाधान प्रदान गर्ने",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Research & Development",
      description: "नयाँ प्रविधिहरूमा अनुसन्धान र विकास गर्ने",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            हाम्रो सेवाहरू | Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern technology solutions combining global innovation with local understanding, 
            designed to transform Nepal's digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
