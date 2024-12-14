import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-[600] w-full flex justify-start  items-center pt-1 lg:justify-end lg:pt-2  2xl:pt-3 overflow-hidden">
      <Link to={"/"}>
        <div className="flex justify-center items-center lg:pr-6 2xl:pr-12">
          <i className="bx bxl-graphql text-3xl lg:text-5xl text-grayCustom hover:text-whiteCustom duration-700 cursor-pointer hover:scale-105 2xl:text-6xl"></i>
        </div>
      </Link>
      <ul className="absolute w-full flex flex-row  justify-center items-center gap-5 font-text font-medium text-grayCustom text-sm lg:-mt-3 lg:gap-12 lg:text-lg xl:gap-16 2xl:-mt-2">
        <li className="hover:text-whiteCustom duration-700 cursor-pointer hover:scale-110">
          Plano
        </li>
        <li className="hover:text-whiteCustom duration-700 cursor-pointer hover:scale-110">
          Registro
        </li>
        <Link to={"/proyecto"}>
          <li className="hover:text-whiteCustom duration-700 cursor-pointer hover:scale-110">
            Proyecto
          </li>
        </Link>
        <Link to={"/contacto"}>
          <li className="text-whiteCustom duration-700 cursor-pointer hover:scale-110">
            Contacto
          </li>
        </Link>
        {/*  <li className="hover:text-whiteCustom duration-700 cursor-pointer hover:scale-110">
          Sobre Nosotros
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
