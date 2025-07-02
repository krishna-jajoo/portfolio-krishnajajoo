
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95, color: "bg-vibrant-blue" },
        { name: "Cypher (Neo4j)", level: 81, color: "bg-vibrant-green" },
        { name: "C++", level: 70, color: "bg-vibrant-orange" },
        { name: "SQL", level: 70, color: "bg-vibrant-purple" },
        // { name: "Julia", level: 75, color: "bg-vibrant-pink" }
      ]
    },
    {
      title: "ML/AI Frameworks",
      skills: [
        { name: "TensorFlow", level: 90, color: "bg-vibrant-orange" },
        { name: "PyTorch", level: 85, color: "bg-vibrant-blue" },
        { name: "Scikit-learn", level: 95, color: "bg-vibrant-green" },
        { name: "Keras", level: 88, color: "bg-vibrant-purple" }
      ]
    },
    {
      title: "Data Tools",
      skills: [
        { name: "Pandas", level: 95, color: "bg-vibrant-pink" },
        { name: "NumPy", level: 92, color: "bg-vibrant-orange" },
        { name: "Matplotlib", level: 88, color: "bg-vibrant-blue" },
        { name: "Seaborn", level: 85, color: "bg-vibrant-green" }
      ]
    },
    {
      title: "GenAI / LLM Tools",
      skills: [
        { name: "LangChain", level: 90, color: "bg-vibrant-blue" },
        { name: "OpenAI API", level: 92, color: "bg-vibrant-green" },
        { name: "LlamaIndex", level: 75, color: "bg-vibrant-orange" },
        { name: "Prompt Engineering", level: 95, color: "bg-vibrant-purple" }
      ]
    }
    // {
    //   title: "Cloud & Big Data",
    //   skills: [
    //     { name: "AWS", level: 82, color: "bg-vibrant-purple" },
    //     { name: "Apache Spark", level: 78, color: "bg-vibrant-pink" },
    //     { name: "Docker", level: 85, color: "bg-vibrant-orange" },
    //     { name: "Kubernetes", level: 70, color: "bg-vibrant-blue" }
    //   ]
    // }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for modern data science and machine learning projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-card glow-effect">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
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

export default Skills;
