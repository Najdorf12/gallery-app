import { useForm } from "react-hook-form";
import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    /*   try {
      const response = await fetch(
        "https://xioami-backend.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (response.ok) {
        console.log("Correo enviado:", result);
      } else {
        console.error("Error al enviar el correo:", result.error);
      }
    } catch (err) {
      console.error("Error en la solicitud:", err);
    } */
  };

  return (
    <>
      <section className="pt-20 w-full bg-white flex flex-col lg:flex-row lg:items:center lg:justify-center lg:pt-28 ">
        <TsParticlesBg />
        <Navbar />
        <article className="z-50 text-center self-center lg:text-start lg:pl-[9%] lg:self-start  2xl:pl-[12%]">
          <h6 className="text-8xl text-stone-300  font-medium august-bold md:text-9xl  lg:text-[10rem] xl:text-[14rem] 2xl:text-[16rem]">
            CONTACTO
          </h6>
          <p className="text-grayCustom font-text text-balance mt-5 text-sm px-2   lg:text-base lg:mt-7 2xl:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quis temporibus accusantium odit non dicta, optio dolores, ut fugiat
            autem ipsam maiores quas, ab perferendis soluta modi facere quia et?
          </p>
        </article>

        <section className="w-full flex flex-col justify-center items-center mt-16 pl-3 font-text2 relative z-50 lg:items-start  lg:mt-28 xl:mt-40 2xl:mt-56">
          <article className="z-50 px-3 text-balance max-w-[500px]">
            <div className="text-zinc-300  font-text2 text-start self-start text-xl xl:text-2xl 2xl:text-3xl">
              HABLEMOS AHORA
            </div>
            <div className="bg-grayCustom w-32 h-[2px] z-50 relative mt-2 xl:w-36 2xl:w-40"></div>
            <p
              style={{ animation: "appear 3s ease-out" }}
              className="text-start font-text text-zinc-400 text-sm mt-3  xl:text-base xl:mt-5 2xl:text-lg 2xl:mt-7"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              mollitia, non cumque vel culpa nesciunt.
            </p>
          </article>
          <div
            style={{ animation: "slideInFromLeft 1s ease-out" }}
            className="w-full relative   rounded-md  overflow-hidden flex flex-col   px-3  max-w-[500px]  "
          >
            <form method="POST" action="#" className="py-8 font-text  flex flex-col gap-7 xl:gap-8 2xl:gap-9">
              <div className="relative">
                <input
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-stone-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-stone-600"
                  required=""
                  id="email"
                  name="email"
                  type="email"
                />
                <label
                  className="absolute left-0 -top-3.5 text-grayCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-stone-600 peer-focus:text-sm"
                  for="email"
                >
                  Email 
                </label>
              </div>
              <div className="relative">
                <textarea
                  placeholder=""
                  className="peer h-10 pt-2 w-full border-b-2 border-stone-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-stone-600"
                  required=""
                  
                />
                <label
                  className="absolute left-0 -top-3.5 text-grayCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-stone-600 peer-focus:text-sm"
                  for="password"
                >
                  Escribe tu mensaje
                </label>
              </div>

              <button
                className="w-full py-2 px-4 border border-stone-500 hover:border-whiteCustom hover:text-whiteCustom rounded-md text-zinc-300  font-semibold transition duration-500"
                type="submit"
              >
                Enviar mensaje
              </button>
            </form>
            <div className="text-center text-gray-300">
              Don't have an account?
              <a className="text-grayCustom pl-2 hover:underline" href="#">
                Sign up
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
