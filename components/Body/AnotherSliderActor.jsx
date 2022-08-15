import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { imageLibrary } from "../../request/axios";
import { responsive } from "../../lib/responsive";

const AnotherSliderActor = ({ credits }) => {
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    lazyLoad: true,
    arrows: true,
    infinite: false,
    responsive,
  };
  return (
    <>
      <h2 className="my-6 text-lg font-extrabold text-white sm:text-[2rem]">
        Cast
      </h2>
      <Slider {...settings}>
        {credits.map((cast) => (
          <Link href={`/cast/${cast.id}`} key={cast.id} passHref>
            <a>
              <Image
                src={imageLibrary(cast.profile_path)}
                alt={cast.name}
                width={1080}
                height={1620}
                className="sm:!mr-2"
                placeholder="blur"
                blurDataURL={imageLibrary(cast.profile_path)}
                loading="lazy"
              />
            </a>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default AnotherSliderActor;
