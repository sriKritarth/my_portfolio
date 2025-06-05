import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ExperienceSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Corp",
      duration: "2022 - Present",
      description: "Led development of multiple high-traffic web applications, mentored junior developers, and implemented modern development practices that improved team productivity by 40%.",
      technologies: ["React", "Node.js", "AWS", "Team Leadership"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      duration: "2020 - 2022",
      description: "Developed and maintained scalable web applications serving 100k+ users, optimized database performance, and collaborated with cross-functional teams.",
      technologies: ["JavaScript", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Studio",
      duration: "2019 - 2020",
      description: "Built responsive websites and web applications using modern frontend frameworks, worked closely with designers to implement pixel-perfect UI/UX designs.",
      technologies: ["HTML/CSS", "Vue.js", "SASS", "UI/UX"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey in building exceptional digital experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto" ref={timelineRef}>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-start mb-12 transition-all duration-700 ${
                  timelineVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-20 bg-white rounded-xl p-8 shadow-lg w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                    <span className="text-primary font-medium">{exp.duration}</span>
                  </div>
                  <h4 className="text-lg text-slate-600 mb-4">{exp.company}</h4>
                  <p className="text-slate-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
