import { motion } from "motion/react";
import { Card } from "./ui/card";
import { GraduationCap, Briefcase, Code, Brain, Database, TrendingUp } from "lucide-react";

export function AboutSection() {
  const timelineItems = [

     {
      icon: GraduationCap,
      title: "BS in Computer Science",
      subtitle: "AI & Machine Learning Specialization",
      description: "Graduated with honors, focusing on deep learning and neural networks",
      color: "text-cyan-400"
    },
    {
      icon: GraduationCap,
      title: "BS in Computer Science",
      subtitle: "AI & Machine Learning Specialization",
      description: "Graduated with honors, focusing on deep learning and neural networks",
      color: "text-cyan-400"
    },
    {
      icon: Briefcase,
      title: "Data Science Intern",
      subtitle: "TechCorp Solutions",
      description: "Developed predictive models and automated data pipelines",
      color: "text-purple-400"
    },
    {
      icon: Code,
      title: "AI Projects Portfolio",
      subtitle: "Personal & Open Source",
      description: "Built 15+ ML projects ranging from NLP to computer vision",
      color: "text-pink-400"
    }
  ];

  const funFacts = [
    {
      icon: Brain,
      title: "Neural Networks",
      fact: "Trained 50+ models",
      color: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: Database,
      title: "Data Processed",
      fact: "10M+ records",
      color: "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
    },
    {
      icon: TrendingUp,
      title: "Model Accuracy",
      fact: "95%+ average",
      color: "bg-gradient-to-r from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate AI & Data Science graduate with a deep fascination for machine learning 
            and its potential to solve real-world problems. My journey combines academic excellence 
            with hands-on experience in building intelligent systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-white"
          >
            My Journey
          </motion.h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400" />
            
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <Card className="relative bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6 max-w-md hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-slate-700 ${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 mb-2">{item.subtitle}</p>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </Card>
                
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${item.color} bg-current`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Fun Facts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-pointer"
              >
                <Card className={`p-6 text-center ${fact.color} border-slate-700 backdrop-blur-sm hover:shadow-lg transition-all duration-300`}>
                  <fact.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="text-sm text-gray-400 mb-2">{fact.title}</h4>
                  <p className="text-2xl font-bold text-white">{fact.fact}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
