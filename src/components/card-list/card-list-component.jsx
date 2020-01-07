import React from 'react';
import {Card} from '../card/card.component';
import './Card-list-style.css';

// this component is responsible only for listing items

export const CardList = props =>{
    
    return (
    <div className="card-list">{

      props.series.map(shows => (
          <Card key={shows.id} shows={shows} />
      ) )
        
    }
    </div>)
}