const { readFileSync, writeFileSync } = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
  try {
    const data = JSON.parse(readFileSync("./data/users.json"));
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/users", (req, res) => {
  try {
    const post = req.body;
    let currData = JSON.parse(readFileSync("./data/users.json"));
    
    // update the data with the requested object and add the id field to the new user from JSON
    currData["users"] = [...currData.users, post];
    const len = currData.users.length;
    currData.users[len - 1]["id"] = len;

    writeFileSync("./data/users.json", JSON.stringify(currData));
    res.status(200).send("successful post");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = app;
