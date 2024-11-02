export function loadCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = `
        <div class='carousel-container'>
            <!-- Informasyon bölümü -->
            <div class='carousel-inf' id='carousel-inf'>
                <h2>Tehlikeli Madde Güvenliği Çözümleri</h2>
                <p>Pastoral TMGDK olarak, güvenliğiniz için en yüksek standartlarda danışmanlık hizmeti sunuyoruz.</p>
                <a href="teklif.html" class="carousel-button">Teklif İste</a>
            </div>
            
            <!-- Carousel bölümü -->
            <div class='owl-carousel' id='owlCarousel'>
                <div class='slide' data-title="Tehlikeli Madde ve Kimyasallar İçin Tüm Konularda Danışın!" data-text="TMGD hizmetinin yanı sıra MSDS Hazırlanması, KKDİK İşlemleri, Hava-Kara ve Deniz Lojistiği, Çevre Danışmanlık Hizmetleri gibi konularda destek alin.">
                    <img class='owl-item-bg' src='assets/img/slayt/1.png' alt='Slayt 1'>
                </div>
                <div class='slide' data-title="Tehlikeli Madde Güvenlik Danışmanlığı İçin Güvenilir Adres!" data-text="Mühendislik ilkeleri ile hizmet veren TMGD TR Mühendisliği seçin, güvenle yolunuza devam edin.">
                    <img class='owl-item-bg' src='assets/img/slayt/2.png' alt='Slayt 2'>
                </div>
                <div class='slide' data-title="Tehlikeli Madde Danışmanlık Hizmetlerimiz" data-text="Pastoral TMGDK, hizmet verdiği tüm işletmelere değer katmaktadır. İhtiyacınıza uygun çözümler sunuyoruz.">
                    <img class='owl-item-bg' src='assets/img/slayt/3.png' alt='Slayt 3'>
                </div>
                <div class='slide' data-title="Tecrübeli ve Profesyonel" data-text="İşletmenize sizin kadar değer katabilecek ve bilgisiyle katkı sağlayacak uzman TMGD'lerimiz yanınızda.">
                    <img class='owl-item-bg' src='assets/img/slayt/4.png' alt='Slayt 4'>
                </div>
                <div class='slide' data-title="Türkiye Genelinde Hizmet" data-text="Pastoral TMGDK olarak, Türkiye genelinde her yerde hizmet sunuyoruz.">
                    <img class='owl-item-bg' src='assets/img/slayt/5.png' alt='Slayt 5'>
                </div>
                <div class='slide' data-title="Güven ve Tecrübe" data-text="Pastoral TMGDK tecrübeli kadrosu ile güven vermeye devam ediyor. Tehlikeli madde güvenlik danışmanlığı için bizimle iletişime geçin.">
                    <img class='owl-item-bg' src='assets/img/slayt/6.png' alt='Slayt 6'>
                </div>
            </div>

            <!-- Radyo butonları -->
            <div class="radio-buttons" id="radio-buttons">
                ${Array.from({ length: 6 }, (_, i) => `
                    <input type="radio" id="radio${i + 1}" name="slider" ${i === 0 ? 'checked' : ''}>
                    <label for="radio${i + 1}"></label>
                `).join('')}
            </div>
        </div>
    `;

    const owlCarousel = $('#owlCarousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            768: { items: 1 },
            1024: { items: 1 }
        }
    });

    document.querySelectorAll('.radio-buttons input').forEach((radio, index) => {
        radio.addEventListener('click', () => {
            owlCarousel.trigger('to.owl.carousel', [index, 300]);
        });
    });

    owlCarousel.on('changed.owl.carousel', function(event) {
        const totalItems = event.item.count;
        let currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
        currentIndex = (currentIndex < 0) ? totalItems - 1 : currentIndex % totalItems;

        document.querySelector(`#radio${currentIndex + 1}`).checked = true;

        const currentItem = $('#owlCarousel .slide').eq(currentIndex).data();
        if (currentItem) {
            const infoContainer = document.querySelector('#carousel-inf');
            infoContainer.classList.add('fade-out');

            setTimeout(() => {
                document.querySelector('#carousel-inf h2').textContent = currentItem.title;
                document.querySelector('#carousel-inf p').textContent = currentItem.text;
                infoContainer.classList.remove('fade-out');
            }, 500);
        }
    });
}
