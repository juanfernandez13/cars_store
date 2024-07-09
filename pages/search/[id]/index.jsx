import { NavbarComponent } from "@/components";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function CarDetails({ id }) {
  const [car, setCar] = useState();
  const [indexImg, setIndexImg] = useState(0);

  useEffect(() => {
    searchCarById();
  }, []);

  const searchCarById = async () => {
    const baseUrl = "http://localhost:3000/api/car/";
    const response = await fetch(baseUrl + id);
    const data = await response.json();
    console.log(data);
    if (data.data.error && data.data.error.code) {
      return;
    }
    setCar(data.data);
  };

  function converteData(dataISO) {
    var data = new Date(dataISO);
    var dia = String(data.getDate()).padStart(2, "0");
    var mes = String(data.getMonth() + 1).padStart(2, "0");
    var ano = data.getFullYear();

    return dia + "/" + mes + "/" + ano;
  }

  return (
    <div className="w-full min-h-screen h-full py-24">
      <NavbarComponent />
      {car && (
        <div className="flex flex-col lg:flex-row w-full py-6 px-4 gap-6">
          <div className="w-full lg:w-3/5 flex lg:justify-start justify-center flex-col">
            <div className="bg-orange-100 h-[350px] w-full lg:w-4/6 flex justify-center">
              <img
                src={"http://localhost:3000/upload/" + car.images[indexImg]}
                alt=""
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-between w-full lg:w-4/6">
              {car.images.map((item, index) => (
                <Button key={index} onClick={() => setIndexImg(index)}>
                  <img
                    src={"http://localhost:3000/upload/" + car.images[index]}
                    alt=""
                    className="h-[120px] object-contain"
                  />
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-2/5 mr-28 text-white text-xl lg:text-3xl font-semibold border-2 border-orange-400 rounded-lg flex justify-center flex-col p-8">
            <p className="w-full bg-orange-600 -ml-16 pl-16">
              {car.automaker} - {car.model}
            </p>
            <p className="w-full bg-orange-600 -ml-16 pl-16">
              Valor: R$ {car.price}
            </p>
            <p className="w-full bg-orange-600 -ml-16 pl-16">
              Ano: {car.year}{" "}
            </p>
            <p className="w-full bg-orange-600 -ml-16 pl-16">
              Quilometragem: {car.km} Km{" "}
            </p>
            <p className="w-full bg-orange-600 -ml-16 pl-16">
              Placa: {car.plate}
            </p>
            <p className="w-full bg-orange-600 -ml-16 pl-16">
              Cor: {car.color}
            </p>
            <p className="w-full flex justify-center mt-8 text-lg text-gray-600">
              Postado em: {converteData(car.createdAt)} - {car.city}
            </p>
            <p className="w-full flex justify-center mt-8 text-lg text-gray-600">
              Anúncio visto {car.views} vezes
            </p>
          </div>
        </div>
      )}
      {!car && <div>Carro não encontrado</div>}
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
