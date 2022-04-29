import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import glasses from './glasses.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className='tilt br2 shadow-2'>
	      		<div>
	        		<img style={{paddingTop: '7px'}} alt='logo' src={glasses}/>
	      		</div>
	    	</Tilt>
		</div>
	);
}

export default Logo;