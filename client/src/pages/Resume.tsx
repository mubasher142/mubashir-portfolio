import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Resume</h1>
          <p className="text-xl text-foreground/70">
            Download my resume or view my professional experience and qualifications below.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Download section */}
          <div className="mb-16 p-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white dark:bg-card rounded-lg shadow-soft">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">My Resume</h3>
                  <p className="text-foreground/60">PDF Format • Last Updated: 2025</p>
                </div>
              </div>
              <Button
                size="lg"
                onClick={handleDownload}
                className="gap-2 whitespace-nowrap"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Experience section
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>
            <div className="space-y-8">
              <div className="p-8 bg-card rounded-xl shadow-soft border-l-4 border-purple-500 hover:shadow-lg smooth-transition">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">Data Science Intern</h3>
                    <p className="text-foreground/70">Tech Company Name</p>
                  </div>
                  <span className="text-sm text-foreground/60 mt-2 sm:mt-0">
                    June 2023 - August 2023
                  </span>
                </div>
                <ul className="text-foreground/70 space-y-2 ml-4">
                  <li>• Developed machine learning models for customer segmentation</li>
                  <li>• Created data visualizations using Tableau and PowerBI</li>
                  <li>• Collaborated with cross-functional teams on data-driven projects</li>
                </ul>
              </div>

              <div className="p-8 bg-card rounded-xl shadow-soft border-l-4 border-pink-500 hover:shadow-lg smooth-transition">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">Data Analyst</h3>
                    <p className="text-foreground/70">Analytics Startup</p>
                  </div>
                  <span className="text-sm text-foreground/60 mt-2 sm:mt-0">
                    January 2023 - May 2023
                  </span>
                </div>
                <ul className="text-foreground/70 space-y-2 ml-4">
                  <li>• Analyzed large datasets to identify business trends</li>
                  <li>• Built automated reporting dashboards</li>
                  <li>• Presented insights to stakeholders and management</li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* Education section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-12">Education</h2>
            <div className="space-y-6">
              <div className="p-8 bg-card rounded-xl shadow-soft border-l-4 border-blue-500">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">Bachelor of Computer Applications </h3>
                    <p className="text-foreground/70"> Kashmir University </p>
                  </div>
                  <span className="text-sm text-foreground/60 mt-2 sm:mt-0">
                    2024 - Present
                  </span>
                </div>
                <p className="text-foreground/70">
                  GPA: 8.27/10.0 |
                </p>
              </div>
            </div>
          </div>

          {/* Skills summary */}
          <div>
            <h2 className="text-4xl font-bold mb-12">Key Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "R",
                    "SQL",
                    "Machine Learning",
                    "Deep Learning",
                    "TensorFlow",
                    "PyTorch",
                    "Scikit-learn",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg font-medium text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Problem Solving",
                    "Communication",
                    "Teamwork",
                    "Critical Thinking",
                    "Data Analysis",
                    "Project Management",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-lg font-medium text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
