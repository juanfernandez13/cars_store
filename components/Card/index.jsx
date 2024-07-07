import React from "react";

const CardComponent = (props) => {
  const { car } = props;
  return (
    <div className="w-4/5 lg:w-full h-auto rounded border-slate-400 border-2">
      <a href={`/search/${car.id}`}>
        <img src={car.images[0]} className="h-3/5 w-full object-cover"/>
        <p>
          <span className="font-bold">{car.automaker}</span> - {car.model}
        </p>
        <p>R$: {car.price}</p>
        <p>Ano: {car.year}</p>
        <p>Anúncio visto {car.views} vezes</p>
      </a>
    </div>
  );
};

export default CardComponent;
