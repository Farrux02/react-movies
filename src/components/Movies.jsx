import { Movie } from "./Movie";

function Movies(props) {
  const { movies = [] } = props; // получаем const movies с фильмами через Main.jsx

  return (
    <div className="movies">
      {movies.length ? movies.map((movie) => { // делаем для фильмов цикл мэп, засовываем каждый из них в переменную movie
        return <Movie key={movie.imdbID} {...movie} />;
      }) : <h4>Nothing found</h4>}
    </div>
  );
}

export { Movies };
