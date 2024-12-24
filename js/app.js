import { loadHeader } from '../components/header.js';
import { loadCarousel } from '../components/carousel.js';
import { loadContent } from '../components/content.js';
import { loadVision } from '../components/vision.js';
import { loadQualityPolicy } from '../components/quality.js';
import { loadFooter } from '../components/footer.js';

document.addEventListener("DOMContentLoaded", () => {

    // Header ve Footer her sayfada yüklenecek
    loadHeader();
    loadFooter();

    // Carousel yalnızca varsa yüklenecek
    if (document.getElementById("carousel")) {
        loadCarousel();
    }

    // Content yalnızca varsa yüklenecek
    if (document.getElementById("content")) {
        loadContent();
    }

    // Vision yalnızca varsa yüklenecek
    if (document.getElementById("vision")) {
        loadVision();
    }

    // QualityPolicy yalnızca varsa yüklenecek
    if (document.getElementById("quality")) {
        loadQualityPolicy();
    }
    
});
  
