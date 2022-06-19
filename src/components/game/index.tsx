import React, { useState, useEffect, useRef } from 'react';
import logo from '../../logo.svg';
import './style.css';
import { IGameState } from './interface';
import { GAME_STATE_PATH } from './const';

import Miner from '../miner';
import BuyMinerButton from '../buyMinerButton';

function Game() {
	const [gameState, setGameState] = useState<IGameState>({
		balance: 0,
		clickCost: 1,
		minersAmount: 0,
		minersProfit: 5,
		version: '0.0.2'
	});

	const mounted = useRef<boolean>();

	useEffect(() => {
	 if (!mounted.current) {
		mounted.current = true;

		const prevState = localStorage.getItem(GAME_STATE_PATH);
		
		if (prevState) {
			const parsedState = JSON.parse(prevState);

			if (parsedState.version === gameState.version) {
				setGameState(parsedState);
			}
		}

	 } else {
		localStorage.setItem(GAME_STATE_PATH, JSON.stringify(gameState));
	 }
	}, [gameState])

	function earnMoney() {
		setGameState((prevState) => ({
			...prevState, 
			balance: prevState.balance + prevState.clickCost
		}))
	}

	function minerProfit() {
		setGameState((prevState) => ({
			...prevState,
			balance: prevState.balance + (prevState.minersAmount * prevState.minersProfit)
		}));
	}

	function buyUpgrade() {
		setGameState((prevState) => ({
			...prevState, 
			balance: prevState.balance - upgradeCost(), 
			clickCost: prevState.clickCost + 1,
		}))
	}

	function buyMiner(costOfMiner: number) {
		setGameState((prevState) => ({
			...prevState, 
			balance: prevState.balance - costOfMiner, 
			minersAmount: prevState.minersAmount + 1,
		}))
	}

	function upgradeCost() {
		return Math.pow(2, gameState.clickCost);
	}

  return (
    <div className="App" >
      <header className="App-header">
				<Miner onSuccess={minerProfit} amount={gameState.minersAmount} timer={150} profit={gameState.minersProfit}/>
				<BuyMinerButton buyMiner={buyMiner} amount={gameState.minersAmount} balance={gameState.balance}/>
				<p>Заработок с клика: {gameState.clickCost} $</p>
				<p>Баланс: {gameState.balance} $</p>
				<div onClick={earnMoney}>
					<img src={logo} className="App-logo" alt="logo"/>
				</div>
				<button disabled={upgradeCost() > gameState.balance} onClick={buyUpgrade}>
					Купить улучшение за {upgradeCost()} $
				</button>
      </header>
    </div>
  );
}

export default Game;
