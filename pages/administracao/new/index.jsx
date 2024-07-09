import { InputFile, NavbarComponent } from "@/components";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from 'next/router'


const NewCar = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [dataCar, setDataCar] = useState({
    price: 0,
    automaker: "",
    model: "",
    year: 0,
    color: "",
    city: "",
    km: 0,
    plate: "",
    images: [],
  });
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(1);
  const backStep = () => setStep(0);

  const handleImageChange = (e) => {
    let files = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    setPreviewImages((prevImages) => [
      ...prevImages,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
  };
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    const sendCarData = dataCar;
    selectedFiles.forEach((file, index) => {
      const newName = Date.now() + "-" + file.name;
      data.append(`file${index}`, file, newName);
      sendCarData.images.push(newName)
    });
    console.log(dataCar)
    try {
      await fetch("/api/images", {
        method: "POST",
        body: data,
      });
      await fetch("/api/car", {
        method: "POST",
        body: JSON.stringify(sendCarData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push('/administracao')
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex w-full min-h-screen h-full">
      <NavbarComponent />

      <div className="px-4 pt-24 w-full">
        {step === 0 && (
          <div className="flex justify-between items-center px-8">
            <h2 className="py-4  font-medium text-xl lg:text-2xl text-oran">
              Insira as imagens do carro
            </h2>
            <Button
              className="bg-orange-800 font-semibold text-white p-4 h-10 hover:bg-orange-400"
              onClick={nextStep}
            >
              Próximo <ArrowRight />
            </Button>
          </div>
        )}
        {step === 1 && (
          <div className="flex justify-between items-center px-8">
            <h2 className="py-4  font-medium text-xl lg:text-2xl text-oran">
              Insira os dados do carro
            </h2>
            <Button
              className="bg-orange-800 font-semibold text-white p-4 h-10 hover:bg-orange-400"
              onClick={backStep}
            >
              <ArrowLeft />
              Anterior
            </Button>
          </div>
        )}

        <div className="w-full mt-8 flex">
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-start md:justify-start w-full"
          >
            {step === 0 && (
              <div className="flex w-full items-center justify-evenly flex-wrap gap-8 px-8">
                <InputFile onChange={handleImageChange} />
                <div className="transition-all grid grid-cols-[repeat(2,minmax(200px,200px))] md:grid-cols-[repeat(3,minmax(250px,250px))] gap-1 lg:gap-4 overflow-scroll no-scrollbar">
                  {previewImages.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt="Pré-visualização"
                      className="object-cover w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border-2 border-slate-300"
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="px-8 flex gap-4 flex-col w-full items-center">
                <div className="w-full flex flex-wrap gap-4 justify-center">
                  <TextField
                    label="Modelo"
                    className="w-full md:w-2/5"
                    onChange={(e) => {
                      setDataCar({ ...dataCar, model: e.target.value });
                    }}
                  />
                  <TextField
                    label="Marca do veiculo"
                    className="w-full md:w-2/5"
                    onChange={(e) => {
                      setDataCar({ ...dataCar, automaker: e.target.value });
                    }}
                  />
                </div>
                <div className="w-full flex flex-wrap gap-4 justify-center">
                  <TextField
                    label="Preço"
                    type="number"
                    className="w-full md:w-1/3"
                    onChange={(e) => {
                      setDataCar({ ...dataCar, price: e.target.value });
                    }}
                  />
                  <TextField
                    label="Ano de fabricação"
                    className="w-full md:w-1/5"
                    onChange={(e) => {
                      setDataCar({ ...dataCar, year: e.target.value });
                    }}
                  />
                  <TextField
                    label="Quilometragem"
                    className="w-full md:w-1/4"
                    onChange={(e) => {
                      setDataCar({ ...dataCar, km: e.target.value });
                    }}
                  />
                </div>
                <div className="w-full flex flex-wrap gap-4 justify-center">
                  <TextField
                    label="Cor do veiculo"
                    className="w-full md:w-1/5"
                    onChange={(e) => {
                      setDataCar({ ...dataCar, color: e.target.value });
                    }}
                  />
                  <TextField
                    label="Placa do veiculo"
                    className="w-full md:w-1/3"
                    onChange={(e) => {
                      setDataCar({ ...dataCar, plate: e.target.value });
                    }}
                  />
                  <TextField
                    label="Cidade"
                    className="w-full md:w-1/4"
                    onChange={(e) => {
                      setDataCar({ ...dataCar, city: e.target.value });
                    }}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full md:w-1/2 bg-orange-800 font-semibold text-white p-4 h-10 hover:bg-orange-400 mt-8"
                >
                  Enviar dados
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCar;
