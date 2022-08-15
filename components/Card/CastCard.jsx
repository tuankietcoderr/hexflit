import Image from "next/image";
import React from "react";
import { imageLibrary } from "../../request/axios";

const CastCard = ({
  profile_path,
  biography,
  status,
  imdb_id,
  name,
  place_of_birth,
  birthday,
  also_known_as,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 py-4 sm:grid sm:grid-cols-[30%_70%]">
        <div className="relative">
          {status && (
            <div className="absolute right-1 z-10 mt-2 w-fit rounded-sm bg-sky-400 py-1 px-4">
              {status}
            </div>
          )}
          <Image
            src={profile_path ? imageLibrary(profile_path) : "/netflix.jpg"}
            width={360}
            height={540}
            alt={name}
            objectFit="cover"
            className="rounded-md bg-center transition-all sm:hover:scale-105"
            quality={100}
            loading="lazy"
          />
          {imdb_id && (
            <div className="my-4 flex justify-between rounded-sm bg-slate-200 p-2">
              <span>IMDB ID:</span> <span className="font-bold">{imdb_id}</span>
            </div>
          )}
        </div>
        <div className="text-white">
          <h1 className="mb-4 text-xl font-extrabold sm:text-[2rem]">{name}</h1>
          <div className="opacity-70 leading-7">
            <p>Also known as: {also_known_as.join(", ")}</p>
            <p>Birthday: {birthday}</p>
            <p>Place of birth: {place_of_birth}</p>
          </div>
          <p className="text-justify opacity-70 leading-7">{biography}</p>
        </div>
      </div>
    </>
  );
};

export default CastCard;
