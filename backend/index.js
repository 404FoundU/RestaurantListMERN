import app from "./server";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;


MongoClient.connect(
    process.env.DB_URI,
    {
        poolSize: 50,

    }
)