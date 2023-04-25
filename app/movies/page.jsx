import React from "react";
import Image from "next/image";

const Movies = ({ title, id, poster_path, release_date }) => {
  const image_path = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <h1>{title}</h1>
      <Image src={image_path + poster_path} alt={id} width="100" height="100" />
    </div>
  );
};

export default Movies;
