import Link from "next/link";
import React, { useEffect } from "react";
import { BookmarkHeart, PersonCircle, Search } from "react-bootstrap-icons";
import { useFocus } from "../../hooks/useFocus";
import { useRouter } from "next/router";

const Navigation = () => {
  const [inputRef, setInputFocus] = useFocus();
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "/") {
        setInputFocus(true);
      }
    });
    return () => {
      removeEventListener("keydown", (e) => {
        if (e.key === "/") {
          setInputFocus(true);
        }
      });
    };
  }, [setInputFocus]);
  return (
    <>
      <nav className="sticky top-0 z-[9999] flex flex-col justify-between bg-slate-900 px-2 py-4 shadow-md sm:flex-row sm:px-[3rem]">
        {/* <div className="flex gap-2 items-center"> */}
        <Link href="/" passHref>
          <a>
            <h1 className="text-center text-[3rem] font-extrabold text-red-500 sm:text-[2rem]">
              HexaMovie
            </h1>
          </a>
        </Link>
        {/* </div> */}
        <div className="flex items-center gap-2 text-white sm:gap-5">
          <div className="flex w-full items-center">
            <input
              ref={inputRef}
              type="text"
              className="h-8 w-full rounded-tl-sm rounded-bl-sm border px-2 py-1 text-black focus:outline-1"
              placeholder="stranger things, thor,..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputRef.current.value !== "") {
                  router.push(`/search?movie=${inputRef.current.value}`);
                }
              }}
            />
            <div className="grid h-8 w-8 cursor-pointer place-items-center rounded-tr-sm rounded-br-sm bg-red-700">
              <Search color="white" size={20} />
            </div>
          </div>
          <BookmarkHeart size={20} />
          <PersonCircle size={20} />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
