export default class ControllerFiles {
  static mainMulter(req, res) {
 

    console.log(req.files);
    
    return res.status(200).json({
      message: "Upload realizado",
     
    });
  }
}

