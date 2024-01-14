import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';

import { About } from '../pages/About';
import { Habilidade } from '../pages/Habilidade';
import { Contato } from '../pages/Contato';
import { Portfolio } from '../pages/Portfolio';
import { Personal } from '../components/portfolio/pages/Personal';
import { Marketing } from '../components/portfolio/pages/Marketing';
import { Nutricao } from '../components/portfolio/pages/Nutricao';
import { Psicologa } from '../components/portfolio/pages/Psicologa';
import { Explore } from '../components/portfolio/pages/Explore';
import { Calculadora } from '../components/portfolio/pages/Calculadora';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/sobre',
		element: <About />,
	},
	{
		path: '/habilidades',
		element: <Habilidade />,
	},
	{
		path: '/portfolio',
		element: <Portfolio />,
	},
	{
		path: '/contact',
		element: <Contato />,
	},
	{
		path: '/personal',
		element: <Personal />,
	},
	{
		path: '/marketing',
		element: <Marketing />,
	},
	{
		path: '/nutricao',
		element: <Nutricao />,
	},
	{
		path: '/psicologa',
		element: <Psicologa />,
	},
	{
		path: '/explore',
		element: <Explore />,
	},
	{
		path: '/calculadora',
		element: <Calculadora />,
	},
]);

export const Routers = () => {
	return <RouterProvider router={router} />;
};
