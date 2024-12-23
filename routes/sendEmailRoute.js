const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Nodemailer transporter nesnesi
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER, // E-posta adresinizi kontrol edin
        pass: process.env.SMTP_PASSWORD, // Şifrenizi kontrol edin
    },
    logger: true, // Sorunları görmek için logları aktif edin
    debug: true,
});


// Teklif Gönderim Endpointi
router.post("/", async (req, res) => {
    const {
        name, phone, email, company, sector,
        activityArea, capacity, certificate,
        productInfo, productClass, transportMethod
    } = req.body;

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

module.exports = router;
