import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-50 w-full flex justify-center items-center pt-2 lg:pt-4 2xl:pt-6 ">
      <ul className="w-full flex flex-row  justify-center items-center gap-6 font-text font-medium text-grayCustom text-sm  lg:gap-12 lg:text-lg xl:gap-16">
        <li className="hover:text-redCustom duration-500 cursor-pointer hover:scale-105">
          About
        </li>
        <li className="hover:text-redCustom duration-500 cursor-pointer hover:scale-105">
          Works
        </li>
        <li className="hover:text-redCustom duration-500 cursor-pointer hover:scale-105">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
