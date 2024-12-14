import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <section className="relative  w-full h-[100dvh] lg:h-screen z-40 flex flex-col justify-center items-center bg-blackCustom overflow-hidden">
       <TsParticlesBg /> 
      <Navbar />
      <div className="w-full h-[100dvh]  z-[550] relative flex flex-col justify-evenly items-center pt-4 ">
        <article className="flex flex-col justify-center items-center relative z-50  w-full cursor-default">
          <h1 className="august-bold leading-none text-transparent bg-gradient-to-b bg-clip-text from-grayCustom via-grayCustom to-grayCustom text-9xl lg:text-[16rem] xl:text-[18rem] 2xl:text-[22rem]">
            CONTACTO
          </h1>
          <p className="text-sm  text-grayCustom font-text2 font-medium text-center text-pretty px-2 mt-4 lg:text-base lg:text-balance xl:max-w-[1000px] 2xl:max-w-[1300px] xl:text-lg  2xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            facilis tempora est deserunt nulla doloremque ipsa molestias quasi
            magnam neque minima suscipit impedit animi labore ipsam, velit
            dolores accusamus iste. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Contact;
