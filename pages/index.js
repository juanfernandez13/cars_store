import { useEffect, useState } from "react";

import { CardComponent, NavbarComponent } from "@/components";

import { baseURL } from "@/libs/constants";

export default function Home() {
  const [topCars, setTopCars] = useState([]);

  useEffect(() => {
    getTopCars();
  }, []);

  const getTopCars = async () => {
    const response = await fetch(baseURL + "/api/car/search");
    const data = await response.json();
    if (data.data.error && data.data.error.code) {
      return;
    }
    setTopCars(data.data);
  };

  return (
    <div>
      <NavbarComponent />
      {topCars && (
        <div className="pt-28 px-8 ">
          <h2 className="mb-6 font-bold text-2xl">Carros em destaque</h2>
          <div className=" h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-16">
            {topCars.map((item, index) => (
              <CardComponent key={index} car={item} />
            ))}
          </div>
        </div>
      )}
      {
        !topCars && <div className="pt-28 px-8 ">
          Erro ao buscar carros
        </div>
      }
    </div>
  );
}
