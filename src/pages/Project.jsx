import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";
import arrow from "/arrow.png";

const Project = () => {
  return (
    <section className="relative w-full h-[100dvh] z-40 flex flex-col pt-28 justify-start bg-blackCustom overflow-hidden">
      <TsParticlesBg />
      <Navbar />
      <div className="w-full z-[550] relative flex flex-col  px-3">
        <article className="flex flex-col justify-start items-start relative z-50  w-full cursor-default">
          <h1 className="august-bold leading-none text-zinc-300 text-7xl lg:text-[16rem] xl:text-[18rem] 2xl:text-[22rem]">
            Focused on digital <br />
            transforming brads
          </h1>
          <p className="text-sm mt-3 text-zinc-500">
            Website / E-Commerce / Digital Marketing / SEO / Digital
          </p>
          <p className="text-sm  text-grayCustom font-text2 font-medium  text-balance  mt-4 lg:text-base  xl:max-w-[1000px] 2xl:max-w-[1300px] xl:text-lg   2xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            facilis tempora est deserunt nulla doloremque ipsa molestias quasi
            magnam neque minima suscipit impedit animi labore ipsam, velit
            dolores accusamus iste. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>

          <div className="flex justify-start items-center gap-9 mt-9">
            <button
              className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1 
            pl-1"
            >
              ABOUT US
              <img src={arrow} alt="arrow" className="w-3" />
            </button>
            <button
              className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1
            pl-1"
            >
              WHAT WE DO
              <img src={arrow} alt="arrow" className="w-3" />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
