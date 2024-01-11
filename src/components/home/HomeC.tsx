import React from 'react';
import {
	PrompIa,
	Cerebro,
	HomeS,
	HomeText,
	Line1,
	Line2,
	Map,
	Invisible,
} from './style';
import TypewriterComponent from 'typewriter-effect';
import LineSvg from './svg/Vector.svg';
import CerebroSvg from './svg/cerebro.svg';
import PrompSvg from './svg/AI Prompt.svg';
import MapBr from './svg/BR Map.svg';
import { Fade } from 'react-awesome-reveal';
export const HomeC = () => {
	return (
		<HomeS>
			<div className='container-home' style={{ zIndex: '8' }}>
				<Fade direction='left' cascade>
					<HomeText>
						<h3 className='text-primary'>Seja bem vindo, me chamo</h3>
						<h1 className='name-home'>
							&lt;
							<TypewriterComponent
								options={{
									strings: ['Kaique Ferreira'],
									autoStart: true,
									loop: true,
									skipAddStyles: true,
									cursor: '',
								}}
							/>
							/&gt;
						</h1>
						<p className='description-home'>Desenvolvedor Front-End</p>
					</HomeText>
				</Fade>
			</div>

			<Line1>
				<img src={LineSvg} alt='line' className='line-svg-left' />

				<img src={LineSvg} alt='line' className='line-svg1-left' />

				<img src={LineSvg} alt='line' className='line-svg2-left' />
			</Line1>

			<Line2>
				<img src={LineSvg} alt='line' className='line-svg-right' />
				<img src={LineSvg} alt='line' className='line-svg1-right' />
				<img src={LineSvg} alt='line' className='line-svg2-right' />
			</Line2>
			<Cerebro>
				<img src={CerebroSvg} alt='cerebro' className='cerebro-svg-right' />
			</Cerebro>
			<PrompIa>
				<img src={PrompSvg} alt='promp' className='promp-svg' />
			</PrompIa>
			<Map>
				<img src={MapBr} alt='br mapa' className='br-map' />
			</Map>
			<Invisible>
				<h3 className='text-invisible'>Confiança</h3>
				<h3 className='text-invisible'>Profissionalismo</h3>
				<h3 className='text-invisible'>Segurança</h3>
				<h3 className='text-invisible'>Responsabilidade</h3>
			</Invisible>
		</HomeS>
	);
};
