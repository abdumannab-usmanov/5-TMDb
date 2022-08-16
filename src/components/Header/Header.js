import './header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const Header = () => {

	const [inputVal, setInputVal] = useState("")

	const navigate = useNavigate()

	useEffect(() => {
		if(inputVal.trim().length){
			navigate("/search/" + inputVal)
		}
		else{
			navigate("/")
		}

	},[inputVal])

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
						<input onInput={(evt) => setInputVal(evt.target.value)} 
						className='header__input' type='search' placeholder='Search' 
						/>
					</div>
				</div>
			</div>
		</header>

		


		</>
	);
};
