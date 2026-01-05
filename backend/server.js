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

    app.listen(PORT, '0.0.0.0',() => {
      console.log(`Server is running on port ${PORT}`);
    });
    } catch (err) { 
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

app.get("/api/fruits", async (req, res) => {
  const db = req.app.locals.db;
  try {
    const fruits = await db.collection("fruits").find({}).toArray();
    console.log("Fetched fruits:", fruits);
    res.json(fruits);
  } catch (err) {
    console.error("Error fetching fruits:", err);
    res.status(500).json({ error: "Internal Server Error" });
    return;
  } 
  
});

app.get("/api/jams", async (req, res) => {
  const db = req.app.locals.db;
  const jams = await db.collection("jams").find({}).toArray();
  res.json(jams);
});

app.get("/api/boxes", async (req, res) => {
  const db = req.app.locals.db;
  const boxes = await db.collection("boxes").find({}).toArray();
  res.json(boxes);
});

app.get("/api/cut_fruits", async (req, res) => {
  const db = req.app.locals.db;
  const cutFruits = await db.collection("cut_fruits").find({}).toArray();
  res.json(cutFruits);
});

startServer();
