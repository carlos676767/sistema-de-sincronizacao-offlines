import fs from "fs/promises";
import path from "node:path";

import Fila from "../filas/fila.js";
import checkSizeDesktop from "./checkDiskService.js";
import pathJoins from "../utils/joinPats.js";

export default async function movedArchiles(pathAbs) {
    const newpath = pathJoins(`storage`);

    const hardDisk = await checkSizeDesktop()
    const pathItens =  pathJoins(hardDisk, `backupApp` )  
  

    
    for (const v of pathAbs) {

        const fileName = path.basename(v);      
        const destino =  pathJoins(newpath, fileName);  


        const pathAbsItens = `${pathItens}` + `\\` + `${v}`
        
       
        Fila.fila(   await fs.copyFile(pathAbsItens, destino)       )
    }
  
}
