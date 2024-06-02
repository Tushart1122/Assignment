document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lightbox effect for gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            openLightbox(this.href);
        });
    });

    function openLightbox(src) {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${src}" alt="Lightbox Image">
                <span class="close-lightbox">&times;</span>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        document.querySelector('.close-lightbox').addEventListener('click', function () {
            document.body.removeChild(lightbox);
        });

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                document.body.removeChild(lightbox);
            }
        });
    }
});
