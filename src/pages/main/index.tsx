import React from 'react';
import { observer, inject } from "mobx-react";
import logo from '@/logo.svg';

import Miner from '@/components/miner';

import './style.css';
import GameStore from '@/store';

const Main = inject("gameStore")(observer((props: {gameStore?: GameStore}) => {
	const gameStore = props.gameStore!;

	function earnMoney() {
		gameStore.updateStore('balance', gameStore.balance + gameStore.clickCost)
	}

	function minerProfit() {
		gameStore.updateStore('balance', gameStore.balance + gameStore.minersAmount * gameStore.minersProfit)
	}

  return (
    <div className="App" >
      <header className="App-header">
				<Miner onSuccess={minerProfit} amount={gameStore.minersAmount} timer={150} profit={gameStore.minersProfit}/>
				<p>Заработок с клика: {gameStore.clickCost} $</p>
				<div onClick={earnMoney}>
					<img src={logo} className="App-logo" alt="logo"/>
				</div>
      </header>
    </div>
  );
}));

export default Main;
