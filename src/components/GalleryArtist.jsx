import { useState } from "react";

const GalleryArtist = ({ obra }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="flex flex-col  lg:flex-row  my-16 lg:min-h-[80vh] lg:my-28 z-50 relative ">
        <figure
          className="w-full px-[2px] flex justify-center items-center lg:w-1/2 "
          onClick={() => handleImageClick(obra?.image)}
        >
          <img
            src={obra?.image}
            alt="img-gallery"
            className="object-contain object-center w-full h-full max-w-[500px] xl:max-w-[550px] cursor-pointer rounded-sm"
          />
        </figure>

        <section className="px-2  mt-6  lg:w-1/2 flex flex-col items-center lg:justify-center ">
          {/* 01 */}
          <div className="white max-w-[650px] xl:w-[700px] 2xl:w-[800px]">
            <div className="relative w-[200px] blackCustom  border-grayCustom pl-3 flex flex-col  pt-1 pb-2 rounded-md ">
              <i className="bx bx-fullscreen text-3xl -ml-1 text-redCustom lg:text-4xl"></i>
              <h6 className="text-grayCustom font-text2 text-base mt-6 lg:text-lg lg:mt-9">
                Philosophy
              </h6>
              <p className="text-balance leading-4 mt-1 pr-6 text-zinc-300 font-text2 text-sm lg:text-base">
                {obra?.description?.detail1}
              </p>
            </div>
            {/* 02 */}
            <div className="relative w-full grayCustom border-[1px] border-grayCustom pl-3 flex flex-col  pt-1 pb-2 rounded-md mt-1">
              <i className="bx bxs-color text-3xl -ml-1 text-whiteCustom lg:text-4xl"></i>
              <h6 className="text-whiteCustom font-text2 text-base mt-6 lg:text-lg">
                Anatomy
              </h6>
              <p className="text-balance leading-4 mt-1 pr-6 text-zinc-300 font-text2 text-sm lg:text-base">
                {obra?.description?.detail2}
              </p>
            </div>
            {/* 03 */}
            <div className="flex gap-1">
              <div className="relative w-[33.33%] whiteCustom  border-grayCustom pl-3 flex flex-col  pt-1 pb-2 rounded-md mt-1">
                <i className="bx bx-expand-alt  text-4xl -ml-1 text-redCustom lg:text-4xl"></i>
                <h6 className="text-grayCustom font-text2 text-base mt-6 lg:text-lg">
                  History
                </h6>
                <p className="text-balance leading-4 mt-1 pr-6 text-grayCustom font-text2 text-sm lg:text-base">
                  {obra?.description?.detail3}
                </p>
              </div>

              <div className="relative w-[33.33%] blackCustom  border-grayCustom pl-3 flex flex-col  pt-1 pb-2 rounded-md mt-1">
                <i className="bx bxs-paint text-4xl -ml-1 text-whiteCustom lg:text-4xl"></i>
                <h6 className="text-grayCustom font-text2 text-base mt-6 lg:text-lg">
                  History
                </h6>
                <p className="text-balance leading-4 mt-1 pr-6 text-grayCustom font-text2 text-sm lg:text-base">
                  {obra?.description?.detail4}
                </p>
              </div>
              <div className="relative w-[33.33%] redCustom  border-grayCustom pl-3 flex flex-col  pt-1 pb-2 rounded-md mt-1">
                <i className="bx bxs-color text-4xl -ml-1 text-grayCustom lg:text-4xl"></i>
                <h6 className="text-whiteCustom font-text2 text-base mt-6 lg:text-lg">
                  History
                </h6>
                <p className="text-balance leading-4 mt-1 pr-6 text-zinc-300 font-text2 text-sm lg:text-base">
                  {obra?.description?.detail5}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 w-full  bg-black bg-opacity-85 flex justify-center items-center z-50 overflow-hidden">
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={closeModal}
          >
            ✕
          </button>
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-[98vw] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryArtist;
