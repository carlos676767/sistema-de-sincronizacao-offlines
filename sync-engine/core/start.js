import cron from "node-cron";
import createPasteBackup from "./service/createPastBackup.js";
import readFiles from "./service/viewArchiles.js";
import onlineScript from "./service/isOnline.js";




class Starter {
  static async startApp() {
    // await deleteZips()


    await onlineScript();
    await createPasteBackup();
    await readFiles();
    cron.schedule("0 */12 * * *", async () => {
      await onlineScript();
      await createPasteBackup();
      await readFiles();
    });
  }
}


(async () => {
  await Starter.startApp();
})();


