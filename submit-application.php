<?php
// Formdan gelen verileri al ve güvenlik için temizle
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$city = htmlspecialchars($_POST['city']);
$education = htmlspecialchars($_POST['education']);
$experience = htmlspecialchars($_POST['experience']);
$driving = htmlspecialchars($_POST['driving']);
$tmgd = htmlspecialchars($_POST['tmgd']);

// E-posta ayarları
$to = "pastoral@pastoraltmgdk.com"; // Başvuruların gönderileceği e-posta adresi
$subject = "Yeni İş Başvurusu"; // E-posta başlığı
$headers = "From: noreply@pastoraltmgdk.com\r\n";
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
    <p><strong>Aktif Araç Kullanımı:</strong> {$driving}</p>
    <p><strong>TMGD Belgesi:</strong> {$tmgd}</p>
";

// E-posta gönderme işlemi
if (mail($to, $subject, $email_content, $headers)) {
    echo "Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.";
} else {
    echo "Başvurunuz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
}
?>
