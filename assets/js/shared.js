/* shared.js — injects nav & footer, marks active link */
(function () {
  function navHTML(root) {
    return `
<nav>
  <div class="nav-inner">
    <a href="${root}index.html" class="nav-logo">Andrew Zvoma</a>
    <ul class="nav-links">
      <li><a href="${root}index.html" data-page="home">Home</a></li>
      <li><a href="${root}case-studies/index.html" data-page="case-studies">Case Studies</a></li>
      <li><a href="${root}index.html#about">About Me</a></li>
      <li><a href="${root}index.html#process">Process</a></li>
    </ul>
    <div class="nav-cta"><a href="mailto:azvoma@gmail.com">Contact</a></div>
  </div>
</nav>`;
  }

  function footerHTML(root) {
    return `
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <h3>Andrew Zvoma</h3>
      <p>UX/UI Product Designer with 5+ years experience creating scalable digital products.</p>
    </div>
    <div class="footer-cols">
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="${root}index.html">Home</a></li>
          <li><a href="${root}case-studies/index.html">Case Studies</a></li>
          <li><a href="${root}index.html#about">About</a></li>
          <li><a href="${root}index.html#process">Process</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Get In Touch</h4>
        <ul>
          <li><a href="mailto:azvoma@gmail.com">azvoma@gmail.com</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">© 2026 Andrew Zvoma. All rights reserved.</div>
</footer>`;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var root = document.documentElement.dataset.root || '';
    var navEl = document.getElementById('nav-slot');
    if (navEl) navEl.outerHTML = navHTML(root);
    var footEl = document.getElementById('footer-slot');
    if (footEl) footEl.outerHTML = footerHTML(root);

    // mark active nav link
    var path = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(function(a) {
      var href = a.getAttribute('href') || '';
      if (href.includes('case-studies') && path.includes('case-studies')) {
        a.classList.add('active');
      } else if (!href.includes('case-studies') && (path.endsWith('index.html') || path === '/')) {
        if (a.dataset.page === 'home') a.classList.add('active');
      }
    });
  });
})();
