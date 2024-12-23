const nodemailer = require('nodemailer');

// SMTP sunucusu ayarları
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // SSL kullanımı
    auth: {
        user: "pastoral@pastoraltmgdk.com", // SMTP kullanıcı adı
        pass: "Pastoral1234#" // SMTP şifre
    }
});

// E-posta gönderme fonksiyonu
const sendMail = async (formData) => {
    try {
        const info = await transporter.sendMail({
            from: formData.email, // Gönderen e-posta
            to: "pastoral@pastoraltmgdk.com", // Alıcı
            subject: `Yeni Teklif Talebi - ${formData.name}`,
            html: `
                <h2>Yeni Teklif Talebi</h2>
                <p><strong>Ad Soyad:</strong> ${formData.name}</p>
                <p><strong>Telefon:</strong> ${formData.phone}</p>
                <p><strong>E-posta:</strong> ${formData.email}</p>
                <p><strong>Mesaj:</strong> ${formData.message}</p>
            `
        });
        console.log("E-posta başarıyla gönderildi:", info.messageId);
    } catch (error) {
        console.error("E-posta gönderim hatası:", error);
    }
};

// Örnek form verileri (bunu frontend'den göndereceksiniz)
const exampleFormData = {
    name: "Orhan Güzel",
    phone: "+905555555555",
    email: "gonderen@example.com",
    message: "Bu bir test mesajıdır."
};

// E-posta gönderimini çağırın
sendMail(exampleFormData);
