import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';

import { About } from '../pages/About';
import { Habilidade } from '../pages/Habilidade';
import { Contato } from '../pages/Contato';
import { Portfolio } from '../pages/Portfolio';
import { Personal } from '../components/portfolio/pages/Personal';

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
]);

export const Routers = () => {
	return <RouterProvider router={router} />;
};
