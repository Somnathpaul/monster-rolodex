import React from 'react';

import './card.style.css';

export const Card = props => (

    <div className="card-container">
       <img alt="monster" src={`https://robohash.org/${props.shows.id}?set=set3`} style={{ height: '180px' , width: '180px'}}/>
       <h3> Monster {props.shows.name}</h3>
       <h4>User name: {props.shows.username}</h4>
       <p>{props.shows.email}</p>
    </div>
)