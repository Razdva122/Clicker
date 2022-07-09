import React from 'react';
import { observer, inject } from "mobx-react";
import logo from '@/logo.svg';

import Miner from '@/components/miner';
import BuyMinerButton from '@/components/buyMinerButton';

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

	function buyUpgrade() {
		gameStore.updateStore('balance', gameStore.balance - gameStore.upgradeCost)
		gameStore.updateStore('clickCost', gameStore.clickCost + 1)
	}

	function buyMiner(costOfMiner: number) {
		gameStore.updateStore('balance', gameStore.balance - costOfMiner)
		gameStore.updateStore('minersAmount', gameStore.minersAmount + 1)
	}

  return (
    <div className="App" >
      <header className="App-header">
				<Miner onSuccess={minerProfit} amount={gameStore.minersAmount} timer={150} profit={gameStore.minersProfit}/>
				<BuyMinerButton buyMiner={buyMiner} amount={gameStore.minersAmount} balance={gameStore.balance}/>
				<p>Заработок с клика: {gameStore.clickCost} $</p>
				<div onClick={earnMoney}>
					<img src={logo} className="App-logo" alt="logo"/>
				</div>
				<button disabled={gameStore.upgradeCost > gameStore.balance} onClick={buyUpgrade}>
					Купить улучшение за {gameStore.upgradeCost} $
				</button>
      </header>
    </div>
  );
}));

export default Main;
