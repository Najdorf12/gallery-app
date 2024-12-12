import { Link } from "react-router-dom";

const CardsHome = ({ artist }) => {
  return (
    <Link to={`/${artist?.id}`}>
      <div className="relative z-50 border-l-[2px] border-b-[2px] border-zinc-700 w-[180px] rounded-sm h-[114px] pl-3 pt-2  lg:pl-3 lg:w-[220px] lg:h-[140px] xl:w-[237px] xl:h-[145px]  2xl:w-[280px] 2xl:h-[167px] hover:border-white duration-500 cursor-pointer">
        <figure>
          <img
            src={artist?.icon}
            alt="icon"
            className="w-10 h-10 object-cover object-center rounded-full lg:w-12 lg:h-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16"
          />
        </figure>
        <article className="text-sm mt-4  md:text-balance lg:text-base xl:mt-5 xl:text-lg 2xl:mt-6  2xl:text-lg">
          <h6 className="text-whiteCustom font-text font-medium text-lg  xl:text-xl 2xl:text-2xl">
            {artist?.name}
          </h6>
          <p className="text-[13px] text-stone-500 font-text2 leading-3 lg:text-base lg:leading-4 2xl:text-lg ">
            {artist?.content}
          </p>
        </article>
      </div>{" "}
    </Link>
  );
};

export default CardsHome;
