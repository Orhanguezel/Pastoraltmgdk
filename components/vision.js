export function loadVision() {
    const visionSection = document.getElementById('vision');
    visionSection.innerHTML = `
        <div class="vision-container">
        <section class="page-title">
            <h2><i class="fas fa-bullseye mission-icon"></i> Misyon ve Vizyon</h2>
            <p>Pastoral TMGDK olarak çevre ve insan sağlığını korumayı önceliğimiz olarak benimsemekteyiz.</p>
        </section>
        
        <section class="mission-vision-content">
            <div class="mission">
                <h2><i class="fas fa-tasks mission-icon"></i> Misyonumuz</h2>
                <p>Tehlikeli maddelerin güvenli taşınmasını sağlamak için en yüksek standartlarda danışmanlık hizmeti sunmak, müşterilerimizin yasal gereksinimlere uygunluğunu sağlamak.</p>
            </div>
            <div class="vision">
                <h2><i class="fas fa-eye vision-icon"></i> Vizyonumuz</h2>
                <p>Türkiye’de ve dünyada güvenlik ve çevreye duyarlı bir taşımacılık sektörü oluşturmak için güvenilir bir rehber olmak.</p>
            </div>
        </section>
        </div>
    `;
}

