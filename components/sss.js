const faqData = [
    {
        question: "TMGDK nedir?",
        answer: "Tehlikeli Madde Güvenlik Danışmanlık Kuruluşu (TMGDK), tehlikeli maddelerin taşınması, depolanması ve elleçlenmesi süreçlerinde güvenlik önlemlerini sağlamak ve denetlemek için danışmanlık hizmeti sunan kuruluşlardır."
    },
    {
        question: "TMGD kimdir ve ne iş yapar?",
        answer: "Tehlikeli Madde Güvenlik Danışmanı (TMGD), tehlikeli maddelerle ilgili riskleri minimize etmek için işletmelere güvenlik önlemleri konusunda danışmanlık yapar. TMGD, TMGDK bünyesinde çalışabilir veya bağımsız olarak hizmet verebilir."
    },
    {
        question: "TMGDK'nın sunduğu hizmetler nelerdir?",
        answer: "TMGDK; eğitim, denetim, risk değerlendirmesi, acil durum yönetimi ve güvenlik raporlarının hazırlanması gibi hizmetler sunar."
    },
    {
        question: "TMGDK danışmanlığı zorunlu mu?",
        answer: "Türkiye'de tehlikeli madde taşıyan, depolayan veya elleçleyen işletmeler için TMGDK danışmanlığı zorunludur. Bu zorunluluk, işletmelerin güvenlik standartlarına uygun hareket etmesini sağlar."
    },
    {
        question: "TMGD hizmeti nasıl alınır?",
        answer: "TMGD hizmeti almak için lisanslı bir TMGDK ile iletişime geçebilir veya bağımsız TMGD'lerden hizmet alabilirsiniz."
    },
    {
        question: "Tehlikeli maddeler nelerdir?",
        answer: "Tehlikeli maddeler; insan sağlığı, çevre veya malzeme güvenliği açısından risk oluşturan kimyasallar, patlayıcılar, yanıcı ve korozif maddeler gibi sınıflandırmalardır."
    },
    {
        question: "TMGDK hizmet ücreti ne kadar?",
        answer: "TMGDK hizmet ücretleri, verilen hizmetin kapsamına, işletmenin büyüklüğüne ve risk seviyesine göre değişiklik gösterir. Ücretler hakkında detaylı bilgi almak için bir TMGDK ile iletişime geçebilirsiniz."
    },
    {
        question: "TMGD eğitimleri nelerdir?",
        answer: "TMGD eğitimleri; tehlikeli maddelerin taşınması, depolanması ve güvenli elleçlenmesi gibi konuları kapsayan eğitim programlarıdır. Bu eğitimler TMGD olabilmek için gereklidir."
    },
    {
        question: "TMGD sertifikası nasıl alınır?",
        answer: "TMGD sertifikası almak için TMGD eğitimini tamamlamanız ve sonrasında Bakanlık tarafından yapılan sınavda başarılı olmanız gerekmektedir."
    },
    {
        question: "TMGDK ile TMGD arasındaki fark nedir?",
        answer: "TMGDK, tehlikeli madde güvenlik danışmanlığı hizmeti sunan bir kuruluştur. TMGD ise bu kuruluşa bağlı veya bağımsız olarak çalışan ve danışmanlık yapan kişidir."
    },
    {
        question: "TMGDK hangi sektörlere hizmet verir?",
        answer: "TMGDK; kimya, lojistik, petrol, madencilik, ilaç, otomotiv ve gıda gibi birçok sektöre hizmet verir."
    },
    {
        question: "Tehlikeli madde güvenlik planı nedir?",
        answer: "Tehlikeli madde güvenlik planı, işletmenin tehlikeli maddelere dair riskleri belirlemesi ve bu riskleri minimize etmek için aldığı önlemleri kapsayan bir plandır."
    },
    {
        question: "TMGD'nin görev ve sorumlulukları nelerdir?",
        answer: "TMGD'nin görevleri arasında tehlikeli madde taşımacılığı süreçlerini denetlemek, güvenlik planlarını incelemek, rapor hazırlamak ve işletmeye tavsiyelerde bulunmak vardır."
    },
    {
        question: "Tehlikeli madde taşımacılığında ADR nedir?",
        answer: "ADR, Avrupa ülkeleri arasında tehlikeli madde taşımacılığı için kabul edilmiş bir düzenlemedir. ADR, taşınan tehlikeli maddelerin güvenliğini sağlamak için standartlar ve kurallar belirler."
    },
    {
        question: "TMGDK denetimleri nasıl yapılır?",
        answer: "TMGDK denetimleri, işletmenin tehlikeli madde işlemleri için gerekli güvenlik önlemlerini alıp almadığını değerlendiren planlı veya ani denetimler şeklinde yapılır."
    },
    {
        question: "TMGD'nin çalıştığı şirketler hangi yükümlülüklere tabidir?",
        answer: "TMGD'nin hizmet verdiği şirketler, tehlikeli madde işlemleri için güvenlik standartlarına uymak, gerekli belgeleri hazırlamak ve TMGD raporlarını dikkate almak zorundadır."
    },
    {
        question: "TMGDK hangi mevzuata göre çalışır?",
        answer: "TMGDK, Türkiye'de tehlikeli madde taşımacılığına ilişkin ulusal mevzuata ve uluslararası düzenlemelere (ADR) uygun olarak faaliyet gösterir."
    },
    {
        question: "TMGD raporu nedir?",
        answer: "TMGD raporu, tehlikeli madde güvenliği ile ilgili işletmede yapılan denetimler sonucu hazırlanan bir değerlendirme raporudur. Bu raporda güvenlik önlemlerinin durumu ve tavsiyeler yer alır."
    },
    {
        question: "TMGD sertifikası geçerlilik süresi ne kadardır?",
        answer: "TMGD sertifikası 5 yıl geçerlidir. Sertifika süresi dolduğunda TMGD, yeniden sınava girerek sertifikasını yenilemelidir."
    },
    {
        question: "TMGDK ve TMGD hizmetleri neden önemlidir?",
        answer: "TMGDK ve TMGD hizmetleri, tehlikeli madde işlemlerinde güvenliği artırmak, riskleri minimize etmek ve yasal yükümlülüklere uyumu sağlamak için kritik öneme sahiptir."
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