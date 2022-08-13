import {Link} from "react-router-dom"
import "./cardMovies.scss"


export const CardMovies = ({item}) => {
    return(
        <li className="movie__item" >
            <Link to={`/movie/${item.id}`}>
            <img className="movie__img" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt=""/>
            <p className="movie__title">{item.title}</p>
            <p className="movie__time"><time dateTime="2022.05.12">{item.release_date}</time></p>
            <span className="movie__raiting">{item.vote_average}</span>
            </Link>
        </li>
    )
}