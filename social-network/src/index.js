import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = state => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					state={state}
					addPost={store.addPost.bind(store)}
					updateNewPostInputValue={store.updateNewPostInputValue.bind(store)}
				/>
			</BrowserRouter>
		</React.StrictMode>
	);
};

rerender(store.getState());

store.subscribe(rerender);

reportWebVitals();
