import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Code2 } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <div className="space-y-6">
          {/* Main about card - full width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 md:p-14 flex flex-col items-center text-center"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 border-2 border-primary/30 mb-8 flex items-center justify-center overflow-hidden">
              <img src={profilePhoto} alt="Paras Sonare" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover" />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3 font-mono">
              Let's Build Together
            </p>
            <h3 className="text-2xl md:text-4xl font-semibold text-foreground max-w-2xl">
              3+ years crafting AI/ML solutions, from RAG chatbots to computer vision pipelines
            </h3>
          </motion.div>

          {/* Three cards in parallel */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 font-mono">Tech Stack</p>
              <h3 className="text-xl font-semibold text-foreground mb-6">The stack behind everything I ship</h3>
              <div className="space-y-3">
                {["Python", "PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LlamaIndex", "FastAPI", "Flask", "OpenAI API", "Docker", "AWS", "PostgreSQL", "MySQL", "OpenCV", "Streamlit"].map(
                  (tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="badge-pill mr-2 inline-flex"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
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
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 font-mono">What You Get</p>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Production-grade AI, deployed & scaling
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• RAG Chatbots & LLM Integration</p>
                <p>• Computer Vision & Image Processing</p>
                <p>• MCP Server Architecture</p>
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
              <h3 className="text-lg font-semibold text-foreground mb-1">MCA, CGPA 8.0/10</h3>
              <p className="text-sm text-muted-foreground">Technocrat Institute of Technology, Bhopal</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
