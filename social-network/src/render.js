import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { updateNewPostInputValue } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let render = state => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					state={state}
					addPost={addPost}
					updateNewPostInputValue={updateNewPostInputValue}
				/>
			</BrowserRouter>
		</React.StrictMode>
	);
};
