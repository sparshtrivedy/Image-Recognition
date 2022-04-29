import React from 'react';
import './Recognition.css';

const Recognition = ({imageUrl, box}) => {
	return (
		<div className='ma' style={{display: 'flex', justifyContent: 'center'}}>
			<div className='txt'>
				<p>
					{'Here is what we detected: '}
				</p>
				<p>
					{'(1) '}{box.first}{' (2) '}{box.second}{' (3) '}{box.third}{' (4) '}{box.fourth}{' (5) '}{box.fifth}
				</p>
			</div>
			<div className = 'absolute mt2'>
				<img src={imageUrl} width='500px' height='auto'/>
			</div>
		</div>
	);
}

export default Recognition;