import path from "node:path";
import copyFilesToStorage from "./RemovedSArchives.js";
import readFilesFromFolder from "../utils/readFile.js";

import checkSizeDesktop from "./checkDiskService.js";
import zipItem from "./zipFiles.js";

export default async function processBackupFiles() {
  const hardDisk = await checkSizeDesktop();
  const backupFolder = path.join(hardDisk, "backupApp");
  const backupFiles = await readFilesFromFolder(backupFolder);

  const storageFolder = path.join("storage");
  const storageFiles = await readFilesFromFolder(storageFolder);

  const filesNotInStorage = backupFiles.filter(
    (file) => !storageFiles.includes(file)
  );

  if (filesNotInStorage.length > 0) {
    await copyFilesToStorage(filesNotInStorage);
    zipItem();
  }
}
