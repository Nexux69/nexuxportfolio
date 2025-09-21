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
    title: "Smart Waste Classifier",
    description: "Deep learning model to classify waste into Biodegradable and Non-Biodegradable categories for smart recycling systems.",
    image: "https://images.unsplash.com/photo-1577717903265-9b2fcd5c8a2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    tags: ["CNN", "TensorFlow", "MobileNetv2"],
    category: "AI",
    liveUrl: "https://smartwastee.streamlit.app/",
    githubUrl: "https://github.com/Nexux69/Smart-Waste-Classifier-"
  },
  {
    title: "Brain Tumor Detection",
    description: "CNN-based system that detects brain tumors from MRI scans with high accuracy.",
    image: "https://images.unsplash.com/photo-1577717903265-9b2fcd5c8a2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    tags: ["Deep Learning", "CNN", "Medical Imaging"],
    category: "AI",
    liveUrl: "https://brain-tumor-detection-faiz-shaikh.streamlit.app/",
    githubUrl: "https://github.com/Nexux69/Brain-Tumor-Detection"
  },
  {
    title: "Lung Disease Prediction",
    description: "Deep learning model using DenseNet121 to predict lung diseases from X-ray images with real-time web deployment.",
    image: "https://images.unsplash.com/photo-1577717903265-9b2fcd5c8a2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    tags: ["DenseNet121", "Flask", "Computer Vision"],
    category: "AI",
    liveUrl: "https://lung-disease-prediction-faiz-shaikh.streamlit.app/",
    githubUrl: "https://github.com/Nexux69/Lung-Disease-Prediction"
  },
  {
    title: "Face expression",
    description: "Real-time face recognition system using OpenCV and Firebase to mark student attendance with location logging and SMS notification.",
    image: "https://images.unsplash.com/photo-1635353606227-5b1f144ad71a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    tags: ["OpenCV", "Firebase", "Real-Time AI"],
    category: "Computor Vision",
    liveUrl: "#",
    githubUrl: "https://github.com/Nexux69/face-expression"
  },
  {
    title: "Ai computer vision snake game ",
    description: "A fun, interactive Snake Game you control by moving a green object in front of your camera.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    tags: ["OpenCV", "Computor Vision" , "Numpy"],
    category: "Computor Vision",
    liveUrl: "#",
    githubUrl: "https://github.com/Nexux69/Ai-computer-vision-snake-game-"
  },
  {
    title: "Shoe Price Prediction ",
    description: "Streamlit web app that predicts shoe prices based on scraped product data from Puma India website.",
    image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    tags: ["Streamlit", "Linear Regression","Scikit-Learn",],
    category: "Machine learning",
    liveUrl: "https://shoe-price-prediction-faiz-shaikh.streamlit.app/",
    githubUrl: "https://github.com/Nexux69/Shoe-Price-Prediction"
  }
];


  const categories = ["All", "AI", "ML", "CV"];

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
            A showcase of my hands-on ML and AI projects I created while learning
            to sharpen my skills in deep learning, data science, and model deployment.
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
