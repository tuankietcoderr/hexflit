import React from "react";
import Image from "next/image";
import { imageLibrary } from "../../request/axios";
import Link from "next/link";

const MovieCard = ({
  backdrop_path,
  title,
  overview,
  tagline,
  status,
  genres,
}) => {
  return (
    <>
      <div className="flex py-4 gap-4">
        <div className="w-[300px] h-[400px] relative">
          <div className="bg-sky-400 mt-2 w-fit py-1 px-4 rounded-sm absolute z-10 right-1">
            {status}
          </div>
          <Image
            src={imageLibrary(backdrop_path)}
            width={900}
            height={1200}
            alt={title}
            objectFit="cover"
            className="rounded-md bg-center"
            quality={100}
          />
          <button className="bg-red-700 w-[300px] py-2 text-white font-bold rounded-sm mt-2 transition-all lg:hover:scale-105">
            WATCH TRAILER
          </button>
        </div>
        <div className="text-white">
          <h1 className="font-extrabold text-[2rem] mb-4">{title}</h1>
          <p className="mb-4 font-bold">{tagline}</p>
          <p className="opacity-70 text-justify">{overview}</p>
          <div className="my-4">
            Genres:{" "}
            {genres.map((genre) => (
              <Link href={`/genre/${genre.id}`} key={genre.id} passHref>
                <a>
                  <button className="px-2 bg-red-200 mx-2 rounded-sm text-red-700">
                    {genre.name}
                  </button>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
