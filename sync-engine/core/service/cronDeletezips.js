import fs from "fs";
import deleteItens from "./unlinkItens.js";
import cron from "node-cron";

export default async function deleteZips() {



  const timeFInalExecute = 5 * 24 * 60 * 60;

  
 const data =  fs.readFile("timer.json", "utf-8", (err, data) => {})

  const seconds = JSON.parse(data).seconds ?? 0;

  const sumValueTime = seconds + 1;

   fs.writeFile(
    "timer.json",
    JSON.stringify({ seconds: sumValueTime }),
    "utf-8"
  );

  if (sumValueTime >= timeFInalExecute) {
     fs.writeFile(
      "timer.json",
      JSON.stringify({ seconds: 0 }),
      "utf-8"
    );

    await deleteItens("zipsFiles");
  }

}
