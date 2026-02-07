import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const education = [
  {
    period: "2016 – 2025",
    title: "Pécsi Tudományegyetem – Természettudományi Kar",
    desc: "Matematika – Fizika osztatlan tanári szak, Mester diploma. Végzés: 2025 június.",
  },
  {
    period: "2010 – 2016",
    title: "Dráva Völgye Középiskola / Vízügyi Technikum",
    desc: "Környezetvédő és Vízgazdálkodó Technikusi végzettség.",
  },
];

const experience = [
  {
    period: "2023 – 2024",
    title: "Szakképző iskola, Barcs",
    desc: "Fizika és Matematika tantárgy oktatása óraadóként.",
  },
  {
    period: "2020 – 2021",
    title: "Gandhi Gimnázium, Technikum, Kollégium",
    desc: "Fizika és Matematika tantárgy oktatása óraadóként.",
  },
  {
    period: "2019 – 2020",
    title: "Radnóti Miklós Közgazdasági Technikum, Pécs",
    desc: "Fizika és Matematika tantárgy oktatása óraadóként.",
  },
];

const mentoring = [
  {
    title: "Tanítsunk Magyarországért",
    desc: "Általános iskolás diákok mentorálása, mentornagykövetként a program népszerűsítése.",
  },
  {
    title: "PTE Szinapszis Mentorprogram",
    desc: "Középiskolás diákok mentorálása, egyetemre felkészítés – 5 évig.",
  },
  {
    title: "HÖOK Mentorprogram",
    desc: "Egyetemista hallgatók segítése az első tanévükben.",
  },
];

const skills = [
  "Python", "Tinkercad & 3D nyomtatás", "Scratch", "Microsoft Office",
  "Drónpilóta (A2)", "Angol középszint",
];

type TimelineItemProps = {
  icon: React.ReactNode;
  period?: string;
  title: string;
  desc: string;
  index: number;
};

const TimelineItem = ({ icon, period, title, desc, index }: TimelineItemProps) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex gap-4"
  >
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="w-px flex-1 bg-border mt-2" />
    </div>
    <div className="pb-8">
      {period && (
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          {period}
        </span>
      )}
      <h4 className="text-lg font-semibold text-foreground mt-1">{title}</h4>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </div>
  </motion.div>
);

const ResumeSection = () => {
  return (
    <section id="oneletrajz" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Karrierem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Önéletrajz</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <GraduationCap size={24} className="text-primary" /> Tanulmányok
            </h3>
            {education.map((item, i) => (
              <TimelineItem
                key={item.title}
                icon={<GraduationCap size={18} />}
                period={item.period}
                title={item.title}
                desc={item.desc}
                index={i}
              />
            ))}

            <h3 className="text-2xl font-bold text-foreground mb-8 mt-4 flex items-center gap-2">
              <Briefcase size={24} className="text-primary" /> Tanítási tapasztalat
            </h3>
            {experience.map((item, i) => (
              <TimelineItem
                key={item.title}
                icon={<Briefcase size={18} />}
                period={item.period}
                title={item.title}
                desc={item.desc}
                index={i}
              />
            ))}
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Heart size={24} className="text-primary" /> Mentorprogramok
            </h3>
            {mentoring.map((item, i) => (
              <TimelineItem
                key={item.title}
                icon={<Heart size={18} />}
                title={item.title}
                desc={item.desc}
                index={i}
              />
            ))}

            <h3 className="text-2xl font-bold text-foreground mb-8 mt-4 flex items-center gap-2">
              <Award size={24} className="text-primary" /> Készségek
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
