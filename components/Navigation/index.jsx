import Link from "next/link";
import React from "react";
import { BookmarkHeart, PersonCircle, Search } from "react-bootstrap-icons";

const Navigation = () => {
  return (
    <>
      <nav className="flex justify-between sm:px-[3rem] px-2 py-4 bg-slate-900 shadow-md sticky top-0 z-[9999]">
        <div className="flex gap-2 items-center">
          <Link href="/" passHref>
            <a>
              <h1 className="sm:text-xl text-red-500 font-bold">HexaMovie</h1>
            </a>
          </Link>
          <div className="flex items-center">
            <input
              type="text"
              className="border px-2 py-1 h-8 w-full focus:outline-1"
              placeholder="stranger things, thor,..."
            />
            <div className="bg-red-700 h-8 w-8 grid place-items-center cursor-pointer">
              <Search color="white" size={20} />
            </div>
          </div>
        </div>
        <div className="flex items-center sm:gap-5 gap-2 text-white">
          <BookmarkHeart size={20} />
          <PersonCircle size={20} />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
