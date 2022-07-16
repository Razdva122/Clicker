import React from 'react';

import { observer, inject } from "mobx-react";

import BuyMinerButton from '@/components/buyMinerButton';

import { Button } from 'antd';

import './style.css';

import GameStore from '@/store';

const Shop = inject("gameStore")(observer((props: {gameStore?: GameStore}) => {
	const gameStore = props.gameStore!;

	function buyUpgrade() {
		gameStore.updateStore('balance', gameStore.balance - gameStore.upgradeCost)
		gameStore.updateStore('clickCost', gameStore.clickCost + 1)
	}

	function buyMiner(costOfMiner: number) {
		gameStore.updateStore('balance', gameStore.balance - costOfMiner)
		gameStore.updateStore('minersAmount', gameStore.minersAmount + 1)
	}

	function buyCase() {
		gameStore.updateStore('balance', gameStore.balance - 1000)
		gameStore.updateStore('casesAmount', gameStore.casesAmount + 1)
	}

	return (
		<div className='Shop'> 
			<BuyMinerButton buyMiner={buyMiner} amount={gameStore.minersAmount} balance={gameStore.balance}/>
			<Button disabled={gameStore.upgradeCost > gameStore.balance} shape={'round'} onClick={buyUpgrade}>
				Купить улучшение за {gameStore.upgradeCost} $
			</Button>
			<Button disabled={gameStore.balance < 1000} shape={'round'} onClick={buyCase}>
				Купить кейс за 1000 $
			</Button>
		</div>
	)
}));

export default Shop;