import React from "react";
import { MetaData, SliderActor, SliderMovie } from "../../components";

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
      <MetaData
        type="Search"
        title={query}
        description={"Search results for" + query}
        link={`search?movie=${encodeURIComponent(query)}`}
      />
      <div className="px-8 pt-4">
        <SliderMovie
          type={`Movies search results for "${query}"`}
          fetchUrl={"/search/movie"}
          query={{ type: "query", value: query }}
        />
        <SliderActor
          type={`Cast search results for "${query}"`}
          fetchUrl="/search/person"
          query={{ type: "query", value: query }}
        />
        <SliderMovie
          collection={true}
          type={`Collections search results for "${query}"`}
          fetchUrl={"/search/collection"}
          query={{ type: "query", value: query }}
        />
      </div>
    </>
  );
};

export default Search;
