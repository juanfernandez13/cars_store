import { CardComponent, SearchBarComponent } from "@/components";
import { useEffect, useState } from "react";

export default function SearchView() {
  const [searchValue, setSearchValue] = useState('')
  const [cars, setCars] = useState([])

  useEffect(() => {
      getCars()
  }, [searchValue]
)

const updateSearchValue = (text) => {
  setSearchValue(text.target.value)
}

const getCars = async () => {
  const baseUrl = 'http://localhost:3000/api/car/';
  const path = searchValue === ''? "" : `search/${searchValue}`
  const response = await fetch(baseUrl+path)
  const data = await response.json()
  setCars(data.data)
}
  return (
    <div className="w-full min-h-screen h-full">
      <SearchBarComponent value={searchValue} onChange={updateSearchValue}/>
      <div className="px-4 h-full w-fullgrid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid justify-items-center	gap-8 py-4">
        {cars.map((item, index) => (<CardComponent key={index} car={item}/>))}
      </div>
    </div>
  );
}
