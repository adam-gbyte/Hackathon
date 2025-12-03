require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
// app.use(cors());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json());

let lastLocation = null;

// Endpoint menerima GPS realtime
app.post("/api/location", (req, res) => {
  const { lat, lon } = req.body;
  lastLocation = { lat, lon, time: new Date() };

  console.log("Lokasi diterima:", lastLocation);

  res.json({ status: "OK" });
});

// Endpoint untuk cek lokasi terbaru
app.get("/api/location", (req, res) => {
  res.json(lastLocation);
});

PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
