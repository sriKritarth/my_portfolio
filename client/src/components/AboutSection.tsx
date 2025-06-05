import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, GraduationCap, Brain, GitBranch, Cpu, Terminal, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const skills = {
    "AI & ML": ["LangChain", "RAG", "NLP", "Machine Learning", "LLMs"],
    "Languages": ["Python", "TypeScript", "JavaScript", "SQL"],
    "Technologies": ["React", "Node.js", "Express", "PostgreSQL", "Docker"]
  };

  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI Projects",
      value: "10+",
      description: "End-to-end AI solutions"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "CGPA",
      value: "8.09",
      description: "B.Tech in CSE"
    },
    {
      icon: <Terminal className="w-8 h-8 text-primary" />,
      title: "Tech Stack",
      value: "15+",
      description: "Modern technologies"
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Experience",
      value: "2+ yrs",
      description: "Building AI systems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate AI Developer and Computer Science student, crafting intelligent solutions for real-world challenges.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`space-y-16 transition-all duration-700 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main Content */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-center">
              <p className="text-slate-600 leading-relaxed">
                Currently pursuing my B.Tech in Computer Science Engineering at MAKAUT, West Bengal, 
                where I maintain a strong academic record with a CGPA of 8.09. My journey in technology 
                is driven by a deep fascination with Artificial Intelligence and its potential to transform industries.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I specialize in developing AI-powered applications, with a focus on Large Language Models (LLMs) 
                and Retrieval-Augmented Generation (RAG) systems. My expertise includes building intelligent chatbots, 
                document processing systems, and automated tools that enhance productivity and decision-making.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Technical Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <div
                  key={category}
                  className={`bg-white p-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                    contentVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-semibold text-slate-800 mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights/Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="p-3 bg-primary/10 rounded-lg mb-2">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary">{item.value}</div>
                  <div className="font-medium text-slate-800">{item.title}</div>
                  <div className="text-sm text-slate-600">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
