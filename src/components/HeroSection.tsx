import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Copy } from "lucide-react";
import { toast } from "sonner";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const copyEmail = () => {
    navigator.clipboard.writeText("sohailpathan975@gmail.com");
    toast.success("Email copied!");
  };

  return (
  <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
    <img src={heroBg} alt="" className="w-full h-full object-cover blur-sm opacity-30" />
  </motion.div>

  <div className="absolute inset-0 bg-background/60" />

  <div className="absolute bottom-0 left-0 right-0 h-[400px]">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px] rounded-[50%] border-t border-primary/10 bg-gradient-to-t from-background to-transparent" />
  </div>

  <div className="section-container relative z-10 text-center pt-32 pb-20">

    {/* Availability */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="inline-flex items-center gap-2 mb-10"
    >
      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">
  Available for Hire
</span>

<span className="text-sm text-muted-foreground">
  Open to Frontend & UI/UX Developer Roles
</span>
      <ArrowRight size={14} className="text-muted-foreground" />
    </motion.div>

    {/* Main Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-4"
    >
      Designing websites that{" "}
      <span className="font-display italic text-gradient">convert.</span>
    </motion.h1>

    {/* Sub Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.7 }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display italic text-muted-foreground leading-[1.1] mb-10"
    >
      UI/UX that users actually love.
    </motion.h2>

    {/* Description */}
   <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
  className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12"
>
  Hello, I'm <span className="text-foreground font-medium">Rozee Shaikh</span>, a Frontend Developer and UI/UX Specialist with 3+ years of experience crafting responsive, accessible, and intuitive web applications using HTML, CSS, SCSS, Bootstrap, Tailwind, JavaScript, and AI-assisted workflows. I focus on bridging design and development to deliver high-quality user experiences.
</motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium text-base hover:bg-foreground/90 transition-all"
      >
        Hire Me
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-background/20 group-hover:translate-x-1 transition-transform">
          <ArrowRight size={16} />
        </span>
      </button>

      <button
        onClick={copyEmail}
        className="inline-flex items-center gap-2 px-6 py-4 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Copy size={16} />
        shaikhrozee2@gmail.com
      </button>
    </motion.div>

  </div>
</section>
  );
};

export default HeroSection;
