import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { CardTv } from "../CardTv/CardTv";




export function TvShow (){

    const API__KEY ="5a85e135dc7864482b9a3c9378e912b1"

    const [movie, setMovie] = useState({})


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API__KEY}`)
    .then(function (response) {
        setMovie(response.data.results);
    })
    .catch(function (error) {
     
    })
    }, [])
    

    return(
      <ul className='movie__list'>
			{movie.length && movie.map((e) => <CardTv key={e.id} item={e} />)}
		</ul>
    )
  }