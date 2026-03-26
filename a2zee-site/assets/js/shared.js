(function () {
  var root = document.documentElement.dataset.root || '';

  var nav = '<nav><div class="nav-inner">' +
    '<a href="' + root + 'index.html" class="nav-logo">Andrew <span>Zvoma</span></a>' +
    '<div class="nav-right">' +
    '<ul class="nav-links">' +
    '<li><a href="' + root + 'index.html" data-p="home">Home</a></li>' +
    '<li><a href="' + root + 'case-studies/index.html" data-p="cases">Case Studies</a></li>' +
    '<li><a href="' + root + 'index.html#about">About Me</a></li>' +
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
    '<li><a href="' + root + 'index.html#about">About Me</a></li>' +
    '<li><a href="' + root + 'index.html#process">Process</a></li>' +
    '</ul></div>' +
    '<div class="footer-col"><h4>Get In Touch</h4><ul>' +
    '<li><a href="mailto:azvoma@gmail.com">azvoma@gmail.com</a></li>' +
    '</ul></div>' +
    '</div>' +
    '<div class="footer-bottom">\u00a9 2026 Andrew Zvoma. All rights reserved.</div>' +
    '</footer>';

  document.addEventListener('DOMContentLoaded', function () {
    var ns = document.getElementById('nav-slot');
    if (ns) ns.outerHTML = nav;
    var fs = document.getElementById('footer-slot');
    if (fs) fs.outerHTML = footer;

    var path = window.location.pathname;
    document.querySelectorAll('.nav-links a[data-p]').forEach(function (a) {
      if (a.dataset.p === 'cases' && path.includes('case-studies')) a.classList.add('active');
      else if (a.dataset.p === 'home' && !path.includes('case-studies')) a.classList.add('active');
    });
  });
})();
