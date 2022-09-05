import Image from "next/image";
import React from "react";
import { imageLibrary } from "../../request/axios";

const MovieCard = ({
  poster_path,
  title,
  overview,
  tagline,
  status,
  imdb_id,
  name,
  homepage,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 py-4 sm:grid sm:grid-cols-[30%_70%]">
        <div className="relative flex flex-col items-center w-full">
          {status && (
            <div className="absolute right-1 z-10 mt-2 w-fit rounded-sm bg-sky-400 py-1 px-4">
              {status}
            </div>
          )}
          <Image
            src={imageLibrary(poster_path)}
            width={360}
            height={540}
            alt={title}
            objectFit="cover"
            className="rounded-md bg-center transition-all sm:hover:scale-105"
            placeholder="blur"
            blurDataURL={imageLibrary(poster_path)}
            loading="lazy"
          />
          {title && (
            <a href="#trailer" className="w-full">
              <button className="mt-2 w-full rounded-sm bg-red-700 py-2 font-bold text-white transition-all lg:hover:scale-105">
                WATCH TRAILER
              </button>
            </a>
          )}
          {imdb_id && (
            <div className="my-4 flex justify-between rounded-sm bg-slate-200 p-2 w-full">
              <span>IMDB ID:</span> <span className="font-bold">{imdb_id}</span>
            </div>
          )}
        </div>
        <div className="text-white">
          <div className="flex items-center justify-between">
            <h1 className="mb-4 text-xl font-extrabold sm:text-[2rem]">
              {title || name}
            </h1>
            {homepage && (
              <a
                href={homepage}
                className="rounded-sm bg-red-700 p-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                Homepage
              </a>
            )}
          </div>
          <p className="mb-4 font-bold">{tagline}</p>
          <p className="text-justify opacity-70">{overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
