import fs from "fs/promises";
import data from "../utils/data.js";

export default async function writeLogger(sts) {
 

  const newDate = data();
  const {date, time} = newDate


  const text = `[${date} ${time}] status: ${sts}`;

 

 await fs.appendFile('./logger/logger.txt', text + '\n');
 
}