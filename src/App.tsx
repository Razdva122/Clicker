import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [money, setMoney] = useState(0);
	const [upgrade, setUpgrade] = useState(1);

	function buyUpgrade() {
		setMoney(money - upgradeCost());
		setUpgrade(upgrade + 1);
	}

	function upgradeCost() {
		return Math.pow(2, upgrade);
	}

  return (
    <div className="App" >
      <header className="App-header">
				<p>Заработок с клика: {upgrade} $</p>
				<p>Баланс: {money} $</p>
				<div onClick={() => setMoney(money + 1)}>
					<img src={logo} className="App-logo" alt="logo"/>
				</div>
				<button disabled={upgradeCost() > money} onClick={() => buyUpgrade()}>
					Купить улучшение за {upgradeCost()} $
				</button>
      </header>
    </div>
  );
}

export default App;
