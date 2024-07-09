import { ButtonNewCarComponent, CardComponent, SearchBarComponent } from "@/components";
import { useEffect, useState } from "react";

export default function SearchView() {
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [cars, setCars] = useState([])

  useEffect(() => {
      getCars()
  }, [searchValue,loading]
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
      <div className="w-full flex justify-end px-4 py-2">
        <ButtonNewCarComponent />
      </div>
      <div className="px-4 h-full w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid justify-items-center	gap-12 py-4">
        {cars.map((item, index) => (<CardComponent key={index} car={item} loading={loading} setLoading={setLoading} admin/>))}
      </div>
    </div>
  );
}
