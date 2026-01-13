import jwt from "jsonwebtoken";

export default class JwtAuth {
  static createTokenJwt() {
    return jwt.sign({}, process.env.keyAcessUser, {
      expiresIn: `5m`,
    });
  }


  static decodeTokenJwt(tk) {
    return new Promise((resolve, reject) => {
      jwt.verify(tk, process.env.keyAcessUser, (err, decoded) => {
        if (err) {
         
            
          return reject(new Error("Token expirado ou inválido"));
        }


        resolve(decoded);
      });
    });
  }
  
}
