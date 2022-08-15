import React from "react";
import SliderMovie from "../Body/SliderMovie";

const SlickGenre = ({ genres }) => {
  return (
    <>
      {genres.map((genre) => (
        <SliderMovie
          type={genre.name}
          key={genre.id}
          fetchUrl={"/discover/movie"}
          query={{ type: "with_genres", value: genre.id }}
        />
      ))}
    </>
  );
};

export default SlickGenre;
