import React from 'react'

const Star = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      
      i <= rating ? stars.push() : stars.push();
    }
  
    return <div>{stars}</div>;
  };
  
  export default Star;