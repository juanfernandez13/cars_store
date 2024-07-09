import * as formidable from "formidable";
import path from "path";
import fs from 'fs'

export const saveImage = (req) => {
  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), "/public/upload"),
    filename: (name, ext, path, form) => path.originalFilename,
    maxFileSize: 10 * 1024 * 1024,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export const deleteImage = async (path) => {
  const uploadPath = process.cwd();
  fs.unlinkSync(uploadPath+'/public/upload/'+path)
}

