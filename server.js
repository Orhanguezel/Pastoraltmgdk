const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors"); // CORS için eklendi

const app = express();
const PORT = 3000;

// CORS middleware'ini ekleyin
app.use(cors({
    origin: "http://127.0.0.1:5500", // İzin verilen köken
}));

// Body parser kullanımı
app.use(bodyParser.json());

// Nodemailer transporter nesnesi
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // SSL kullanımı
    auth: {
        user: "pastoral@pastoraltmgdk.com", // SMTP kullanıcı adı
        pass: "Pastoral1234#",             // SMTP şifresi
    },
});

// POST /send-email endpointi
app.post("/send-email", async (req, res) => {
    const { name, phone, email, company, sector, activityArea, capacity, certificate, productInfo, productClass, transportMethod } = req.body;

    // Eksik alanları kontrol et
    if (!name || !email || !phone || !company || !sector || !activityArea || !capacity || !certificate || !productInfo || !productClass || !transportMethod) {
        return res.status(400).send("Tüm alanlar zorunludur!");
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
