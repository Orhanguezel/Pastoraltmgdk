document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById("teklifFormu");

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

    document.getElementById("emailForm").addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById("name").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            email: document.getElementById("email").value.trim(),
            company: document.getElementById("company").value.trim(),
            sector: document.getElementById("sector").value.trim(),
            activityArea: Array.from(document.querySelectorAll('input[name="activityArea[]"]:checked')).map(el => el.value),
            capacity: document.getElementById("capacity").value.trim(),
            certificate: document.querySelector('input[name="certificate"]:checked').value,
            productInfo: document.getElementById("productInfo").value.trim(),
            productClass: document.querySelector('input[name="productClass"]:checked').value,
            transportMethod: document.getElementById("transportMethod").value.trim(),
        };

        try {
            const response = await fetch("http://localhost:3000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("E-posta başarıyla gönderildi!");
            } else {
                const errorMessage = await response.text();
                console.error("E-posta gönderim hatası:", errorMessage);
                alert(`E-posta gönderiminde bir hata oluştu: ${errorMessage}`);
            }
        } catch (error) {
            console.error("E-posta gönderim hatası:", error);
            alert("E-posta gönderiminde bir hata oluştu!");
        }
    });
});
