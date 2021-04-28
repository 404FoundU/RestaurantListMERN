import express from 'express';
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express();

// apply middleware
app.use(cors());
// server can accept json in the body of the request
app.use(express.json());
app.use("/api/v1/restaurants", restaurants);
// someone goes to a different route
app.use("*", (req, res)=> res.status(400).json({error: "Page not found"}))

export default app;