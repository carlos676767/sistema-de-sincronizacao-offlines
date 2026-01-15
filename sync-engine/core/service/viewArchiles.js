
import copyFilesToStorage from "./RemovedSArchives.js";
import readFilesFromFolder from "../utils/readFile.js";

import checkSizeDesktop from "./checkDiskService.js";
import zipItem from "./zipFiles.js";
import pathJoins from "../utils/joinPats.js";

export default async function processBackupFiles() {
  const hardDisk = await checkSizeDesktop();
  const backupFolder = pathJoins(hardDisk, "backupApp");
  const backupFiles = await readFilesFromFolder(backupFolder);

  const storageFolder = pathJoins(`storage`);
  const storageFiles = await readFilesFromFolder(storageFolder);

  const filesNotInStorage = backupFiles.filter(
    (file) => !storageFiles.includes(file)
  );

  if (filesNotInStorage.length > 0) {
    await copyFilesToStorage(filesNotInStorage);
    zipItem();
  }
}
