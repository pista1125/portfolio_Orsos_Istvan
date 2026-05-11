import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, GraduationCap, School, BookOpen, Lightbulb, Users, BarChart3, MessageSquare, Award } from 'lucide-react';
import { Button } from './ui/button';

interface SlideProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

const Slide = ({ title, subtitle, content, icon }: SlideProps) => (
  <div className="flex flex-col h-full w-full p-8 md:p-16 bg-white relative overflow-hidden">
    {/* Decorative Background Elements */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full -ml-48 -mb-48 blur-3xl" />
    
    <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,100 C0,44.77 44.77,0 100,0 C155.23,0 200,44.77 200,100 C200,155.23 155.23,200 100,200 C44.77,200 0,155.23 0,100 Z" fill="currentColor" className="text-primary" />
      </svg>
    </div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center gap-6 mb-10">
        {icon && (
          <div className="p-4 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20">
            {React.cloneElement(icon as React.ReactElement, { size: 40 })}
          </div>
        )}
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <div className="flex items-center gap-2 mt-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <p className="text-xl text-primary font-bold uppercase tracking-widest">{subtitle}</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex-1 text-gray-700 leading-relaxed space-y-6 text-xl">
        {content}
      </div>
    </div>
  </div>
);

const Presentation = ({ onClose }: { onClose?: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideProps[] = [
    {
      title: "Pedagógus I. Minősítési Portfólió",
      subtitle: "Szakmai bemutatkozás és védés",
      icon: <GraduationCap size={32} />,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-black text-primary drop-shadow-sm">Orsós István</h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-primary/20" />
              <p className="text-2xl md:text-3xl text-gray-500 font-medium tracking-wide">Okleveles matematika- és fizikatanár</p>
              <div className="h-px w-16 bg-primary/20" />
            </div>
          </div>
          <div className="p-10 bg-primary/5 rounded-[2rem] border-2 border-primary/10 w-full max-w-3xl shadow-inner relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <p className="text-2xl font-bold text-gray-800 mb-3">Mozsgói Lengyeltóti János Általános Iskola</p>
            <p className="text-xl text-primary/80 italic leading-relaxed font-medium">
              „A legjobb tanár éppen az, aki lassanként feleslegessé teszi magát.”
            </p>
          </div>
          <div className="text-lg font-bold text-gray-300 tracking-[0.2em] uppercase">2026. május</div>
        </div>
      )
    },
    {
      title: "Szakmai utam és mérföldkövek",
      subtitle: "Tanulmányok és kezdetek",
      icon: <BookOpen size={32} />,
      content: (
        <ul className="space-y-6 list-disc pl-6">
          <li><strong>Oklevél:</strong> Pécsi Tudományegyetem (PTE) - Matematika-fizika osztatlan tanári szak.</li>
          <li><strong>Pályakezdés:</strong> 2020-ban kezdtem el tanítani óraadóként, jelenleg a Mozsgói Általános Iskola tagja vagyok.</li>
          <li><strong>Szakmai hitvallás:</strong> A 21. századi kihívásokra választ adó, gyermekközpontú és tapasztalati alapú oktatás.</li>
          <li><strong>Folyamatos fejlődés:</strong> Aktív részvétel konferenciákon (ONK, HUCER) és kutatási projektekben.</li>
        </ul>
      )
    },
    {
      title: "Társadalmi szerepvállalás",
      subtitle: "Mentorálás és esélyteremtés",
      icon: <Users size={32} />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary italic">Tanítsunk Magyarországért!</h3>
            <p>3 év mentori munka és 1 év mentornagyköveti tevékenység hátrányos helyzetű tanulókkal.</p>
            <p>Fókuszban: Differenciált bánásmód, személyes motiváció felkeltése, pályaorientáció.</p>
          </div>
          <div className="space-y-4 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <h3 className="text-xl font-bold">Wlislocki Henrik Szakkollégium</h3>
            <p>Aktív tagság, kutatási projektek: „Diversity and Inclusion in Higher Education”.</p>
            <p>Nemzetközi tapasztalat: Terepmunka Barcelonában, konferencia-előadás Szarajevóban (angol nyelven).</p>
          </div>
        </div>
      )
    },
    {
      title: "Az intézmény bemutatása",
      subtitle: "Dél-Zselic Általános Iskola Mozsgói Tagintézménye",
      icon: <School size={32} />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-medium">Egy családias hangulatú, „nyugalom szigete” faluhelyen.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <span className="text-3xl font-bold text-primary">73</span>
              <p className="text-sm">Összes tanuló</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <span className="text-3xl font-bold text-primary">15</span>
              <p className="text-sm">Pedagógus</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <span className="text-3xl font-bold text-primary">2005</span>
              <p className="text-sm">Nemzetiségi iskola (német)</p>
            </div>
          </div>
          <ul className="space-y-2 list-disc pl-6">
            <li>Erős német nemzetiségi identitás és hagyományőrzés (Márton-nap, advent).</li>
            <li>Heterogén tanulócsoportok (HH, HHH, SNI, BTMN és külföldi - holland diákok).</li>
            <li>Esélyegyenlőség és befogadó szemlélet a mindennapokban.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Portfólió fókuszterületek",
      subtitle: "Tudatos tervezés és megvalósítás",
      icon: <Lightbulb size={32} />,
      content: (
        <div className="space-y-8">
          <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-900 mb-2">5. osztály: Negatív számok</h3>
            <p>Absztrakt fogalmak bevezetése életszerű példákon keresztül (hőmérséklet, tartozás-vagyon). Konstruktív tanuláselmélet alkalmazása.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-900 mb-2">6. osztály: Oszthatósági szabályok</h3>
            <p>Felfedeztető tanulás, logikus következtetések. Szabályok alkotása saját megfigyelések alapján.</p>
          </div>
          <p className="italic text-center text-gray-500">„Nem szabályokat magolunk, hanem összefüggéseket fedezünk fel.”</p>
        </div>
      )
    },
    {
      title: "Innováció: 3D nyomtatás a tanításban",
      subtitle: "Kézzelfogható matematika",
      icon: <Award size={32} />,
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold text-primary">Saját készítésű törtkészlet</h3>
            <p className="text-xl">
              A 3D nyomtatás lehetővé tette, hogy olyan egyedi eszközt hozzak létre, amely pontosan illeszkedik a tantervhez és a tanulók igényeihez.
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li><strong>Szenzoros élmény:</strong> A gyerekek fizikailag is kézbe vehetik az absztrakt fogalmakat.</li>
              <li><strong>Hibajavítás:</strong> A körszeletek pontos illeszkedése azonnali, tanár nélküli önellenőrzést tesz lehetővé.</li>
              <li><strong>Motiváció:</strong> A „helyben készült” eszközök növelik a diákok érdeklődését a technológia és a matek iránt.</li>
            </ul>
          </div>
          <div className="w-full md:w-2/5 p-8 bg-primary/5 rounded-[2rem] border-2 border-primary/10 flex flex-col justify-center space-y-6 shadow-inner">
            <div className="space-y-2">
              <h4 className="text-lg font-black text-primary uppercase tracking-tighter">Technikai adatok</h4>
              <div className="h-1 w-12 bg-primary/30 rounded-full" />
            </div>
            <div className="space-y-4 text-base italic text-gray-600">
              <p>• <strong>Anyaga:</strong> Környezetbarát, biológiailag lebomló PLA filament.</p>
              <p>• <strong>Gyártás:</strong> Egyedi tervezés Tinkercad-ben, saját 3D nyomtatóval előállítva.</p>
              <p>• <strong>Funkció:</strong> Törtek összehasonlítása, bővítése, egyszerűsítése és alapműveletek szemléltetése.</p>
              <p className="pt-4 font-bold text-primary/60 not-italic text-center underline decoration-dotted underline-offset-4">Az eszközt a védésre magammal hozom és bemutatom.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Digitális kompetencia és IKT",
      subtitle: "Modern eszközök a matematika órán",
      icon: <BarChart3 size={32} />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-purple-50 rounded-xl border border-purple-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">K</div>
            <h3 className="font-bold text-purple-900 text-lg">Kahoot! & Quizizz</h3>
            <p className="text-sm">Játékos, versenyalapú visszacsatolás és ismétlés.</p>
          </div>
          <div className="p-6 bg-pink-50 rounded-xl border border-pink-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">W</div>
            <h3 className="font-bold text-pink-900 text-lg">Wordwall</h3>
            <p className="text-sm">Interaktív feladatsorok a gyakorláshoz és differenciáláshoz.</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">G</div>
            <h3 className="font-bold text-orange-900 text-lg">GeoGebra</h3>
            <p className="text-sm">Dinamikus szemléltetés és abszolút érték modellezése.</p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">T</div>
            <h3 className="font-bold text-indigo-900 text-lg">Tinkercad</h3>
            <p className="text-sm">Saját 3D eszközök tervezése és digitális kultúra integrálása.</p>
          </div>
        </div>
      )
    },
    {
      title: "Válasz az 1. kérdésre",
      subtitle: "Tanórán kívüli tapasztalatok és iskolai programok",
      icon: <MessageSquare size={32} />,
      content: (
        <div className="space-y-4">
          <p className="font-bold italic bg-gray-100 p-4 rounded">„Hogyan illeszti be pedagógiai munkájába a tanórán kívüli tapasztalatokat? Milyen iskolai programok szervezésében működött közre?”</p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Mentorprogramok:</strong> A „Tanítsunk Magyarországért” során szerzett tapasztalatokat beépítem a HH/HHH tanulók egyéni támogatásába.</li>
            <li><strong>Szakmai kutatások:</strong> Az egyetemi szakkollégiumi munka (Wlislocki Henrik) tudatosságot adott az inkluzív oktatáshoz.</li>
            <li><strong>Iskolai rendezvények:</strong> Aktív közreműködés a Márton-napi lámpás felvonuláson, az iskolai szavalóversenyek (Zselic Hangjai) szervezésében és sportnapokon.</li>
            <li><strong>Töprengő Klub:</strong> Tehetséggondozás keretében versenyfelkészítés és logikai játékok délutáni foglalkozásként.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Válasz a 2. kérdésre",
      subtitle: "Értékelési módszerek és személyiségfejlődés",
      icon: <MessageSquare size={32} />,
      content: (
        <div className="space-y-4">
          <p className="font-bold italic bg-gray-100 p-4 rounded">„Értékelési módszerei hogyan hatnak a tanulók személyiségének fejlődésére?”</p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Formatív szemlélet:</strong> Nem csupán jegyeket adok, hanem folyamatosan visszacsatolok. A hibára „debuggolandó” (javítandó) feladatként tekintünk.</li>
            <li><strong>Pozitív megerősítés:</strong> „Piros aláírások” az órai aktivitásért, melyek növelik az önbizalmat és a belső motivációt.</li>
            <li><strong>Sikerélmény biztosítása:</strong> A differenciált értékeléssel mindenki a saját képességeihez mérten érhet el sikert, ami javítja az énképüket.</li>
            <li><strong>Önértékelés:</strong> Segítek nekik felismerni saját fejlődésüket, így reálisabb önismeretet szereznek.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Válasz a 3. kérdésre",
      subtitle: "Tanulók bevonása a tervezésbe",
      icon: <MessageSquare size={32} />,
      content: (
        <div className="space-y-4">
          <p className="font-bold italic bg-gray-100 p-4 rounded">„Miként tudja megvalósítani a gyermekek bevonását a tervezésbe? Ötleteik mennyire válnak részévé a folyamatnak?”</p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Közös szabályalkotás:</strong> A tanév elején együtt alkottuk meg a „feltartott kéz – csend” jelzést és a kooperatív munka kereteit.</li>
            <li><strong>Választható feladatok:</strong> A differenciált órákon a diákok gyakran maguk választhatnak nehézségi szintet, így felelősséget vállalnak a tanulásukért.</li>
            <li><strong>Reflexió:</strong> Minden téma végén megbeszéljük, mi volt a legérdekesebb, mire lenne szükségük a jövőben – ezeket beépítem a következő tervezési ciklusba.</li>
            <li><strong>Felfedeztetés:</strong> A szabályokat ők „alkotják meg” megfigyelés után, így a tananyag az ő szellemi termékükké válik.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Válasz a 4. kérdésre",
      subtitle: "Sokszínűség és értékrend",
      icon: <MessageSquare size={32} />,
      content: (
        <div className="space-y-4">
          <p className="font-bold italic bg-gray-100 p-4 rounded">„Hogyan alakítja az eltérő hátterű gyerekek értékrendjét? Megismerteti-e velük a különböző kultúrákat?”</p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Inkluzív légkör:</strong> Az iskolánk német nemzetiségi jellege eleve nyitottságra nevel. A Márton-nap és a húsvéti hagyományok közös megélése alapvető.</li>
            <li><strong>Holland diákok:</strong> A nálunk tanuló holland diákok számára angol/magyar szakkifejezéseket használunk, így mindenki látja az interkulturális párbeszéd értékét.</li>
            <li><strong>Empátia fejlesztése:</strong> A heterogén csoportokban való munka során a tanulók megtanulják segíteni egymást (pl. „segítő kezek” elve).</li>
            <li><strong>Tolerancia:</strong> Matematikai példákban is megjelenítek különböző élethelyzeteket, elősegítve a szociális érzékenységet.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Válasz az 5. kérdésre",
      subtitle: "Értékelési rendszer és eszközök",
      icon: <MessageSquare size={32} />,
      content: (
        <div className="space-y-4">
          <p className="font-bold italic bg-gray-100 p-4 rounded">„Ismertesse értékelési rendszerét! Milyen mérőeszközöket használ? Saját vagy online feladatlapokat?”</p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Komplex rendszer:</strong> Diagnosztikus bemeneti mérés, folyamatos formatív visszajelzés és szummatív témazáró dolgozatok.</li>
            <li><strong>Saját fejlesztés:</strong> Gyakran használok saját készítésű feladatsorokat, melyeket a konkrét csoport szintjéhez igazítok. 3D nyomtatott eszközeim (törtkészlet) mérőeszközként is szolgálnak a megértés ellenőrzéséhez.</li>
            <li><strong>Digitális és papír:</strong> Vegyesen alkalmazom. A Wordwall és Kahoot kiváló a gyors, digitális ellenőrzésre, míg a füzetben végzett munka a precizitást fejleszti.</li>
            <li><strong>„Kis ötös” rendszer:</strong> Motivációs pontrendszer az aktív és pontos órai munkáért.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Válasz a 6. kérdésre",
      subtitle: "Tájékoztatás és kommunikáció",
      icon: <MessageSquare size={32} />,
      content: (
        <div className="space-y-4">
          <p className="font-bold italic bg-gray-100 p-4 rounded">„Hogyan ismerteti meg az értékelést a szülőkkel és tanulókkal? Milyen időközönként tájékoztatja őket?”</p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Átláthatóság:</strong> A követelményeket és az értékelési szempontokat (pl. pontozás) minden téma elején tisztázzuk a tanulókkal.</li>
            <li><strong>Önértékelő kártyák:</strong> A diákok maguk is reflektálnak a munkájukra, amit hazavisznek és megmutathatnak a szüleiknek.</li>
            <li><strong>Szülői tájékoztatás:</strong> A Kréta felületén túl rendszeres visszajelzés szülői értekezleteken és fogadóórákon. SNI tanulók esetében sűrűbb, személyre szabott kommunikáció a nevelőszülőkkel.</li>
            <li><strong>Formatív szöveges visszajelzés:</strong> A dolgozatok mellé gyakran írok biztató, javító szándékú megjegyzéseket.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Összegzés és jövőkép",
      subtitle: "Az élethosszig tartó tanulás jegyében",
      icon: <Award size={32} />,
      content: (
        <div className="space-y-6">
          <p className="text-xl italic">„A tanítás nem csak munka, hanem hivatás, mely folyamatos megújulást igényel.”</p>
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 space-y-4">
            <h3 className="text-xl font-bold">Tervezett fejlődési irányok:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mesterpedagógus fokozat:</strong> Szakmai innovációk megosztása tágabb körben.</li>
              <li><strong>Digitális fejlesztés:</strong> Saját digitális tananyagok és interaktív modulok bővítése.</li>
              <li><strong>Tehetséggondozás:</strong> A specifikus eszköztár elmélyítése a logikai fejlesztésben.</li>
            </ul>
          </div>
          <p className="text-center font-bold text-primary text-2xl mt-8">Köszönöm a megtisztelő figyelmet!</p>
        </div>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Top Action Bar */}
      <div className="absolute top-6 right-6 z-10 flex gap-3">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleFullscreen} 
          className="rounded-full shadow-sm hover:bg-gray-100 hidden md:flex"
          title="Teljes képernyő"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => onClose ? onClose() : window.history.back()} 
          className="rounded-full shadow-sm hover:bg-gray-100"
          title="Bezárás"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-gray-100 w-full">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden bg-gray-50/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full w-full"
          >
            <Slide {...slides[currentSlide]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer / Navigation */}
      <div className="p-6 bg-white border-t flex items-center justify-between shadow-[0_-4px_30px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-6">
          <div className="text-xs font-black text-primary px-4 py-1.5 bg-primary/10 rounded-full uppercase tracking-[0.2em] border border-primary/20">
            Pedagógus I. Portfólió
          </div>
          <div className="text-sm font-bold text-gray-400 font-mono">
            DIA {currentSlide + 1} / {slides.length}
          </div>
        </div>
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className="rounded-2xl px-10 border-2 hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all duration-300"
          >
            <ChevronLeft className="mr-2 h-5 w-5" /> Előző
          </Button>
          <Button 
            variant="default" 
            size="lg" 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1}
            className="rounded-2xl px-10 font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 scale-105 active:scale-100"
          >
            Következő <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
