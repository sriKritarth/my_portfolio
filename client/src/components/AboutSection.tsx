import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
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
            Passionate developer with expertise in modern web technologies and a love for creating exceptional user experiences.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 delay-200 ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern web development environment with code on screen"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div
            ref={contentRef}
            className={`transition-all duration-700 delay-400 ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Building Digital Experiences</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating scalable,
              maintainable applications using modern technologies. I'm passionate about writing clean code,
              following best practices, and staying up-to-date with the latest industry trends.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, learning new technologies,
              or sharing knowledge with the developer community through blogs and tutorials.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
