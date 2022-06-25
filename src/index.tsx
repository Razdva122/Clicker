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

import Main from '@/pages/main';
import Shop from '@/pages/shop';

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
					<Route path="*" element={<Main />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
