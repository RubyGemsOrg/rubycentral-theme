import './global-nav';
import './home-involvement';
import './timeline';

// Mark active tag nav link based on current path
const currentPath = window.location.pathname;
document.querySelectorAll('[data-tag-nav] a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.setAttribute('aria-current', 'page');
    }
});

document.querySelectorAll('.section-header').forEach((header) => {
    header.addEventListener('click', function () {
        this.parentNode.classList.toggle('active');
    });
});

// LiveReload server
if (ENV === 'development') {
  const script = document.createElement('script');
  script.src = `http://${
  (location.host || 'localhost').split(':')[0]
  }:35729/livereload.js?snipver=1`;
  document.head.append(script);
  console.log('Reload script added');
}
