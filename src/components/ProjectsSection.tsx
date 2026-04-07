import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import ragProject from "@/assets/ramos-law.webp";
import baizelProject from "@/assets/baizel-project.png";
import naibleProject from "@/assets/rss-automation.jpg";
import autocityProject from "@/assets/fastguard.jpg";

const projects = [
  {
  title: "Ramos Law AI Document Processing",
  tagline: "Automated legal and insurance document intelligence pipeline",
  description:
    "Built an AI-powered backend pipeline for Ramos Law to process uploaded ZIP files containing nested folders of legal and insurance documents. The system extracts text from PDFs, Word, Excel, and image-based files using OCR, performs semantic keyword search, and sends relevant content to LLMs for structured.",
  features: [
    "ZIP upload processing with nested folder batch handling",
    "Multi-format text extraction (PDF, Word, Excel, images)",
    "OCR pipeline for scanned and image-based PDFs",
    "Semantic keyword search with LLM-based structured outputs",
    "Database storage for further legal and insurance modeling",
  ],
  stack: ["Python", "FastAPI", "OCR", "LLMs", "Database"],
  color: "from-primary to-[hsl(12,80%,55%)]",
  image: ragProject,
  
},
  {
    title: "Baizel – AI Site Selection Tool",
    tagline: "Agentic AI platform for real estate parcel search & analysis",
    description: "A fully automated platform for brokers and land developers to search parcels and perform complex analyses using Agentic AI. Reduces manual site selection from weeks to seconds with 95%+ accuracy, integrating Regrid, Dataplor, and Shovel data providers.",
    features: [
      "AWS Glue, PySpark with Sedona for terabyte-scale data ingestion",
      "Agentic AI with OpenAI, Anthropic, Gemini & AWS Bedrock",
      "PostGIS, pgvector, pg_trgm with optimized partitioning & indexes",
      "React + Mapbox with clustering, custom tiles & geoJSON tileservers",
    ],
    stack: ["FastAPI", "PostgreSQL", "AWS", "React", "Mapbox", "OpenAI"],
    color: "from-[hsl(220,80%,40%)] to-[hsl(240,70%,50%)]",
    image: baizelProject,
    link: "https://app.baizel.ai/",
  },
  {
  title: "RSS Feed Automation",
  tagline: "AI-driven social media content generation with automated publishing",
  description:
    "FastAPI-based automation system that ingests RSS feed content and generates engaging LinkedIn and Twitter posts using LLMs. Integrates automated scheduling workflows for predefined publishing times, enabling consistent multi-platform posting with reduced manual effort.",
  features: [
    "RSS feed ingestion and content extraction",
    "LLM-powered LinkedIn & Twitter post generation",
    "APScheduler-based scheduled publishing",
    "OAuth2.0 social platform integration",
  ],
  stack: [
    "Python",
    "LangChain",
    "OpenAI",
    "Gemini",
    "Hugging Face",
    "APScheduler",
    "REST API",
  ],
  color: "from-[hsl(30,90%,55%)] to-[hsl(350,80%,55%)]",
  image: naibleProject,
  link: "https://automationrss-608500751622.europe-west1.run.app/",
},
  {
  title: "Guard Service Automation",
  tagline: "End-to-end quotation and invoicing workflow automation",
  description:
    "Built a full-stack automation system for FastGuard Security Services to streamline customer onboarding, dynamic quotation generation, and instant invoice creation. Integrated Zoho CRM and Zoho Books APIs with real-time webhooks to automate the workflow from requirement capture to payment link delivery.",
  features: [
    "React frontend for customer requirement capture",
    "Flask backend with dynamic pricing logic",
    "Zoho CRM automated quotation generation",
    "Zoho Books invoice creation with payment links",
  ],
  stack: [
    "React",
    "Python",
    "Flask",
    "Zoho CRM",
    "Zoho Books",
    "REST API",
    "EC2 Scheduler",
  ],
  color: "from-[hsl(280,60%,50%)] to-[hsl(320,70%,50%)]",
  image: autocityProject,
  
},
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
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-left-top opacity-90" />
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
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-auto flex items-center gap-1.5 text-sm text-primary hover:underline font-medium">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
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
