import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AnotherSliderActor,
  MovieCard,
  MovieStat,
  Trailer,
} from "../../components";
import { imageLibrary } from "../../request/axios";
import {
  getCredits,
  getMovieDetails,
  getMovieVideos,
} from "../../services/movie";

export async function getServerSideProps({ params }) {
  const movie = await getMovieDetails(params.id);
  const videos = await getMovieVideos(params.id);
  const credits = await getCredits(params.id);
  return {
    props: {
      movie,
      videos: videos.results,
      credits: credits.cast,
    },
  };
}

const MovieDetail = ({ movie, videos, credits }) => {
  return (
    <>
      <div className="mx-[5%] sm:mx-[10%]">
        <MovieCard {...movie} videos={videos} />
        <AnotherSliderActor credits={credits} />
        <div className="my-4 text-white">
          <h2 className="my-4 text-xl font-bold">Genres</h2>
          {movie.genres.map((genre) => (
            <Link href={`/genre/${genre.id}`} key={genre.id} passHref>
              <a>
                <button className="my-2 mx-2 rounded-sm bg-red-200 px-2 text-red-700 sm:my-0">
                  {genre.name}
                </button>
              </a>
            </Link>
          ))}
        </div>
        <MovieStat {...movie} />
        {movie.belongs_to_collection && (
          <>
            <h2 className="text-xl font-bold text-white">
              Belongs to collection
            </h2>
            <Link href={`/collection/${movie.belongs_to_collection.id}`}>
              <a>
                <div className="grid place-items-center">
                  <div className="my-4 w-[300px] transition-all sm:hover:scale-105">
                    <Image
                      src={imageLibrary(
                        movie.belongs_to_collection.poster_path
                      )}
                      width={1080}
                      height={1620}
                      className="rounded-md"
                      alt={movie.belongs_to_collection.name}
                    />
                  </div>
                </div>
              </a>
            </Link>
          </>
        )}
        <Trailer
          trailers={videos
            .filter((video) => video.type === "Trailer")
            .reverse()}
        />
      </div>
    </>
  );
};

export default MovieDetail;
