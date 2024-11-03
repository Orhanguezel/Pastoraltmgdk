document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById("teklifFormu");

    contentArea.innerHTML = `
        <div class="application-container">
            <!-- Bilgilendirme Bölümü -->
            <section class="application-info">
                <h1>Teklif İste</h1>
                <p>Tehlikeli Madde Güvenlik Danışmanlık Kuruluşumuzdan (TMGDK) hizmet almak için aşağıdaki formu doldurup teklif talebinde bulunabilirsiniz. Sizinle en kısa sürede iletişime geçeceğiz.</p>
            </section>

            <!-- Teklif Formu -->
            <section class="application-form">
                <h2>Teklif Talep Formu</h2>
                <form action="submit-teklif.php" method="POST">
                    <div class="form-group">
                        <label for="name">Ad Soyad</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Telefon</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="company">Firma Adı</label>
                        <input type="text" id="company" name="company" required>
                    </div>
                    <div class="form-group">
                        <label for="sector">Faaliyet Sektörü</label>
                        <input type="text" id="sector" name="sector" required>
                    </div>
                    
                    <!-- Faaliyet Alanı Checkbox Listesi -->
                    <div class="form-group">
                        <label>Faaliyet Alanı</label>
                        <div class="checkbox-group">
                            <label><input type="checkbox" name="activityArea[]" value="Gönderen"> Gönderen</label>
                            <label><input type="checkbox" name="activityArea[]" value="Taşıyıcı"> Taşıyıcı</label>
                            <label><input type="checkbox" name="activityArea[]" value="Alıcı"> Alıcı</label>
                            <label><input type="checkbox" name="activityArea[]" value="Ambalajcı"> Ambalajcı</label>
                            <label><input type="checkbox" name="activityArea[]" value="Doldurucu"> Doldurucu</label>
                            <label><input type="checkbox" name="activityArea[]" value="Tank-Konteyner/Portatif Tank Operatörü"> Tank-Konteyner/Portatif Tank Operatörü</label>
                            <label><input type="checkbox" name="activityArea[]" value="Boşaltıcı"> Boşaltıcı</label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="capacity">Yıllık Faaliyet Kapasitesi (Kg/Lt)</label>
                        <input type="number" id="capacity" name="capacity" required>
                    </div>

                    <!-- Faaliyet Belgesi Radio Button -->
                    <div class="form-group">
                        <label>Faaliyet Belgesi</label>
                        <div>
                            <label><input type="radio" name="certificate" value="Var" required> Var</label>
                            <label><input type="radio" name="certificate" value="Yok"> Yok</label>
                        </div>
                    </div>

                    <!-- Yurtdışı Bağlantısı Radio Button -->
                    <div class="form-group">
                        <label>Yurtdışı Bağlantısı</label>
                        <div>
                            <label><input type="radio" name="internationalConnection" value="Var" required> Var</label>
                            <label><input type="radio" name="internationalConnection" value="Yok"> Yok</label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="productInfo">Ürün Bilgisi</label>
                        <textarea id="productInfo" name="productInfo" rows="4" required></textarea>
                    </div>

                    <!-- Ürünlerin Sınıfı Radio Button -->
                    <div class="form-group">
                        <label>Ürünlerin Sınıfı</label>
                        <div>
                            <label><input type="radio" name="productClass" value="Biliniyor" required> Biliniyor</label>
                            <label><input type="radio" name="productClass" value="Bilinmiyor"> Bilinmiyor</label>
                        </div>
                    </div>

                    <!-- Ürünlerin UN Sınıfı Radio Button -->
                    <div class="form-group">
                        <label>Ürünlerin UN Sınıfı</label>
                        <div>
                            <label><input type="radio" name="unClass" value="Var" required> Var</label>
                            <label><input type="radio" name="unClass" value="Yok"> Yok</label>
                        </div>
                    </div>

                    <!-- Ürünlerin MSDS'i Radio Button -->
                    <div class="form-group">
                        <label>Ürünlerin MSDS'i</label>
                        <div>
                            <label><input type="radio" name="msds" value="Var" required> Var</label>
                            <label><input type="radio" name="msds" value="Yok"> Yok</label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="transportMethod">Ürün Taşıma Şekli</label>
                        <input type="text" id="transportMethod" name="transportMethod" required>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="submit-button">Teklif Talebini Gönder</button>
                    </div>
                </form>
            </section>
        </div>
    `;
});
