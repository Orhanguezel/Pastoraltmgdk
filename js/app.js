import { loadHeader } from '../components/header.js';
import { loadCarousel } from '../components/carousel.js';
import { loadContent } from '../components/content.js';
import { loadVision } from '../components/vision.js';
import { loadQualityPolicy } from '../components/quality.js';
import { loadFooter } from '../components/footer.js';

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded olayı tetiklendi");
    loadHeader();
    loadCarousel();
    loadContent();
    loadVision(); // loadVision çağrısını burada yönetin
    loadQualityPolicy();
    loadFooter();
});

