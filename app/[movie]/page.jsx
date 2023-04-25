import React from "react";

async function Movie({ params }) {
  const { movie } = params;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const res = await data.json();

  return <div>Movie</div>;
}

export default Movie;
