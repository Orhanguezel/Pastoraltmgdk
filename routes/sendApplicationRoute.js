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


// İş Başvurusu Endpointi
router.post("/", async (req, res) => {
    const { name, email, phone, city, education, experience, driving, tmgd } = req.body;

    const missingFields = [];
    if (!name) missingFields.push("Ad Soyad");
    if (!email) missingFields.push("E-posta");
    if (!phone) missingFields.push("Telefon");
    if (!city) missingFields.push("İl");
    if (!education) missingFields.push("Mezuniyet");
    if (!driving) missingFields.push("Aktif araç kullanıyor musunuz?");
    if (!tmgd) missingFields.push("TMGD belgeniz var mı?");

    if (missingFields.length > 0) {
        return res.status(400).send(`Eksik alanlar: ${missingFields.join(", ")}`);
    }

    try {
        await transporter.sendMail({
            from: `"Pastoral TMGDK" <pastoral@pastoraltmgdk.com>`,
            to: "pastoral@pastoraltmgdk.com",
            subject: `Yeni İş Başvurusu - ${name}`,
            html: `
                <h2>Yeni İş Başvurusu</h2>
                <p><strong>Ad Soyad:</strong> ${name}</p>
                <p><strong>E-posta:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>İl:</strong> ${city}</p>
                <p><strong>Mezuniyet:</strong> ${education}</p>
                <p><strong>İş Tecrübesi:</strong> ${experience || "Belirtilmedi"}</p>
                <p><strong>Araç Kullanımı:</strong> ${driving}</p>
                <p><strong>TMGD Belgesi:</strong> ${tmgd}</p>
            `,
        });
        res.status(200).send("Başvuru başarıyla gönderildi!");
    } catch (error) {
        console.error("Başvuru gönderim hatası:", error);
        res.status(500).send("Başvuru gönderiminde hata oluştu.");
    }
});

module.exports = router;
