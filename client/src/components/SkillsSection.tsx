import { Code, Server, Settings } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function SkillsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" },
      ],
    },
    {
      icon: Settings,
      title: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", level: "Expert" },
        { name: "Docker", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" },
        { name: "Vercel", level: "Advanced" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications from concept to deployment.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory.title}
              className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-700 ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-primary text-3xl mb-4">
                <skillCategory.icon />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{skillCategory.title}</h3>
              <div className="space-y-3">
                {skillCategory.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-slate-600">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
