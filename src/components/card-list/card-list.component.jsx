import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props) => {
    
    return (
		<div className="card-list">
			{props.monsters.map((monster, i) => {
                console.log('this is i, ', i);
				return <Card key={monster.id} monster={monster} kitten={props.kitten[i]} />
			})}
		</div>
	);
}