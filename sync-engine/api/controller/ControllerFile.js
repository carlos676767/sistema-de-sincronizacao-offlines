import DtoFile from "../dtos/dtoFiles.js";
import MulterConfig from "../service/multer.js";

export default class ControllerFiles {
  static mainMulter(req, res) {
 

    return res.status(200).json({
      message: "Upload realizado",
     
    });
  }
}

