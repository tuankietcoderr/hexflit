import React from "react";
import { MovieCard } from "../../components";
import { getMovieDetails, getMovies } from "../../services/movie";

export async function getStaticProps({ params }) {
  console.log(params);
  const movie = await getMovieDetails(params.id);
  return {
    props: {
      movie,
    },
  };
}

export async function getStaticPaths() {
  const res = await getMovies();
  return {
    paths: res.results.map((movie) => ({
      params: {
        id: movie.id.toString(),
      },
    })),
    fallback: false,
  };
}

const MovieDetail = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <div className="mx-2 sm:mx-[3rem]">
        <MovieCard {...movie} />
      </div>
    </>
  );
};

export default MovieDetail;
