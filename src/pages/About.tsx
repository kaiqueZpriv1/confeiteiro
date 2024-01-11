import React from 'react';
import Global from '../Global';
import { AboutC } from '../components/about/AboutC';
import { ContactC } from '../components/contact/ContactC';
import { HeaderC } from '../components/header/HeaderC';

export const About = () => {
	return (
		<>
			<Global />
			<HeaderC />
			<AboutC />
			<ContactC />
		</>
	);
};
