import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import useFetchData from "../../hooks/useFetchData";
import { responsive } from "../../lib/responsive";
import { imageLibrary } from "../../request/axios";
import Loading from "../Layout/Loading";
import PageNavigate from "../Layout/PageNavigate";

const SliderActor = ({ fetchUrl, type, query }) => {
  const [page, setPage] = useState(1);
  const { data, loading } = useFetchData(fetchUrl, page, query);
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    lazyLoad: true,
    infinite: false,
    responsive,
  };
  if (data && data.results.length === 0) {
    return (
      <>
        <h2 className="my-6 text-lg font-extrabold text-white sm:text-[2rem]">
          {type}
        </h2>
        <div className="flex justify-center">
          <p className="text-center text-white text-2xl">No actor found</p>
        </div>
      </>
    );
  }
  return (
    <>
      <h2 className="my-6 text-lg font-extrabold text-white sm:text-[2rem]">
        {type}
      </h2>
      {!loading ? (
        <>
          <Slider {...settings}>
            {data.results.map((cast) => (
              <Link href={`/cast/${cast.id}`} key={cast.id} passHref>
                <a>
                  <Image
                    src={
                      cast.profile_path
                        ? imageLibrary(cast.profile_path)
                        : "/netflix.jpg"
                    }
                    alt={cast.name}
                    width={360}
                    height={540}
                    className="sm:!mr-2 transition-all sm:hover:scale-105"
                    placeholder="blur"
                    blurDataURL={
                      cast.profile_path
                        ? imageLibrary(cast.profile_path)
                        : "/netflix.jpg"
                    }
                    loading="lazy"
                    title={cast.name}
                  />
                </a>
              </Link>
            ))}
          </Slider>
          <PageNavigate
            page={page}
            setPage={setPage}
            total_pages={data.total_pages}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SliderActor;
