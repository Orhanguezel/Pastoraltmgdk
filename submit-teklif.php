<?php
// Formdan gelen verileri al ve güvenlik için temizle
$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$email = htmlspecialchars($_POST['email']);
$company = htmlspecialchars($_POST['company']);
$sector = htmlspecialchars($_POST['sector']);
$activity_area = isset($_POST['activityArea']) ? implode(", ", array_map('htmlspecialchars', $_POST['activityArea'])) : "Seçilmedi";
$capacity = htmlspecialchars($_POST['capacity']);
$certificate = htmlspecialchars($_POST['certificate']);
$international_connection = htmlspecialchars($_POST['internationalConnection']);
$product_info = htmlspecialchars($_POST['productInfo']);
$product_class = htmlspecialchars($_POST['productClass']);
$un_class = htmlspecialchars($_POST['unClass']);
$msds = htmlspecialchars($_POST['msds']);
$transport_method = htmlspecialchars($_POST['transportMethod']);

// E-posta ayarları
$to = "pastoral@pastoraltmgdk.com"; // Tekliflerin gönderileceği e-posta adresi
$subject = "Yeni Teklif Talebi"; // E-posta başlığı
$headers = "From: noreply@pastoraltmgdk.com\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// E-posta içeriği
$email_content = "
    <h2>Yeni Teklif Talebi</h2>
    <p><strong>Ad Soyad:</strong> {$name}</p>
    <p><strong>Telefon:</strong> {$phone}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Firma Adı:</strong> {$company}</p>
    <p><strong>Faaliyet Sektörü:</strong> {$sector}</p>
    <p><strong>Faaliyet Alanı:</strong> {$activity_area}</p>
    <p><strong>Yıllık Faaliyet Kapasitesi:</strong> {$capacity} Kg/Lt</p>
    <p><strong>Faaliyet Belgesi:</strong> {$certificate}</p>
    <p><strong>Yurtdışı Bağlantısı:</strong> {$international_connection}</p>
    <p><strong>Ürün Bilgisi:</strong> {$product_info}</p>
    <p><strong>Ürünlerin Sınıfı:</strong> {$product_class}</p>
    <p><strong>Ürünlerin UN Sınıfı:</strong> {$un_class}</p>
    <p><strong>Ürünlerin MSDS'i:</strong> {$msds}</p>
    <p><strong>Ürün Taşıma Şekli:</strong> {$transport_method}</p>
";

// E-posta gönderme işlemi
if (mail($to, $subject, $email_content, $headers)) {
    echo "Teklif talebiniz başarıyla alındı. Sizinle en kısa sürede iletişime geçeceğiz.";
} else {
    echo "Teklif talebiniz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
}
?>
