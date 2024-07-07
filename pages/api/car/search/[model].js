import { createCar, getAllCars, getCarByName as getCarByModel } from "@/libs/controllers/cars";
import { verifyAllowedMethods } from "@/libs/utils/allowedMethods";

export default async function Handler(req, res) {
  const { method, query } = req;
  const { model } = query;
  const allowedMethods = ["GET"];
  const error = verifyAllowedMethods(method, allowedMethods);
  if (error) {
    return res.status(error.status).json(error);
  }

  if (method === "GET") {
    const cars = await getCarByModel(model);
    return res.status(200).json({ data: cars });
  }
}
