const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors"); // CORS için eklendi
require("dotenv").config(); // .env dosyasını yükler

const app = express();
const PORT = 3005;

// Dinamik CORS middleware'i
const allowedOrigins = ["http://127.0.0.1:5500", "https://pastoraltmgdk.com"];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("CORS policy error: Origin not allowed"));
        }
    },
}));

// Body parser kullanımı
app.use(bodyParser.json());

// Nodemailer transporter nesnesi
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // SSL kullanımı
    auth: {
        user: process.env.SMTP_USER, // Kullanıcı adı .env'den
        pass: process.env.SMTP_PASSWORD, // Şifre .env'den
    },
});

// POST /send-email endpointi
app.post("/send-email", async (req, res) => {
    const {
        name, phone, email, company, sector,
        activityArea, capacity, certificate,
        productInfo, productClass, transportMethod
    } = req.body;

    // Eksik alanları kontrol et
    const missingFields = [];
    if (!name) missingFields.push("Ad Soyad");
    if (!phone) missingFields.push("Telefon");
    if (!email) missingFields.push("E-posta");
    if (!company) missingFields.push("Firma Adı");
    if (!sector) missingFields.push("Faaliyet Sektörü");
    if (!activityArea || !Array.isArray(activityArea) || activityArea.length === 0) missingFields.push("Faaliyet Alanı");
    if (!capacity) missingFields.push("Yıllık Faaliyet Kapasitesi");
    if (!certificate) missingFields.push("Faaliyet Belgesi");
    if (!productInfo) missingFields.push("Ürün Bilgisi");
    if (!productClass) missingFields.push("Ürünlerin Sınıfı");
    if (!transportMethod) missingFields.push("Ürün Taşıma Şekli");

    if (missingFields.length > 0) {
        return res.status(400).send(`Eksik alanlar: ${missingFields.join(", ")}`);
    }

    try {
        await transporter.sendMail({
            from: `"Pastoral TMGDK" <pastoral@pastoraltmgdk.com>`,
            to: "pastoral@pastoraltmgdk.com",
            subject: `Yeni Teklif Talebi - ${name}`,
            html: `
                <h2>Yeni Teklif Talebi</h2>
                <p><strong>Ad Soyad:</strong> ${name}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>E-posta:</strong> ${email}</p>
                <p><strong>Firma Adı:</strong> ${company}</p>
                <p><strong>Faaliyet Sektörü:</strong> ${sector}</p>
                <p><strong>Faaliyet Alanı:</strong> ${activityArea.join(", ")}</p>
                <p><strong>Yıllık Faaliyet Kapasitesi:</strong> ${capacity}</p>
                <p><strong>Faaliyet Belgesi:</strong> ${certificate}</p>
                <p><strong>Ürün Bilgisi:</strong> ${productInfo}</p>
                <p><strong>Ürünlerin Sınıfı:</strong> ${productClass}</p>
                <p><strong>Ürün Taşıma Şekli:</strong> ${transportMethod}</p>
            `,
        });
        res.status(200).send("E-posta başarıyla gönderildi!");
    } catch (error) {
        console.error("E-posta gönderim hatası:", error);
        res.status(500).send("E-posta gönderiminde hata oluştu.");
    }
});

// Sunucu başlatma
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
