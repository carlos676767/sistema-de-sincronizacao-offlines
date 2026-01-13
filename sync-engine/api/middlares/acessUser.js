import express from "express";
import serveIndex from "serve-index";
import JwtAuth from "../utils/jwt.js";

const router = express.Router();

router.use(
  "/public",
  async (req, res, next) => {
    try {
      const { token } = req.query;

      if (!token) {
        return res.status(401).json({ error: "Token obrigatório" });
      }

      await JwtAuth.decodeTokenJwt(token);
      next();
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },

  
  express.static("./storage"),
  serveIndex("./storage", { icons: true })
);

export default router;
