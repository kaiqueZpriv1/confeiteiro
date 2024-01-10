import React from 'react';
import Global from './Global';
import { HeaderC } from './components/header/HeaderC';
import { HomeC } from './components/home/HomeC';
import { AboutC } from './components/about/AboutC';
import { HabilidadeC } from './components/Habilidades/HabilidadeC';
import { PortfolioC } from './components/portfolio/PortfolioC';

function App() {
	return (
		<div className='App'>
			<Global/>
			<HeaderC/>
			<HomeC/>
			<AboutC/>
			<HabilidadeC/>
			<PortfolioC/>
		</div>
	);
}

export default App;
