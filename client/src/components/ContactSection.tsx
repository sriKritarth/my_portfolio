import { Mail, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "oftheleaf.hidden@gmail.com",
      link: "mailto:oftheleaf.hidden@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Kolkata, West Bengal, India",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/kritarth-srivastava-44a22a302",
      link: "https://www.linkedin.com/in/kritarth-srivastava-44a22a302/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Feel free to reach out through any of these channels!
          </p>
        </div>

        <div
          ref={contentRef}
          className="max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-slate-600 hover:text-primary transition-colors"
                      >
                        {info.value}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="text-slate-600">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div 
            className={`text-center mt-12 transition-all duration-700 delay-300 ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-slate-600 mb-6">
              Looking forward to connecting with you and discussing potential collaborations!
            </p>
            <a
              href="https://www.linkedin.com/in/kritarth-srivastava-44a22a302/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
