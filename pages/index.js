import { SliderMovie } from "../components";
import MainContent from "../components/Body/MainContent";
import SliderActor from "../components/Body/SliderActor";
import { getGenres, getMovies } from "../services/movie";

const Home = ({ movies, genres }) => {
  console.log(movies);
  return (
    <>
      <div>
        <MainContent movies={movies} />
      </div>
      <div className="px-8">
        <SliderMovie type={"Trending"} fetchUrl={"/trending/all/day"} />
        <SliderMovie type={"Top Rated"} fetchUrl={"/movie/top_rated"} />
        <SliderMovie type={"Discover"} fetchUrl={"/discover/movie"} />
        <SliderMovie type={"Upcoming"} fetchUrl={"/movie/upcoming"} />
        <SliderMovie type={"Now playing"} fetchUrl={"/movie/now_playing"} />
        <SliderActor type={"Popular Cast"} fetchUrl={"/person/popular"} />
      </div>
    </>
  );
};

export default Home;

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
