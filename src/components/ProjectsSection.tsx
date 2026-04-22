import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import ragProject from "@/assets/img1.jpeg";
import baizelProject from "@/assets/img2.jpeg";
import naibleProject from "@/assets/img3.jpeg";

const projects = [
{
  title: "Your Guide to Scalable Growth",
  tagline: "Helping businesses grow with modern web solutions",
  description:
    "Designed and developed a modern, scalable web platform focused on helping businesses establish a strong digital presence. The project includes responsive UI design, optimized performance, and user-focused layouts to improve engagement and conversion rates. Built with clean code practices and reusable components for easy scalability and future enhancements.",
  
  features: [
    "Fully responsive and mobile-friendly design",
    "Modern UI/UX focused on user engagement",
    "Fast loading and performance optimization",
    "Reusable and scalable component structure",
    "Cross-browser compatibility"
  ],

  stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],

  color: "from-primary to-[hsl(12,80%,55%)]",
  image: ragProject,
},
{
  title: "Healthcare Website",
  tagline: "Modern healthcare platform for better patient experience",
  
  description:
    "Designed and developed a responsive healthcare website focused on improving patient experience and accessibility. The platform provides easy navigation for services, doctor information, appointment booking, and health-related resources. Built with a clean and user-friendly interface to ensure trust, usability, and seamless interaction across all devices.",
  
  features: [
    "Responsive design for mobile, tablet, and desktop",
    "Doctor listing and service information sections",
    "Appointment booking UI for patients",
    "Clean and user-friendly healthcare interface",
    "Fast loading and optimized performance"
  ],

  stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],

  color: "from-[hsl(180,70%,40%)] to-[hsl(160,60%,50%)]",
  image: baizelProject,
  
},
  {
  title: "Free Movies Platform",
  tagline: "Stream thousands of movies and TV channels for free",
  
  description:
    "Designed and developed a modern streaming platform UI that allows users to explore and watch thousands of free movies and TV channels. The project focuses on a clean layout, smooth navigation, and engaging user experience with categorized content, featured banners, and responsive design for all devices.",
  
  features: [
    "Modern homepage with featured movie banners",
    "Category-based movie browsing (Movies, Series, TV)",
    "Responsive design for mobile, tablet, and desktop",
    "Clean UI with smooth navigation and hover effects",
    "Optimized layout for fast loading and user engagement"
  ],

  stack: [
    "HTML",
    "CSS",
    "JavaScript",
   
    "Bootstrap"
  ],

  color: "from-[hsl(180,80%,40%)] to-[hsl(220,70%,50%)]",
  image: naibleProject,
}

];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-3">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold">Projects I've built</h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className={`relative p-8 md:p-12 bg-gradient-to-br ${project.color} min-h-[280px] flex flex-col justify-between overflow-hidden`}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-left-top opacity-90 object-position-center" />
                  ) : (
                    <>
                      <div>
                        <p className="text-sm text-primary-foreground/70 mb-2">{project.tagline}</p>
                        <ArrowRight size={24} className="text-primary-foreground/50 absolute top-8 right-8" />
                      </div>
                      <div className="glass-card bg-background/10 backdrop-blur-md p-6 rounded-xl border-primary-foreground/10">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-primary-foreground/30" />
                          <div className="w-2 h-2 rounded-full bg-primary-foreground/30" />
                          <div className="w-2 h-2 rounded-full bg-primary-foreground/30" />
                        </div>
                        <div className="h-3 bg-primary-foreground/10 rounded w-3/4 mb-2" />
                        <div className="h-3 bg-primary-foreground/10 rounded w-1/2" />
                      </div>
                    </>
                  )}
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-0.5 bg-primary" />
                    <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <ul className="space-y-2 mb-8">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Sparkles size={14} className="text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.stack.map((s) => (
                      <span key={s} className="badge-pill text-xs">{s}</span>
                    ))}
                    {/* {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-auto flex items-center gap-1.5 text-sm text-primary hover:underline font-medium">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )} */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
