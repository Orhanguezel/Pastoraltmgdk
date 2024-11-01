// quality.js
export function loadQualityPolicy() {
    const contentArea = document.getElementById("quality"); // İçeriğin yükleneceği alan

    contentArea.innerHTML = `
        <section class="quality-section">
            <div class="quality-title">
                <h2><i class="fas fa-certificate quality-icon"></i> Kalite Politikamız</h2>
                <p>Kalite standartlarımızı en yüksek seviyede tutarak müşterilerimize güvenilir bir hizmet sunmaktayız.</p>
            </div>
            <div class="quality-principles">
                <h3><i class="fas fa-check-circle quality-check-icon"></i> Kalite İlkelerimiz</h3>
                <ul>
                    <li>Müşteri odaklılık ve müşteri memnuniyeti.</li>
                    <li>Yasal ve çevresel gereksinimlere tam uyum.</li>
                    <li>Çalışanlarımızın sürekli gelişimi ve eğitimine önem vermek.</li>
                    <li>İş sağlığı ve güvenliği konularında duyarlılık.</li>
                </ul>
            </div>
        </section>
    `;
}

