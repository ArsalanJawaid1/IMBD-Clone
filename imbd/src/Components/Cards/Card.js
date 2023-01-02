import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({movie}) => {
  // const [isLoading, setLoading] = useState([true]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);


  return (
      <> 
        {
        //   isLoading ?
        //    <div>
        //     <SkeletonTheme color = "#202020" highlightColor="#444" >
        //       <Skeleton height={300} duration = {1} />
        //     </SkeletonTheme>
        //    </div>

        // : 
        
        <Link to = {`/movie/${movie.id}`} className ="link"  >
          <div className="card_container"> 
              <img className="card_img" alt=""  src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
            <div className="card_overlay">
              <div className="card_title">{movie ? movie.original_title : "Nothing"}
              </div>
              <div className="card_runnTime">
                {movie?movie.release_date : ""}
              </div>
              <span className="card_rating">
                {movie?movie.vote_average : ""} <i className="fa fa-star"></i>  </span>
                <div className="card_description">
                  {movie?movie.overview.slice(0,120)+"..." : ""}
                </div>
              </div>
          </div>
         </Link>
}   
      </>  );
}
;

export default Card;
