const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// `app` tanımlaması
const app = express();
const PORT = 3005;

// Middleware'ler
app.use(cors({
    origin: "*", // Tüm kaynaklara izin ver
}));
app.use(bodyParser.json());

// Route'lar
const sendEmailRoute = require("./routes/sendEmailRoute");
const sendApplicationRoute = require("./routes/sendApplicationRoute");

app.use("/send-email", sendEmailRoute);
app.use("/send-application", sendApplicationRoute);

// Sunucu Başlat
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});

