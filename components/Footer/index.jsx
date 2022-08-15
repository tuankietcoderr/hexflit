import React from "react";
import Image from "next/image";
import { description } from "../../lib/description";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        <div className="bg-slate-900 flex w-fit items-center py-2 px-4 rounded-md">
          <div className="w-[100px] h-[100px]">
            <Image
              src={"/icons/icon-512x512.png"}
              alt="Logo"
              width={512}
              height={512}
              quality={100}
            />
          </div>
          <h1 className="font-extrabold sm:text-2xl text-lg text-red-700">
            HexFlit
          </h1>
        </div>
        <p className="text-slate-900 font-bold">{description}</p>
      </div>
    </>
  );
};

export default Footer;
