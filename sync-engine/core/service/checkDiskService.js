import { exec } from "node:child_process";

export default function checkSizeDesktop() {
  return new Promise((sucess) => {
    exec(
      "wmic logicaldisk get name,freespace,size /format:list",
      (err, stdout) => {
        const regex = /FreeSpace=(\d+)\s+Name=([A-Z]:)\s+Size=(\d+)/g;
        const matches = stdout.matchAll(regex);

        const arrayObject = [...matches].map((c) => ({
          freeSpace: Math.floor(Number(c[1]) / 1024 / 1024 / 1024),

          size: Math.floor(Number(c[3]) / 1024 / 1024 / 1024),

          unidDesktop: c[2],
        }));

        const objectValues = arrayObject.reduce((acc, ac) => {
          acc[ac.unidDesktop] = {
            freeSpace: ac.freeSpace,
            size: ac.size,
          };
          return acc;
        }, {});

        for (const key in objectValues) {
          if (objectValues[key].freeSpace < objectValues[key].size) {
            sucess(key);
          }
        }
      }
    );
  });
}
