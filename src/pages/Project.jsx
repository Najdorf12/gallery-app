import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";
import arrow from "/arrow.png";

const Project = () => {
  return (
    <section className="relative w-full min-h-screen z-40 flex flex-col pt-28 justify-start bg-blackCustom overflow-hidden xl:pt-20 2xl:pt-28">
      <TsParticlesBg />
      <Navbar />
      <div className="w-full z-[550] relative flex flex-col  px-3 lg:pl-[5%]">
        <article className="flex flex-col justify-start items-start relative z-50  w-full cursor-default lg:max-w-[60%]">
          <h1 className="august-bold leading-none text-zinc-300 text-7xl lg:text-[8rem]  2xl:text-[10rem]">
            Focused on digital <br />
            transforming brads
          </h1>
          <p className="text-sm mt-3 text-zinc-500 lg:mt-6 lg:text-base">
            Website / E-Commerce / Digital Marketing / SEO / Digital
          </p>
          <p className="text-sm  text-grayCustom font-text2 font-medium  text-balance  mt-4 lg:text-base lg:mt-6 max-w-[660px] xl:text-lg 2xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            facilis tempora est deserunt nulla doloremque ipsa molestias quasi
            magnam neque minima suscipit impedit animi labore ipsam, velit
            dolores accusamus iste. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>

          <div className="flex justify-start items-center gap-9 mt-9 lg:gap-10">
            <button
              className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1 
            pl-1 lg:text-lg"
            >
              ABOUT US
              <img src={arrow} alt="arrow" className="w-3" />
            </button>
            <button
              className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1
            pl-1 lg:text-lg"
            >
              WHAT WE DO
              <img src={arrow} alt="arrow" className="w-3" />
            </button>
          </div>
        </article>
      </div>

      <div className="">

      </div>
    </section>
  );
};

export default Project;
