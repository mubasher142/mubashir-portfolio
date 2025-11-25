import { Link } from "wouter";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden pt-20 pb-20">

  {/* Background gradient blobs (kept subtle, no animation) */}
  <div className="absolute inset-0 -z-10 opacity-30">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
    <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
  </div>

  <div className="container max-w-4xl mx-auto px-4 animate-fade-in">

    {/* STACK LAYOUT */}
    <div className="flex flex-col items-center gap-12 text-center">

      {/* Profile Image */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 animate-slide-up">

        {/* Clean outer glow */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_40px_-10px_rgba(147,51,234,0.4)]"></div>

        {/* Profile Image (no colored circles) */}
        <div className="absolute inset-0 rounded-full overflow-hidden group">
          <img
            src="/profile.jpg"
            alt="Profile Photo"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
          />
        </div>

        {/* Inner subtle shadow */}
        <div className="absolute inset-0 rounded-full shadow-inner"></div>
      </div>

      {/* TEXT CONTENT */}
      <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Mubashir Rasool</span>
          <br />
          <span className="text-foreground">Data Science & ML Enthusiast</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 mb-8 font-light max-w-2xl mx-auto">
          Transforming data into insights | Building intelligent solutions | Problem Solver
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/projects">
            <a>
              <Button size="lg" className="gap-2 hover:scale-105 transition-transform duration-300">
                View My Work
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </Link>

          <Button
            size="lg"
            variant="outline"
            className="gap-2 hover:scale-105 transition-transform duration-300"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "resume.pdf";
              link.click();
            }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/mubasher142"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-soft hover:shadow-lg hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mubashir-rasool-b39971324/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-soft hover:shadow-lg hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:mubasher1319@gmail.com"
            className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-soft hover:shadow-lg hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Scroll indicator */}
      <div className="flex justify-center pb-8 animate-bounce">
        <svg
          className="w-6 h-6 text-foreground/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Quick stats section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "3+", label: "Projects Completed" },
              { number: "5+", label: "Technologies Mastered" },
              { number: "100%", label: "Passion for Learning" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-4xl font-bold gradient-text mb-2 hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>
                <p className="text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}













































// import { Link } from "wouter";
// import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Hero Section */}
//       <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden pt-20 pb-20">
//         {/* Animated gradient background */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//           <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//           <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//         </div>

//         <div className="container max-w-4xl mx-auto px-4 text-center animate-fade-in">
//           {/* Main heading */}
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//             <span className="gradient-text">Mubashir Rasool</span>
//             <br />
//             <span className="text-foreground">Data Science & ML Enthusiast</span>
//           </h1>

//           {/* Tagline */}
//           <p className="text-xl md:text-2xl text-foreground/70 mb-8 font-light max-w-2xl mx-auto">
//             Transforming data into insights | Building intelligent solutions | Problem Solver
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <Link href="/projects">
//               <a>
//                 <Button size="lg" className="gap-2">
//                   View My Work
//                   <ArrowRight className="w-5 h-5" />
//                 </Button>
//               </a>
//             </Link>
//             <Button
//               size="lg"
//               variant="outline"
//               className="gap-2"
//               onClick={() => {
//                 // In a real app, this would download a resume PDF
//                 const link = document.createElement("a");
//                 link.href = "/resume.pdf";
//                 link.download = "resume.pdf";
//                 link.click();
//               }}
//             >
//               <Download className="w-5 h-5" />
//               Download Resume
//             </Button>
//           </div>

//           {/* Social Links */}
//           <div className="flex justify-center gap-4">
//             <a
//               href="https://github.com/mubasher142"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 rounded-full bg-card hover:bg-muted smooth-transition shadow-soft"
//               aria-label="GitHub"
//             >
//               <Github className="w-6 h-6" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/mubashir-rasool-b39971324/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 rounded-full bg-card hover:bg-muted smooth-transition shadow-soft"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-6 h-6" />
//             </a>
//             <a
//               href="mailto:mubasher1319@gmail.com"
//               className="p-3 rounded-full bg-card hover:bg-muted smooth-transition shadow-soft"
//               aria-label="Email"
//             >
//               <Mail className="w-6 h-6" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Scroll indicator */}
//       <div className="flex justify-center pb-8">
//         <div className="animate-bounce">
//           <svg
//             className="w-6 h-6 text-foreground/50"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Quick stats section */}
//       <section className="py-20 bg-card/50">
//         <div className="container">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <h3 className="text-4xl font-bold gradient-text mb-2">3+</h3>
//               <p className="text-foreground/70">Projects Completed</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-4xl font-bold gradient-text mb-2">5+</h3>
//               <p className="text-foreground/70">Technologies Mastered</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-4xl font-bold gradient-text mb-2">100%</h3>
//               <p className="text-foreground/70">Passion for Learning</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
