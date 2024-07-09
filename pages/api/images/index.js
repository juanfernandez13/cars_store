import {deleteImage, saveImage} from "@/libs/controllers/images";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function Handler(req, res) {
  const { method } = req;

  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/upload"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/upload"));
  }
  if(method === "POST"){
    try {
      await saveImage(req);
      return res.status(201).json({ message: "Image save" });
    } catch (error) {
      return res.status(404).json({ message: "Erro ao salvar imagem" });
    }
  }

  if(method === "DELETE"){
    await deleteImage('')
    return res.status(204).send('')
  }
}
