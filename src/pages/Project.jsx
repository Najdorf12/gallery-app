import { useState, useRef } from "react";
import { gsap } from "gsap";
import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";
import arrow from "/arrow.png";

const Project = () => {
  const [activeArticle, setActiveArticle] = useState("about"); // Estado para controlar qué artículo se muestra
  const containerRef = useRef(null); // Referencia al contenedor para animar

  const handleButtonClick = (newArticle) => {
    // Animar salida
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setActiveArticle(newArticle); // Cambiar el artículo activo
        // Animar entrada
        gsap.fromTo(
          containerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 }
        );
      },
    });
  };

  return (
    <section className="relative w-full min-h-screen z-40 flex flex-col pt-28 justify-start bg-blackCustom overflow-hidden xl:pt-20 2xl:pt-28">
      <TsParticlesBg />
      <Navbar />
      <div className="w-full z-[550] relative flex flex-col px-3 lg:pl-[5%]">
        <div ref={containerRef} className="relative">
          {activeArticle === "about" && (
            <article className="flex flex-col justify-start items-start relative z-50 w-full cursor-default lg:max-w-[60%]">
              <h1 className="august-bold leading-none text-zinc-300 text-7xl lg:text-[8rem] 2xl:text-[10rem]">
                Focused on digital <br />
                transforming brands
              </h1>
              <p className="text-sm mt-3 text-zinc-500 lg:mt-6 lg:text-base">
                Website / E-Commerce / Digital Marketing / SEO / Digital
              </p>
              <p className="text-sm text-grayCustom font-text2 font-medium text-balance mt-4 lg:text-base lg:mt-6 max-w-[660px] xl:text-lg 2xl:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                facilis tempora est deserunt nulla doloremque ipsa molestias
                quasi magnam neque minima suscipit impedit animi labore ipsam,
                velit dolores accusamus iste. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </article>
          )}
          {activeArticle === "whatWeDo" && (
            <article className="flex flex-col justify-start items-start relative z-50 w-full cursor-default lg:max-w-[60%]">
              <h1 className="august-bold leading-none text-zinc-300 text-7xl lg:text-[8rem] 2xl:text-[10rem]">
                What we do
              </h1>
              <p className="text-sm mt-3 text-zinc-500 lg:mt-6 lg:text-base">
                Digital Strategy / Web Development / SEO / Marketing
              </p>
              <p className="text-sm text-grayCustom font-text2 font-medium text-balance mt-4 lg:text-base lg:mt-6 max-w-[660px] xl:text-lg 2xl:text-xl">
                Discover our unique approach to building robust digital
                solutions. We provide cutting-edge strategies to empower your
                brand online.
              </p>
            </article>
          )}
        </div>
        <div className="flex justify-start items-center gap-9 mt-9 lg:gap-10">
          <button
            onClick={() => handleButtonClick("about")}
            className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg"
          >
            ABOUT US
            <img src={arrow} alt="arrow" className="w-3" />
          </button>
          <button
            onClick={() => handleButtonClick("whatWeDo")}
            className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg"
          >
            WHAT WE DO
            <img src={arrow} alt="arrow" className="w-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
