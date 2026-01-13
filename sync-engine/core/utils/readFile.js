
import fs from "fs/promises";
export default  async function readsjfiles(file) {
    return   await fs.readdir(file);
}