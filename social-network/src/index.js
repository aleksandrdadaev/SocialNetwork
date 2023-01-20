import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
	{ id: 1, name: 'Sanchezz' },
	{ id: 2, name: 'Danil' },
	{ id: 3, name: 'Pahan' },
];

let messagesData = [
	{ id: 1, text: 'Hi' },
	{
		id: 2,
		text: 'How are you?',
	},
	{ id: 3, text: 'Hi' },
];

let postsData = [
	{ id: 1, text: 'Hi, how are you?' },
	{ id: 2, text: "It's my second post" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App dialogs={dialogsData} messages={messagesData} posts={postsData} />
	</React.StrictMode>
);

reportWebVitals();
