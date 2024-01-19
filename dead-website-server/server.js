require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const SETLIST_API_KEY = process.env.SETLIST_API_KEY;
const artistMbid = "6faa7ca7-0d99-4a5e-bfa6-1fd5037520c6";

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/api/setlist", async (req, res) => {
  try {
    const { year } = req.query;

    const { data } = await axios.get(
      `https://api.setlist.fm/rest/1.0/search/setlists?artistMbid=${artistMbid}&p=1&year=${year}`,
      {
        headers: {
          Accept: "application/json",
          "x-api-key": SETLIST_API_KEY,
        },
      }
    );

    const setlists = data.setlist || [];

    res.json(setlists);
  } catch (error) {
    console.error(
      "Error fetching Setlist API:",
      error.response?.data || error.message
    );
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
