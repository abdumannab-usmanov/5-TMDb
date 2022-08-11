import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";

import "./popular.scss"


export function Popular (){

    const API__KEY ="5a85e135dc7864482b9a3c9378e912b1"

    const [movie, setMovie] = useState({})


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API__KEY}`)
    .then(function (response) {
        setMovie(response.data.results);
    })
    .catch(function (error) {
     
    })
    }, [])
    
    console.log(movie);

    return(
      <ul className="movie__list">
        {movie.length && 
        movie.map(e => 
        <li className="movie__item" key={e.id}>
            <img className="movie__img" src={`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`} alt=""/>
            <p className="movie__title">{e.title}</p>
            <p className="movie__time"><time dateTime="2022.05.12">{e.release_date}</time></p>
            <span className="movie__raiting">{e.vote_average}</span>
            </li>)}
      </ul>
    )
  }