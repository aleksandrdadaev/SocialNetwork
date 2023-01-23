import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = props => {
	return (
		<BrowserRouter>
			<div className='app'>
				<Header />

				<div className='container main'>
					<Navbar />
					<Routes>
						<Route
							path='/profile'
							element={<Profile state={props.state.profilePage} />}
						/>
						<Route
							path='/dialogs/*'
							element={<Dialogs state={props.state.dialogsPage} />}
						/>
						<Route path='/news' element={<News />} />
						<Route path='/music' element={<Music />} />
						<Route path='/settings' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
