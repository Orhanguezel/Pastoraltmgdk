export function loadContent() {
    const contentContainer = document.getElementById("content");
    if (!contentContainer) {
        console.warn("Content elementi bulunamadı. Bu sayfa içerik yüklemiyor olabilir.");
        return;
    }

    contentContainer.innerHTML =`
        <div class="container">
    <!-- Content Bölümü -->
    <div class="content-container">
        <div class="content-item">
            <i class="bi bi-shield-check content-icon"></i>
            <h3>TMGDK Nedir?</h3>
            <p>Tehlikeli maddeleri taşıyan, gönderen, paketleyen, yükleyen, dolduran ve boşaltan işletmeler, en az bir adet tehlikeli madde güvenlik danışmanı istihdam etmek veya yetkilendirilen Tehlikeli Madde Güvenlik Danışmanlığı Kuruluşu'ndan (TMGDK) hizmet almakla yükümlüdür.</p>
            <a href="hizmetlerimiz.html#tehlikeli-madde-gvenlik-danmanl-hizmetleri" class="read-more-button">Devamını oku</a>
        </div>
        <div class="content-item">
            <i class="bi bi-people content-icon"></i>
            <h3>TMGD Kimdir?</h3>
            <p>Tehlikeli Madde Güvenlik Danışmanlığı (TMGD), Türkiye Cumhuriyeti'nin 22 Mart 2010 yılında "Tehlikeli Malların Karayolu ile Uluslararası Taşımacılığına İlişkin Avrupa Anlaşması" yani kısaca bilinen adıyla ADR'ye taraf olması ile ilk kez...</p>
            <a href="hizmetlerimiz.html#tmgd-kimdir" class="read-more-button">Devamını oku</a>
        </div>
        <div class="content-item">
            <i class="bi bi-card-checklist content-icon"></i>
            <h3>TMFB Nedir?</h3>
            <p>Tehlikeli Maddelerin Karayoluyla Taşınması Hakkında yayımlanan yönetmelikle, ADR'ye göre tehlikeli maddelerin karayoluyla taşımacılığı alanında faaliyet gösteren; dolduran, paketleyen, yükleyen, gönderen, alıcı, boşaltan ve tank-konteyner/taşınabilir...</p>
            <a href="hizmetlerimiz.html#tehlikeli-madde-faaliyet-belgesi-tmfb" class="read-more-button">Devamını oku</a>
        </div>
    </div>
</div>

    `;

}

