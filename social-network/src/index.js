import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Background from './Background';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Background />
		<App />
	</React.StrictMode>
);

reportWebVitals();
