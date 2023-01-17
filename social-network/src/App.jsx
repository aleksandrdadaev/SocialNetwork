import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='Container Main'>
				<Navbar />
				<section>
					<span>Cover</span>
					<span>Photo</span>
					<span>Information</span>
				</section>
			</div>
		</div>
	);
}

export default App;
