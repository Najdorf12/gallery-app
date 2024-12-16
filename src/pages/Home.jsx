import Navbar from "../components/Navbar";
import CardsHome from "../components/CardsHome";
import TsParticlesBg from "../components/TsParticlesBg";
import { artistsData } from "../data/artistsData";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = ({ artistData }) => {
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const lineRef2 = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 2, ease: "power3.out" },
    });
  
    // Animar las líneas simultáneamente
    timeline.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, transformOrigin: "center", duration: 1 }
    );
    timeline.fromTo(
      lineRef2.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, transformOrigin: "center", duration: 1 },
      "<" // Este operador asegura que ambas líneas se animen al mismo tiempo
    );
  
    // Animar el título
    timeline.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.5 },
      "-=0.5" // Ajusta para solapar con la animación previa
    );
  
    // Animar el párrafo de descripción
    timeline.fromTo(
      descriptionRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.5" // Ajusta para solapar con la animación previa
    );
  }, []);

  return (
    <main className="relative w-full h-[100dvh] lg:h-screen z-50 flex flex-col justify-center items-center overflow-hidden">
      <TsParticlesBg />
      <div className="w-full h-[100dvh] lg:h-screen z-[550] relative flex flex-col justify-evenly gap-6 items-center pt-6 ">
        <Navbar />
        <article className="flex flex-col justify-center items-center relative z-50  w-full cursor-default">
          <h1
            ref={titleRef}
            className="august-bold leading-none bg-gradient-to-b bg-clip-text text-transparent from-grayCustom via-grayCustom to-zinc-300 text-[5.6rem] px-2 text-center lg:text-[16rem] xl:text-[18.2rem] 2xl:text-[22rem]"
          >
            GALERÍA INVISIBLE
          </h1>
          <div className="text-stone-500 font-text2 mt-1 flex justify-center items-center gap-4 text-base lg:mt-3 lg:text-xl 2xl:text-2xl">
            <span
              ref={lineRef}
              className="w-20 h-[1px] bg-stone-600 lg:w-[400px] xl:w-[500px]"
            ></span>
            EXPOSICION COLECTIVA{" "}
            <span
              ref={lineRef2}
              className="w-20 h-[1px] bg-stone-600 lg:w-[400px] xl:w-[500px]"
            ></span>
          </div>
          <p
            ref={descriptionRef}
            className="text-sm  text-grayCustom font-text2 font-medium text-center text-pretty px-2 mt-2 lg:text-base lg:text-balance xl:max-w-[1500px] 2xl:max-w-[1500px] xl:text-lg  2xl:text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            facilis tempora est deserunt nulla doloremque ipsa molestias quasi
            magnam neque minima suscipit impedit animi labore ipsam, velit
            dolores accusamus iste. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </article>

        <section className="relative z-50  flex flex-wrap  justify-center items-center gap-x-5 gap-y-5 w-full lg:self-end  lg:gap-x-6 xl:gap-x-9 2xl:gap-x-14 ">
          {artistsData?.map((artist, i) => (
            <CardsHome key={i} artist={artist} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
