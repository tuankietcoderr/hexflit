import React from "react";
import { imageLibrary } from "../../request/axios";
import { getCollectionDetails } from "../../services/movie";
import Image from "next/image";
import { MetaData, MovieCard } from "../../components";
import Link from "next/link";
import Slider from "react-slick";
import { responsive } from "../../lib/responsive";

export async function getServerSideProps({ params }) {
  const res = await getCollectionDetails(params.id);
  return {
    props: {
      collection: res,
    },
  };
}

const Collection = ({ collection }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    lazyLoad: true,
    responsive,
  };
  return (
    <>
      <MetaData
        type="Collection"
        title={collection.name}
        description={collection.overview}
        thumbnail={imageLibrary(collection.backdrop_path)}
        link={`collection/${collection.id}`}
      />
      <div className="mx-[5%] sm:mx-[10%]">
        <MovieCard {...collection} />
        <h2 className="text-xl font-bold text-white">Parts</h2>
        <Slider {...settings}>
          {collection.parts.map((part) => (
            <Link href={`/movie/${part.id}`} key={part.id} passHref>
              <a>
                <Image
                  src={imageLibrary(part.poster_path)}
                  alt={part.title}
                  width={1080}
                  height={1620}
                  className="!mr-2"
                />
              </a>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Collection;
