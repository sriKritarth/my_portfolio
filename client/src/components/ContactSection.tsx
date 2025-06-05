import { useState } from "react";
import { Mail, MapPin, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { InsertContactMessage } from "@shared/schema";

export default function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const downloadResume = () => {
    // In a real implementation, this would download the actual resume file
    toast({
      title: "Resume download",
      description: "Resume file not configured. Please add your resume file to the server.",
      variant: "destructive",
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Let's Work Together</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h3>
            <p className="text-slate-600 mb-8">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hello, feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary text-white p-3 rounded-lg mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-slate-800">Email</div>
                  <div className="text-slate-600">oftheleaf.hidden@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary text-white p-3 rounded-lg mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-slate-800">Location</div>
                  <div className="text-slate-600">Kolkata, West Bengal, India</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary text-white p-3 rounded-lg mr-4">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-slate-800">LinkedIn</div>
                  <div className="text-slate-600">linkedin.com/in/kritarth</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                onClick={downloadResume}
                className="bg-primary hover:bg-primary/90"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={4}
                    required
                    className="mt-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
