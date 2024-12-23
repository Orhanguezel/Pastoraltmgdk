// Mevcut veri kaynaklarını import ediyoruz
import { mevzuatData } from '../data/mevzuat-data.js';
import { sektorlerData } from '../data/sektorler-data.js';
import { servicesData } from '../data/services-data.js';

// Tüm verileri birleştiriyoruz
const allData = [...mevzuatData, ...sektorlerData, ...servicesData];

// HTML öğelerini seçiyoruz
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

document.addEventListener("DOMContentLoaded", function () {
    if (searchButton && searchResults) {
        searchButton.addEventListener("click", performSearch);
    }

    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = ""; // Önceki sonuçları temizle

        if (searchTerm === "") {
            searchResults.innerHTML = "<p>Lütfen bir arama terimi giriniz.</p>";
            return;
        }

        // Arama terimini localStorage'a kaydediyoruz
        localStorage.setItem("searchTerm", searchTerm);

        // Veriyi filtreliyoruz (arama işlemi)
        const results = allData.flatMap(data => {
            if (data.items) {
                // 'items' dizisindeki alt başlıkları filtrele
                return data.items.filter(item =>
                    (item.title && item.title.toLowerCase().includes(searchTerm)) ||
                    (item.pdf && item.pdf.toLowerCase().includes(searchTerm))
                ).map(item => ({ ...item, category: data.title }));
            } else if (data.subItems) {
                // 'subItems' dizisindeki alt başlıkları filtrele
                return data.subItems.filter(subItem =>
                    (subItem.title && subItem.title.toLowerCase().includes(searchTerm)) ||
                    (subItem.pdf && subItem.pdf.toLowerCase().includes(searchTerm))
                ).map(subItem => ({ ...subItem, category: data.subtitle }));
            } else if (data.title && data.content) {
                // Eğer sadece başlık ve içerik varsa
                return (data.title.toLowerCase().includes(searchTerm) ||
                        data.content.toLowerCase().includes(searchTerm))
                    ? [data]
                    : [];
            } else {
                return [];
            }
        });

        // Arama sonuçlarını ekrana basıyoruz
        if (results.length > 0) {
            results.forEach(result => {
                const resultItem = document.createElement("div");
                resultItem.classList.add("search-result-item");

                // Arama terimini vurguluyoruz
                let contentSnippet = result.content
                    ? result.content.substring(0, 100)
                    : "Dosya: " + result.pdf;
                const highlightRegex = new RegExp(`(${searchTerm})`, "gi");
                contentSnippet = contentSnippet.replace(highlightRegex, `<span class="highlight">$1</span>`);

                const hashId = result.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

                resultItem.innerHTML = `
                    <h3><a href="#${hashId}" class="search-link">${result.title}</a></h3>
                    <p>${contentSnippet}...</p>
                    <p>Kategori: ${result.category || "Diğer"}</p>
                `;

                searchResults.appendChild(resultItem);
            });

            // Linklere tıklama özelliği ekliyoruz
            const searchLinks = document.querySelectorAll(".search-link");
            searchLinks.forEach(link => {
                link.addEventListener("click", (event) => {
                    event.preventDefault();
                    const hash = link.getAttribute("href").slice(1);
                    window.location.hash = hash;
                    handleHashChange();
                });
            });
        } else {
            searchResults.innerHTML = "<p>Hiçbir sonuç bulunamadı.</p>";
        }
    }

    // Hash değişikliklerini izleyin ve ilgili içeriği gösterin
    function handleHashChange() {
        const hash = window.location.hash.slice(1);
        const selectedItem = allData.find(
            (item) =>
                item.title &&
                item.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") === hash
        );

        if (selectedItem) {
            showItem(selectedItem);
        } else {
            showMainPage();
        }
    }

    // Seçilen öğenin içeriğini göster ve arama terimini vurgula
    function showItem(item) {
        if (!searchResults) {
            console.error("Arama sonuçları öğesi bulunamadı.");
            return;
        }

        let contentHTML = `<h2>${item.title}</h2><p>${item.content || ''}</p>`;

        // Arama terimini vurgulama
        const searchTerm = localStorage.getItem("searchTerm");
        if (searchTerm) {
            const highlightRegex = new RegExp(`(${searchTerm})`, "gi");
            contentHTML = contentHTML.replace(
                highlightRegex,
                `<span class="highlight">$1</span>`
            );
        }

        searchResults.innerHTML = contentHTML;
    }

    // Ana sayfayı göster
    function showMainPage() {
        searchResults.innerHTML = "<p></p>";
    }

    // Sayfa yüklendiğinde hash varsa ilgili içeriği göster
    handleHashChange();

    // Hash değişikliklerini izleyin
    window.addEventListener("hashchange", handleHashChange);
});
