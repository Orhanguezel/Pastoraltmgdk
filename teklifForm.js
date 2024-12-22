document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById("teklifFormu");

    // Form içeriğini oluştur
    contentArea.innerHTML = `
        <div class="application-container">
            <section class="application-info">
                <h1>Teklif İste</h1>
                <p>Tehlikeli Madde Güvenlik Danışmanlık Kuruluşumuzdan (TMGDK) hizmet almak için aşağıdaki formu doldurup teklif talebinde bulunabilirsiniz. Sizinle en kısa sürede iletişime geçeceğiz.</p>
            </section>

            <section class="application-form">
                <h2>Teklif Talep Formu</h2>
                <form id="emailForm">
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
                    <div class="form-group">
                        <label>Faaliyet Belgesi</label>
                        <div>
                            <label><input type="radio" name="certificate" value="Var" required> Var</label>
                            <label><input type="radio" name="certificate" value="Yok"> Yok</label>
                        </div>
                    </div>
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
                    <div class="form-group">
                        <label>Ürünlerin Sınıfı</label>
                        <div>
                            <label><input type="radio" name="productClass" value="Biliniyor" required> Biliniyor</label>
                            <label><input type="radio" name="productClass" value="Bilinmiyor"> Bilinmiyor</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Ürünlerin UN Sınıfı</label>
                        <div>
                            <label><input type="radio" name="unClass" value="Var" required> Var</label>
                            <label><input type="radio" name="unClass" value="Yok"> Yok</label>
                        </div>
                    </div>
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

    // Form gönderme işlevi
    document.getElementById("emailForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            company: document.getElementById("company").value,
            sector: document.getElementById("sector").value,
            activityArea: Array.from(document.querySelectorAll('input[name="activityArea[]"]:checked')).map(el => el.value),
            capacity: document.getElementById("capacity").value,
            certificate: document.querySelector('input[name="certificate"]:checked').value,
            internationalConnection: document.querySelector('input[name="internationalConnection"]:checked').value,
            productInfo: document.getElementById("productInfo").value,
            productClass: document.querySelector('input[name="productClass"]:checked').value,
            unClass: document.querySelector('input[name="unClass"]:checked').value,
            msds: document.querySelector('input[name="msds"]:checked').value,
            transportMethod: document.getElementById("transportMethod").value
        };

        // SMTP.js kullanarak e-posta gönder
        Email.send({
            Host: "smtp.hostinger.com",
            Username: "pastoral@pastoraltmgdk.com", // E-posta adresiniz
            Password: "Pastoral1234#",            // E-posta şifreniz
            To: "pastoral@pastoraltmgdk.com",      // E-posta alıcısı
            From: formData.email,                  // Gönderen e-posta
            Subject: `Yeni Teklif Talebi - ${formData.name}`,
            Body: `
                <h2>Yeni Teklif Talebi</h2>
                <p><strong>Ad Soyad:</strong> ${formData.name}</p>
                <p><strong>Telefon:</strong> ${formData.phone}</p>
                <p><strong>E-posta:</strong> ${formData.email}</p>
                <p><strong>Firma Adı:</strong> ${formData.company}</p>
                <p><strong>Faaliyet Sektörü:</strong> ${formData.sector}</p>
                <p><strong>Faaliyet Alanı:</strong> ${formData.activityArea.join(", ")}</p>
                <p><strong>Yıllık Faaliyet Kapasitesi:</strong> ${formData.capacity} Kg/Lt</p>
                <p><strong>Faaliyet Belgesi:</strong> ${formData.certificate}</p>
                <p><strong>Yurtdışı Bağlantısı:</strong> ${formData.internationalConnection}</p>
                <p><strong>Ürün Bilgisi:</strong> ${formData.productInfo}</p>
                <p><strong>Ürünlerin Sınıfı:</strong> ${formData.productClass}</p>
                <p><strong>Ürünlerin UN Sınıfı:</strong> ${formData.unClass}</p>
                <p><strong>Ürünlerin MSDS'i:</strong> ${formData.msds}</p>
                <p><strong>Ürün Taşıma Şekli:</strong> ${formData.transportMethod}</p>
            `
        }).then(() => {
            alert("E-posta başarıyla gönderildi!");
        }).catch((error) => {
            console.error("E-posta gönderimi hatası:", error);
            alert("E-posta gönderimi başarısız oldu!");
        });
    });
});
