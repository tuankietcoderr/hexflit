import React from "react";
import { toDot } from "../../lib/number-comma";

const MovieStat = ({
  vote_average,
  vote_count,
  spoken_languages,
  language,
  budget,
  revenue,
}) => {
  return (
    <div className="text-white">
      <h2 className="text-xl font-bold">Voting</h2>
      <div className="flex flex-col items-center justify-evenly sm:flex-row">
        <div
          className="pie animate"
          style={{
            "--p": +vote_average * 10,
            "--b": "20px",
            "--c": "yellow",
          }}
        >
          {Math.round(+vote_average * 10)}%
        </div>
        <h3 className="text-[2rem] font-extrabold sm:text-[3rem]">
          {vote_count} votes
        </h3>
      </div>
      <h2 className="my-4 text-xl font-bold">Language</h2>
      <div className="flex flex-wrap">
        {spoken_languages.map((language) => (
          <div
            key={language.english_name}
            className="m-2 rounded-sm bg-green-500 p-1 text-sm"
          >
            {language.english_name}
          </div>
        ))}
      </div>
      <h2 className="my-4 text-xl font-bold">Budget</h2>
      <h3 className="text-center text-[2rem] font-extrabold sm:text-[3rem]">
        $ {toDot(+budget)}
      </h3>
      <h2 className="my-4 text-xl font-bold">Revenue</h2>
      <h3 className="text-center text-[2rem] font-extrabold sm:text-[3rem]">
        $ {toDot(+revenue)}
      </h3>
    </div>
  );
};

export default MovieStat;
