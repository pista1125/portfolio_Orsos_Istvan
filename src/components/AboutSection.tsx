import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="rolam" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Bemutatkozás</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Rólam</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-6 text-muted-foreground leading-relaxed text-lg"
        >
          <p>
            A Pécsi Tudományegyetem Természettudományi Karán végeztem matematika–fizika osztatlan tanári szakon.
            Több éves tapasztalattal rendelkezem középiskolai tanításban, ahol fizikát és matematikát oktattam
            Pécsett, Barcson és más iskolákban.
          </p>
          <p>
            Az egyetemi évek alatt aktívan részt vettem mentorprogramokban: a Tanítsunk Magyarországért,
            a PTE Szinapszis és a HÖOK mentorprogramok keretében hátrányos helyzetű diákokat mentoráltam
            az általános iskolától az egyetemig. Mentornagykövetként is tevékenykedtem.
          </p>
          <p>
            Tagja voltam a Wlislocki Henrik Szakkollégiumnak, ahol kutatói munkát végeztem, és
            konferenciákon mutattam be eredményeimet. Emellett aktívan foglalkozom 3D nyomtatással
            és drónpilótaként is tevékenykedem.
          </p>
          <p>
            Célom, hogy a matematika és fizika iránti szenvedélyemet átadjam diákjaimnak, és segítsek
            nekik nem csak képleteket megtanulni, hanem a mögöttes összefüggéseket is megérteni.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
