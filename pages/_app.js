import "../styles/globals.css";
import "../styles/pie.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation } from "../components";
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
    </>
  );
}

export default MyApp;
