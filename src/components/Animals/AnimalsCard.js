import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
  
  const AnimalsCard = (props) => {
    const match = useRouteMatch();
    return (
      <div className="card">
          <img src={`https://source.unsplash.com/1600x900/?${props.name}`} />
          <h3>{props.name}</h3> 
          <Link to={`${match.url}/${props.name}`}>Read more</Link>
      </div>
    );
  };
  
  export default AnimalsCard;