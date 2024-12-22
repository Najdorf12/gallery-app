import { useEffect, useRef } from "react";
import gsap from "gsap";
import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";
import arrow from "/arrow4.png";
import imgPlano1 from "/planos/00.jpg";
import imgPlano2 from "/planos/01.jpg";
import imgPlano3 from "/planos/02.jpg";

const planosBtns = [
  {
    name: "01 - LOREM IMPSUM",
    data1: "Lorem impsum dolor sit amet concsectur. Some random text",
    data2: "Lorem impsum",
    img: imgPlano1,
  },
  {
    name: "02 - LOREM IMSUM",
    data1: "Lorem impsum dolor sit amet concsectur. Some random text",
    data2: "Lorem impsum",
    img: imgPlano2,
  },
  {
    name: "03 - LOREM IMSUM ",
    data1: "Lorem impsum dolor sit amet concsectur. Some random text",
    data2: "Lorem impsum",
    img: imgPlano3,
  },
];

const Plano = () => {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const cardRefs = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
    });

    timeline
      .fromTo(titleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        subtitleRef.current,
        { x: 35, opacity: 0 },
        { x: 0, opacity: 1 },
        "<"
      )
      .fromTo(
        cardRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.4,
          ease: "power1.out",
        }, "-=.5"
      );
  }, []);

  return (
    <section className="flex flex-col bg-blackCustom overflow-hidden pb-12 lg:h-screen lg:pb-0 lg:justify-center gap-2">
      <TsParticlesBg />
      <Navbar />
      <article className="flex flex-col px-3 justify-start items-start relative z-50 w-full cursor-default mt-14  lg:items-center lg:justify-evenly lg:mt-10 lg:w-full lg:flex-row">
        <div>
          <h1
            ref={titleRef}
            className="august-bold leading-none text-zinc-300 text-8xl lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[12rem]"
          >
            PLANO
          </h1>
          <div className="w-40 h-[1px] bg-grayCustom mt-3 lg:w-[300px] lg:mt-6"></div>
        </div>
        <p
          ref={subtitleRef}
          className="text-sm relative text-grayCustom font-text2 font-medium text-balance mt-4 lg:text-sm 2xl:text-base lg:mt-6 max-w-[660px] 2xl:max-w-[700px]"
        >
          La propuesta está enfocada en llevar el proyecto “Galería Invisible” a
          un circuito de exhibición y venta en importantes galerías de arte
          contemporáneo en España. Buscando así, establecer una red de
          colaboración que permita la circulación y promoción de este grupo de
          artistas. Obtener la consolidación de sus trabajos en el medio y
          lograr una presencia estable en el mercado de arte europeo,
          promoviendo así su proyección internacional.
        </p>
      </article>
      <ul className="flex flex-col gap-7 relative z-50 w-full mt-12 px-3 justify-center lg:flex-row lg:px-4">
        {planosBtns?.map((plano, i) => (
          <li
            ref={(el) => (cardRefs.current[i] = el)}
            key={i}
            className="flex flex-col border-b border-stone-600 pb-4 max-w-[500px] 2xl:max-w-[550px] rounded-tr-lg rounded-br-md lg:pb-2"
          >
            <img
              className="w-full border-[2px] border-stone-600 h-full object-cover rounded-t-lg"
              src={plano?.img}
              alt="plano-img"
            />
            <article className="relative flex flex-col pt-4 pb-4 max-w-[650px] font-text2 px-1 lg:pb-0 lg:pt-3 xl:max-w-[600px]">
              <p className="text-whiteCustom flex items-center border-stone-600 rounded-l-lg august-bold text-4xl pl-2 border border-r-transparent py-[6px] md:text-5xl lg:py-[9px]">
                {plano?.name}
              </p>
              <div className="text-grayCustom text-balance mt-5 text-sm pl-2 lg:mt-3 lg:text-base">
                {plano?.data1}
              </div>
              <div className="absolute z-50 -bottom-4 right-2 flex gap-3 justify-center items-center md:relative md:self-end text-stone-500 lg:-bottom-1">
                <div className="w-32 h-[2px] bg-stone-500"></div>
                {plano?.name}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Plano;
