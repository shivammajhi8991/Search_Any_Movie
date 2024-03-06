import MovieCard from "./MovieCard";
import styles from "./MoviesList.module.css";
const MovieList = ({ data }) => {
  const { movieApiResponse, error, isError } = data;

  if (isError) {
    <h1>{error}</h1>;
  }

  if (movieApiResponse && movieApiResponse.Response === "False") {
    return <h1>{movieApiResponse.Error || "No result found"}</h1>;
  }
  return (
    <div className={`container ${styles.moviesList}`}>
      {movieApiResponse.Search.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
