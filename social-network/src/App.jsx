import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
	return (
		<Router>
			<div className='app'>
				<Header />
				<div className='container main'>
					<Navbar />
					<Routes>
						<Route path='/profile' element={<Profile />} />
						<Route path='/dialogs' element={<Dialogs />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
