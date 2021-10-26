import React from "react";
  
  const AnimalsCard = (props) => {
    return (
      <div className="card">
          <h2>{""}</h2> 
          <img src={`https://source.unsplash.com/1600x900/?${props.name}`} />
      </div>
    );
  };
  
  export default AnimalsCard;