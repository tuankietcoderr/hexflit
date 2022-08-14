import React from "react";
import { SliderMovie } from "../../components";

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
          type={`Search Results for "${query}"`}
          fetchUrl={"/search/movie"}
          query={query}
        />
      </div>
    </>
  );
};

export default Search;
