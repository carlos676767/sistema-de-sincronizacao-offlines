import multer from "multer";
import path from "node:path";
export default class MulterConfig {
  static configsMulter() {
    return multer.diskStorage({
      destination: function (req, file, cb) {
        const storagePath = path.resolve("storage");
        cb(null, storagePath);
      },

      filename: function (req, file, cb) {
        console.log(file.originalname);
        
        cb(null, file.originalname);
      },
    });
  }

  static startMulter() {
    return multer({ storage: MulterConfig.configsMulter() });
  }
}
