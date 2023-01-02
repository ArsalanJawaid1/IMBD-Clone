import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../Components/MovieList/MovieList";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const Data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      );
      const jsonData = await Data.json();
      setPopularMovies(jsonData.results);
    };
    fetchData();
  }, []);
  return (
    <div className="Poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={4}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link className="link" to={`/movie/${movie.id}`}>
            <div className="posterImage">
              <img height="597px" alt=""
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
              />
            </div>
            <div className="posterImage_overlay">
              <div className="posterImage_title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="posterImage_runtime">
                {movie ? movie.release_date : ""}
                <span className="posterImage_rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="posterImage_description">
                {movie ? movie.overview : ""}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList />
    </div>
  );
};

export default Home;
