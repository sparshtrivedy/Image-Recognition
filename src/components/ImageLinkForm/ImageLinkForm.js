import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<h1>Hello!</h1>
			<p className='f3'>
				{'This app will detect the object in the image for you. Enter the image url below!'}
			</p>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<div style={{display: 'flex', justifyContent: 'center'}} className='form pa4 br3 shadow-5'>
					<input className="f4 pa2 w-70 center" type='tex' onChange={onInputChange}/>
					<button className="w-30 br2 grow f4 link ph3 pv2 dib black" onClick={onButtonSubmit}>Detect!</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;