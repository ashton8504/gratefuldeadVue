require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.get("/api/setlist", async (req, res) => {
  try {
    const year = req.query.year;

    const { data } = await axios.get(
      "https://api.setlist.fm/rest/1.0/artist/6faa7ca7-0d99-4a5e-bfa6-1fd5037520c6/setlists",
      {
        headers: {
          Accept: "application/json",
          "x-api-key": "tqztOUS3SQKpc17HrSFtPrME6fbRuQwWsHzs",
        },
      }
    );

    const filteredSetlists = year
      ? data.setlist.filter((setlist) => {
          return setlist.eventDate.includes(year);
        })
      : data.setlist;

    res.json(filteredSetlists);
  } catch (error) {
    console.error("Error fetching Setlist API:", error);
    res.status(500).send("Error fetching data");
  }
});

app.post("/contact", (req, res) => {
  const { email, message } = req.body;

  // Basic validation
  if (!email || !message) {
    return res
      .status(400)
      .json({ error: "Email and message are required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: "ashtoncodes8504@gmail.com",
    subject: "New Message Received",
    text: `Email: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      return res.status(200).json({ message: "Message received!" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
