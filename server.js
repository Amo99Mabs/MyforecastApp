const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors(
));

app.get("/api/time", async (req, res) => {
  try {
    const { from, to } = req.query;
    const apiKey = "q5CXMd35C4C37dP6tkezYFgBWQ5nE6";
    const apiUrl = `https://www.amdoren.com/api/time.php?api_key=${apiKey}&from=${from}&to=${to}`;

    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.response?.data || errormessage);
    res
      .status(500)
      .json({ error: "Failed to fetch data", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
fetch("http://localhost:3000/api/time?from=Africa/Johannesburg&to=Johannesburg")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching time:", error));
