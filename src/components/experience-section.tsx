import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, MapPin, Calendar, Award } from "lucide-react";
import { useState } from "react";

export function ExperienceSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const experiences = [
    {
      company: "TechCorp Solutions",
      logo: "🏢",
      role: "Data Science Intern",
      duration: "Jun 2024 - Aug 2024",
      location: "San Francisco, CA",
      description: "Developed machine learning models for customer behavior prediction and automated data pipelines.",
      achievements: [
        "Built predictive models with 92% accuracy for customer churn prediction",
        "Automated data preprocessing pipeline, reducing manual work by 70%",
        "Created interactive dashboards using Streamlit for stakeholders",
        "Collaborated with cross-functional teams on 3 major projects"
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "SQL", "Streamlit", "AWS"],
      type: "Internship"
    },
    {
      company: "University Research Lab",
      logo: "🎓",
      role: "Research Assistant",
      duration: "Jan 2024 - May 2024",
      location: "Remote",
      description: "Conducted research on neural network optimization and published findings in academic conferences.",
      achievements: [
        "Co-authored 2 papers on deep learning optimization techniques",
        "Developed novel attention mechanisms for transformer models",
        "Mentored 5 undergraduate students in ML projects",
        "Presented research at 3 international conferences"
      ],
      technologies: ["PyTorch", "CUDA", "Python", "LaTeX", "Git"],
      type: "Research"
    }
  ];

  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2024",
      icon: "🎖️"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2023",
      icon: "🧠"
    },
    {
      title: "AWS Certified ML Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: "☁️"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      icon: "🔧"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional experience and academic achievements that have shaped my journey in AI and data science.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden hover:bg-slate-800/70 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{exp.logo}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                          <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                          <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        onClick={() => toggleExpanded(index)}
                        className="text-gray-400 hover:text-white"
                      >
                        {expandedCard === index ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </Button>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedCard === index ? 'auto' : 0,
                        opacity: expandedCard === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                            <Award className="w-4 h-4 text-cyan-400" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-cyan-400 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                className="bg-slate-700 text-cyan-400 hover:bg-slate-600 text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 10, scale: 1.05 }}
                className="cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600 p-6 text-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h4 className="text-white font-medium mb-2 text-sm">{cert.title}</h4>
                  <p className="text-gray-400 text-xs mb-1">{cert.issuer}</p>
                  <p className="text-cyan-400 text-xs">{cert.date}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}