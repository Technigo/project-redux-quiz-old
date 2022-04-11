import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { quiz } from 'reducers/quiz';
import logo from "../assets/S&TC_logo.svg"

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onRestartButtonClick = () => {
		dispatch(quiz.actions.restart());
		navigate('/');
	};

	return (
		<div className='headerWrapper'>
			<img src={logo} alt='logo' />

			<nav>
				<NavLink to='/'> Home </NavLink>
				<NavLink to='/credits'> Credits </NavLink>
				<NavLink to='/quiz' onClick={() => onRestartButtonClick()}>
					Restart
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
