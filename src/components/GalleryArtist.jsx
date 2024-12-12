
const obrasData = [
  {
    obraName: "History",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    obraName: "History",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    obraName: "History",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    obraName: "History",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

const GalleryArtist = ({ images }) => {
  
  return (
    <section className="flex flex-col gap-4 lg:flex-row  py-1">
      <figure className="w-full px-2  flex justify-center items-center lg:w-1/2 ">
        <img
          src={images[0]}
          alt="img-gallery"
          className="object-cover object-center w-full h-full max-w-[500px] xl:max-w-[600px]"
        />
      </figure>
      <div className="w-full lg:w-1/2 flex justify-center items-center ">
        <div className="flex flex-wrap justify-center items-center gap-2 px-2 ">
          {obrasData?.map((obra, i) => (
            <div key={i} className="border-l-[2px] pl-2 border-whiteCustom h-[200px] w-[46%]">
              <p className="font-title text-base text-blackCustom lg:text-lg ">{obra?.obraName?.toLocaleUpperCase()}</p>
              <p  className="font-text text-sm text-stone-500 lg:text-base ">{obra?.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryArtist;
