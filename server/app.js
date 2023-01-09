const { readFileSync, writeFileSync } = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// server get route to respond the request either with JSON data when status 200
// or with json error when status 400
app.get("/users", (req, res) => {
  try {
    const data = JSON.parse(readFileSync("./data/users.json"));
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

// server post route to respond successfully when requested to update JSON data
// with new user passed on from NavForm
app.post("/users", (req, res) => {
  try {
    const post = req.body;
    let currData = JSON.parse(readFileSync("./data/users.json"));

    // update the data with the requested object using spread operator
    // and add the id field to the new user from JSON
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
