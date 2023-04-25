import Movies from "./movies/page";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const res = await data.json();

  return (
    <div>
      <h1>NETPLIX</h1>
      {res.results.map((movie) => {
        return (
          <div key={movie.id}>
            <Movies
              title={movie.title}
              id={movie.id}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          </div>
        );
      })}
    </div>
  );
}
