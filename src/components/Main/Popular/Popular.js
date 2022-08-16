import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { CardMovies } from '../../CardMovies/CardMovie';
import {PaginationMovies } from '../../Pagination/Pagination';

export function Popular() {
	const API__KEY = '5a85e135dc7864482b9a3c9378e912b1';

	const [movie, setMovie] = useState({
    isLoading: true,
    isError:false,
    data:{},
    totalPage:1,

  });

  const [activePage, setActivePage] = useState(1)

	useEffect(() => {
		axios
			.get(`https://api.themoviedb.org/3/movie/popular`,{
        params:{
          api_key:API__KEY,
          page:activePage,
        }
      })
			.then(function (res) {
				setMovie({
          isLoading: false,
          isError:false,
          data: res.data.results,
          totalPage:res.data.total_pages > 500 ? 500 :res.data.total_pages,
        });
				
			})
			.catch((error) => setMovie({
        isLoading: false,
        isError:true,
        ...movie
      }))
	}, [activePage]);

  
	return (
		<>
			<ul className='movie__list'>
				{movie.data.length && movie.data.map((e) => <CardMovies key={e.id} item={e} />)}
			</ul>

			<PaginationMovies count={movie.totalPage} setActivePage={setActivePage}/>
		</>
	);
}
