import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "../components/Link";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navlinks = ["Home", "About", "Skills", "Projects", "Contact"];
  const navbarBackground = isTopOfPage ? "" : "shadow-lg bg-ghostWhite";

  return (
    <nav className={`${navbarBackground} w-full fixed top-0 z-30`}>
      <div className="container mx-auto flex justify-between items-center px-2 py-4">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-blue text-white font-bold">
            SC
          </div>
          <p className="text-xl">Shibo Chen</p>
        </div>

        {/* Right Side */}
        <div className="sm:flex justify-between gap-14 hidden">
          {navlinks.map((page, idx) => {
            return (
              <Link
                key={idx}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </div>

        {/* MENU ICON */}
        <FaBars
          className="sm:hidden cursor-pointer text-3xl"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        />
      </div>

      {/* MENU POP-UP */}
      {isMenuToggled && (
        <div className="fixed w-[300px] h-full right-0 bottom-0 bg-yellow-400">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-8 text-white text-3xl font-bold">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <FaTimes />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col gap-10 ml-[33%] text-xl">
            {navlinks.map((page, idx) => {
              return (
                <Link
                  key={idx}
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
