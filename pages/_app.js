import "../styles/globals.css";
import "../styles/pie.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Footer } from "../components";
import { useEffect } from "react";
import { smoothScroll } from "../lib/smooth-scroll";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    smoothScroll();
  }, []);
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-slate-900 pb-[5%]">
        <Component {...pageProps} />
      </div>
      <div className="bg-[#DF0600] sm:p-8 p-4">
        <Footer />
      </div>
      <p className="bg-[#DF0600] text-center italic text-sm py-2">
        Copyright ©2022 by{" "}
        <a
          href="https://github.com/tuankietcoderr"
          target="_blank"
          rel="noopenner noreferrer"
          className="bg-slate-900 text-[#DF0600] rounded-sm px-1"
        >
          tuankietcoder
        </a>
      </p>
    </>
  );
}

export default MyApp;
