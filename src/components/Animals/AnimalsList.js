import React from 'react';
import {animals} from './animals';
import AnimalsCard from "./AnimalsCard";

const AnimalsList = () => {
    return (
        <div>
            {animals.map((item) => (
                <div>
                    <h2>{item.name}</h2>

                    <AnimalsCard key={item.name} 
                    name={item.name} />
                </div>
            ))}
        </div>
    );
};

export default AnimalsList;