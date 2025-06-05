import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin } from "lucide-react";

export default function ExperienceSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();

  const experiences = [
    {
      title: "Generative AI Developer",
      company: "Personal Projects & Research",
      duration: "2023 - Present",
      description: "Specialized in Large Language Models and Generative AI applications. Built advanced RAG systems with vector databases for legal document analysis. Implemented custom LLM fine-tuning pipelines and prompt engineering frameworks. Developed context-aware AI assistants with multi-modal capabilities.",
      technologies: ["LLMs", "GPT Models", "RAG", "Prompt Engineering", "Vector DBs"],
    },
    {
      title: "AI Research & Innovation",
      company: "Independent Projects",
      duration: "2023 - Present",
      description: "Led research in generative AI applications focusing on text-to-text and text-to-image models. Developed custom training pipelines for domain-specific LLMs. Implemented efficient retrieval systems using FAISS and ChromaDB. Created AI agents with autonomous reasoning capabilities.",
      technologies: ["LangChain", "Stable Diffusion", "ChromaDB", "FAISS", "Transformers"],
    },
    {
      title: "Computer Science Student",
      company: "MAKAUT, West Bengal",
      duration: "Aug 2023 - Jun 2027",
      description: "Pursuing B.Tech with specialization in AI and Deep Learning. Conducted research on transformer architectures and attention mechanisms. Implemented various generative models including text generation and image synthesis systems. Current CGPA: 8.09",
      technologies: ["Deep Learning", "Neural Networks", "Transformer Models", "PyTorch"],
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/kritarth", label: "LinkedIn" },
    // ...
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
          <h2 className="text-4xl font-bold text-slate-800 mb-4">AI Experience & Education</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My journey in artificial intelligence and Generative AI innovation.
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
                <div className="ml-20 bg-white rounded-xl p-8 shadow-lg w-full hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                    <span className="text-primary font-medium">{exp.duration}</span>
                  </div>
                  <h4 className="text-lg text-slate-600 mb-4">{exp.company}</h4>
                  <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
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
