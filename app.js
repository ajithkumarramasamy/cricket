const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const app = express();
const sqlite3 = require("sqlite3");
let db = null;
app.use(express.json());
const dbPath = path.join(__dirname, "cricketTeam.db");
const initializedb = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.database,
    });
    app.listen(3001, () => {
      console.log("server running successfully");
    });
  } catch (e) {
    console.log(e.message);
  }
};

initializedb();
