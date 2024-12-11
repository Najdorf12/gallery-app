const CardsHome = ({ artist }) => {
  return (
    <div className="relative z-50 border-l-[2px] border-b-[2px] border-zinc-700 w-[180px] rounded-sm h-[114px] pl-3 pt-2 lg:pl-3 lg:w-[220px] lg:h-[140px] xl:w-[237px] xl:h-[140px]  2xl:w-[280px] 2xl:h-[170px] hover:border-white duration-500 cursor-pointer">
      <figure>
        <img src={artist?.icon} alt="icon" className="w-9 lg:w-12 xl:w-12 2xl:w-16" />
      </figure>
      <article className="text-sm mt-4  md:text-balance lg:text-base xl:text-lg lg:mt-6 2xl:text-lg">
        <h6 className="text-whiteCustom font-text font-medium text-lg  lg:text-xl 2xl:text-2xl">{artist?.name}</h6>
        <p  className="text-[13px] text-stone-500 font-text2 leading-3 lg:text-base 2xl:text-lg ">{artist?.content}</p>
      </article>
    </div>
  );
};

export default CardsHome;
