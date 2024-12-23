document.addEventListener("DOMContentLoaded", () => {
    // API URL'sini ortam algılamasına göre ayarla
    const API_BASE_URL = window.location.hostname === "localhost"
        ? "http://localhost:3005" // Yerel ortam
        : "https://api.pastoraltmgdk.com"; // Üretim ortamı

    const contentArea = document.getElementById("jobApplication");

    if (!contentArea) {
        console.error("jobApplication ID'sine sahip bir element bulunamadı!");
        return;
    }

    // Form içeriğini oluştur
    contentArea.innerHTML = `
        <div class="application-container">
            <!-- Bilgilendirme Bölümü -->
            <section class="application-info">
                <h1>İş Başvurusu</h1>
                <p>Siz de Pastoral TMGDK ekibine katılıp, yeni projelerde yer almak ve gelişmelere öncülük etmek ister misiniz? Başvurular tüm Türkiye geneli için alınmaktadır.</p>
                <p>Ekibimize katılmak, kendini geliştirmek ve bizlere katkı sağlayacak arkadaşları aramızda görmekten mutluluk duyarız. Yapmanız gereken, sağ taraftaki formu doldurup bize göndermek.</p>

                <h2>Kısaca Pastoral TMGDK</h2>
                <p>Pastoral TMGDK, 2020 yılından bu yana Tehlikeli Madde Güvenlik Danışmanlığı alanında Türkiye genelinde başarılı çalışmalar yürütmektedir. Çalışma alanlarımız içerisinde:</p>
                <ul>
                    <li>Tehlikeli Madde Güvenlik Danışmanlığı</li>
                    <li>Yazılım ve Teknoloji Geliştirme</li>
                    <li>Kamu ve Özel Sektör İçin Danışmanlık Hizmetleri</li>
                </ul>

                <h2>Beklenen Nitelikler</h2>
                <ul>
                    <li>Üniversitelerin ilgili bölümlerinden mezun olmak</li>
                    <li>Tehlikeli Madde Güvenlik Danışmanlığı Belgesine sahip olmak</li>
                    <li>MS Office programlarını iyi derecede kullanabilmek</li>
                    <li>Performans odaklı, temsil ve ikna yeteneği güçlü</li>
                </ul>
            </section>

            <!-- Başvuru Formu -->
            <section class="application-form">
                <h2>İş Başvuru Formu</h2>
                <form id="applicationForm">
                    <div class="form-group">
                        <label for="name">İsim Soyisim</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Adresi</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Telefon Numarası</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="city">İl</label>
                        <input type="text" id="city" name="city" required>
                    </div>
                    <div class="form-group">
                        <label for="education">Mezuniyet</label>
                        <input type="text" id="education" name="education" required>
                    </div>
                    <div class="form-group">
                        <label for="experience">Toplam İş Tecrübeniz</label>
                        <input type="text" id="experience" name="experience">
                    </div>
                    <div class="form-group">
                        <label>Aktif araç kullanıyor musunuz?</label>
                        <div class="radio-group">
                            <label><input type="radio" name="driving" value="Evet" required> Evet</label>
                            <label><input type="radio" name="driving" value="Hayır"> Hayır</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>TMGD belgeniz var mı?</label>
                        <div class="radio-group">
                            <label><input type="radio" name="tmgd" value="Evet" required> Evet</label>
                            <label><input type="radio" name="tmgd" value="Hayır"> Hayır</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="submit-button">Başvuruyu Gönder</button>
                    </div>
                </form>
            </section>
        </div>
    `;

    // Form gönderme işlevi
    const form = document.getElementById("applicationForm");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            city: document.getElementById("city").value,
            education: document.getElementById("education").value,
            experience: document.getElementById("experience").value || "Belirtilmedi",
            driving: document.querySelector('input[name="driving"]:checked').value,
            tmgd: document.querySelector('input[name="tmgd"]:checked').value,
        };

        try {
            const response = await fetch(`${API_BASE_URL}/send-application`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Başvurunuz başarıyla gönderildi!");
            } else {
                const errorText = await response.text();
                alert(`Başvuru sırasında bir hata oluştu: ${errorText}`);
            }
        } catch (error) {
            console.error("Başvuru gönderim hatası:", error);
            alert("Başvurunuz gönderilirken bir hata oluştu!");
        }
    });
});
