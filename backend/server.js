import 'dotenv/config';
import express from "express";
import cors from "cors";
// const express = require("express");
// const cors = require("cors");
import { MongoClient } from "mongodb";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

async function startServer() {
  console.log("MONGODB_URI:");
  const client = new MongoClient(process.env.MONGODB_URI);
    try {
    await client.connect();
    console.log("Connected to MongoDB");
    app.locals.db = client.db("fruitfulbox");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    } catch (err) { 
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

app.get("/api/fruits", async (req, res) => {
  const db = req.app.locals.db;
  const fruits = await db.collection("fruits").find({}).toArray();
  console.log(fruits);
  res.json(fruits);
});

startServer();
