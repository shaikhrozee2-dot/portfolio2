import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Cloud, Code2, Cpu, Workflow } from "lucide-react";

const skills = [
  { icon: Brain, title: "Large Language Models", desc: "OpenAI API, LangChain, LlamaIndex, Transformers, Ollama, prompt engineering & LLM-powered applications" },
  { icon: Database, title: "RAG & Vector DBs", desc: "Building retrieval-augmented generation chatbots with Pinecone, semantic search, and document retrieval pipelines" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS (S3, Lambda, EC2, RDS), Azure (App Service, AI Studio, Promptflow), Docker containerization" },
  { icon: Code2, title: "Backend Development", desc: "FastAPI, Flask, Azure Function Apps, building scalable APIs with authentication, streaming, and scheduling" },
  { icon: Cpu, title: "Computer Vision", desc: "CNN, YOLO, OpenCV, U2-Net, object detection, image segmentation, and custom model training with TensorFlow & PyTorch" },
  { icon: Workflow, title: "AI Agents & MCP", desc: "Model Context Protocol servers, multi-agent orchestration, Gmail/Calendar automation, and tool-use architectures" },
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
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold">What I specialize in</h2>
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
              <h3 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
