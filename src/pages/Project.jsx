import { useState, useRef } from "react";
import { gsap } from "gsap";
import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";
import arrow from "/arrow.png";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";

const Project = () => {
  const [activeArticle, setActiveArticle] = useState("project");
  const containerRef = useRef(null);

  const handleButtonClick = (newArticle) => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.7,
      onComplete: () => {
        setActiveArticle(newArticle);

        gsap.fromTo(
          containerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.7 }
        );
      },
    });
  };

  return (
    <section className="relative w-full h-screen z-40 flex flex-col justify-start  overflow-hidden">
      <TsParticlesBg />
      <Navbar />
      <div className="w-full z-[550] relative flex flex-col px-3 lg:pl-[5%] h-full">
        <div ref={containerRef} className="relative">
          {activeArticle === "project" && (
            <article className="flex flex-col justify-start items-start relative z-50 w-full cursor-default  mt-20">
              <h1 className="august-bold leading-[4.8rem] text-zinc-300  text-7xl max-w-[400px] lg:max-w-[600px] lg:leading-[8.1rem] lg:text-[8rem] 2xl:text-[10rem]">
              Voces gráficas de <span className="text-redCustom">Valpo</span> en Europa
              </h1>
              <p className="text-sm mt-3 text-zinc-500 lg:mt-6 lg:text-lg">
              Arte Gráfico / Pintura / Cultura / Poética Urbana
              </p>
              <p className="text-sm text-grayCustom font-text2 font-medium text-balance mt-4 max-w-[800px]   lg:mt-5 lg:text-base 2xl:text-xl">
                La propuesta está enfocada en llevar el proyecto “Galería
                Invisible” a un circuito de exhibición y venta en importantes
                galerías de arte contemporáneo en España. Buscando así,
                establecer una red de colaboración que permita la circulación y
                promoción de este grupo de artistas. Obtener la consolidación de
                sus trabajos en el medio y lograr una presencia estable en el
                mercado de arte europeo, promoviendo así su proyección
                internacional.
              </p>
              <div className="flex justify-start items-center gap-9 mt-9 lg:gap-10 z-50 relative">
                <button
                  onClick={() => handleButtonClick("about")}
                  className="flex justify-center items-center gap-3 text-whiteCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg hover:scale-105 hover:text-whiteCustom duration-500"
                >
                  SOBRE NOSOTROS
                  <img src={arrow} alt="arrow" className="w-3" />
                </button>
                <button
                  onClick={() => handleButtonClick("whatWeDo")}
                  className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg hover:scale-105 hover:text-whiteCustom duration-500"
                >
                  QUE HACEMOS?
                  <img src={arrow} alt="arrow" className="w-3" />
                </button>
              </div>
            </article>
          )}
          {activeArticle === "whatWeDo" && (
            <WhatWeDo handleButtonClick={handleButtonClick} />
          )}

          {activeArticle === "about" && (
            <About handleButtonClick={handleButtonClick} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
