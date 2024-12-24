export function loadFooter() {
  const footer = document.getElementById("footer");
  // Şu anki sayfanın adını belirleyin
  const currentPage = window.location.pathname.split("/").pop();

  // Sayfaya göre farklı linkler tanımlayın
  const linkPrefix = currentPage === "index.html" ? "" : "index.html";
  footer.innerHTML = `
      <footer>
          <div class="footer-content">
              <div class="footer-logo">
                  <img src="assets/logo.png" alt="Pastoral TMGDK Logo">
                  <p>Pastoral Tehlikeli Madde Güvenlik Danışmanlık Sanayi ve Ticaret Şti.</p>
              </div>
              <div class="footer-links">
                  <h4>Hızlı Bağlantılar</h4>
                  <ul>
                      <li><a href="index.html">Anasayfa</a></li>
                      <li><a href="sektorler.html">Hizmet Verdiğimiz Sektörler</a>
                      <li><a href="hizmetlerimiz.html">TMGDK Hizmetleri</a>
                      <li><a href="mevzuat.html">Mevzuatlar</a></li>
                      <li><a href="teklif.html">Teklif ver</a></li>
                  </ul>
              </div>
              <div class="footer-contact">
                <h4>İletişim</h4>
                <p>Adres: Urfa Bulvarı Sun Yapı 2 Halit Evran Konutları</p>
                <p>D/7 Bağcılar Mahallesi Bağlar/Diyarbakır</p>
                <p>Telefon: 0506 282 11 11</p>
                <p>E-posta: pastoral@pastoraltmgdk.com</p>
              </div>
              <div class="footer-social">
                    <h4>Bizi Takip Edin</h4>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
          </div>
          <div class="footer-bottom">
              <p>&copy; 2024 Pastoral TMGDK. Tüm hakları saklıdır.</p>
          <!-- Designed by Link -->
          <a href="https://www.guezelwebdesign.com" target="_blank" rel="noopener noreferrer" class="designed-by-link">
            Designed by OG
          </a>
          </div>
        </footer>
    `;
}
document.addEventListener("DOMContentLoaded", loadFooter);
