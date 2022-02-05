import React from 'react';
import './card.styles.css';

export const Card = ({monster}) => {
    return (
		<div className="card-container">
			<img
                className='kitten-img'
				alt="monster kitten"
				src={`https://images.unsplash.com/photo${monster.kitten}`}
			/>
			<h1>{monster.name}</h1>
            <h2>{monster.email}</h2>
		</div>
	);
}