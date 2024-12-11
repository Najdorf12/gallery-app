const CardsHome = ({ artist }) => {
  return (
    <div className="relative z-50 border-l border-b border-zinc-600 w-[160px] h-[110px] pl-3 lg:pl-6 lg:w-[210px] lg:h-[144px] 2xl:w-[250px] 2xl:h-[160px]">
      <figure>
        <img src={artist?.icon} alt="icon" className="w-9 lg:w-12 xl:w-16 2xl:w-[72px]" />
      </figure>
      <article className="text-sm mt-4 font-text2 font-normal text-balance lg:text-base lg:mt-6 2xl:text-lg">
        <h6 className="text-whiteCustom">{artist?.name}</h6>
        <p  className="text-[12px] text-grayCustom lg:text-sm 2xl:text-base">{artist?.content}</p>
      </article>
    </div>
  );
};

export default CardsHome;
