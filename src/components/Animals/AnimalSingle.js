import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const AnimalSingle = () => {
    let { animal } = useParams();
    let history = useHistory();
    return <div>Meet the {animal}
    <div>
        <button onClick={() => history.goBack()}>Back to Animals</button>
    </div>
    </div>;
};

export default AnimalSingle;