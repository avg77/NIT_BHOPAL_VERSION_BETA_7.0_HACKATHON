import React from 'react';
import "../styles/Card.css"

function Card({ title, description, image }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default Card;