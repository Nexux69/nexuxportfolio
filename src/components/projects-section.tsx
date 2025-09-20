import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Neural Style Transfer",
      description: "Deep learning model that applies artistic styles to images using convolutional neural networks",
      image: "https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NTgyNjk2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["AI", "Deep Learning", "Computer Vision"],
      category: "AI",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Stock Price Predictor",
      description: "Machine learning model using LSTM networks to predict stock prices with technical indicators",
      image: "https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTgzNTExMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["ML", "Time Series", "Finance"],
      category: "ML",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Customer Segmentation",
      description: "Advanced clustering algorithm to segment customers for targeted marketing campaigns",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgzNzcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Data Science", "Clustering", "Marketing"],
      category: "Data Science",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Sentiment Analysis API",
      description: "NLP model for real-time sentiment analysis of social media posts and reviews",
      image: "https://images.unsplash.com/photo-1646583288948-24548aedffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwbGVhcm5pbmclMjBhbGdvcml0aG18ZW58MXx8fHwxNzU4MzMzMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["AI", "NLP", "API"],
      category: "AI",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Data Dashboard",
      description: "Interactive dashboard for analyzing patient data and predicting health outcomes",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgzNzcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Data Science", "Healthcare", "Visualization"],
      category: "Data Science",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering system for personalized product recommendations",
      image: "https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTgzNTExMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["ML", "Recommendation", "E-commerce"],
      category: "ML",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "AI", "ML", "Data Science"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of my AI and machine learning projects, each solving real-world problems 
            with cutting-edge technology and innovative approaches.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  : "border-slate-600 text-gray-300 hover:bg-slate-700"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-cyan-500/80 hover:bg-cyan-500 text-white p-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-purple-500/80 hover:bg-purple-500 text-white p-2"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-slate-700 text-cyan-400 hover:bg-slate-600 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}