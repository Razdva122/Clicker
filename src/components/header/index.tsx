import React from 'react';
import { observer, inject } from "mobx-react";

import { Link } from "react-router-dom";

import GameStore from '@/store';

import './style.css';

const Header = inject("gameStore")(observer((props: {gameStore?: GameStore}) => {
	const gameStore = props.gameStore!;

	return (
		<div className='Header'>
			<button>
				<Link to="/">Главная</Link>
			</button>
			<div>
				Баланс: {gameStore.balance} $
			</div>
			<button>
				<Link to="/shop">Магазин</Link>
			</button>
		</div>
	)
}));

export default Header;
