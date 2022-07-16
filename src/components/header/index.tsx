import React from 'react';
import { observer, inject } from "mobx-react";

import { Link } from "react-router-dom";

import { Button } from 'antd';

import GameStore from '@/store';

import './style.css';

const Header = inject("gameStore")(observer((props: {gameStore?: GameStore}) => {
	const gameStore = props.gameStore!;

	return (
		<div className='Header'>
			<Button shape={'round'}>
				<Link to="/">Главная</Link>
			</Button>
			<div>
				Баланс: {gameStore.balance} $
			</div>
			<Button shape={'round'}>
				<Link to="/shop">Магазин</Link>
			</Button>
		</div>
	)
}));

export default Header;
