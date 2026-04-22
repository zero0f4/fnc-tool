// FNC Tool — Inline SVG icons (Lucide/Feather style, outlined)
// All icons are 20x20 default, inherit color via currentColor
(function (root) {
  'use strict';

  var S = 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';
  function svg(w, paths, size) {
    size = size || 18;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" ' + S + ' aria-hidden="true" focusable="false">' + paths + '</svg>';
  }

  var ICONS = {
    // House
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
    // Checklist / clipboard list
    requirements: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 2h6v4H9z"/><path d="M9 11h6"/><path d="M9 15h6"/><path d="M9 19h3"/>',
    // Arrow left-right (compare)
    abdo: '<path d="M7 7 3 11l4 4"/><path d="M3 11h14"/><path d="M17 17l4-4-4-4"/><path d="M21 13H7"/>',
    // Shield with checkmark
    jscu: '<path d="M12 3 4 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3z"/><path d="m9 12 2 2 4-4"/>',
    // Lock
    tbb: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    // Clipboard
    toepassingen: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 2h6v4H9z"/>',
    // Alert triangle
    gaps: '<path d="M12 4 2 20h20L12 4z"/><path d="M12 10v4"/><circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none"/>',
    // Book open
    knowledge: '<path d="M2 5a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H3a1 1 0 0 1-1-1z"/><path d="M22 5a1 1 0 0 0-1-1h-6a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h6a1 1 0 0 0 1-1z"/>',
    // Library (stacked books)
    sources: '<path d="M4 4h3v16H4z"/><path d="M9 4h3v16H9z"/><path d="m14 4 3 .5 3 15.5-3 .5z" transform="rotate(-10 17 12)"/>',
    // Help circle / manual
    manual: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5"/><circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none"/>',
    // Sun
    'theme-light': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.9 19.1 1.4-1.4"/><path d="m17.7 6.3 1.4-1.4"/>',
    // Moon
    'theme-dark': '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    // Magnifier
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    // Hamburger
    menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
    // X
    close: '<path d="M6 6l12 12"/><path d="M18 6 6 18"/>',
    // File spreadsheet
    'export-csv': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8 13h8"/><path d="M8 17h8"/><path d="M12 13v4"/>',
    // File text
    'export-pdf': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8 13h8"/><path d="M8 17h5"/>',
    // Printer
    print: '<path d="M7 8V3h10v5"/><rect x="4" y="8" width="16" height="8" rx="1"/><path d="M7 16h10v5H7z"/><circle cx="17" cy="11" r="0.6" fill="currentColor" stroke="none"/>',
    // Arrow right
    'arrow-right': '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    // Arrow left (back)
    'arrow-left': '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
    // External (arrow up right)
    external: '<path d="M7 17 17 7"/><path d="M9 7h8v8"/>',
    // Chevron right (small, for breadcrumb / sub nav)
    'chevron-right': '<path d="m9 6 6 6-6 6"/>',
    // Download (for exports)
    download: '<path d="M12 4v12"/><path d="m7 11 5 5 5-5"/><path d="M5 20h14"/>',
    // Info (extra utility)
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="8" r="0.7" fill="currentColor" stroke="none"/>'
  };

  var FNCIcons = {
    svg: function (name, size) {
      var body = ICONS[name];
      if (!body) return '';
      return svg(null, body, size || 18);
    },
    raw: ICONS,
    // Replace all <i data-icon="name"> or <span data-icon="name"> in DOM
    hydrate: function (scope) {
      var root = scope || document;
      root.querySelectorAll('[data-icon]').forEach(function (el) {
        var name = el.getAttribute('data-icon');
        var size = parseInt(el.getAttribute('data-icon-size'), 10) || 18;
        if (!ICONS[name]) return;
        el.innerHTML = svg(null, ICONS[name], size);
      });
    }
  };

  root.FNCIcons = FNCIcons;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { FNCIcons.hydrate(); });
  } else {
    FNCIcons.hydrate();
  }
})(window);
