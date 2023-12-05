import express from "express";
import routers from "./src/routers/index.js";

const app = express();
const port = 3000;

app.use("/api", routers);

const server = app.listen(port, () =>
  console.log(`server berjalan di port : ${port}`),
);

export default server;
