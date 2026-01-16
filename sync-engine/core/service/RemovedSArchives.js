import fs from "fs/promises";


import Fila from "../filas/fila.js";
import checkSizeDesktop from "./checkDiskService.js";
import pathJoins from "../utils/joinPats.js";
import baseName from "../utils/pathBaseName.js";

export default async function movedArchiles(pathAbs) {
    const newpath = pathJoins(`storage`);

    const hardDisk = await checkSizeDesktop()
    const pathItens =  pathJoins(hardDisk, `backupApp` )  
    
    for (const archives of pathAbs) {
        const fileName = baseName(archives)      
        const destino =  pathJoins(newpath, fileName);  
        const pathAbsItens = `${pathItens}` + `\\` + `${archives}`
        Fila.fila(   await fs.copyFile(pathAbsItens, destino)       )
    }
  
}
