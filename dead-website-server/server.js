app.get("/api/setlist", async (req, res) => {
  try {
    const { year } = req.query;
    const artistMbid = "6faa7ca7-0d99-4a5e-bfa6-1fd5037520c6"; // The Dead's MBID

    const { data } = await axios.get(
      `https://api.setlist.fm/rest/1.0/search/setlists?artistMbid=${artistMbid}&p=1&year=${year}`,
      {
        headers: {
          Accept: "application/json",
          "x-api-key": process.env.SETLIST_API_KEY,
        },
      }
    );

    const filteredSetlists = data.setlist.filter((setlist) => {
      const setlistYear = new Date(setlist.eventDate).getFullYear();
      return setlistYear === parseInt(year);
    });

    res.json(filteredSetlists);
  } catch (error) {
    console.error(
      "Error fetching Setlist API:",
      error.response?.data || error.message
    );
    res.status(500).send("Error fetching data");
  }
});
