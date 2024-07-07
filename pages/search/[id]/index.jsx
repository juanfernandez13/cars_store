import { CardComponent, NavbarComponent } from "@/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CarDetails({ id }) {
  const [car, setCar] = useState({ images: [] });

  useEffect(() => {
    searchCarById();
  }, []);

  const searchCarById = async () => {
    const baseUrl = "http://localhost:3000/api/car/";
    const response = await fetch(baseUrl + id);
    const data = await response.json();
    setCar(data.data);
  };

  return (
    <div className="w-full min-h-screen h-full py-24">
      <NavbarComponent />
      <div className="flex flex-col lg:flex-row w-full py-6 px-4">
        <div className="w-full lg:w-3/5 flex lg:justify-start justify-center">
          <div className="bg-slate-100 h-[350px] w-full lg:w-4/6 flex justify-center">
            <img src={"http://localhost:3000/" + car.images[0]} alt="" className="h-full object-contain"/>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <p>{car.automaker} - {car.model}</p>
          <p>R$: {car.price}</p>
          <p>Ano: {car.year} | Quilometragem: {car.km}</p>
          <p>Cor: {car.color} | Placa: {car.plate}</p>
          <p>Postado em: {car.createdAt} - {car.city}</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  return {
    props: {
      id,
    },
  };
}
