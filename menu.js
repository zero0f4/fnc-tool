// FNC ABRO — Mobile menu handler (works on iOS Safari)
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('menuBtn');
    var overlay = document.getElementById('menuOverlay');
    var sidebar = document.getElementById('sidebar');

    if (!btn || !overlay || !sidebar) return;

    function openMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      sidebar.classList.add('open');
      overlay.classList.add('open');
    }

    function closeMenu(e) {
      e.preventDefault();
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    }

    // Touch and click events for iOS compatibility
    btn.addEventListener('click', openMenu);
    btn.addEventListener('touchend', openMenu);
    overlay.addEventListener('click', closeMenu);
    overlay.addEventListener('touchend', closeMenu);

    // Close menu when a link in sidebar is clicked
    sidebar.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      });
    });
  });
})();
