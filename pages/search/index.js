import React from "react";
import { SliderActor, SliderMovie } from "../../components";

export async function getServerSideProps({ query }) {
  return {
    props: {
      query: query.movie,
    },
  };
}

const Search = ({ query }) => {
  return (
    <>
      <div className="px-8 pt-4">
        <SliderMovie
          type={`Movies search results for "${query}"`}
          fetchUrl={"/search/movie"}
          query={query}
        />
        <SliderActor
          type={`Cast search results for "${query}"`}
          fetchUrl="/search/person"
          query={query}
        />
        <SliderMovie
          collection={true}
          type={`Collections search results for "${query}"`}
          fetchUrl={"/search/collection"}
          query={query}
        />
      </div>
    </>
  );
};

export default Search;
