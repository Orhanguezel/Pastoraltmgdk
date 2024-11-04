const faqData = [
    {
        question: "Tehlikeli Madde Taşımacılığı nedir?",
        answer: "Tehlikeli madde taşımacılığı, çevre, insan sağlığı ve güvenliği için risk taşıyan maddelerin belirlenen kurallar çerçevesinde güvenli bir şekilde taşınması sürecidir."
    },
    {
        question: "Tehlikeli Madde Faaliyet Belgesi Düzenlenmesine İlişkin Usul Ve Esaslar Hakkında Yönergenin Amacı Nedir?",
        answer: "Bu yönerge, tehlikeli maddelerle ilgili faaliyetlerin güvenli ve düzenli bir şekilde yapılması için gerekli kuralları ve uygulama esaslarını belirler."
    },
    {
        question: "Tehlikeli Madde Faaliyet Belgesi kimleri kapsar?",
        answer: "Bu belge, tehlikeli madde taşımacılığı, depolanması veya işlenmesi gibi faaliyetlerde bulunan işletmeleri kapsar."
    },
    {
        question: "Kimleri kapsamaz?",
        answer: "Tehlikeli maddeyle ilgisi olmayan ve belirli risk seviyelerinin altında faaliyet gösteren işletmeleri kapsamaz."
    },
    {
        question: "Tehlikeli Madde Faaliyet Belgesi Düzenlenmesine İlişkin Usul Ve Esaslar Hakkında Yönergenin dayanağı nedir?",
        answer: "Yönerge, tehlikeli maddelerin taşınması ve güvenliği için ulusal ve uluslararası düzenlemelere dayanarak hazırlanmıştır."
    },
    {
        question: "Tehlikeli madde faaliyet belgesi alma zorunluluğu olan işletmeler hangileridir?",
        answer: "Yılda 50 ton ve üzeri tehlikeli maddeyle ilgilenen veya yüksek riskli sınıflardaki maddelerle (Sınıf 1, Sınıf 6.2, Sınıf 7) çalışan işletmeler bu belgeyi almak zorundadır."
    },
    {
        question: "Herhangi bir işlem miktarı olmadan tehlikeli madde faaliyet belgesi alması zorunlu olanlar kimlerdir?",
        answer: "Sınıf 1 (Patlayıcılar), Sınıf 6.2 (Bulaşıcı Maddeler) ve Sınıf 7 (Radyoaktif Maddeler) ile çalışan işletmeler, miktardan bağımsız olarak belge almak zorundadır."
    },
    {
        question: "İşletmeler tehlikeli madde faaliyet belgesi almak için hangi evrakları hazırlamalıdır?",
        answer: "Başvuru formu, faaliyet tespit raporu, tehlikeli madde envanter bilgileri ve yetkili TMGDK'den alınmış hizmet sözleşmesi gereklidir."
    },
    {
        question: "Tehlikeli Madde Faaliyet Belgesi’nin ücreti nedir?",
        answer: "Ücret, bakanlık tarafından belirlenir ve işletmenin büyüklüğüne, faaliyet kapsamına göre değişir."
    },
    {
        question: "İşletmelerin faaliyet belgesi nasıl düzenlenir?",
        answer: "Faaliyet belgesi, gerekli evrakların bakanlığa sunulması ve başvurunun onaylanması ile düzenlenir."
    },
    {
        question: "Belge sahiplerinin yükümlülükleri nelerdir?",
        answer: "Belge sahipleri, tehlikeli maddelerle ilgili tüm güvenlik önlemlerini almak, gerekli eğitimleri sağlamak ve düzenli denetimleri gerçekleştirmek zorundadır."
    },
    {
        question: "Belge sahiplerinin faaliyetlerinin durdurulması veya belge iptali nasıl olmaktadır?",
        answer: "Belge sahipleri, mevzuata aykırı hareket ettiklerinde veya güvenlik ihlalleri tespit edildiğinde faaliyetleri durdurulabilir veya belgeleri iptal edilebilir."
    },
    {
        question: "Yasal mevzuat mevcut mudur?",
        answer: "Evet, tehlikeli madde taşımacılığı ile ilgili ulusal ve uluslararası birçok mevzuat bulunmaktadır. ADR gibi düzenlemeler bu mevzuatlara örnektir."
    },
    {
        question: "Mevzuatın amacı nedir?",
        answer: "Mevzuatın amacı, tehlikeli madde taşımacılığı ve işlemleri sırasında insan sağlığı, çevre ve mal güvenliğini korumaktır."
    },
    {
        question: "Tebliğ kimleri kapsar?",
        answer: "Tebliğ, tehlikeli madde taşıma, depolama ve işleme faaliyetleri yürüten tüm işletmeleri kapsar."
    },
    {
        question: "Tebliğ kimleri kapsamaz?",
        answer: "Tebliğ, tehlikeli madde taşımacılığı veya işlenmesi ile ilgisi olmayan işletmeleri kapsamaz."
    },
    {
        question: "Kimler TMGD olabilir?",
        answer: "Tehlikeli Madde Güvenlik Danışmanı (TMGD) olmak isteyen kişiler, bakanlık tarafından yetkilendirilmiş eğitimleri tamamlayarak sınavda başarılı olmalıdır."
    },
    {
        question: "Tehlikeli madde güvenlik danışmanı sertifikası nedir?",
        answer: "TMGD sertifikası, tehlikeli madde taşımacılığı ve işlemleri hakkında uzman danışmanlık yapma yetkisini sağlayan bir belgedir."
    },
    {
        question: "Kimler taşımacı olabilir?",
        answer: "Yasal yükümlülükleri yerine getiren, gerekli belgeleri olan ve tehlikeli madde taşımacılığı eğitimini tamamlamış kişiler taşımacı olabilir."
    },
    {
        question: "TMGD ne tür bir sistem kullanır?",
        answer: "TMGD, tehlikeli madde işlemlerinin güvenli bir şekilde gerçekleştirilmesi için risk değerlendirmesi, güvenlik planları ve düzenli denetim sistemleri kullanır."
    },
    {
        question: "Eğitim ve eğitim kuruluşunun zorunlulukları neler?",
        answer: "TMGD eğitimini sunan kuruluşlar, bakanlık onaylı olmalı ve eğitim müfredatını ilgili mevzuata uygun olarak vermelidir."
    },
    {
        question: "Yangın eğitimini kimler verebilir?",
        answer: "Yangın eğitimi, yangın güvenliği alanında yetkili kişiler veya kuruluşlar tarafından verilmelidir."
    },
    {
        question: "ADR danışmanı nasıl olunur?",
        answer: "ADR danışmanı olmak için tehlikeli madde eğitimi almalı ve bakanlık tarafından yapılan sertifikasyon sınavında başarılı olunmalıdır."
    },
    {
        question: "TMGD adayının toplaması gereken belgeler nelerdir?",
        answer: "Kimlik belgesi, eğitim sertifikası, başvuru formu ve diğer gerekli belgeler toplanmalıdır."
    },
    {
        question: "Belgelerin geçerliliği ne kadardır? Belge yenileme nasıl olur?",
        answer: "TMGD sertifikası 5 yıl geçerlidir ve yenileme için yeniden sınav gereklidir."
    },
    {
        question: "TMGD'nin yükümlülükleri nelerdir?",
        answer: "TMGD, tehlikeli madde işlemlerinde güvenliği sağlamak, raporlar hazırlamak ve işletmelere rehberlik etmekle yükümlüdür."
    },
    {
        question: "Tehlikeli madde eğiticilerinin sınavdan kaç alması gerekmektedir?",
        answer: "Tehlikeli madde eğiticilerinin sınavdan başarılı olabilmesi için en az 70 puan alması gereklidir."
    },
    {
        question: "Belge ücreti ne kadardır?",
        answer: "Belge ücretleri, bakanlık tarafından belirlenir ve yıllık olarak güncellenebilir."
    },
    {
        question: "Belge iptali nasıl olur?",
        answer: "Belge, mevzuata aykırı faaliyetlerde bulunulduğunda veya güvenlik ihlalleri tespit edildiğinde iptal edilebilir."
    },
    {
        question: "Ocak 2018'e kadar muaf olanlar dikkat?",
        answer: "2018 öncesinde bazı muafiyetler geçerliydi, ancak son düzenlemelerle birlikte birçok muafiyet kaldırılmıştır."
    },
    {
        question: "Eğitim müfredatı nasıl olmaktadır?",
        answer: "TMGD eğitimi, tehlikeli maddelerin taşınması, depolanması ve güvenli elleçlenmesi konularını kapsayan bir müfredatla yürütülmektedir."
    },
    {
        question: "TMGD denetimlerini hangi kurumlar yapmaktadır?",
        answer: "Bakanlık ve yetkilendirilmiş TMGDK’lar, işletmelerin mevzuata uyumluluğunu denetler."
    },
    {
        question: "İdari para cezası tespitini kimler yapabilir?",
        answer: "İdari para cezası, bakanlık veya yetkilendirilmiş denetim kuruluşları tarafından tespit edilebilir."
    },
    {
        question: "Tehlikeli madde güvenlik danışmanı ile çalışılacak ana konular?",
        answer: "Danışmanla çalışılacak konular; güvenlik planları, acil durum yönetimi, risk değerlendirmesi ve raporlamadır."
    },
    {
        question: "Kimyasallarla Çalışan İşletmelerde Tedarikçilerden Talep Edilecek Evrak Listesi nelerdir?",
        answer: "Kimyasal malzemeler için güvenlik bilgi formu, taşıma belgesi ve uygunluk belgeleri talep edilmelidir."
    },
    {
        question: "ADR'de Taşınması Yasak Olan Maddeler Nelerdir?",
        answer: "ADR’ye göre radyoaktif ve patlayıcı gibi yüksek riskli bazı maddelerin taşınması kısıtlanmıştır."
    },
    {
        question: "Patlayıcı Kullanım İzni Nereden Alınır?",
        answer: "Patlayıcı kullanım izinleri, Çevre ve Şehircilik Bakanlığı'ndan veya ilgili belediyelerden alınır."
    },
    {
        question: "Güvenlik Planı Nedir? Güvenlik Planı Neden Hazırlanmalıdır?",
        answer: "Güvenlik planı, tehlikeli maddelerle çalışırken güvenliği sağlamak amacıyla hazırlanan bir plandır."
    },
    {
        question: "Tehlikeli Madde Kaza Raporu Nedir? Hangi Hallerde Hazırlanır?",
        answer: "Tehlikeli Madde Kaza Raporu, kaza durumlarında güvenlik önlemlerini değerlendirmek için hazırlanır."
    },
    {
        question: "ADR kapsamında verilen belgeler nelerdir?",
        answer: "ADR kapsamında tehlikeli madde taşıma belgesi, sürücü eğitim belgesi ve araç uygunluk belgeleri verilir."
    },
    {
        question: "Tehlikeli Madde Taşıyan Araçların Park Yerleri Neresi Olmalıdır?",
        answer: "Tehlikeli madde taşıyan araçların güvenli park yerleri için belirlenmiş alanlar kullanılmalıdır."
    },
    {
        question: "Tehlike Önceliği Tablosu Ne İşe Yarar?",
        answer: "Bu tablo, tehlikeli maddelerin sınıflandırılmasını ve risk önceliklerinin belirlenmesini sağlar."
    }
];

// FAQ öğelerini sayfaya yüklemek
document.addEventListener("DOMContentLoaded", () => {
    const faqContainer = document.getElementById("faq-container");

    faqData.forEach(item => {
        // Soru elementi
        const questionElement = document.createElement("div");
        questionElement.classList.add("faq-question");
        questionElement.innerHTML = `<span class="faq-icon">&#9654;</span> ${item.question}`;

        // Cevap elementi
        const answerElement = document.createElement("div");
        answerElement.classList.add("faq-answer");
        answerElement.textContent = item.answer;
        answerElement.style.maxHeight = "0";

        // Soru tıklandığında cevabı göster/gizle
        questionElement.addEventListener("click", () => {
            const isOpen = answerElement.style.maxHeight !== "0px";
            answerElement.style.maxHeight = isOpen ? "0" : `${answerElement.scrollHeight}px`;
            questionElement.querySelector('.faq-icon').innerHTML = isOpen ? "&#9654;" : "&#9660;";
        });

        // Soru ve cevapları kapsayıcıya ekle
        const faqItem = document.createElement("div");
        faqItem.classList.add("faq-item");
        faqItem.appendChild(questionElement);
        faqItem.appendChild(answerElement);

        faqContainer.appendChild(faqItem);
    });
});