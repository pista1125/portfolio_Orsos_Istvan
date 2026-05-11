import React, { useState, useEffect } from "react";
import Presentation from "@/components/Presentation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

const PedagogusMinosites = () => {
  const [showPresentation, setShowPresentation] = useState(false);
  const location = useLocation();

  // Handle hash or automatic start
  useEffect(() => {
    if (window.location.hash === "#presentation") {
      setShowPresentation(true);
    } else {
      setShowPresentation(false);
    }
  }, [location.hash]);

  const handleStart = () => {
    window.location.hash = "presentation";
    setShowPresentation(true);
  };

  const handleClose = () => {
    window.location.hash = "";
    setShowPresentation(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Pedagógus I. minősülési program</h1>
          <p className="text-xl text-muted-foreground">
            Ezen az oldalon megtekintheti a Pedagógus I. fokozat eléréséhez készített portfólióm bemutatását és a védéshez kapcsolódó prezentációt.
          </p>
        </div>
        
        <div className="relative group cursor-pointer overflow-hidden rounded-2xl border aspect-video bg-secondary/20 flex items-center justify-center transition-all hover:bg-secondary/30" 
             onClick={handleStart}>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.2c-.6-.6-.4-1.19.1-1.8l1.4-1.5c.33-.37.39-.92.14-1.35L20.2 4.1c-.25-.43-.8-.59-1.23-.38l-1.1.54c-.6.3-1.13.14-1.53-.35l-1.39-1.7a1.06 1.06 0 0 0-1.41-.3l-3.9 2.3c-.44.26-.59.82-.33 1.27l1.24 2.1c.25.43.81.59 1.24.38l1.1-.54c.6-.3 1.15-.15 1.54.34l1.39 1.7a1.06 1.06 0 0 0 1.4.3l3.9-2.3c.44-.26.59-.82.33-1.27l-1.24-2.1c-.25-.43-.81-.59-1.24-.38l-1.1.54c-.6.3-1.15.15-1.54-.34l-1.39-1.7a1.06 1.06 0 0 0-1.4-.3l-3.9 2.3c-.44.26-.59.82-.33 1.27l1.24 2.1c.25.43.81.59 1.24.38l1.1-.54c.6-.3 1.15.15 1.54.34l1.39 1.7a1.06 1.06 0 0 0 1.4.3l3.9-2.3c.44-.26.59-.82.33-1.27l-1.24-2.1"/></svg>
            </div>
            <h2 className="text-2xl font-bold">Prezentáció indítása</h2>
            <p className="text-muted-foreground font-medium">Kattintson ide a 15 diából álló bemutató elindításához</p>
          </div>
        </div>

        {showPresentation && (
          <Presentation onClose={handleClose} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PedagogusMinosites;
