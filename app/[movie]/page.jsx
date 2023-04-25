import React from "react";
import Image from "next/image";

async function Movie({ params }) {
  const { movie } = params;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const image_path = "https://image.tmdb.org/t/p/w500";

  const res = await data.json();

  return (
    <div>
      <Image
        src={image_path + `${res.poster_path}`}
        alt={res.id}
        width="100"
        height="100"
      />
    </div>
  );
}

export default Movie;
