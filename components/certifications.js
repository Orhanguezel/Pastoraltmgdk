export function loadCertificates() {
    const contentArea = document.getElementById("certificates"); // İçeriğin yükleneceği alan

    contentArea.innerHTML = `
        <section class="certificates-section">
            <div class="certificates-title">
                <h2><i class="fas fa-award"></i> Sertifikalarımız ve Üyeliklerimiz</h2>
                <p>Pastoral TMGD olarak kalite standartlarımızı belgeleyen sertifikalar ve profesyonel üyeliklerle güvencenizi sağlıyoruz.</p>
            </div>
            
            <div class="certificates-list">
                <!-- Sertifikalar Kartları -->
                <div class="certificate-card">
                    <i class="fas fa-certificate certificate-icon"></i>
                    <h3>ISO 9001 Kalite Yönetim Sertifikası</h3>
                    <p>ISO 9001 kalite yönetimi sertifikamız ile sürekli iyileştirme ve müşteri memnuniyeti taahhüt ediyoruz.</p>
                </div>
                
                <div class="certificate-card">
                    <i class="fas fa-user-shield certificate-icon"></i>
                    <h3>ADR Eğitim Sertifikası</h3>
                    <p>Tehlikeli madde güvenliği konusunda uzmanlaşmak için ADR eğitim sertifikasına sahibiz.</p>
                </div>

                <div class="certificate-card">
                    <i class="fas fa-users certificate-icon"></i>
                    <h3>Uluslararası TMGD Üyeliği</h3>
                    <p>Tehlikeli madde yönetiminde uluslararası alanda yetkinliğimizi gösteren üyeliklerimiz bulunmaktadır.</p>
                </div>

                <!-- Diğer sertifikalar ve üyelikler -->
                <!-- Ek sertifikalar buraya eklenebilir -->
            </div>
        </section>
    `;
}
