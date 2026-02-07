import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Matematika & Fizika Tanár
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-6">
            Orsós
            <br />
            <span className="italic text-primary">István</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
            Elhivatott matematikus és fizikus, aki szenvedéllyel oktat és mentorál.
            Célom, hogy tudásommal és tapasztalataimmal minél több embernek segíthessek
            a fejlődésben és az önmegvalósításban.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="/Orsos_Istvan_oneletrajz.pdf" download>
                <Download size={16} />
                Önéletrajz letöltése
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#kontakt">
                <Mail size={16} />
                Kapcsolat
              </a>
            </Button>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/pista1125" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/orsosistvan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
              <img
                src={profileImg}
                alt="Orsós István profilkép"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-semibold shadow-lg">
              PTE 2025
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
