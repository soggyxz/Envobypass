const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/resolve", async (req, res) => {

  try {

    const { url } = req.body;

    const response = await axios.get(url, {
      maxRedirects: 10
    });

    const finalUrl =
      response.request.res.responseUrl;

    res.json({
      finalUrl
    });

  } catch (err) {

    res.status(500).json({
      error: "Failed"
    });

  }

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});