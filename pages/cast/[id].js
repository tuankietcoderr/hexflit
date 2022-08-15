import React from "react";
import { CastCard, SlickMovie } from "../../components";
import { getCastDetails, getCastMovies } from "../../services/cast";

export async function getServerSideProps({ query }) {
  const cast = await getCastDetails(query.id);
  const movies = await getCastMovies(query.id);
  return {
    props: {
      cast,
      movies,
    },
  };
}

const CastDetails = ({ cast, movies }) => {
  console.log(cast, movies);
  return (
    <>
      <div className="sm:mx-[10%] mx-[5%]">
        <CastCard {...cast} />
        <SlickMovie type="Cast" data={movies.cast} />
        <SlickMovie type="Crew" data={movies.crew} />
      </div>
    </>
  );
};

export default CastDetails;
