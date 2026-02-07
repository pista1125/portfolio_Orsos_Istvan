import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Elérhetőség</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Kapcsolat</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Keress bátran, ha kérdésed van vagy együttműködésben gondolkodsz!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto"
        >
          <a
            href="mailto:pista1125@gmail.com"
            className="flex items-center gap-3 p-5 rounded-xl bg-card border hover:shadow-md transition-shadow"
          >
            <Mail className="text-primary" size={22} />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">pista1125@gmail.com</p>
            </div>
          </a>
          <a
            href="tel:+36307270793"
            className="flex items-center gap-3 p-5 rounded-xl bg-card border hover:shadow-md transition-shadow"
          >
            <Phone className="text-primary" size={22} />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Telefon</p>
              <p className="text-sm font-medium text-foreground">+36 30 727 0793</p>
            </div>
          </a>
          <a
            href="https://github.com/pista1125"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-xl bg-card border hover:shadow-md transition-shadow"
          >
            <Github className="text-primary" size={22} />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="text-sm font-medium text-foreground">pista1125</p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/orsosistvan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-xl bg-card border hover:shadow-md transition-shadow"
          >
            <Linkedin className="text-primary" size={22} />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium text-foreground">/in/orsosistvan</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
