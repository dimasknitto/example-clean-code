import express from "express";
const authRouter = express.Router();

authRouter.get("/auth", function (req, res) {
  return res.status(200).json({
    message: "server berjalan normal",
  });
});

export default authRouter;
