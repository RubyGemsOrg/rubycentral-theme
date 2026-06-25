const involvementFigure = document.querySelector('[data-involvement-image]');
const involvementLinks = document.querySelectorAll('.home-involvement [data-image]');

if (involvementFigure && involvementLinks.length) {
    const img = involvementFigure.querySelector('img');
    const defaultSrc = img.src;
    const defaultSrcset = img.srcset;

    involvementLinks.forEach((link) => {
        link.addEventListener('mouseenter', () => {
            img.srcset = '';
            img.src = link.dataset.image;
        });

        link.addEventListener('mouseleave', () => {
            img.src = defaultSrc;
            img.srcset = defaultSrcset;
        });
    });
}
