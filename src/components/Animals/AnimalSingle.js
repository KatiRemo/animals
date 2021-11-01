import React from 'react';
import { useParams } from 'react-router-dom';

const AnimalSingle = () => {
    let { animal } = useParams();
    return <div>Meet the {animal}</div>;
};

export default AnimalSingle;