const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AgriLandGIS Backend is running!",
    project: "SIH26010"
  });
});

app.get("/api/surveys", (req, res) => {
  res.json([
    {
      id: "ALG-00128",
      location: "Kadiyam",
      area: "4.25 Acres",
      status: "Verified"
    },
    {
      id: "ALG-00127",
      location: "Dowleswaram",
      area: "2.80 Acres",
      status: "Pending"
    }
  ]);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`AgriLandGIS Backend running on http://localhost:${PORT}`);
});