
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github, GraduationCap, Building2, Smartphone, Brain, Calendar, Users } from "lucide-react";

const ProjectsSection = () => {
  const allProjects = [
    {
      title: "School Management System",
      description: "Comprehensive school management platform with student information system and parent portal.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      status: "In Development",
      icon: <GraduationCap className="w-8 h-8" />,
      progress: 75,
      type: "current",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Enterprise SaaS Platform",
      description: "Multi-tenant business management solution with CRM and analytics dashboard.",
      technologies: ["Next.js", "MongoDB", "AWS"],
      status: "Beta Testing",
      icon: <Building2 className="w-8 h-8" />,
      progress: 90,
      type: "current",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "IoT Smart City Solution",
      description: "Integrated IoT platform for smart city infrastructure monitoring and management.",
      technologies: ["Python", "IoT Sensors", "AWS IoT"],
      status: "Development",
      icon: <Smartphone className="w-8 h-8" />,
      progress: 60,
      type: "current",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      title: "AI Healthcare Platform",
      description: "Machine learning platform for medical diagnosis assistance and patient care optimization.",
      technologies: ["Python", "TensorFlow", "FastAPI"],
      status: "Q2 2025",
      icon: <Brain className="w-8 h-8" />,
      type: "future",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      title: "Blockchain Supply Chain",
      description: "Decentralized supply chain management with transparency and traceability features.",
      technologies: ["Solidity", "Web3", "Node.js"],
      status: "Q3 2025",
      icon: <Building2 className="w-8 h-8" />,
      type: "future",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      title: "VR Training Platform",
      description: "VR-based training platform for technical education and skill development.",
      technologies: ["Unity", "C#", "VR SDK"],
      status: "Q4 2025",
      icon: <Users className="w-8 h-8" />,
      type: "future",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our innovative solutions that are transforming businesses and communities
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="scroll-animate">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allProjects.map((project, index) => (
                <CarouselItem key={project.title} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group h-full hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 hover:-translate-y-2 bg-white/95 backdrop-blur-sm border border-gray-200/50 hover:border-white overflow-hidden relative">
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${project.gradient} opacity-20 blur-sm`}></div>
                    </div>

                    <CardHeader className="text-center pb-4 relative z-10">
                      {/* Icon with animated background */}
                      <div className="flex justify-center mb-4">
                        <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                          <div className="absolute inset-0 rounded-2xl bg-white/20 group-hover:bg-white/30 transition-colors duration-300"></div>
                          <div className="relative text-white">
                            {project.icon}
                          </div>
                          {/* Pulse animation */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} animate-ping opacity-20 group-hover:opacity-40`}></div>
                        </div>
                      </div>

                      {/* Status badge */}
                      <div className="flex justify-center mb-3">
                        <Badge 
                          variant="secondary" 
                          className={`text-xs font-medium px-3 py-1 ${
                            project.type === "current" 
                              ? project.status === "Beta Testing" 
                                ? "bg-emerald-100 text-emerald-700 border-emerald-200" 
                                : "bg-blue-100 text-blue-700 border-blue-200"
                              : "bg-purple-100 text-purple-700 border-purple-200"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>

                      <CardTitle className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-500 leading-tight">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed mt-2 group-hover:text-gray-700 transition-colors duration-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 pt-0 relative z-10">
                      {/* Progress Bar for Current Projects */}
                      {project.type === "current" && project.progress && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-500 font-medium">Progress</span>
                            <span className={`font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                              {project.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`bg-gradient-to-r ${project.gradient} h-2 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs px-2 py-1 hover:bg-gray-50 transition-colors border-gray-300 font-medium">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs px-2 py-1 text-gray-500 border-gray-300">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      {project.type === "current" && (
                        <div className="flex space-x-2 pt-2">
                          <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs font-medium`}>
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                          <Button size="sm" variant="outline" className="hover:bg-gray-50 transition-colors border-gray-300 hover:border-gray-400">
                            <Github className="w-3 h-3" />
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-white/90 backdrop-blur-sm hover:bg-white border-gray-200 text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300" />
            <CarouselNext className="hidden md:flex -right-4 bg-white/90 backdrop-blur-sm hover:bg-white border-gray-200 text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300" />
          </Carousel>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 scroll-animate">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 group">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">Have a Project in Mind?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto group-hover:text-gray-700 transition-colors">
              Let's collaborate to bring your innovative ideas to life with cutting-edge technology solutions.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
