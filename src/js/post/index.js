// Set data-language on <pre> elements so CSS can display a clean label.
window.addEventListener('load', () => {
    document.querySelectorAll('pre > code[class*="language-"]').forEach((code) => {
        const match = code.className.match(/\blanguage-(\w+)\b/);
        if (match) code.closest('pre').dataset.language = match[1];
    });
});

// Apply .wrap class to any <pre> immediately following a <!--wrap--> HTML card
document.querySelectorAll('pre').forEach((pre) => {
    let node = pre.closest('.kg-code-card') ?? pre;
    let prev = node.previousSibling;
    while (prev && prev.nodeType === Node.TEXT_NODE) {
        prev = prev.previousSibling;
    }
    if (prev && prev.nodeType === Node.COMMENT_NODE && prev.nodeValue.trim() === 'wrap') {
        pre.classList.add('wrap');
    }
});

// Table of contents
const toc = document.querySelector('[data-toc]');
const post = document.querySelector('[data-post-content]');

if (toc && post) {
    const headings = [...post.querySelectorAll('h2')].filter(h => h.id);

    if (headings.length > 0) {
        const list = document.createElement('ul');
        list.className = 'post-toc__list';

        headings.forEach(heading => {
            const item = document.createElement('li');
            item.className = 'post-toc__item';
            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent;
            link.className = 'post-toc__link';
            item.appendChild(link);
            list.appendChild(item);
        });

        toc.appendChild(list);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const link = toc.querySelector(`a[href="#${entry.target.id}"]`);
                if (link) {
                    if (entry.isIntersecting) {
                        link.setAttribute('aria-current', 'location');
                    } else {
                        link.removeAttribute('aria-current');
                    }
                }
            });
        }, { rootMargin: '0px 0px -80% 0px' });

        headings.forEach(h => observer.observe(h));
    }
}
