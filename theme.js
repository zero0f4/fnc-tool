// FNC Tool — Dark / Light theme toggle
// Loaded BEFORE styles render so saved theme applies without flash.
(function() {
  var saved = localStorage.getItem('fnc_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  function setToggleIcon(el, theme) {
    // If FNCIcons is available, render SVG; otherwise fall back to Unicode glyphs
    var iconName = theme === 'dark' ? 'theme-light' : 'theme-dark';
    if (window.FNCIcons && typeof window.FNCIcons.svg === 'function') {
      el.innerHTML = window.FNCIcons.svg(iconName, 14);
      el.setAttribute('data-icon', iconName);
    } else {
      el.textContent = theme === 'dark' ? '\u2600' : '\u263E';
    }
  }

  window.toggleTheme = function() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('fnc_theme', next);
    document.querySelectorAll('.theme-toggle-label').forEach(function(el){
      el.textContent = next === 'dark' ? 'Licht thema' : 'Donker thema';
    });
    document.querySelectorAll('.theme-toggle-icon').forEach(function(el){
      setToggleIcon(el, next);
    });
  };

  // After DOM ready, sync labels with current theme
  document.addEventListener('DOMContentLoaded', function() {
    var cur = document.documentElement.getAttribute('data-theme') || 'light';
    document.querySelectorAll('.theme-toggle-label').forEach(function(el){
      el.textContent = cur === 'dark' ? 'Licht thema' : 'Donker thema';
    });
    document.querySelectorAll('.theme-toggle-icon').forEach(function(el){
      setToggleIcon(el, cur);
    });
  });

  // Set print date attribute right before print so the @page footer shows it
  function setPrintDate() {
    try {
      var d = new Date();
      var ds = d.toLocaleDateString('nl-NL') + ' ' + d.toLocaleTimeString('nl-NL', {hour:'2-digit',minute:'2-digit'});
      if (document.body) document.body.setAttribute('data-print-date', ds);
    } catch(e) {}
  }
  window.addEventListener('beforeprint', setPrintDate);
  // Also when DOM ready set a default
  document.addEventListener('DOMContentLoaded', setPrintDate);
})();
