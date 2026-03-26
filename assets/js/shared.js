// Shared navigation and footer injected by each page
const NAV_HOME = `
<nav>
  <a href="/index.html" class="nav-logo">Andrew Zvoma</a>
  <ul class="nav-links">
    <li><a href="/index.html">Home</a></li>
    <li><a href="/case-studies/index.html">Case Studies</a></li>
    <li><a href="/index.html#about">About</a></li>
    <li><a href="/index.html#process">Process</a></li>
    <li><a href="mailto:azvoma@gmail.com">Contact</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer>
  <span class="footer-copy">© 2026 Andrew Zvoma. All rights reserved.</span>
  <div class="footer-links">
    <a href="mailto:azvoma@gmail.com">azvoma@gmail.com</a>
    <a href="/case-studies/index.html">Case Studies</a>
    <a href="/index.html#about">About</a>
    <a href="/index.html#process">Process</a>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML_FOR_PAGE || NAV_HOME;

  // Inject footer
  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Mark active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && path.includes(href.replace('/index.html','')) && href !== '/index.html') {
      a.classList.add('active');
    }
    if (href === '/index.html' && (path === '/' || path === '/index.html')) {
      a.classList.add('active');
    }
  });
});
