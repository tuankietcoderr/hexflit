import Head from "next/head";
import React from "react";
import { CastCard, SlickMovie, MetaData } from "../../components";
import { imageLibrary } from "../../request/axios";
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
  return (
    <>
      <MetaData
        type="Cast"
        title={cast.name}
        description={cast.biography}
        thumbnail={imageLibrary(cast.profile_path)}
        link={`cast/${cast.id}`}
      />
      <div className="sm:mx-[10%] mx-[5%]">
        <CastCard {...cast} />
        <SlickMovie type="Cast" data={movies.cast} />
        <SlickMovie type="Crew" data={movies.crew} />
      </div>
    </>
  );
};

export default CastDetails;
