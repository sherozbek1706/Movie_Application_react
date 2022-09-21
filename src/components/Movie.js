import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "yellow";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average , release_date }) => {
  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <p className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</p>
      </div>
      <div className="movie-over">
        <h2>
          Overview : <p>{title}</p>
        </h2>
        <p>{overview}</p>
        <p>{release_date}</p>
      </div>
    </div>
  );
};

export default Movie;
