import express from "express";
import { getOrder } from "../../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.get("/order", getOrder);

export default orderRouter;
