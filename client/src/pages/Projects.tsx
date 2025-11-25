import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      title: "Sales Performance Dashboard (In Progress)",
      description:
        "Ongoing Power BI dashboard to track sales KPIs, regional performance, and product-wise revenue using interactive visuals.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      tags: ["Power BI", "Dashboard", "In Progress"],
      // add github/demo when ready
    },
    {
      id: 4,
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






































// import { useState } from "react";
// import { ExternalLink, Github } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   github?: string;
//   demo?: string;
// }

// export default function Projects() {
//   const projects: Project[] = [
//     {
//       id: 1,
//       title: "Customer Churn Prediction",
//       description: "ML model to predict customer churn using ensemble methods and feature engineering.",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
//       tags: ["Machine Learning", "Python", "Scikit-learn"],
//       github: "https://github.com",
//       demo: "https://demo.example.com",
//     },
//     {
//       id: 2,
//       title: "Stock Price Forecasting",
//       description: "Deep learning model using LSTM networks for time series prediction of stock prices.",
//       image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
//       tags: ["Deep Learning", "TensorFlow", "Time Series"],
//       github: "https://github.com",
//     },
//     {
//       id: 3,
//       title: "Sentiment Analysis Dashboard",
//       description: "NLP-based sentiment analysis with interactive visualization dashboard using Tableau.",
//       image: "https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=500&h=300&fit=crop",
//       tags: ["NLP", "Data Visualization", "Tableau"],
//       demo: "https://demo.example.com",
//     },
//     {
//       id: 4,
//       title: "Image Classification CNN",
//       description: "Convolutional neural network for image classification with 95% accuracy.",
//       image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
//       tags: ["Deep Learning", "PyTorch", "Computer Vision"],
//       github: "https://github.com",
//     },
//     {
//       id: 5,
//       title: "Sales Analytics Platform",
//       description: "Interactive analytics platform for sales data visualization and insights.",
//       image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
//       tags: ["Data Visualization", "PowerBI", "Analytics"],
//       demo: "https://demo.example.com",
//     },
//     {
//       id: 6,
//       title: "Recommendation System",
//       description: "Collaborative filtering recommendation engine for e-commerce platform.",
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
//       tags: ["Machine Learning", "Python", "Recommendation"],
//       github: "https://github.com",
//     },
//   ];

//   const categories = [
//     "All",
//     "Machine Learning",
//     "Deep Learning",
//     "NLP",
//     "Data Visualization",
//     "Computer Vision",
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : projects.filter((project) =>
//           project.tags.some((tag) =>
//             tag.toLowerCase().includes(selectedCategory.toLowerCase())
//           )
//         );

//   return (
//     <div className="min-h-screen pt-20 pb-20">
//       {/* Hero section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
//         <div className="container max-w-4xl">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">My Projects</h1>
//           <p className="text-xl text-foreground/70">
//             A collection of my data science and machine learning projects showcasing various techniques and technologies.
//           </p>
//         </div>
//       </section>

//       {/* Main content */}
//       <section className="py-20">
//         <div className="container max-w-6xl">
//           {/* Filter buttons */}
//           <div className="mb-12 flex flex-wrap gap-3">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-6 py-2 rounded-full font-medium smooth-transition ${
//                   selectedCategory === category
//                     ? "bg-accent text-accent-foreground shadow-medium"
//                     : "bg-card text-foreground hover:bg-muted border border-border"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           Projects grid
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-lg smooth-transition hover:-translate-y-1 flex flex-col"
//               >
//                 {/* Project image */}
//                 <div className="relative h-48 overflow-hidden bg-muted">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover hover:scale-110 smooth-transition"
//                   />
//                   <div className="absolute inset-0 bg-black/0 hover:bg-black/20 smooth-transition"></div>
//                 </div>

//                 {/* Project content */}
//                 <div className="p-6 flex flex-col flex-1">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-foreground/70 text-sm mb-4 flex-1">
//                     {project.description}
//                   </p>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Action buttons */}
//                   <div className="flex gap-3">
//                     {project.github && (
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1"
//                       >
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           className="w-full gap-2"
//                         >
//                           <Github className="w-4 h-4" />
//                           Code
//                         </Button>
//                       </a>
//                     )}
//                     {project.demo && (
//                       <a
//                         href={project.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1"
//                       >
//                         <Button size="sm" className="w-full gap-2">
//                           <ExternalLink className="w-4 h-4" />
//                           Demo
//                         </Button>
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Empty state */}
//           {filteredProjects.length === 0 && (
//             <div className="text-center py-20">
//               <p className="text-xl text-foreground/60">
//                 No projects found in this category. Try another filter!
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }
