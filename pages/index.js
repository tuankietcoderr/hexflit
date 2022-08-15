import { MetaData, SlickGenre, SliderMovie } from "../components";
import MainContent from "../components/Body/MainContent";
import SliderActor from "../components/Body/SliderActor";
import { getGenres, getMovies } from "../services/movie";

export async function getServerSideProps() {
  const res = await getMovies();
  const genres = await getGenres();
  return {
    props: {
      movies: res.results.reverse(),
      genres: genres.genres,
    },
  };
}

const Home = ({ movies, genres }) => {
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
      <MetaData
        description={
          "HexFlit is a web app that allows you to follow movies you love and watch movies trailer."
        }
        thumbnail={"/icons/icon-512x512.png"}
      />
      <div>
        <MainContent movies={movies} />
      </div>
      <div className="px-8">
        {pageSection.map(({ type, fetchUrl }) => (
          <SliderMovie key={type} type={type} fetchUrl={fetchUrl} />
        ))}
        <SliderActor type={"Popular Cast"} fetchUrl={"/person/popular"} />
        <SlickGenre genres={genres} />
      </div>
    </>
  );
};

export default Home;
