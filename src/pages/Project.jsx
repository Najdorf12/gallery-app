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
            <article className="flex flex-col justify-start items-start relative z-50 w-full cursor-default lg:max-w-[60%] mt-20">
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
              <div className="flex justify-start items-center gap-9 mt-9 lg:gap-10 z-50 relative">
                <button
                  onClick={() => handleButtonClick("about")}
                  className="flex justify-center items-center gap-3 text-whiteCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg hover:scale-105 hover:text-whiteCustom duration-500"
                >
                  ABOUT US
                  <img src={arrow} alt="arrow" className="w-3" />
                </button>
                <button
                  onClick={() => handleButtonClick("whatWeDo")}
                  className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg hover:scale-105 hover:text-whiteCustom duration-500"
                >
                  WHAT WE DO
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
