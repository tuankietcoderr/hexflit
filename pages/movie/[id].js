import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AnotherSliderActor,
  Keywords,
  MetaData,
  MovieCard,
  MovieStat,
  Review,
  SliderMovie,
  Trailer,
} from "../../components";
import { imageLibrary } from "../../request/axios";
import {
  getCredits,
  getKeywords,
  getMovieDetails,
  getMovieVideos,
} from "../../services/movie";

export async function getServerSideProps({ params }) {
  const movie = getMovieDetails(params.id);
  const videos = getMovieVideos(params.id);
  const credits = getCredits(params.id);
  const keywords = getKeywords(params.id);
  const obj = await Promise.all([movie, videos, credits, keywords]);
  return {
    props: {
      movie: obj[0],
      videos: obj[1].results,
      credits: obj[2].cast,
      keywords: obj[3].keywords,
    },
  };
}

const MovieDetail = ({ movie, videos, credits, keywords }) => {
  return (
    <>
      <MetaData
        type="Movie"
        title={movie.title}
        description={movie.overview}
        thumbnail={imageLibrary(movie.backdrop_path)}
        link={`movie/${movie.id}`}
      />
      <div className="mx-[5%] sm:mx-[10%]">
        <MovieCard {...movie} videos={videos} />
        <AnotherSliderActor credits={credits} />
        <div className="my-4 text-white">
          <h2 className="my-4 text-xl font-bold">Genres</h2>
          {movie.genres.map((genre) => (
            <button
              key={genre.id}
              className="my-2 mx-2 rounded-sm bg-red-200 px-2 text-red-700 sm:my-0"
            >
              {genre.name}
            </button>
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
                      src={
                        movie.belongs_to_collection.poster_path
                          ? imageLibrary(
                              movie.belongs_to_collection.poster_path
                            )
                          : "/netflix.jpg"
                      }
                      width={360}
                      height={540}
                      className="rounded-md"
                      alt={movie.belongs_to_collection.name}
                      placeholder="blur"
                      blurDataURL={
                        movie.belongs_to_collection.poster_path
                          ? imageLibrary(
                              movie.belongs_to_collection.poster_path
                            )
                          : "/netflix.jpg"
                      }
                      loading="lazy"
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
        <Review movie_id={movie.id} />
        <Keywords keywords={keywords} />
        <SliderMovie type="Similar" fetchUrl={`/movie/${movie.id}/similar`} />
        <SliderMovie
          type="Recommendations"
          fetchUrl={`/movie/${movie.id}/recommendations`}
        />
      </div>
    </>
  );
};

export default MovieDetail;
