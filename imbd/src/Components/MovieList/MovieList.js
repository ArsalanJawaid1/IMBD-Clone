import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Card from "../Cards/Card";

const MovieList = () => {
  const [movieList, setmovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=c2789c60f34859d286ad5b7bb4dc868d&language=en-US`
      );
      const jsonData = await fetchData.json();
      setmovieList(jsonData.results);
    };
    getData();
  }, [type]);

  return (
    <div className="movieList">
      <h2 className="heading"> {(type ? type : "popular").toUpperCase()} </h2>
      <div className="list_card">
        {movieList.map((movie,index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
