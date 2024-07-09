import { deleteCarById, getCarById, updateCarById } from "@/libs/controllers/cars";
import { guardPrisma } from "@/libs/utils/dataHandlers";

export default async function Handler(req, res) {
  const { method, query, body } = req;
  const { id } = query;

  if (method === "GET") {
    const car = await getCarById(id);
    return res.status(200).json({ data: car });
  }
  if (method === "PUT") {
    const car = await updateCarById(body, id);
    return res.status(200).json({ data: car });

  }
  if (method === "DELETE") {
    await deleteCarById(id);
    return res.status(204).send()
  }
}
