require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/library");

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
    currentPort: PORT
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/public/index.html"));
  });

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});