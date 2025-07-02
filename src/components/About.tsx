import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Award, BookOpen, TrendingUp, Mail, Phone, Bot } from "lucide-react";

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // const handleEmailClick = () => {
  //   window.location.href = "mailto:krishnajajoo09@gmail.com";
  // };

  // const handlePhoneClick = () => {
  //   window.location.href = "tel:+919352256545";
  // };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
          {/* Profile Image and Info Cards - Left Side */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <Avatar className="w-48 h-48 border-4 border-primary/20">
                <AvatarImage
                  src="/lovable-uploads/e5fe4380-633d-4f9f-9e92-c97b8d9bc1fb.png"
                  alt="Krishna Jajoo"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-bold">
                  KJ
                </AvatarFallback>
              </Avatar>
            </div>

            {/* <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="text-center p-4 rounded-lg bg-background/50 border cursor-pointer hover:bg-primary/10 transition-colors" onClick={handleEmailClick}>
                <Mail className="h-6 w-6 mx-auto text-primary mb-1" />
                <div className="text-sm text-muted-foreground">Email Me</div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-background/50 border cursor-pointer hover:bg-primary/10 transition-colors" onClick={handlePhoneClick}>
                <Phone className="h-6 w-6 mx-auto text-primary mb-1" />
                <div className="text-sm text-muted-foreground">Call Me</div>
              </div>
            </div>
          </div> */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="text-center p-4 rounded-lg bg-background/50 border">
                <div className="text-2xl font-bold text-primary mb-1">2+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>

              <div
                className="text-center p-4 rounded-lg bg-background/50 border cursor-pointer hover:bg-primary/10 transition-colors"
                onClick={scrollToContact}
              >
                <Mail className="h-6 w-6 mx-auto text-primary mb-1" />
                <div className="text-sm text-muted-foreground">
                  Get in Touch
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate Data Scientist with 2+ years expertise in data
                extraction, automation, and cloud integration. Proficient in
                Python and advanced AI models, with a focus on optimizing
                workflows and improving data accuracy. Committed to continuous
                learning and collaborative problem-solving to deliver effective,
                data-driven solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I started my career as a data scientist and discovered my
                passion for extracting meaningful patterns from data. When I'm
                not crunching numbers, you'll find me contributing to
                open-source projects, writing technical blogs, or exploring the
                latest developments in AI and machine learning.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="skill-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-vibrant-purple/20">
                  <TrendingUp className="h-6 w-6 text-vibrant-purple" />
                </div>
                <div>
                  <h4 className="font-semibold">Data Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced statistical modeling and analysis
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="skill-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-vibrant-blue/20">
                  <Award className="h-6 w-6 text-vibrant-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Deep learning and predictive modeling
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="skill-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-vibrant-green/20">
                  <Bot className="h-6 w-6 text-vibrant-green" />
                </div>
                <div>
                  <h4 className="font-semibold">Agentic AI</h4>
                  <p className="text-sm text-muted-foreground">
                    Autonomous AI systems and intelligent agents
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
