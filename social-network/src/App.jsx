import React from 'react';
import './app.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<div className='container main'>
				<Navbar />
				{/* <Profile /> */}
				<Dialogs />
			</div>
		</div>
	);
};

export default App;
