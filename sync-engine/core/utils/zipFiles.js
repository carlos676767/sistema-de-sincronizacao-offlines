import AdmZip from "adm-zip";

import path from "node:path";
import deleteItens from "../service/unlinkItens.js";
import readsjfiles from "./readFile.js";

export default async function zipItem() {
  const zip = new AdmZip();
  zip.addLocalFolder(`storage`);


  const pathObjects = path.join("zipsFiles");

  
  const getItens = await readsjfiles(pathObjects);

  const random = Math.floor(Math.random() *  1_000_000);

  const v = getItens
    .join(` `)
    .split(``)
    .filter((c) => Number(c))
    .map(Number);
  if (!v.includes(random)) {
    zip.writeZip(`zipsFiles/item${random}.zip`);
    setTimeout(async () => {
      await deleteItens(`storage`);
    }, 1000);
  }
}







