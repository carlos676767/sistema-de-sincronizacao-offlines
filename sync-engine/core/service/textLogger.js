import fs from "fs/promises";

export default async function writeLogger(sts) {
  const now = new Date();

  const date = now.toLocaleDateString("pt-BR");
  const time = now.toLocaleTimeString("pt-BR");

  const text = `[${date} ${time}] status: ${sts}`;

 

 await fs.appendFile('./logger/logger.txt', text + '\n');
 
}