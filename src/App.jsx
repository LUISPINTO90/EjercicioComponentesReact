// App.jsx
import React, { useState } from "react";
import DishCard from "./DishCard/DishCard";
import image1 from "./assets/01.png";
import image2 from "./assets/02.png";
import image3 from "./assets/03.png";

function App() {
  const [showOnlyStock, setShowOnlyStock] = useState(false);

  const dishes = [
    {
      id: 1,
      image_src: image1,
      name: "Plato 1",
      description: "Descripción del plato 1",
      chin_ya_no_hay: "Stock: Sí",
    },
    {
      id: 2,
      image_src: image2,
      name: "Plato 2",
      description: "Descripción del plato 2",
      chin_ya_no_hay: "Stock: No",
    },
    {
      id: 3,
      image_src: image3,
      name: "Plato 3",
      description: "Descripción del plato 3",
      chin_ya_no_hay: "Stock: Sí",
    },
  ];

  const handleToggleStock = () => {
    setShowOnlyStock(!showOnlyStock);
  };

  return (
    <div className="container">
      <h1>Mi primer componente</h1>
      <div>
        <input
          type="checkbox"
          onChange={handleToggleStock}
          checked={showOnlyStock}
        />
        <label>Mostrar solo stock</label>
      </div>
      <div className="dishes-container">
        {dishes.map((dish) =>
          !showOnlyStock ||
          (showOnlyStock && dish.chin_ya_no_hay === "Stock: Sí") ? (
            <DishCard
              key={dish.id}
              image_src={dish.image_src}
              name={dish.name}
              description={dish.description}
              chin_ya_no_hay={dish.chin_ya_no_hay}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;
