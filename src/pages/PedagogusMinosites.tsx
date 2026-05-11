import React from "react";
import Presentation from "@/components/Presentation";

const PedagogusMinosites = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-white">
      <Presentation onClose={() => window.history.back()} />
    </div>
  );
};

export default PedagogusMinosites;
