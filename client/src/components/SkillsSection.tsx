import { Brain, Code, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function SkillsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const skills = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "LangChain", level: "Advanced" },
        { name: "NLP", level: "Advanced" },
        { name: "RAG Pipelines", level: "Advanced" },
        { name: "HuggingFace", level: "Intermediate" },
      ],
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "C++", level: "Advanced" },
        { name: "C", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
      ],
    },
    {
      icon: Database,
      title: "Frameworks & Tools",
      skills: [
        { name: "Flask", level: "Advanced" },
        { name: "Streamlit", level: "Advanced" },
        { name: "FAISS", level: "Intermediate" },
        { name: "Gradio", level: "Intermediate" },
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
