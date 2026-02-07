import { motion } from "framer-motion";
import { FileText, BookOpen, Users, FlaskConical, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    icon: <BookOpen size={28} />,
    title: "Pályakép reflexió",
    desc: "Személyes utazás a pedagóguspálya felé – a kompetenciák tudatos fejlesztése és önreflexió az egyetemi évek alatt.",
  },
  {
    icon: <FileText size={28} />,
    title: "Óraterv – Fizika",
    desc: "Modern technológiákkal támogatott fizika óraterv, ahol a diákok interaktívan kísérletezhetnek és felfedezhetnek.",
  },
  {
    icon: <FlaskConical size={28} />,
    title: "Töprengő Klub",
    desc: "Tehetséggondozás: versenyfeladatok megoldása és értékelése középiskolás diákokkal közösen.",
  },
  {
    icon: <FileText size={28} />,
    title: "Tudományos tevékenység",
    desc: "Kutatói munka a Wlislocki Henrik Szakkollégiumban – konferenciák és publikációk Európa-szerte.",
  },
  {
    icon: <Users size={28} />,
    title: "Mentorprogramok",
    desc: "Tanítsunk Magyarországért, Szinapszis és HÖOK: hátrányos helyzetű diákok mentorálása és felkészítése.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
            Szakmai munkám
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Tanári Portfólió</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            „A legjobb tanár éppen az, ki lassanként feleslegessé teszi magát." — George Orwell
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-border/50 bg-card">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <a href="/tanari_portfolio_Istvan_Orsos.docx" download>
              <Download size={18} />
              Teljes portfólió letöltése
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
