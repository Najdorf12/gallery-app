import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-50 w-full flex justify-center items-center pt-2 lg:pt-2 2xl:pt-6 ">
      <ul className="w-full flex flex-row  justify-center items-center gap-5 font-text font-medium text-grayCustom text-sm  lg:gap-12 lg:text-lg xl:gap-16">
        <li className="hover:text-whiteCustom duration-700 cursor-pointer hover:scale-110">
          Plano
        </li>
        <li className="hover:text-whiteCustom duration-700 cursor-pointer hover:scale-110">
          Registro
        </li>
        <li className="hover:text-whiteCustom duration-700 cursor-pointer hover:scale-110">
          Proyecto
        </li>
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
