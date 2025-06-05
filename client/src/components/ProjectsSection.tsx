import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProjectsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration features, and comprehensive analytics dashboard.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media management with data visualization, automated reporting, and multi-platform integration capabilities.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Python", "Chart.js", "API Integration"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating exceptional web experiences.
          </p>
        </div>

        <div ref={projectsRef} className="grid lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${
                projectsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{project.title}</h3>
                <p className="text-slate-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="default" className="bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <div
            className={`transition-all duration-700 ${
              projectsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${projects.length * 200}ms` }}
          >
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-8 text-white h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-blue-100 mb-6">
                Check out my GitHub profile for additional projects and contributions to the open-source community.
              </p>
              <Button variant="secondary" className="w-fit">
                <Github className="w-4 h-4 mr-2" />
                View GitHub Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
