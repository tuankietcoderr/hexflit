import React from "react";

const Trailer = ({ trailers }) => {
  return (
    <>
      <div className="my-[3rem] border-t" id="trailer" />
      {trailers.map((trailer) => (
        <div key={trailer.id}>
          <h2 className="my-4 text-xl font-bold text-white">{trailer.name}</h2>
          <iframe
            width="100%"
            height="auto"
            className="aspect-video"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </>
  );
};

export default Trailer;
