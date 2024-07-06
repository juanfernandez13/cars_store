import { CardComponent, SearchBarComponent } from "@/components";
import { useState } from "react";

export default function SearchView() {
  const [searchValue, setSearchValue] = useState('')
  
  return (
    <div className="w-full min-h-screen h-full">
      <SearchBarComponent />
      <div className="px-4 h-full w-fullgrid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid justify-items-center	gap-8 py-4">
        {[1,2,1,1,5].map((item, index) => (<CardComponent key={index}>{item}</CardComponent>))}
      </div>
    </div>
  );
}
