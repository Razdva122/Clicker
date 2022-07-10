import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
	BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import reportWebVitals from '@/reportWebVitals';
import { Provider } from "mobx-react";

import pages from '@/pages/index';

import GameStore from '@/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const stores = {
	gameStore: new GameStore()
};

root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider {...stores}>
				<Routes>
					<Route path="*" element={<pages.Main />} />
					<Route path="/shop" element={<pages.Shop />} />
				</Routes>
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
);

(globalThis as any).testUtils = {
	updateBalance: (newBalance: number) => stores.gameStore.updateStore('balance', newBalance)
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
