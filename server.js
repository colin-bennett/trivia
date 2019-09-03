"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
const scoresRouter = require("./scores.api");
const questionsRouter = require("./questions.api");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cors());
app.use("/", scoresRouter);
app.use("/", questionsRouter);

const port = 3000;

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
