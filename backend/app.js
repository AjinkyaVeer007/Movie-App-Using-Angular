require("dotenv").config();
require("./DB/config").connect();
const cors = require("cors");

const express = require("express");
const Movies = require("./Model/moviedata");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/getmovies", async (req, res) => {
  try {
    const moviesData = await Movies.find();

    if (!moviesData) {
      return res.status(401).json({
        status: false,
        message: "No data found",
      });
    }

    res.status(200).json({
      status: true,
      data: moviesData,
    });
  } catch (error) {
    console.log("Fail to load data");
    console.log(error);
  }
});

module.exports = app;
