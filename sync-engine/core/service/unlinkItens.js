import fs from "fs/promises";

import readsjfiles from "../utils/readFile.js";
import path from "node:path";
export default async function deleteItens(pathAbs) {

    const pathObjects = path.join(pathAbs);
    const listObjects = await readsjfiles(pathObjects)
    
    
    for (const c of listObjects) {
       
      

     await fs.unlink(pathObjects + "/" + c)
   
     
    }
}











