const timelineItems = document.querySelectorAll('[data-timeline-item]');
const detailPanels = document.querySelectorAll('[data-timeline-detail]');

function selectItem(item) {
    const year = item.dataset.year;

    timelineItems.forEach(el => el.setAttribute('aria-pressed', 'false'));
    item.setAttribute('aria-pressed', 'true');

    detailPanels.forEach(panel => {
        const isMatch = panel.dataset.timelineDetail === year;
        const hasContent = panel.querySelector('.timeline__detail-body')?.textContent.trim().length > 0;
        panel.hidden = !isMatch || !hasContent;
    });
}

if (timelineItems.length && detailPanels.length) {
    timelineItems.forEach(item => {
        item.addEventListener('click', () => selectItem(item));
    });

    const defaultItem = document.querySelector('[data-timeline-item][data-default]')
        || timelineItems[timelineItems.length - 1];
    selectItem(defaultItem);

    const scroll = document.querySelector('.timeline__scroll');
    if (scroll) requestAnimationFrame(() => {
        scroll.scrollLeft = scroll.scrollWidth;
    });
}
