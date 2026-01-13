import express from "express";
import MulterConfig from "../service/multer.js";
import ControllerFiles from "../controller/ControllerFile.js";


const expressRouter = express.Router();

expressRouter.get(`/test`, (req, res) => {
  res.send({
    ola: `ola`,
  });
});




expressRouter.post(
  "/files",
  MulterConfig.startMulter().array("file"),
  ControllerFiles.mainMulter
);
export default expressRouter;
