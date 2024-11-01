import { servicesData } from '../data/services-data.js';

document.addEventListener("DOMContentLoaded", () => {
    const itemTitles = document.getElementById("item-titles");
    const itemContent = document.getElementById("item-content");
    const backButtonTop = document.getElementById("back-button-top");
    const backButtonBottom = document.getElementById("back-button-bottom");
    const staticMessage = document.getElementById("static-message");

    // ID formatlama fonksiyonu
    function createHashId(title) {
        return title
            .toLowerCase()
            .replace(/\s+/g, "-") // Boşlukları tire ile değiştir
            .replace(/[^\w-]/g, ""); // Özel karakterleri kaldır
    }

    // Ana sayfaya dönüş fonksiyonu
    function showMainPage() {
        itemContent.innerHTML = "";
        staticMessage.style.display = "block";
        backButtonTop.classList.add("hidden");
        backButtonBottom.classList.add("hidden");
        window.location.hash = "";
    }

    // Sol menü başlıklarını oluştur
    servicesData.forEach((item, index) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        const hashId = createHashId(item.title);

        link.href = `#${hashId}`;
        link.textContent = `${index + 1}. ${item.title}`;
        listItem.appendChild(link);
        itemTitles.appendChild(listItem);
    });

    // İçeriği gösterme fonksiyonu
    function showItem(item) {
        itemContent.innerHTML = `<h2>${item.title}</h2>${item.content}`;
        staticMessage.style.display = "none";
        backButtonTop.classList.remove("hidden");
        backButtonBottom.classList.remove("hidden");
        itemContent.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Hash değişikliklerini dinle ve içerik göster
    function handleHashChange() {
        const hash = window.location.hash.slice(1);
        const selectedItem = servicesData.find(
            (item) => createHashId(item.title) === hash
        );
        if (selectedItem) {
            showItem(selectedItem);
        } else {
            showMainPage();
        }
    }

    // Hash değişikliği ve geri düğmeleri için olaylar
    window.addEventListener("hashchange", handleHashChange);
    backButtonTop.addEventListener("click", showMainPage);
    backButtonBottom.addEventListener("click", showMainPage);

    // Sayfa yüklendiğinde mevcut hash varsa ilgili içeriği göster
    handleHashChange();
});
