import AdmZip from "adm-zip";


import deleteItens from "./unlinkItens.js";
import readsjfiles from "../utils/readFile.js";
import pathJoins from "../utils/joinPats.js";

export default async function zipItem() {
  const zip = new AdmZip();
  zip.addLocalFolder(`storage`);

  const pathObjects = pathJoins(`storage`);

  const getItens = await readsjfiles(pathObjects);

  const random = Math.floor(Math.random() * 1_000_000);

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
