const express = require("express");
const router = express.Router();
const pool = require("./connection");

function getAllScores(req, res) {
  pool.query("select * from scores").then(result => {
    res.send(result.rows);
  });
}

function postScore(req, res) {
  pool
    .query("insert into scores (username, score) values ($1::text, $2::int)", [
      req.body.username,
      req.body.score
    ])
    .then(() => {
      getAllScores(req, res);
    });
}

router.get("/scores", getAllScores);

router.post("/scores", postScore);

// router.post("/scores", (req, res) => {
//   pool
//     .query("insert into scores (username, score) values ($1::text, $2::int)", [
//       req.body.username,
//       req.body.score
//     ])
//     .then(() => {
//       getAllScores(req, res);
//     });
// });

module.exports = router;
