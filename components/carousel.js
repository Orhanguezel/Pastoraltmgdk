export function loadCarousel() {
    const carousel = document.getElementById("carousel");
    if (!carousel) {
        console.error("Carousel elementi bulunamadı.");
        return;
    }

    carousel.innerHTML = `
        <div class='carousel-container'>
            <!-- Informasyon bölümü -->
            <div class='carousel-inf' id='carousel-inf'>
                <h2>Doğu ve Güneydoğu'nun Parlayan Yıldızı</h2>
                <p>Pastoral TMGDK, bölgenin lider tehlikeli madde danışmanlık firmasıdır.</p>
                <a href="teklif.html" class="carousel-button">Teklif İste</a>
            </div>
            
            <!-- Carousel bölümü -->
            <div class='owl-carousel' id='owlCarousel'>
                <div class='slide' data-title="Doğu ve Güneydoğu'nun Parlayan Yıldızı" data-text="Pastoral TMGDK, Doğu ve Güneydoğu Anadolu'da tehlikeli madde yönetimi konusunda güvenilir liderdir.">
                    <img class='owl-item-bg' src='assets/img/slayt/1.png' alt='Slayt 1'>
                </div>

                <div class='slide' data-title="Akaryakıt ve Hastanelerde Güvenilir Hizmet" data-text="Akaryakıt sektörü ve hastaneler için lojistik ve güvenlik çözümleri.">
                    <img class='owl-item-bg' src='assets/img/slayt/2.png' alt='Slayt 2'>
                </div>

                <div class='slide' data-title="Güvenilir Danışmanlık" data-text="Tehlikeli madde yönetimi için profesyonel destek sunuyoruz.">
                    <img class='owl-item-bg' src='assets/img/slayt/3.png' alt='Slayt 3'>
                </div>

                <div class='slide' data-title="Değer Katan Çözümler" data-text="İhtiyacınıza uygun danışmanlık hizmetleri ile yanınızdayız.">
                    <img class='owl-item-bg' src='assets/img/slayt/4.png' alt='Slayt 4'>
                </div>

                <div class='slide' data-title="Tecrübeli ve Güvenilir" data-text="Deneyimli ekibimizle işletmenize değer katıyoruz.">
                    <img class='owl-item-bg' src='assets/img/slayt/5.png' alt='Slayt 5'>
                </div>

                <div class='slide' data-title="Lider Kadro" data-text="Tehlikeli madde güvenliğinde sektörün lider kadrosu.">
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

    // İlk slayt bilgilerini göster
    updateCarouselInfo(0);

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

        updateCarouselInfo(currentIndex);
    });

    function updateCarouselInfo(index) {
        const currentItem = $('#owlCarousel .slide').eq(index).data();
        if (currentItem) {
            document.querySelector('#carousel-inf h2').textContent = currentItem.title;
            document.querySelector('#carousel-inf p').textContent = currentItem.text;
        }
    }
}
