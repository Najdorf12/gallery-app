import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";

const Registro = () => {
  return (
    <section className="relative  w-full h-[100dvh] lg:h-screen z-40 flex flex-col  bg-blackCustom overflow-hidden">
       <TsParticlesBg /> 
      <Navbar />
      <div className="w-full h-[100dvh]  z-[550] relative flex flex-col mt-20 pt-4 ">
        <article className="flex flex-col justify-center items-center relative z-50 px-3  w-full cursor-default">
          <h1 className="august-bold text-balance leading-[4rem] text-zinc-300 text-6xl ">
            Lorem ipsum dolor sit amet <span className="text-redCustom">consectetur adipisicing</span> elit. Nisi
            facilis tempora est deserunt
          </h1>
         
        </article>
      </div>
    </section>
  );
};

export default Registro;
