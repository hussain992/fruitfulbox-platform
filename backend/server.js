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

app.get("/search", async (req, res) => {
  console.log('Received search query:fha', req.query.q);
  const db = req.app.locals.db;
  
  const searchQuery = req.query.q; // Get the search query from the request parameters
  try {
    const collections = await Promise.all([
      db.collection("fruits").find({}).toArray(),
      db.collection("jams").find({}).toArray(),
      db.collection("boxes").find({}).toArray(),
      db.collection("cut_fruits").find({}).toArray(),
      // Add more collections as needed
    ]);

    const results = [].concat(...collections); // Merge the results from all collections
    console.log(`Search results:`, results);
    res.json(results);
  } catch (err) {
    console.error(`Error searching:`, err);
    res.status(500).json({ error: "Internal Server Error" });
    return;
  } 
});

app.get("/fruits", async (req, res) => {
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

app.get("/jams", async (req, res) => {
  const db = req.app.locals.db;
  const jams = await db.collection("jams").find({}).toArray();
  res.json(jams);
});

app.get("/boxes", async (req, res) => {
  const db = req.app.locals.db;
  const boxes = await db.collection("boxes").find({}).toArray();
  res.json(boxes);
});

app.get("/cut_fruits", async (req, res) => {
  const db = req.app.locals.db;
  const cutFruits = await db.collection("cut_fruits").find({}).toArray();
  res.json(cutFruits);
});

startServer();
