import Trending from "../components/Body/Trending";
import { getMovies } from "../services/movie";

const Home = ({ movies }) => {
  return (
    <>
      <div className="bg-black">
        <Trending movies={movies} />
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await getMovies();
  return {
    props: {
      movies: res.results,
    },
  };
}
