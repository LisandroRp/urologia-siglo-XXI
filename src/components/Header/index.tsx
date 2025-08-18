/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { HeaderItem } from "./HeaderItem";
import { MENU_LIST } from "@/features/home";
import { images } from "@/core/theme/images";

interface HeaderProps {
  fixed?: boolean;
  modalHeader?: boolean;
  isHidingDownloadHeader?: boolean;
}

export function Header({ fixed, modalHeader, isHidingDownloadHeader }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const currentScroll = window.scrollY;
      const header = document.getElementById("header");

      if (!header) return;

      if (currentScroll > lastScroll) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClickAnywhere = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener("click", handleClickAnywhere);
    }
    return () => {
      window.removeEventListener("click", handleClickAnywhere);
    };
  }, [isMenuOpen]);

  const toggleMenu = (e: { stopPropagation: () => void }) => {
    if (isMenuOpen) e.stopPropagation();
    setTimeout(() => {
      setIsMenuOpen((prevState) => !prevState);
    }, 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const crossClassName = "bg-blue-900 rounded-[12px] h-[2px] transition-all duration-300 w-[75%] my-[2px]"
  return (
    <header
      className={classNames(
        "fixed top-0 left-0 z-50 w-full transition-transform duration-300 ease-in-out bg-blue-50 text-blue-900 shadow",
        modalHeader ? "z-[5]" : "shadow-md",
        isHidingDownloadHeader && "top-[-100%]"
      )}
      id="header"
    >
      <div className="w-full mx-auto px-4 sm:px-10 xl:px-20 flex items-center justify-between h-[65px]">
        <div className="text-lg h-full font-bold cursor-pointer p-2" onClick={scrollToTop}>
          <img className="h-full object-contain" src={images.logo} alt={"Urologia Siglo XXI"} />
        </div>
        <div className="flex gap-2 items-center xl:hidden">
          <div
            className="flex xl:hidden flex-shrink-0 flex-col justify-center right-[2%] w-[30px] cursor-pointer"
            onClick={toggleMenu}
          >
            <span className={classNames(crossClassName, isMenuOpen && "mt-[10px] rotate-[48deg] w-[30px]")} />
            <span className={classNames(crossClassName, isMenuOpen && "opacity-0")} />
            <span className={classNames(crossClassName, isMenuOpen && "-mt-[10px] rotate-[-45deg] w-[30px]")} />
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={classNames(
            "absolute top-[65px] left-0 w-full bg-white xl:static xl:w-auto xl:bg-transparent xl:flex xl:items-center xl:space-x-6 xl:top-auto xl:left-auto",
            "transition-all duration-300 overflow-hidden space-y-4 xl:space-y-0",
            isMenuOpen ? "max-h-screen opacity-100 z-40 shadow-md xl:shadow-none px-6 py-4" : "max-h-0 opacity-0 xl:opacity-100 xl:max-h-max"
          )}
        >
          {MENU_LIST.map((menu) => {
            if (menu.text)
              return (
                <div key={menu.id} onClick={toggleMenu}>
                  <HeaderItem {...menu} />
                </div>
              )
          })}
        </nav>
      </div>
    </header>

  );
}
