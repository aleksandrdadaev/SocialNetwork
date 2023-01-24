import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import './index.css';
import App from './App';
import { addPost, updateNewPostInputValue, subscribe } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let render = () => {
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

render();

subscribe(render);

reportWebVitals();
