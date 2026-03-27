(function () {
  var root = document.documentElement.dataset.root || '';

  var nav = '<nav><div class="nav-inner">' +
    '<a href="' + root + 'index.html" class="nav-logo">Andrew <span>Zvoma</span></a>' +
    '<div class="nav-right">' +
    '<ul class="nav-links">' +
    '<li><a href="' + root + 'index.html" data-p="home">Home</a></li>' +
    '<li><a href="' + root + 'case-studies/index.html" data-p="cases">Case Studies</a></li>' +
    '<li><a href="' + root + 'about.html">About Me</a></li>' +
    '<li><a href="' + root + 'index.html#process">Process</a></li>' +
    '</ul>' +
    '<div class="nav-cta"><a href="mailto:azvoma@gmail.com">Contact</a></div>' +
    '</div>' +
    '</div></nav>';

  var footer = '<footer>' +
    '<div class="footer-grid">' +
    '<div><div class="footer-brand-name">Andrew <span>Zvoma</span></div>' +
    '<p class="footer-brand-desc">UX/UI Product Designer with 5+ years experience creating scalable digital products.</p></div>' +
    '<div class="footer-col"><h4>Quick Links</h4><ul>' +
    '<li><a href="' + root + 'index.html">Home</a></li>' +
    '<li><a href="' + root + 'case-studies/index.html">Case Studies</a></li>' +
    '<li><a href="' + root + 'about.html">About Me</a></li>' +
    '<li><a href="' + root + 'index.html#process">Process</a></li>' +
    '</ul></div>' +
    '<div class="footer-col"><h4>Get In Touch</h4><ul>' +
    '<li><a href="mailto:azvoma@gmail.com">azvoma@gmail.com</a></li>' +
    '</ul></div>' +
    '</div>' +
    '<div class="footer-bottom">\u00a9 2026 Andrew Zvoma. All rights reserved.</div>' +
    '</footer>';

  /* ── lightbox HTML injected once ── */
  var lb = '<div id="img-lightbox"><button id="img-lightbox-close" aria-label="Close">&times;</button><img id="img-lightbox-img" src="" alt=""></div>';

  document.addEventListener('DOMContentLoaded', function () {
    /* nav + footer */
    var ns = document.getElementById('nav-slot');
    if (ns) ns.outerHTML = nav;
    var fs = document.getElementById('footer-slot');
    if (fs) fs.outerHTML = footer;

    /* active nav link */
    var path = window.location.pathname;
    document.querySelectorAll('.nav-links a[data-p]').forEach(function (a) {
      if (a.dataset.p === 'cases' && path.includes('case-studies')) a.classList.add('active');
      else if (a.dataset.p === 'home' && !path.includes('case-studies')) a.classList.add('active');
    });

    /* inject lightbox */
    document.body.insertAdjacentHTML('beforeend', lb);
    var overlay = document.getElementById('img-lightbox');
    var lbImg   = document.getElementById('img-lightbox-img');
    var lbClose = document.getElementById('img-lightbox-close');

    /* make all zoomable images open lightbox */
    function initZoom() {
      document.querySelectorAll(
        '.img-research img, .img-research-2 img, .img-full img, ' +
        '.img-narrow img, .img-3 img, .img-sm img, .img-sm-narrow img, ' +
        '.img-sm-2 img, .cs-img img, .cs-img-research img, ' +
        '.cs-img-research-2 img, .cs-img-research img, .cs-hero-img img, ' +
        '.about-photo img'
      ).forEach(function (img) {
        if (img.closest('.phone-screen')) return; /* skip phone mockup screens */
        img.classList.add('zoomable');
        img.addEventListener('click', function (e) {
          e.stopPropagation();
          lbImg.src = img.src;
          lbImg.alt = img.alt;
          overlay.classList.add('open');
          document.body.style.overflow = 'hidden';
        });
      });
    }

    initZoom();

    /* close lightbox */
    function closeLb() {
      overlay.classList.remove('open');
      lbImg.src = '';
      document.body.style.overflow = '';
    }
    overlay.addEventListener('click', closeLb);
    lbClose.addEventListener('click', function(e) { e.stopPropagation(); closeLb(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLb();
    });
    /* prevent click on image from closing overlay */
    lbImg.addEventListener('click', function (e) { e.stopPropagation(); });
  });
})();
