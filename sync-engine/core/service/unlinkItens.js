import fs from "fs/promises";

import readsjfiles from "../utils/readFile.js";
import pathJoins from "../utils/joinPats.js";

export default async function deleteItens(pathAbs) {

    const pathObjects = pathJoins(pathAbs) ;
    const listObjects = await readsjfiles(pathObjects)
    
    
    for (const c of listObjects) {
       
      

     await fs.unlink(pathObjects + "/" + c)
   
     
    }
}











