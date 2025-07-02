import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Home } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:krishnajajoo09@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919352256545";
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.subject.trim()) {
      toast({
        title: "Error",
        description: "Please enter a subject",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please enter your message",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_1zrydaj",
        "template_9qu3q0d",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "krishnajajoo09@gmail.com",
        },
        "_Q1rmzoMr5HI9KzzK"
      );

      toast({
        title: "Success!",
        description:
          "Your message has been sent successfully. I'll get back to you soon!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next data science project? Let's
            discuss how we can turn your data into actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always excited to work on challenging data science problems
                and help businesses make data-driven decisions. Reach out to
                discuss your project or just to connect!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-vibrant-purple/20">
                  <Mail className="h-5 w-5 text-vibrant-purple" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p
                    className="text-muted-foreground cursor-pointer hover:underline"
                    onClick={handleEmailClick}
                  >
                    krishnajajoo09@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-vibrant-blue/20">
                  <Phone className="h-5 w-5 text-vibrant-blue" />
                </div>
                {/* <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+919352256545</p>
                </div> */}
                <div>
                  <p className="font-medium">Phone</p>
                  <p
                    className="text-muted-foreground cursor-pointer hover:underline"
                    onClick={handlePhoneClick}
                  >
                    +919352256545
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-vibrant-green/20">
                  <MapPin className="h-5 w-5 text-vibrant-green" />
                </div>
                <div>
                  <p className="font-medium">Office Location</p>
                  <p className="text-muted-foreground">Bangalore, Karnataka</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-vibrant-pink/20">
                  <Home className="h-5 w-5 text-vibrant-pink" />
                </div>
                <div>
                  <p className="font-medium">Hometown</p>
                  <p className="text-muted-foreground">
                    Ladnun, Nagaur (Rajasthan)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="glow-effect">
            <CardHeader>
              <CardTitle className="gradient-text">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project discussion"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your data science project..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full glow-effect hover:scale-105 transition-transform"
                  disabled={isLoading}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
