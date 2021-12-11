import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const AnimalSingle = () => {
    let { animal } = useParams();
    let history = useHistory();
    return (
        <div>
            <h2>Meet THE {animal.toUpperCase()}</h2>
        <div className="animalCard">
            <img src={`https://source.unsplash.com/1600x900/?${animal}`} />
        </div>  
        <div>
            <button onClick={() => history.goBack()}>Back to Animals</button>
        </div>
        </div>
    );
};

export default AnimalSingle;