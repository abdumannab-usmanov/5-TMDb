import "./pagination.scss"
import { Pagination } from '@mui/material';


export function PaginationMovies({count, setActivePage}) {
	return (
		<>
			<div className='pagination'>
				<Pagination
					onClick={(evt) => {
						setActivePage(evt.target.innerText);
					}}
					count={count}
					variant='outlined'
					shape='rounded'
				/>
			</div>
		</>
	);
}
