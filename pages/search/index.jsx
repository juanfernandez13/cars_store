import { useEffect, useState } from "react";

import { CardComponent, SearchBarComponent } from "@/components";

import { baseURL } from "@/libs/constants";

export default function SearchView() {
  const [searchValue, setSearchValue] = useState('')
  const [cars, setCars] = useState()

  useEffect(() => {
      getCars()
  }, [searchValue]
)

const updateSearchValue = (text) => {
  setSearchValue(text.target.value)
}

const getCars = async () => {
  const pathApiCar = '/api/car/';
  const path = searchValue === ''? "" : `search/${searchValue}`
  const response = await fetch(baseURL+pathApiCar+path)
  const data = await response.json()
  if (data.data.error && data.data.error.code) {
    return;
  }

  setCars(data.data)
}
  return (
    <div className="w-full min-h-screen h-full">
      <SearchBarComponent value={searchValue} onChange={updateSearchValue}/>
      {
        cars && <div className="px-4 h-full w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid justify-items-center	gap-8 py-4">
        {cars.map((item, index) => (<CardComponent key={index} car={item}/>))}
      </div>
      }
      {!cars && <p>Erro ao buscar carros</p>}
    </div>
  );
}
