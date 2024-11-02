// components/hizmetlerimiz.js
import { servicesData } from "../data/services-data.js";
import { sektorlerData } from "../data/sektorler-data.js";

document.addEventListener("DOMContentLoaded", async () => {
  const pageType = document.body.dataset.pageType;
  const itemTitles = document.getElementById("item-titles");
  const itemContent = document.getElementById("item-content");
  const backButtonTop = document.getElementById("back-button-top");
  const backButtonBottom = document.getElementById("back-button-bottom");
  const staticMessage = document.getElementById("static-message");

  let data;
  const sidebarTitle = document.querySelector(".sidebar h2");

  try {
    // Sayfa türüne göre veri dosyasını yükle ve başlığı ayarla
    if (pageType === "services") {
      data = await import("../data/services-data.js").then((module) => module.servicesData);
      sidebarTitle.textContent = "Hizmet Verdiğimiz Sektörler";
    } else if (pageType === "sektorler") {
      data = await import("../data/sektorler-data.js").then((module) => module.sektorlerData);
      sidebarTitle.textContent = "Hizmet Verdiğimiz Sektörler";
    } else {
      console.error("Geçersiz sayfa türü.");
      return;
    }

    function showMainPage() {
      itemContent.innerHTML = ""; // İçeriği temizle
      staticMessage.style.display = "block"; // Sabit mesajı göster
      backButtonTop.classList.add("hidden"); // Geri düğmelerini gizle
      backButtonBottom.classList.add("hidden"); // Geri düğmelerini gizle
      window.location.hash = ""; // Hash'i temizle
    }

    // Sol menüye başlıkları ekle
    data.forEach((item, index) => {
      const hashId = item.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${hashId}`;
      link.textContent = `${index + 1}. ${item.title}`;
      listItem.appendChild(link);
      itemTitles.appendChild(listItem);
    });

    // İçeriği gösterme fonksiyonu
    function showItem(item) {
      itemContent.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="content-image">
        <h2>${item.title}</h2>
        ${item.content}
      `;
      staticMessage.style.display = "none"; // Sabit mesajı gizle
      backButtonTop.classList.remove("hidden"); // Geri düğmelerini göster
      backButtonBottom.classList.remove("hidden"); // Geri düğmelerini göster
      itemContent.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Hash değişikliklerini dinle ve içerik göster
    function handleHashChange() {
      const hash = window.location.hash.slice(1);
      const selectedItem = data.find(
        (item) =>
          item.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "") === hash
      );
      if (selectedItem) {
        showItem(selectedItem);
      } else {
        showMainPage();
      }
    }

    window.addEventListener("hashchange", handleHashChange);

    // Sayfa yüklendiğinde mevcut hash varsa ilgili içeriği göster
    handleHashChange();

    // Geri düğmelerine tıklama olayları ekle
    backButtonTop.addEventListener("click", showMainPage);
    backButtonBottom.addEventListener("click", showMainPage);
  } catch (error) {
    console.error("Veri yükleme sırasında bir hata oluştu: ", error);
  }
});
