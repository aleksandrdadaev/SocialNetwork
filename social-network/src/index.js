import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = state => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<StoreContext.Provider value={store}>
					<App />
				</StoreContext.Provider>
			</BrowserRouter>
		</React.StrictMode>
	);
};

rerender(store.getState());

store.subscribe(() => rerender(store.getState()));

reportWebVitals();
