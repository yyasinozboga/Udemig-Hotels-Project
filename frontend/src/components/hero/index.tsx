import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero bg-cover bg-center h-[20vh] w-[90vw] mx-auto grid place-items-center my-5 rounded-xl">
      <div className="flex flex-col items-center gap-5 text-white text-center">
        <h2 className="font-medium text-3xl">
          Tripster ile konaklama rezervasyonu yap
        </h2>

        <p className="text-lg">Dünya çapında 1,340,076 oda seni bekliyor!</p>
      </div>
    </div>
  );
};

export default Hero;
