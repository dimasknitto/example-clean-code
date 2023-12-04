import express from "express";
import routers from "./src/routers/index.js";

const app = express();
const port = 3000;

app.use("/api", routers);

app.listen(port, () => console.log("server berjalan di port : " + port));
