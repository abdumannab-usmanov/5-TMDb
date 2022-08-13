import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { CardMovies } from '../CardMovies/CardMovie';



export function RatedMovie() {
	const API__KEY = '5a85e135dc7864482b9a3c9378e912b1';

	const [movie, setMovie] = useState({});

	useEffect(() => {
		axios
			.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API__KEY}`)
			.then(function (response) {
				setMovie(response.data.results);
			})
			.catch(function (error) {});
	}, []);


	return (
		<ul className='movie__list'>
			{movie.length && movie.map((e) => <CardMovies key={e.id} item={e} />)}
		</ul>
	);
}
