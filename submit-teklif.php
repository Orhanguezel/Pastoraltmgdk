<?php
// Formdan gelen verileri al
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$company = $_POST['company'];
$sector = $_POST['sector'];
$activity_area = isset($_POST['activityArea']) ? implode(", ", $_POST['activityArea']) : "Seçilmedi"; // Checkbox için çoklu seçim
$capacity = $_POST['capacity'];
$certificate = $_POST['certificate'];
$international_connection = $_POST['internationalConnection'];
$product_info = $_POST['productInfo'];
$product_class = $_POST['productClass'];
$un_class = $_POST['unClass'];
$msds = $_POST['msds'];
$transport_method = $_POST['transportMethod'];

// E-posta ayarları
$to = "orhanguzell@gmail.com"; // E-posta gönderilecek adres
$subject = "Yeni Teklif Talebi"; // E-posta başlığı
$headers = "From: noreply@website.com\r\n";
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

// E-posta gönderme fonksiyonu
if (mail($to, $subject, $email_content, $headers)) {
    echo "success"; // E-posta başarıyla gönderildiğinde "success" döndür
} else {
    echo "error"; // Bir hata olursa "error" döndür
}
?>
