import { motion } from "motion/react";
import { Card } from "./ui/card";
import { 
  Brain, 
  Database, 
  BarChart3, 
  Code, 
  Zap, 
  GitBranch, 
  Monitor, 
  Cpu,
  Eye,
  MessageSquare,
  TrendingUp,
  Settings
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "Python", level: 95, icon: Code },
        { name: "TensorFlow", level: 90, icon: Cpu },
        { name: "PyTorch", level: 85, icon: Cpu },
        { name: "Scikit-learn", level: 92, icon: Brain }
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Data Science",
      icon: Database,
      skills: [
        { name: "Pandas", level: 93, icon: Database },
        { name: "NumPy", level: 90, icon: Database },
        { name: "SQL", level: 88, icon: Database },
        { name: "R", level: 75, icon: BarChart3 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Visualization",
      icon: BarChart3,
      skills: [
        { name: "Matplotlib", level: 87, icon: BarChart3 },
        { name: "Seaborn", level: 85, icon: BarChart3 },
        { name: "Plotly", level: 82, icon: TrendingUp },
        { name: "Streamlit", level: 90, icon: Monitor }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Specialized AI",
      icon: Eye,
      skills: [
        { name: "Computer Vision", level: 88, icon: Eye },
        { name: "NLP", level: 85, icon: MessageSquare },
        { name: "Deep Learning", level: 90, icon: Zap },
        { name: "MLOps", level: 80, icon: Settings }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const tools = [
    { name: "Jupyter", icon: "🔬" },
    { name: "Git", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Google Cloud", icon: "☁️" },
    { name: "Kaggle", icon: "🏆" }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems and extracting insights from data.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <skill.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                          <span className="text-white text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Tools & Platforms</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-4 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  <div className="text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                      {tool.name}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}