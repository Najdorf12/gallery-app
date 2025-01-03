import { useParams, Link } from "react-router-dom";
import Slider from "../components/Slider";
import GalleryArtist from "../components/GalleryArtist";
import  quote from "/quote.png";

const ArtistDetail = ({ artistsData }) => {
  const { id } = useParams();
  const artist = artistsData.find((artist) => artist.id === id);

  return (
    <section className="bg-whiteCustom pt-10 overflow-hidden lg:pt-6  relative z-50">
     {/*  <TsParticlesBg2 /> */}
      <Link to={"/"}>
        <nav className="absolute top-2 z-[700]  right-4 font-text font-semibold text-lg text-blackCustom border-l-[2px] border-redCustom py-[2px] pl-2 lg:right-9 lg:top-3 lg:text-xl 2xl:text-2xl 2xl:right-12 2xl:top-4">
          Volver
        </nav>
      </Link>

      <article className="flex flex-col text-balance text-start relative z-50">
        <h4 className="text-[8rem] leading-[8rem] font-medium august-bold text-blackCustom pl-4 z-[500]  lg:text-[10rem] lg:pl-9 lg:leading-none">
          {artist?.firstname} <br className="lg:hidden" />
          <span className="text-redCustom">{artist?.lastname}</span>
        </h4>
        <div className="mt-4 mb-6 lg:mt-6 ">
          <Slider obras={artist?.obras} />
        </div>
      </article>

      <article className="bg-blackCustom py-9 text-balance z-50 relative lg:flex lg:py-20 lg:justify-evenly lg:items-end">
        <div className="px-4 font-text2 font-normal flex flex-col max-w-[700px] lg:self-start">
          <p className="text-whiteCustom text-base 2xl:text-lg">
            {artist.fullName.toUpperCase()}
          </p>
          <p className="text-balance text-start pr-6 text-grayCustom mt-3 text-sm 2xl:text-base">
            {artist?.description}
          </p>
        </div>

        <div className="relative mt-24 ml-4 pl-3 pt-3 text-balance  font-normal text-grayCustom font-text text-3xl max-w-[700px] lg:pt-6 xl:text-4xl xl:mt-12 2xl:text-5xl  2xl:max-w-[900px]">
          <figure className="absolute -top-14 -left-2">
            <img src={quote} alt="quote-icon" className="w-16 lg:w-20" />
          </figure>
          <article className="h-full">
          El arte no reproduce lo visible, sino que {" "}
            <span className="text-redCustom">
            hace visible lo que no siempre lo es {" "}
            </span>
         <div className="text-base mt-2 flex justify-end w-[90%] xl:text-lg 2xl:mt-4 2xl:text-xl"> - Paul Klee -</div>
          </article>
        </div>
      </article>

      <section className="">
        {artist?.obras?.map((obra, i) => (
          <GalleryArtist key={i} obra={obra} reverse={i % 2 === 1} />
        ))}
      </section>

      <footer>
        <div className="mt-20 px-4 z-50 relative bg-blackCustom py-12 lg:pl-16 lg:max-w-[60%] lg:rounded-r-lg">
          <p className="text-sm font-text2 text-grayCustom text-balance xl:pr-12 2xl:text-base ">
            {artist?.description2}
          </p>
        </div>
        <div className=" py-12 text-balance text-start px-3 flex justify-end xl:py-20">
          <p className="max-w-[700px] font-text text-grayCustom text-2xl lg:text-4xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sed
            soluta dolorem totam odio deserunt quaerat assumenda veniam.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ArtistDetail;

/* Alvarex:cómic
Bisy:streat art 
Varas: ilustración 
Laura:grabado
Edu:pintura */

/* Claudio Álvarez Rodríguez (Alvarex / ComandanteOso) – Valparaíso, 1984

Claudio Álvarez Rodríguez, conocido en el ámbito artístico como Alvarex o ComandanteOso, es un destacado creador visual y narrador gráfico de Valparaíso, Chile. Su obra es particularmente reconocida por la creación del cómic “Osos Poéticos & Filosóficos”, proyecto que el 2006 es publicado por primera vez en formato blog y que ha evolucionado a través de varias publicaciones en revistas y fanzines. En 2019, la editorial Montacerdos lanzó “Osos Poéticos & Filosóficos: Peligro Demolición”, una recopilación que consolidó su propuesta visual y narrativa, marcada por un estilo ironico y provocador.

A lo largo de su carrera, Alvarex ha trabajado en una variedad de medios, destacándose como ilustrador de libros, cómics, afiches y portadas de discos. Ha colaborado con diversas organizaciones no gubernamentales, artistas, editoriales de renombre como Planeta, Ediciones B y Perro de Puerto, así como con compañías de teatro, llevando su arte a diferentes plataformas y públicos.

El trabajo de Claudio Álvarez se caracteriza por su exploración de técnicas gráficas repletos de una carga simbólica y narrativa que invita a la reflexión y cuestionamiento. Encuentra inspiración en una diversidad de disciplinas, como el cine, la narrativa gráfica, la música y la literatura, lo que le permite desarrollar una estética que trasciende los límites tradicionales de la ilustración, fusionando distintos lenguajes para crear universos visuales llenos de significado.

En su obra, Álvarez busca transmitir no solo historias, sino experiencias sensoriales que conecten emocionalmente con el espectador, invitándolo a adentrarse en mundos donde lo filosófico y lo poético se encuentran, ofreciendo una perspectiva crítica y creativa sobre la realidad.


Sebastián Varas Mackenzie

La obra de Sebastián, “Terrícola desde 1983”, no necesita colores; con tan solo el blanco y el negro, transporta al espectador a una aventura lúdica y un mundo lleno de fantasía. Los materiales son clásicos: la pluma, el pincel y la tinta sobre el papel, uno de los principales materiales que utiliza, se conjugan de manera perfecta en una obra minuciosamente acabada, con trazos infantiles que dan una identidad necesaria a cada escena. Esta técnica se ha proyectado a los muros mediante el uso, principalmente, de plumones en reemplazo de la pluma fuente, así como brochas, pinceles y rollizos, manteniendo la esencia de la obra pictórica tanto en su complejidad como en su estética.

El patrimonio y el viaje son los temas principales de su obra, siempre representados por algún objeto o medio de transporte, símbolo de movimiento y vida. Su naturaleza es inquieta, siempre en busca de nuevas aventuras. Y qué mejor que partir este viaje desde el Puerto amado, Valparaíso. Se invita a subir a un trolley, a un barco, a un ascensor, a un avión o a un trozo de cerro para recorrer juntos esta obra realizada con pluma, pincel, tinta, plumones, brochas, blanco y negro, que transporta a una aventura lúdica y un mundo lleno de fantasía, o como le gusta llamarlo, a un surrealismo porteño.

 */
