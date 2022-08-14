import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <div className="bg-slate-800 min-h-screen">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
