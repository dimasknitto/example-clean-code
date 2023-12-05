import express from "express";

const authRouter = express.Router();

authRouter.get("/auth", (req, res) =>
  res.status(200).json({
    message: "server berjalan normal",
  }),
);

export default authRouter;
