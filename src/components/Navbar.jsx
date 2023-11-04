import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

function Navbar({ title }) {
  const [expand, setExpand] = useState(false);
  return (
    <nav className="flex px-5 py-3 bg-[#F0F2F5] fixed w-full z-30 left-0">
      <div className="flex layout justify-between sm:px-[40px]">
        <a href="/">
          <h1 className="text-black font-bold">{title}</h1>
        </a>
        <div className="sm:hidden cursor-pointer">
          <GiHamburgerMenu
            className={`${expand ? "hidden" : "block"}`}
            onClick={() => setExpand(!expand)}
          />
          <GrClose
            className={`${expand ? "block" : "hidden"}`}
            onClick={() => setExpand(!expand)}
          />
        </div>
        <div className="text-black font-bold hidden sm:flex sm:gap-2">
          <a href="/" className="font-medium text-base">
            Home
          </a>
          <a href="/about" className="font-medium text-base">
            About
          </a>
          <a href="/projects" className="font-medium text-base">
            Portfolio Projects
          </a>
          <a href="/articles" className="font-medium text-base">
            Articles
          </a>
        </div>
      </div>
      <div
        className={`layout absolute flex flex-col top-[45px] left-0  p-5 rounded-b-2xl bg-[#F0F2F5] drop-shadow-lg
            ${expand ? "block" : "hidden"}`}
      >
        <div>
          <a href="/" className="font-medium text-base">
            Home
          </a>
        </div>
        <div>
          <a href="/about" className="font-medium text-base">
            About
          </a>
        </div>
        <div>
          <a href="/projects" className="font-medium text-base">
            Portfolio Projects
          </a>
        </div>
        <div>
          <a href="/articles" className="font-medium text-base">
            Articles
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
