import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { Button } from "../components/ui/button";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export default function Projects()  
{
  const projects: Project[] = [
      {
        id: 1,
        title: "Persistent Multi-Document RAG Chat System",
        description:
          "Persistent multi-document RAG (Retrieval-Augmented Generation) system with streaming AI responses, semantic retrieval, source-grounded answers, live PDF interaction, reranking, and intelligent document analysis using FastAPI, React, LangChain, FAISS, Ollama, and Gemini API.",
        image: "https://github.com/mubasher142/multi-rag-chat/blob/main/screenshots/Screenshot%202026-05-12%20111922.png?raw=true",
        tags: [
          "RAG",
          "FastAPI",
          "React",
          "LangChain",
          "Ollama",
          "AI"
        ],
        github: "https://github.com/mubasher142/multi-rag-chat",
},

    {
      id: 2,
      title: "EDA on Google Play Store Apps",
      description:
        "Exploratory data analysis on Google Play Store apps to uncover trends in ratings, installs, and categories for data-driven product insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["EDA", "Python", "Pandas"],
      github: "https://github.com/mubasher142/google-playstore-eda",
      demo: "https://demo.example.com/google-playstore-eda",
    },
    {
      id: 3,
      title: "EDA on Netflix Movies Dataset",
      description:
        "In-depth exploratory analysis of Netflix titles to analyze content distribution, genres, release trends, and viewing patterns.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      tags: ["EDA", "Python", "Data Visualization"],
      github: "https://github.com/mubasher142/netflix-movie-analysis",
      demo: "https://demo.example.com/netflix-movies-eda",
    },
    {
      id: 4,
      title: "Amazon Sales Analytics Dashboard)",
      description:
        "A fully interactive Power BI dashboard built to analyze Amazon product sales across multiple categories using year-to-date (YTD) and quarter-to-date (QTD) metrics..",
      image:
        "https://github.com/Riya-Manoj/Amazon-Sales-Data-Analysis-Power-BI-Dashboard/raw/main/Amazon_Sales_Analysis.png",
      tags: ["Power BI", "Dashboard", "Analytics"],
      github: "https://github.com/mubasher142/amazon-sales-powerbi-dashboard",
      demo: "https://demo.example.com/amazon-sales-analytics",
    },
    {
      id: 5,
      title: "Customer Insights EDA (In Progress)",
      description:
        "Work-in-progress exploratory analysis on customer behavior data to understand churn risk, segmentation, and engagement.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      tags: ["EDA", "Analytics", "In Progress"],
    },
  ];

  const categories = [
    "All",
    "EDA",
    "Python",
    "Power BI",
    "Dashboard",
    "In Progress",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(selectedCategory.toLowerCase())
          )
        );

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-foreground/70">
            A collection of my data analysis and visualization projects focusing
            on exploratory data analysis and business intelligence.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="container max-w-6xl">
          {/* Filter buttons */}
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium smooth-transition ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground shadow-medium"
                    : "bg-card text-foreground hover:bg-muted border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-lg smooth-transition hover:-translate-y-1 flex flex-col"
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 smooth-transition"></div>
                </div>

                {/* Project content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-foreground/60">
                No projects found in this category. Try another filter!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}





















