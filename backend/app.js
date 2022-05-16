const express = require("express");
const app = express();
const cors = require("cors");

const usersController = require("./controllers/usersController");

app.use(cors());
app.use(express.json());
app.use("/users", usersController);

app.get("/", (req, res) => {
    res.send("Welcome to our Capstone Project");
});
app.get("*", (req, res)=>{
    res.status(404).json({error: "Page not found."})
});

module.exports = app;