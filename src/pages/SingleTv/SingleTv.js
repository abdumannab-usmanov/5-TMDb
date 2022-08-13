import { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SingleTv = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const navigate = useNavigate()



	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/tv/' + id, {
				params: {
					api_key: '5a85e135dc7864482b9a3c9378e912b1',
				},
			})
			.then((res) => setMovie(res.data))
			.catch((err) => console.log(err));
	}, []);

    console.log(movie);
	
	return (
		<div className='tv__container'>
			<div className='btn__wrapper'><button className='btn__navigate' onClick={() => navigate(-1)}>Back</button></div>

			<div className='Tvshow'>
				<img
					className='tv__img'
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt=''
				/>
				<div className='tv__wrapper'>
					<h2 className='movie__title2'>{movie.name}</h2>
					<div className='language__wrapper'>
						{' '}
						<p className='language__title'>Language:</p>{' '}
						{movie.spoken_languages &&
							movie.spoken_languages.map((e) => (
								<p className='language__text' key={e.id}>
									{e.name}
								</p>
							))}
					</div>
					<div className='date__wrapper'>
						<p className='date__text'>Дата издании:</p>{' '}
						<time className='data__time' dateTime='2022.08.13'>
							{movie.last_air_date}
						</time>
					</div>
					<div className='wrapper__genres'>
						<p className='genre'>Жанр:</p>{' '}
						{movie.genres &&
							movie.genres.map((e) => (
								<p className='genre__text' key={e.id}>
									{e.name}
								</p>
							))}
					</div>
				</div>
			</div>

			<div className='info__wrapper'>
        <p className='movie__info'>Кратко о кино</p>
        <p className='movie__vikipediy'>{movie.overview}</p>
        </div>
		</div>
	);
};
