import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-[600] w-full flex justify-center items-center pt-2 lg:pt-2 2xl:pt-6 ">
      <Link to={"/"}>
        <div className="absolute z-[650] left-3 top-1 flex justify-center items-center">
          <i className="bx bxl-graphql text-2xl lg:text-4xl text-grayCustom"></i>
        </div>
      </Link>
      <ul className="w-full flex flex-row  justify-center items-center gap-5 font-text font-medium text-grayCustom text-sm  lg:gap-12 lg:text-lg xl:gap-16">
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
