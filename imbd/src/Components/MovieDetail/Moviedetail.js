import React, { useEffect, useState } from "react";
import "./Moviedetail.css";
import { useParams } from "react-router-dom";

const Moviedetail = () => {
  const [movieDetail, setmovieDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const jsonData = await fetchData.json();
      setmovieDetail(jsonData);
    };
    getData();
  });
console.log(movieDetail)
  return (
    <div className="movie_detail">
      <div className="movie_Poster">
        <img
          alt=""
          width="1050px"
          height="490px"
          src={`https://image.tmdb.org/t/p/original${
            movieDetail ? movieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movieDetail_left">
        <img
          alt=""
          src={`https://image.tmdb.org/t/p/original${
            movieDetail ? movieDetail.poster_path : ""
          }`}
        />
      </div>
      <div className="movieDetail_right">
        <div className="movie_title">
          {movieDetail ? movieDetail.original_title : ""}
        </div>
        <div className="movie_tagline">
          {movieDetail ? movieDetail.tagline : ""}
        </div>
        <div className="movie_rating">
          {movieDetail ? movieDetail.vote_average : ""} {" "}
          <i class="fa fa-star" />
          <span className="movie_voteCount">
            {movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}
          </span>
        </div>
        <div className="movie_runtime">
          {movieDetail ? movieDetail.runtime + " mins" : ""}
        </div>
        <div className="movie_releasedate">
          {movieDetail ? "Release date: " + movieDetail.release_date : ""}
        </div>
      </div>
    </div>
  );
};
export default Moviedetail;
