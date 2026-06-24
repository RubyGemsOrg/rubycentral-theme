const galleryItems = document.querySelectorAll('[data-gallery-item]');

if (galleryItems.length && 'IntersectionObserver' in window) {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    galleryItems.forEach((item) => observer.observe(item));
}
