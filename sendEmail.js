const nodemailer = require('nodemailer');

// SMTP yapılandırması
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // Hostinger SMTP sunucusu
    port: 465, // SSL portu
    secure: true, // SSL bağlantısını etkinleştir
    auth: {
        user: "pastoral@pastoraltmgdk.com", // E-posta adresiniz
        pass: "Pastoral1234#" // SMTP şifreniz
    }
});

// E-posta gönderim bilgileri
const mailOptions = {
    from: "pastoral@pastoraltmgdk.com", // Gönderen e-posta adresi
    to: "pastoral@pastoraltmgdk.com", // Alıcı e-posta adresi
    subject: "Node.js ile SMTP Testi",
    html: `
        <h2>SMTP Testi</h2>
        <p>Bu mesaj Node.js ve Nodemailer kullanılarak gönderilmiştir.</p>
    `
};

// E-posta gönderimi
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("E-posta gönderim hatası:", error);
    } else {
        console.log("E-posta başarıyla gönderildi:", info.response);
    }
});
