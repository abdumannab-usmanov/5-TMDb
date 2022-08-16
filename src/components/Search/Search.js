import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PaginationMovies } from '../Pagination/Pagination';
import { CardMovies } from '../CardMovies/CardMovie';
import useDebounce from '../../hook/useDebaunse';

export const Search = () => {
	const API__KEY = '5a85e135dc7864482b9a3c9378e912b1';

	const { searchQuery } = useParams();

	const [movie, setMovie] = useState({
		isLoading: true,
		isError: false,
		data: {},
		totalPage: 1,
	});

	const [activePage, setActivePage] = useState(1);

	const debouncedValue = useDebounce(searchQuery, 500)

	useEffect(() => {
		axios
			.get(`https://api.themoviedb.org/3/search/movie`, {
				params: {
					api_key: API__KEY,
					page: activePage,
                    query: debouncedValue
				},
			})
			.then(function (res) {
				setMovie({
					isLoading: false,
					isError: false,
					data: res.data.results,
					totalPage: res.data.total_pages > 500 ? 500 : res.data.total_pages,
				});
			})
			.catch((error) =>
				setMovie({
					isLoading: false,
					isError: true,
					...movie,
				})
			);
	}, [activePage, debouncedValue]);

	console.log(movie);

	return (
		<>
			<ul className='movie__list'>
				{movie.data.length && movie.data.map((e) => <CardMovies key={e.id} item={e} />)}
			</ul>

			<PaginationMovies count={movie.totalPage} setActivePage={setActivePage}/>
		</>
	);
};
