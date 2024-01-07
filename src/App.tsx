import React from 'react';
import Global from './Global';
import { HeaderC } from './components/header/HeaderC';
import { HomeC } from './components/home/HomeC';
import { AboutC } from './components/about/AboutC';

function App() {
	return (
		<div className='App'>
			<Global/>
			<HeaderC/>
			<HomeC/>
			<AboutC/>
		</div>
	);
}

export default App;
