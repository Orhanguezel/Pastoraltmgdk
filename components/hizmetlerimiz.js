document.addEventListener("DOMContentLoaded", async () => {
  const pageType = document.body.dataset.pageType; // Sayfa türü alınır
  const itemTitles = document.getElementById("item-titles");
  const itemContent = document.getElementById("item-content");
  const gallery = document.getElementById("gallery");
  const backButtonTop = document.getElementById("back-button-top");
  const backButtonBottom = document.getElementById("back-button-bottom");
  const staticMessage = document.getElementById("static-message"); // Sabit mesaj

  let data; // Veriyi burada saklayacağız
  const sidebarTitle = document.querySelector(".sidebar h2"); // Başlık alanı seçilir

  try {
    // Sayfa türüne göre veri dosyasını yükle ve başlığı ayarla
    if (pageType === "mevzuat") {
      data = await import("../data/mevzuat-data.js").then(
        (module) => module.mevzuatData
      );
      sidebarTitle.textContent = "Mevzuat";
    } else {
      console.error("Geçersiz sayfa türü.");
      return;
    }

    // Ana sayfayı göster
    function showMainPage() {
      itemContent.innerHTML = ""; // İçeriği temizle
      gallery.style.display = "flex"; // Galeriyi göster
      backButtonTop.classList.add("hidden"); // Geri düğmesini gizle
      backButtonBottom.classList.add("hidden"); // Geri düğmesini gizle
      staticMessage.style.display = "block"; // Sabit mesajı göster
      window.location.hash = ""; // Hash'i temizle
    }

    // Sidebar başlıklarını oluştur
    data.forEach((item, index) => {
      // Eğer item.title yoksa, boş bir string olarak varsay
      const title = item.title || ""; // Eğer title yoksa boş bir string atar
      const hashId = (item.title || "")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");

      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${hashId}`;
      link.textContent = `${index + 1}. ${title || "Başlık Yok"}`; // Eğer title boşsa "Başlık Yok" yazar
      listItem.appendChild(link);
      itemTitles.appendChild(listItem);
    });

    // İçeriği gösterme fonksiyonu (Content alanında)
    function showItem(item) {
      itemContent.innerHTML = `<h2>${item.title}</h2>`; // Ürün başlığı

      // Eğer mevzuat sayfasındaysak, akordeon yapısını oluştur
      if (item.items) {
        item.items.forEach((subItem) => {
          const accordionContainer = document.createElement("div");
          accordionContainer.classList.add("accordion-section");

          const accordionHeader = document.createElement("button");
          accordionHeader.classList.add("accordion-header");
          accordionHeader.textContent = subItem.subtitle;

          const accordionContent = document.createElement("div");
          accordionContent.classList.add("accordion-content");
          accordionContent.style.display = "none"; // Başlangıçta kapalı olacak

          if (subItem.pdfFiles) {
            subItem.pdfFiles.forEach((pdf) => {
              const pdfLink = document.createElement("a");
              pdfLink.href = pdf.url;
              pdfLink.target = "_blank";
              pdfLink.textContent = pdf.name;
              pdfLink.classList.add("pdf-link");
              accordionContent.appendChild(pdfLink);
            });
          }

          // Akordeon başlığına tıklanınca aç/kapa yap
          accordionHeader.addEventListener("click", () => {
            accordionContent.style.display =
              accordionContent.style.display === "none" ? "block" : "none";
          });

          accordionContainer.appendChild(accordionHeader);
          accordionContainer.appendChild(accordionContent);
          itemContent.appendChild(accordionContainer);
        });
      } else {
        // Diğer sayfalar için içerik alanına doğrudan veriyi göster
        itemContent.innerHTML += item.content;
      }

      gallery.style.display = "none"; // Galeriyi gizle
      backButtonTop.classList.remove("hidden"); // Geri düğmelerini göster
      backButtonBottom.classList.remove("hidden");

      // İçeriğin görünür olması için sayfayı kaydır
      itemContent.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Hash değişimini dinleyerek ilgili içeriği gösterecek
    // Hash değişimini dinleyerek ilgili içeriği gösterecek
    function handleHashChange() {
      const hash = window.location.hash.slice(1);
      const selectedItem = data.find(
        (item) =>
          item.title &&
          item.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "") === hash
      );

      if (selectedItem) {
        showItem(selectedItem);
      } else {
        console.warn("İlgili başlık bulunamadı, ana sayfaya yönlendiriliyor.");
        showMainPage();
      }
    }

    // Hash değişikliklerini dinle
    window.addEventListener("hashchange", handleHashChange);

    // Sayfa yüklendiğinde mevcut hash varsa ilgili içeriği göster
    handleHashChange();

    // Geri düğmelerine click olayları ekle
    backButtonTop.addEventListener("click", showMainPage);
    backButtonBottom.addEventListener("click", showMainPage);
  } catch (error) {
    console.error("Veri yükleme sırasında bir hata oluştu: ", error);
  }
});
