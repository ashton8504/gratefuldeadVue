const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.get("/api/setlist", async (req, res) => {
  try {
    const year = req.query.year; // Extract the 'year' query parameter

    // Make a request to the Setlist API
    const { data } = await axios.get(
      "https://api.setlist.fm/rest/1.0/artist/6faa7ca7-0d99-4a5e-bfa6-1fd5037520c6/setlists",
      {
        headers: {
          Accept: "application/json",
          "x-api-key": "tqztOUS3SQKpc17HrSFtPrME6fbRuQwWsHzs",
        },
      }
    );

    // Filter data based on the 'year' query parameter
    const filteredSetlists = year
      ? data.setlist.filter((setlist) => {
          // Assuming 'eventDate' contains the year information
          return setlist.eventDate.includes(year);
        })
      : data.setlist; // If 'year' is not provided, return all setlists

    res.json(filteredSetlists);
  } catch (error) {
    console.error("Error fetching Setlist API:", error);
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
