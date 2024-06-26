import { useState } from "react";

import { close, menu,telangana,cap,st, she } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleNavItemClick = (title) => {
    setActive(title);
    setToggle(false);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar px-3">
       <a href="/">
      <div className="flex items-center space-x-4">
       
      <h3 className="text-white text-[20px] font-bold">
        CAP
      </h3>
        <img src={cap} alt="Logo 1" className="w-12 h-auto" />
        <img src={telangana} alt="Logo 2" className="w-12 h-auto" />
        <img src={she} alt="Logo 2" className="w-12 h-auto" />
        <img src={st} alt="Logo 3" className="w-12 h-auto" />
        
      </div>
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ml-6">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${nav.id === "home" ? "mr-10 sm:mr-0" : "mr-10"}`}
            onClick={() => handleNavItemClick(nav.title)}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
       
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${nav.id === "Home" ? "mb-0" : "mb-4"}`}
                onClick={() => handleNavItemClick(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
