import path from "path";
import fs from "fs/promises";
import { deleteImage } from "@/libs/controllers/images";

export default async function Handler(req, res) {
  const { method, query } = req;
  const { path } = query;

  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/upload"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/upload"));
  }

  if(method === "DELETE"){
      await deleteImage(path)
      return res.status(204).send('')
    }
}