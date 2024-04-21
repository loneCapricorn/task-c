"use client";

import { navItems } from "../constants";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Dropdown from "../components/Dropdown";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobile = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center relative w-[85%] my-4 lg:mt-12 font-medium">
      <div className="font-grotesk text-[29.65px] font-bold leading-[140%] tracking-[-0.62px]">
        Website
      </div>
      <nav className="flex gap-12 items-center max-lg:hidden">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-dark-blue-900 hover:underline"
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4 max-lg:hidden">
        <a href="#" className="text-dark-blue-900 hover:underline">
          Профил
        </a>
        <button className="border-[2px] border-dark-blue rounded-lg p-3 text-dark-blue hover:text-main-white hover:bg-dark-blue">
          Заявка за пратка
        </button>
      </div>
      {!isMobileMenuOpen ? (
        <RxHamburgerMenu
          onClick={toggleMobile}
          className="cursor-pointer text-4xl lg:hidden"
        />
      ) : (
        <>
          <IoMdClose
            className="cursor-pointer text-4xl"
            onClick={toggleMobile}
          />
          <Dropdown />
        </>
      )}
    </header>
  );
};

export default Header;
