import fs from "fs/promises";
import path from "node:path";

import Fila from "../filas/fila.js";
import checkSizeDesktop from "./checkDiskService.js";

export default async function movedArchiles(pathAbs) {
    const newpath = path.join("storage");

    const hardDisk = await checkSizeDesktop()
    const pathItens = path.join(hardDisk, "backupApp")
  
    
    for (const v of pathAbs) {

        const fileName = path.basename(v);      
        const destino = path.join(newpath, fileName);  


        const pathAbsItens = `${pathItens}` + `\\` + `${v}`
        
       
        Fila.fila(   await fs.copyFile(pathAbsItens, destino)       )
    }
  
}
