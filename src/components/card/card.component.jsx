import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return (
		<div className="card-container">
			<img
                className='kitten-img'
				alt="monster"
				src={`https://images.unsplash.com/photo${props.kitten}`}
			/>
			<h1>{props.monster.name}</h1>
            <h2>{props.monster.email}</h2>
		</div>
	);
}