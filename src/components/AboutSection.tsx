import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Code2 } from "lucide-react";
import profilePhoto from "@/assets/profile-pic.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
  <div className="section-container">
    <div className="space-y-6">

      {/* Main About Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="glass-card p-10 md:p-14 flex flex-col items-center text-center"
      >
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 border-2 border-primary/30 mb-8 flex items-center justify-center overflow-hidden">
          <img src={profilePhoto} alt="Rozee Shaikh" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover" />
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3 font-mono">
          Let's Build Together
        </p>

        <h3 className="text-2xl md:text-4xl font-semibold text-foreground max-w-2xl">
          3+ years crafting modern, responsive and user-friendly websites using latest web technologies
        </h3>
      </motion.div>

      {/* Three Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card p-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 font-mono">
            Tech Stack
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-6">
            Technologies I work with
          </h3>

          <div className="space-y-3">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React.js",
              "jQuery",
              "Bootstrap",
              "Tailwind CSS",
              "Material UI",
              "Figma",
              "Responsive Design"
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="badge-pill mr-2 inline-flex"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* What You Get */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="glass-card p-8"
        >
          <Code2 size={20} className="text-primary mb-3" />

          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 font-mono">
            What You Get
          </p>

          <h3 className="text-lg font-semibold text-foreground mb-3">
            Modern UI/UX & High Quality Web Design
          </h3>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Responsive Website Design</p>
            <p>• Clean & Modern UI/UX</p>
            <p>• Fast & Optimized Performance</p>
            <p>• Cross-Browser Compatibility</p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="glass-card p-8"
        >
          <Globe size={20} className="text-primary mb-3" />

          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 font-mono">
            Education
          </p>

          <h3 className="text-lg font-semibold text-foreground mb-1">
            B.Com (Computer Applications)
          </h3>

          <p className="text-sm text-muted-foreground">
             Devi Ahilya Vishwavidyalaya (DAVV), Indore
          </p>
        </motion.div>

      </div>
    </div>
  </div>
</section>
  );
};

export default AboutSection;
