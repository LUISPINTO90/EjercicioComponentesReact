// DishCard.jsx
import React from "react";
import "./DishCard.css";

function DishCard({ image_src, name, description, chin_ya_no_hay }) {
  return (
    <div className="dish-card">
      <h2>Perfil Card</h2>
      <img src={image_src} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{chin_ya_no_hay}</p>
    </div>
  );
}

export default DishCard;
