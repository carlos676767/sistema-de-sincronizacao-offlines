import axios from "axios";
import fs from "fs";
import path from "node:path";
import FormData from "form-data";
import readjsfiles from "../utils/readFile.js";
import Fila from "../filas/fila.js";




 async function processRequest(pathZips, fileName) {

  const formData = new FormData();
  const filePath = path.join(pathZips, fileName);

  formData.append(
    "file",
    fs.createReadStream(filePath)
  );

  const request = await axios.post(
    "http://localhost:3000/files",
    formData,
    {
      headers: {
        ...formData.getHeaders()
      }
    }
  );

  Fila.fila(request);
  
}
export default async function backUpItens() {
  const pathZips = path.join("zipsFiles");
  const filesRead = await readjsfiles(pathZips);
 
  

  
  for (const fileName of filesRead) {
    await processRequest(pathZips, fileName);

  }
}



