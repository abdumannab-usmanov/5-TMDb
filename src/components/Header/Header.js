import './header.scss';
import { Link } from 'react-router-dom';


export const Header = () => {
	return (
		<>
		<header className='header'>
			<div className='container'>
				<div className='header__inner'>
					<ul className='header__list'>
						<li className='header__item'>
							<Link className='header__link' to={'/'}>
								Home Page
							</Link>
						</li>
						<li className='header__item'>
							<Link className='header__link' to={'/popular'}>
								Popular Movies
							</Link>
						</li>
						<li className='header__item'>
							<Link className='header__link' to={'rated'}>
								Top-rated Movies
							</Link>
						</li>
						<li className='header__item'>
							<Link className='header__link' to={'upcoming'}>
								Up Coming Movies
							</Link>
						</li>
						<li className='header__item'>
							<Link className='header__link' to={'tvshow'}>
								Tv-show
							</Link>
						</li>
					</ul>

					<div>
						<input className='header__input' type='text' placeholder='Search' />
					</div>
				</div>
			</div>
		</header>

		


		</>
	);
};
