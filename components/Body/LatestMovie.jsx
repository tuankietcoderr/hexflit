import React from "react";
import Link from "next/link";
import { imageLibrary } from "../../request/axios";
import Image from "next/image";

const LatestMovie = ({ id, poster_path, title }) => {
  return (
    <>
      <h2 className="my-6 text-lg font-extrabold text-white sm:text-[2rem]">
        Latest
      </h2>
      <Link href={`/movie/${id}`} key={id} passHref>
        <a>
          <Image
            src={imageLibrary(poster_path || "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg")}
            alt={title}
            width={360}
            height={540}
            className="sm:!mr-2"
            loading="lazy"
          />
        </a>
      </Link>
    </>
  );
};

export default LatestMovie;
