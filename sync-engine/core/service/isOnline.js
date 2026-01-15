import online from "is-online";
import writeLogger from "./textLogger.js";
import backUpItens from "./backupItensService.js";

export default async function onlineScript() {

  const isOnline = await online();

  if (isOnline) {

 
    await backUpItens()
    return await writeLogger(`online`);
  }


  setInterval(async () => {
    await backUpItens()
    await writeLogger(`offline, erro a fazer uploud tentando novamente em 5m`);
  }, 5000);
}
