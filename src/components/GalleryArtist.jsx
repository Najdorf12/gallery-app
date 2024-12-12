
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
    <section className="flex flex-col lg:flex-row bg-red-500">
      <figure className="w-full px-2 lg:w-1/2 bg-teal-500 flex justify-center items-center">
        <img
          src={images[0]}
          alt="img-gallery"
          className="object-cover object-center w-full h-full max-w-[500px]"
        />
      </figure>
      <div>
        <div className="flex flex-wrap justify-center items-center gap-2 px-2 ">
          {obrasData?.map((obra, i) => (
            <div key={i} className="border-l h-[200px] w-[46%]">
              <p>{obra?.obraName}</p>
              <p>{obra?.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryArtist;
