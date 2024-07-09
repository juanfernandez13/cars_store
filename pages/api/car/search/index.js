import { getTopCars } from "@/libs/controllers/cars";
import { verifyAllowedMethods } from "@/libs/utils/allowedMethods";

export default async function Handler(req, res) {
  const { method } = req;
  const allowedMethods = ["GET"];
  const error = verifyAllowedMethods(method, allowedMethods);
  if (error) {
    return res.status(error.status).json(error);
  }

  if(method === "GET" ){
    const cars = await getTopCars()
    return res.status(200).json({ data: cars });
  }
}