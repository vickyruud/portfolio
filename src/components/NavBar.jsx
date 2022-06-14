import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo2.png";

const NavBar = () => {

  const [nav, setNav] = useState(false)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192F] text-gray-300">
      <div>
        <img src={Logo} alt="ak" style={{ width: "150px" }} />
      </div>

      {/* menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10">
        <FaBars />
      </div>
      {/* Mobile Menu */}
      <ul className=" hidden absolute top-0 left-0 w-full h-screen bg-[#0a192F] flex flex-col justify-center items-center ">
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default NavBar;
