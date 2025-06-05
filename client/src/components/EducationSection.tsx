import { GraduationCap, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function EducationSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const certifications = [
    { name: "LangChain Expert", year: "2024" },
    { name: "Machine Learning Fundamentals", year: "2024" },
    { name: "NLP Specialization", year: "2023" },
    { name: "Python Programming", year: "2023" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education & Certifications</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Continuous learning and professional development in technology and software engineering.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className={`bg-slate-50 rounded-xl p-8 transition-all duration-700 ${
              cardsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-primary text-3xl mb-4">
              <GraduationCap />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">B.Tech in Computer Science Engineering</h3>
            <h4 className="text-lg text-slate-600 mb-2">MAKAUT, West Bengal</h4>
            <p className="text-primary font-medium mb-4">Aug 2023 - Jun 2027</p>
            <p className="text-slate-600">
              Currently pursuing with CGPA: 8.09. Focused on AI, Machine Learning, Data Structures, 
              Algorithms, and software engineering principles with specialization in Generative AI.
            </p>
          </div>

          <div
            className={`bg-slate-50 rounded-xl p-8 transition-all duration-700 delay-200 ${
              cardsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-primary text-3xl mb-4">
              <Award />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Professional Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between">
                  <span className="text-slate-600">{cert.name}</span>
                  <span className="text-sm text-primary">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
