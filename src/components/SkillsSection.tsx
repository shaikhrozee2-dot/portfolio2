import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, LayoutDashboard, Palette, Smartphone, Layers, PenTool } from "lucide-react";
const skills = [
  {
    title: "Frontend Development",
    desc: "Building responsive and interactive websites using HTML, CSS, JavaScript and modern frameworks.",
    icon: Code2
  },
  {
    title: "React.js Development",
    desc: "Creating dynamic single-page applications with reusable components and smooth user experience.",
    icon: LayoutDashboard
  },
  {
    title: "UI/UX Design",
    desc: "Designing clean, modern and user-friendly interfaces focused on usability and aesthetics.",
    icon: Palette
  },
  {
    title: "Responsive Design",
    desc: "Ensuring websites look perfect on all devices including mobile, tablet and desktop.",
    icon: Smartphone
  },
  {
    title: "Frameworks & Libraries",
    desc: "Working with Bootstrap, Tailwind CSS, jQuery and Material UI for fast development.",
    icon: Layers
  },
  {
    title: "Figma to Code",
    desc: "Converting Figma designs into pixel-perfect, fully functional websites.",
    icon: PenTool
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
 <section id="skills" className="py-24 md:py-32" ref={ref}>
  <div className="section-container">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="text-center mb-16"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-3">
        Expertise
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        What I specialize in
      </h2>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.title}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass-card p-8 group hover:glow-border transition-all duration-500"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
            <skill.icon size={22} className="text-primary" />
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-2">
            {skill.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {skill.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>
  );
};

export default SkillsSection;
