import { useState, useRef } from "react";
import { Mail, Linkedin, Github, Award, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";   // <-- added this

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);  // <-- added a reference for EmailJS

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_a8icrwf",      // <-- replace
        "template_wkoubzd",     // <-- replace
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "vHSgv0QcPw3R7uxvi"       // <-- replace
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... rest of your component stays EXACTLY the same ...

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/mubasher142",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mubashir-rasool-b39971324/",
    },
    {
      icon: Award,
      label: "Kaggle",
      url: "https://www.kaggle.com/mubasher1321",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mubasher1319@gmail.com.com",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-foreground/70">
            Have a question or want to collaborate? I'd love to hear from you. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send me a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Connect with me</h2>

              {/* Email info */}
              <div className="mb-12 p-6 bg-card rounded-xl shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contact@example.com"
                      className="text-foreground/70 hover:text-accent smooth-transition"
                    >
                      mubasher1319@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mb-12">
                <h3 className="font-semibold mb-6">Follow me on social media</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-card rounded-xl shadow-soft hover:shadow-lg smooth-transition flex flex-col items-center justify-center gap-3 group"
                      >
                        <Icon className="w-8 h-8 text-foreground/60 group-hover:text-accent transition-colors duration-300" />
                        <span className="font-medium text-sm">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Response time */}
              <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold">Response time:</span> I typically respond to messages within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-foreground/70">
                &copy; 2025 Mubashir Rasool . All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-accent smooth-transition"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
