import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#171515] text-gray-300">
      <a href="#home">
        <img src={Logo} alt="ak" className="ml-[-40px] w-[150px]" />
      </a>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <a href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#about">
            About
          </a>
        </li>
        <li>
          <a href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects">
            Projects
          </a>
        </li>
        <li>
           <a href="#contact">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </button>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192F] flex flex-col justify-center items-center "
        }
      >
        <li  className="py-6 text-4xl">
          <a onClick={handleClick} href="#home">
            Home
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a onClick={handleClick} href="#about">
            About
          </a>
        </li>
        <li className="py-6 text-4xl">
        <a onClick={handleClick} href="#skills">
            Skills
          </a>
        </li>
        <li className="py-6 text-4xl">
         <a onClick={handleClick} href="#projects">
            Projects
          </a>
        </li>
        <li className="py-6 text-4xl">
            <a onClick={handleClick} href="#contact">
            Contact
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center  bg-blue-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/aprajitk/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center  bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/vickyruud"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center  bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:aprajit.k@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center  bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1QXUP30RD4E9iOy5R2PBOKBlvQuh3q3uk/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
      </ul>
      {/* Social Icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/aprajitk/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/vickyruud"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:aprajit.k@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1QXUP30RD4E9iOy5R2PBOKBlvQuh3q3uk/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
