import fs from "fs/promises";
import path from "node:path";
import { existsSync } from "node:fs";
import chalk from "chalk";
import checkSizeDesktop from "./checkDiskService.js";

export default async function createPasteBackup() {
  const hardDisk = await checkSizeDesktop()
  const pathAbs = path.join(hardDisk, "backupApp");


  if (!existsSync(pathAbs)) {
    await fs.mkdir(pathAbs, { recursive: true });
    console.log(chalk.green(`a pasta ${pathAbs} criada com sucesso.!`));

  }
}
