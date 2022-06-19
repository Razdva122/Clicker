import React, { useState, useEffect, useRef } from 'react';
import logo from '../../logo.svg';
import './style.css';
import { IGameState } from './interface';
import { GAME_STATE_PATH } from './const';

function Game() {
	const [gameState, setGameState] = useState<IGameState>({balance: 0, clickCost: 1});

	const mounted = useRef<boolean>();

	useEffect(() => {
	 if (!mounted.current) {
		mounted.current = true;

		const prevState = localStorage.getItem(GAME_STATE_PATH);
		
		if (prevState) {
			setGameState(JSON.parse(prevState));
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

	function buyUpgrade() {
		setGameState((prevState) => ({
			...prevState, 
			balance: prevState.balance - upgradeCost(), 
			clickCost: prevState.clickCost + 1,
		}))
	}

	function upgradeCost() {
		return Math.pow(2, gameState.clickCost);
	}

  return (
    <div className="App" >
      <header className="App-header">
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
