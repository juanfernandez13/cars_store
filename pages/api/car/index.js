import { createCar, getAllCars } from "@/libs/controllers/cars";
import { verifyAllowedMethods } from "@/libs/utils/allowedMethods";

export default async function Handler(req, res) {
  const { method, body } = req;
  const allowedMethods = ["GET", "POST"];
  const error = verifyAllowedMethods(method, allowedMethods);
  if (error) {
    return res.status(error.status).json(error);
  }

  if (method === "GET") {
    const cars = await getAllCars()
    return res.status(200).json({data: cars})
  }

  if (method === "POST") {
    if (!body) {
      return res.status(400).json({ error: "Envie os dados do carro" });
    }
    await createCar(body);
    return res.status(201).send()
  }
}
