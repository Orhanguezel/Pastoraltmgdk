document.addEventListener("DOMContentLoaded", async () => {
    const itemTitles = document.getElementById("item-titles");
    const itemContent = document.getElementById("item-content");
    const staticMessage = document.getElementById("static-message");

    let data;
    const sidebarTitle = document.querySelector(".sidebar h2");

    // Türkçe karakter dönüşümünü sadece id ve link için yapacak fonksiyon
    const toUrlFriendly = (str) => {
        if (!str) return ""; // Eğer str yoksa boş bir string döndür
        const trMap = { ç: "c", Ç: "C", ğ: "g", Ğ: "G", ı: "i", İ: "I", ö: "o", Ö: "O", ş: "s", Ş: "S", ü: "u", Ü: "U" };
        return str.replace(/[çğıöşüÇĞİÖŞÜ]/g, (match) => trMap[match])
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]/g, "");
    };

    try {
        data = await import("../data/mevzuat-data.js").then((module) => module.mevzuatData);
        sidebarTitle.textContent = "Mevzuat";

        // Ana başlıkları ekle ve link oluştur
        data.forEach((item) => {
            if (!item.title) return; // Eğer item.title boşsa bu öğeyi atla
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            const itemId = toUrlFriendly(item.title);

            link.href = `#${itemId}`;
            link.textContent = item.title;
            link.addEventListener("click", (e) => {
                e.preventDefault();
                location.hash = itemId;
                showItem(item, itemId);
            });

            listItem.appendChild(link);
            itemTitles.appendChild(listItem);
        });

        function showItem(item, itemId) {
            itemContent.innerHTML = `<h2 id="${itemId}">${item.title}</h2>`;
            itemContent.classList.add("content-container");

            if (item.items) {
                item.items.forEach((subItem) => {
                    if (subItem.subtitle) {
                        const accordionHeader = document.createElement("button");
                        accordionHeader.classList.add("accordion-header");
                        accordionHeader.innerHTML = `<span>${subItem.subtitle}</span>`;
                        accordionHeader.addEventListener("click", () => {
                            accordionContent.classList.toggle("active");
                        });

                        const accordionContent = document.createElement("div");
                        accordionContent.classList.add("accordion-content");

                        subItem.subItems.forEach((pdfItem) => {
                            const pdfLink = document.createElement("a");
                            pdfLink.href = pdfItem.pdf;
                            pdfLink.target = "_blank";
                            pdfLink.classList.add("pdf-link");
                            pdfLink.innerHTML = `<i class="fas fa-file-pdf"></i> ${pdfItem.title}`;
                            accordionContent.appendChild(pdfLink);
                        });

                        itemContent.appendChild(accordionHeader);
                        itemContent.appendChild(accordionContent);
                    } else {
                        const pdfLink = document.createElement("a");
                        pdfLink.href = subItem.pdf;
                        pdfLink.target = "_blank";
                        pdfLink.classList.add("pdf-link");
                        pdfLink.innerHTML = `<i class="fas fa-file-pdf"></i> ${subItem.title}`;
                        itemContent.appendChild(pdfLink);
                    }
                });
            }
            staticMessage.style.display = "none";
        }

        function handleHashChange() {
            const hash = location.hash.slice(1);
            const foundItem = data.find(item => item.title && toUrlFriendly(item.title) === hash);
            if (foundItem) showItem(foundItem, hash);
        }

        // Hash değişikliklerini dinle
        window.addEventListener("hashchange", handleHashChange);

        // Sayfa yüklenirken mevcut hash varsa ilgili başlığı göster
        if (location.hash) {
            handleHashChange();
        } else {
            showItem(data[0], toUrlFriendly(data[0].title));
        }

    } catch (error) {
        console.error("Veri yükleme sırasında bir hata oluştu:", error);
    }
});
