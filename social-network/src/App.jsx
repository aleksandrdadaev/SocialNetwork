import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initialize } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initialize();
	}

	render() {
		return !this.props.initialized ? (
			<Preloader />
		) : (
			<div className='app'>
				<HeaderContainer />
				<div className='container main'>
					<Navbar />
					<Routes>
						<Route path='/profile/:userId?' element={<ProfileContainer />} />
						<Route path='/dialogs/*' element={<Dialogs />} />
						<Route path='/users' element={<UsersContainer />} />
						<Route path='/news' element={<News />} />
						<Route path='/music' element={<Music />} />
						<Route path='/settings' element={<Settings />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</div>
			</div>
		);
	}
}

let mapStateToProps = state => ({
	initialized: state.initialize.initialized,
});

export default connect(mapStateToProps, { initialize })(App);
