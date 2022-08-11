import React from 'react';
import { useRef } from 'react';
import axios from 'axios';
import './login.scss';
import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const elEmail = useRef();
	const elPassword = useRef();
	const navigate = useNavigate();

	const { token, setToken } = useAuth();

	function handleFormSubmit(evt) {
		evt.preventDefault();

		axios
			.post('https://reqres.in/api/login', {
				email: elEmail.current.value,
				password: elPassword.current.value,
			})
			.then(function (response) {
				if (response.data) {
					setToken(response.data);
					navigate('/');
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div>
			<form onSubmit={handleFormSubmit} className='login__form'>
				<div className='form__wrapper'>
					<h1 className='login__title'>Login</h1>
					<div className='wrappper__email'>
						<input
							ref={elEmail}
							type='email'
							className='log__input'
							placeholder='Email...'
						/>
					</div>

					<div className='wrappper__password'>
						<input
							ref={elPassword}
							type='password'
							className='log__input'
							placeholder='Password...'
						/>
					</div>
					<button className='login__btn' type='submit'>Send</button>
				</div>
			</form>
		</div>
	);
};
