import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = props => {
	return (
		<div className='app'>
			<Header />
			<div className='container main'>
				<Navbar />
				<Routes>
					<Route path='/profile/*' element={<ProfileContainer />} />
					<Route path='/dialogs/*' element={<Dialogs />} />
					<Route path='/users' element={<UsersContainer />} />
					<Route path='/news' element={<News />} />
					<Route path='/music' element={<Music />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
