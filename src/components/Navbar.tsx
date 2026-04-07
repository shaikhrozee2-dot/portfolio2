import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        scale: scrolled ? 0.92 : 1,
        top: scrolled ? 8 : 24,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-1/2 z-50"
      style={{ x: "-50%" }}
    >
      <nav
        className={`glass-nav px-2 py-2 flex items-center gap-1 transition-all duration-500 ${
          scrolled ? "shadow-lg shadow-primary/5" : ""
        }`}
      >
        <span className="px-4 font-bold text-lg text-foreground tracking-tight">SP</span>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200"
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("Contact")}
          className="hidden md:block ml-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Let's Talk
        </button>
        <button className="md:hidden px-3" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-card mt-2 p-4 flex flex-col gap-2 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
