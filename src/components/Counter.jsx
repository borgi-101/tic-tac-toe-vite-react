import React from 'react';

const Counter = ({score}) =>{
	return(
		<div className="Counter">
			<div className="score-x">
				{score.x}
			</div>
			<div className="vertical-line"></div>
			<div className="score-o">
				{score.o}
			</div>
		</div>
	);
};
export default Counter;