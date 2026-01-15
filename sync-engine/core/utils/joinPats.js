
import path from "node:path";
export default function pathJoins(url,url2 = ``) {
    return path.join(url, url2)
}