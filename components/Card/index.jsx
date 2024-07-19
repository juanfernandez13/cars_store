import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const CardComponent = (props) => {
  const { car, admin, loading, setLoading } = props;
  const router = useRouter();
  const deleteCar = async () => {
    setLoading(true)
    await fetch('http://localhost:3000/api/car/' + car.id, {method: 'DELETE'})
    setLoading(false)
  }

  return (
    <div className="w-4/5 lg:w-full h-auto rounded-3xl border-slate-400 border-2 pl-4 bg-slate-200 mx-2">
      <Link href={`/search/${car.id}`}>
        <Image
          src={"/upload/" + car.images[0]}
          className="h-1/2 w-full object-cover rounded-tr-3xl rounded-tl-md -mr-2 md:min-h-[300px] lg:min-h-[220px]"
        />
        <div className="w-full">
          <p className="bg-orange-600 -mr-8 pr-8 text-white font-bold text-2xl flex justify-end">
            {car.automaker} - {car.model}
          </p>
          <p className="bg-orange-600 -mr-8 pr-8 text-white font-bold text-2xl flex justify-end">
            R$ {car.price}
          </p>
          <p className="bg-orange-600 -mr-8 pr-8 text-white font-bold text-2xl flex justify-end">
            Ano: {car.year}
          </p>
          <p className="mt-4 lg:mt-8 mb-4 flex justify-center font-semibold">
            Anúncio visto {car.views} vezes
          </p>
        </div>
      </Link>
          {admin && (
            <div className="flex justify-center gap-4 mt-2 z-10">
              <Button className="text-white bg-red-500  font-semibold" onClick={() => deleteCar(car)} disabled={loading}>
                Excluir
              </Button>
              <Button className="text-white bg-blue-500  font-semibold" onClick={() => router.push('/administracao/edit/' + car.id)}>
                Editar
              </Button>
            </div>
          )}
    </div>
  );
};

export default CardComponent;
