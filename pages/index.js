import { SliderMovie } from "../components";
import MainContent from "../components/Body/MainContent";
import SliderActor from "../components/Body/SliderActor";
import { getMovies } from "../services/movie";

const Home = ({ movies }) => {
  const pageSection = [
    {
      type: "Trending",
      fetchUrl: "/trending/all/day",
    },
    {
      type: "Top Rated",
      fetchUrl: "/movie/top_rated",
    },
    {
      type: "Discover",
      fetchUrl: "/discover/movie",
    },
    {
      type: "Upcoming",
      fetchUrl: "/movie/upcoming",
    },
    {
      type: "Now Playing",
      fetchUrl: "/movie/now_playing",
    },
  ];
  return (
    <>
      <div>
        <MainContent movies={movies} />
      </div>
      <div className="px-8">
        {pageSection.map(({ type, fetchUrl }) => (
          <SliderMovie key={type} type={type} fetchUrl={fetchUrl} />
        ))}
        <SliderActor type={"Popular Cast"} fetchUrl={"/person/popular"} />
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await getMovies();
  return {
    props: {
      movies: res.results.reverse(),
    },
  };
}
