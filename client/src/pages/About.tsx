import { Code2, Zap, Target } from "lucide-react";

export default function About() {
  const skills = {
    languages: [
      { name: "Python", level: 95 },
      // { name: "R", level: 85 },
      { name: "SQL", level: 90 },
    ],
    tools: [
      { name: "Pandas", level: 93 },
      { name: "Scikit-learn", level: 70 },
      { name: "PowerBI", level: 80 },
      { name: "Excel", level: 80 },
      { name: "Tableau", level: 82 },
      
    ],
    interests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Data Visualization",
      "Predictive Analytics",
      // "Natural Language Processing",
    ],
  };

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-foreground/60">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full smooth-transition"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
           I’m a Data Science and AI student pursuing my BCA, currently developing strong skills in data analytics and exploratory data analysis.
           I’m also learning visualization tools like Power BI to turn raw data into meaningful, easy-to-understand insights.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Bio Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-8">My Journey</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  My journey in data science began with a curiosity about how data shapes the world around us.
                  I’m currently building my foundation in statistics and programming, and my EDA projects have given me practical experience in visualizing and understanding data. Each project strengthens my ability to extract meaningful insights.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                I’m in the early stages of learning machine learning and actively exploring new tools and technologies.
                I believe in growing step by step—learning the fundamentals, practicing consistently, and steadily advancing toward more complex areas in the field.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-6 bg-card rounded-xl shadow-soft text-center">
                  <Code2 className="w-8 h-8 mx-auto mb-3 text-purple-500" />
                  <p className="font-semibold">Clean Code</p>
                </div>
                <div className="p-6 bg-card rounded-xl shadow-soft text-center">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-pink-500" />
                  <p className="font-semibold">Fast Learner</p>
                </div>
                <div className="p-6 bg-card rounded-xl shadow-soft text-center">
                  <Target className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                  <p className="font-semibold">Goal Oriented</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>

            {/* Programming Languages */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                Programming Languages
              </h3>
              <div className="grid md:grid-cols-2 gap-12">
                {skills.languages.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Tools & Libraries */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
                Tools & Libraries
              </h3>
              <div className="grid md:grid-cols-2 gap-12">
                {skills.tools.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full"></span>
                Areas of Interest
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.interests.map((interest) => (
                  <div
                    key={interest}
                    className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg border border-purple-200 dark:border-purple-800 text-center font-medium text-foreground"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h2 className="text-4xl font-bold mb-12">Education</h2>
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-xl shadow-soft border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-2">Bachelors of  Comptuter Applications </h3>
                <p className="text-foreground/70 mb-2">Kashmir Universiry  • 2024 - Present</p>
                <p className="text-foreground/60">Relevant coursework: Data Science, Statistics, Python Programming, Database Systems, Machine Learning (in progress)</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-soft border-l-4 border-pink-500">
                <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                <ul className="text-foreground/70 space-y-2">
                  <li>• Advanced Python Certificate</li>
                  <li>• Descriptive Statistics Certificate</li>
                  <li>• SQL 30 Days Certificate</li>
                  <li>• Data Analysis</li>
                  <li>• Data Science  and AI  Specialization (In Progress)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
