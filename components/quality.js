export function loadQualityPolicy() {
    document.addEventListener("DOMContentLoaded", () => {
        const contentArea = document.getElementById("quality");
    
        // Element mevcut değilse hata mesajı yazdır ve işlemi durdur
        if (!contentArea) {
            console.error("quality ID'sine sahip bir element bulunamadı!");
            return;
        }
    
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
    });
    
}
