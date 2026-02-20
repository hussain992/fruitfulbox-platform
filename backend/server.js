import "dotenv/config";
import express from "express";
import cors from "cors";
// const express = require("express");
// const cors = require("cors");
import { MongoClient } from "mongodb";

const app = express();
const port = process.env.PORT || 8080;

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

    app.listen(port, "0.0.0.0", () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

app.get("/search", async (req, res) => {
  console.log("Received search query:fha", req.query.q);
  const db = req.app.locals.db;

  const searchQuery = req.query.q; // Get the search query from the request parameters
  try {
    const collections = ["fruits", "jams", "boxes", "cut_fruits"];

    const results = await Promise.all(
      collections.map((collection) =>
        db
          .collection(collection)
          .find({ title: { $regex: searchQuery, $options: "i" } })
          .toArray(),
      ),
    );

    // remove empty results and flatten the array
    const flattenedResults = results.reduce((acc, curr) => {
      if (curr.length > 0) {
        return acc.concat(curr);
      }
      return acc;
    }, []);

    console.log(`Search results:`, flattenedResults);
    res.json(flattenedResults);
  } catch (err) {
    console.error(`Error searching:`, err);
    res.status(500).json({ error: "Internal Server Error" });
    return;
  }
});
// const collections = await Promise.all([
//   db.collection("fruits").find({}).toArray(),
//   db.collection("jams").find({}).toArray(),
//   db.collection("boxes").find({}).toArray(),
//   db.collection("cut_fruits").find({}).toArray(),
//   // Add more collections as needed
// ]);

// const results = [].concat(...collections); // Merge the results from all collections
// console.log(`Search results:`, results);
// res.json(results);
// } catch (err) {
//   console.error(`Error searching:`, err);
//   res.status(500).json({ error: "Internal Server Error" });
//   return;
// }
// });

app.get("/fruits", async (req, res) => {
  const db = req.app.locals.db;
  try {
    const fruits = await db.collection("fruits").find({}).toArray();
    console.log("Fetched fruits:", fruits);
    res.json(fruits);
  } catch (err) {
    next(err);
  }
});

app.get("/jams", async (req, res) => {
  const db = req.app.locals.db;
  try {
    const jams = await db.collection("jams").find({}).toArray();
    res.json(jams);
  } catch (err) {
    next(err);
  }
});

app.get("/boxes", async (req, res) => {
  const db = req.app.locals.db;
  try {
    const boxes = await db.collection("boxes").find({}).toArray();
    res.json(boxes);
  } catch (err) {
    next(err);
  }
});

app.get("/cut_fruits", async (req, res) => {
  const db = req.app.locals.db;
  try {
    const cutFruits = await db.collection("cut_fruits").find({}).toArray();
    res.json(cutFruits);
  } catch (err) {
    next(err);
  }
});

startServer();
