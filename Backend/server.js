import express from "express";
import Data from "./Data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(Data.products);
});

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.listen(5000, () => {
  console.log("Server at http://localhost: 5000");
});
