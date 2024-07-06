import { CardComponent } from "@/components";
import { useRouter } from "next/router";

export default function CarDetails() {
  const {query} = useRouter()
  const {id} = query;
  return <div className="w-full min-h-screen h-full">{id}</div>;
}
