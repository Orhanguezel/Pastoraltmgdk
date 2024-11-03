<?php
// Formdan gelen verileri al
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$city = $_POST['city'];
$education = $_POST['education'];
$experience = $_POST['experience'];
$driving = $_POST['driving'];
$tmgd = $_POST['tmgd'];

// E-posta ayarları
$to = "orhanguzell@gmail.com"; // E-posta gönderilecek adres
$subject = "Yeni İş Başvurusu"; // E-posta başlığı
$headers = "From: noreply@website.com\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// E-posta içeriği
$email_content = "
    <h2>Yeni İş Başvurusu</h2>
    <p><strong>İsim Soyisim:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Telefon Numarası:</strong> {$phone}</p>
    <p><strong>İl:</strong> {$city}</p>
    <p><strong>Mezuniyet:</strong> {$education}</p>
    <p><strong>Toplam İş Tecrübesi:</strong> {$experience}</p>
    <p><strong>Araç Kullanımı:</strong> {$driving}</p>
    <p><strong>TMGD Belgesi:</strong> {$tmgd}</p>
";

// E-posta gönderme fonksiyonu
if (mail($to, $subject, $email_content, $headers)) {
    echo "success"; // E-posta başarıyla gönderildiğinde "success" döndür
} else {
    echo "error"; // Bir hata olursa "error" döndür
}
?>
