
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Insurance News Scraper",
      description: "A Gen-AI-powered tool that extracts, analyzes, and validates climate risk insights from real-world insurance and reinsurance news . Designed for AI-driven decision-making , this project showcases advanced NLP, AI-ML, and knowledge automation capabilities.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tech: ["Python", "Generative AI", "NLP", "Machine Learning", "LangChain"],
      github: "https://github.com/krishna-jajoo/insurance-news-scraper",
      demo: "#",
      category: "Gen AI"
    },
    {
      title: "Stock Market Analysis Dashboard",
      description: "Interactive dashboard for financial data analysis with real-time visualization and predictive modeling using LSTM networks.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tech: ["Python", "Streamlit", "TensorFlow", "yfinance"],
      github: "#",
      demo: "#",
      category: "Deep Learning"
    },
    {
      title: "Natural Language Processing Suite",
      description: "Comprehensive NLP toolkit for sentiment analysis, text classification, and named entity recognition with transformer models.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tech: ["Python", "Transformers", "spaCy", "FastAPI"],
      github: "#",
      demo: "#",
      category: "Machine Learning"
    },
    {
      title: "Computer Vision Pipeline",
      description: "End-to-end computer vision solution for object detection and classification using state-of-the-art deep learning models.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tech: ["Python", "PyTorch", "OpenCV", "Docker"],
      github: "#",
      demo: "#",
      category: "Deep Learning"
    },
    {
      title: "Sales Forecasting System",
      description: "Time series forecasting system for retail sales prediction using advanced statistical models and feature engineering.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      tech: ["R", "Prophet", "Shiny", "PostgreSQL"],
      github: "#",
      demo: "#",
      category: "Machine Learning"
    },
    {
      title: "Bill Parser",
      description: "The project uses Generative AI to extract structured data from images of purchase bills , helping e-commerce analytics organizations generate actionable insights.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tech: ["Python", "Generative AI", "NLP", "TensorFlow", "LangChain"],
      github: "https://github.com/krishna-jajoo/bill_parser",
      demo: "https://drive.google.com/file/d/1KzLyvTPTJz_LV_NhydUYsQs0alBHJPTb/view",
      category: "Gen AI"
    }
  ];

  const categories = ['All', 'Machine Learning', 'Deep Learning', 'Gen AI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my data science and machine learning projects, 
            from predictive models to interactive dashboards
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="px-6 py-2 rounded-full transition-all hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="project-card glow-effect overflow-hidden group relative">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={() => window.open(project.github, '_blank')}
                    className="bg-white/90 hover:bg-white text-black"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => window.open(project.demo, '_blank')}
                    className="bg-primary/90 hover:bg-primary"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="gradient-text">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
