import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Mail, Github, Linkedin, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
  <section id="contact" className="py-24 md:py-32" ref={ref}>
  <div className="section-container">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-3">
          Get In Touch
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's build something <span className="font-display italic text-gradient">beautiful</span>
        </h2>

        <p className="text-muted-foreground mb-10 max-w-md leading-relaxed">
          Have a project in mind? I specialize in designing modern, responsive and user-friendly websites. 
          Whether you need a portfolio, business website or UI design — let's work together and bring your ideas to life.
        </p>

        <div className="flex gap-4">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/rozee-shaikh-28555b23a/" },
            { icon: Phone, href: "tel:+918319605287" },
            { icon: Mail, href: "mailto:shaikhrozee2@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              className="w-12 h-12 rounded-xl bg-secondary/60 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        onSubmit={handleSubmit}
        className="glass-card p-8 space-y-5"
      >
        <div>
          <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
        >
          Send Message
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.form>

    </div>
  </div>
</section>
  );
};

export default ContactSection;
