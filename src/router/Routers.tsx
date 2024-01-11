import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { AboutC } from '../components/about/AboutC';
import { HabilidadeC } from '../components/Habilidades/HabilidadeC';
import { PortfolioC } from '../components/portfolio/PortfolioC';
import { ContactC } from '../components/contact/ContactC';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/sobre',
		element: <AboutC />,
	},
	{
		path: '/habilidades',
		element: <HabilidadeC />,
	},
	{
		path: '/portfolio',
		element: <PortfolioC />,
	},
	{
		path: '/contact',
		element: <ContactC />,
	},
]);

export const Routers = () => {
	return <RouterProvider router={router} />;
};
