// FNC Tool — Global Search
// Searches across ABRO requirements, JSCU events, framework controls and pages.
// Loaded after data files (abro-data.js, jscu-events.js, frameworks-ref.js where available).
(function() {
  'use strict';

  var PAGES = [
    { url: 'home.html',    title: 'Homepagina',           desc: 'Startpunt FNC Tool met overzicht van alle modules.' },
    { url: 'index.html',   title: 'ABRO 2026 Eisen',      desc: '445 eisen verdeeld over 5 hoofdstukken, mapping tegen 10 frameworks.' },
    { url: 'index.html#gaps', title: 'Gap Analyse',       desc: 'ABRO-eisen die niet gedekt worden door geselecteerde frameworks.' },
    { url: 'index.html#reference', title: 'Framework Referentie', desc: 'Kennisbank met alle controls en hun betekenis.' },
    { url: 'abdo.html',    title: 'ABDO 2019 Vergelijking', desc: 'Wat is er veranderd ten opzichte van ABDO 2019?' },
    { url: 'jscu.html',    title: 'JSCU Logging Essentials', desc: '194 Windows Event IDs als baseline voor logging.' },
    { url: 'tbb.html',     title: 'TBB Stelsel',          desc: 'Te Beschermen Belangen, VGB-niveaus, NAVO/EU equivalenten.' },
    { url: 'tbb.html#toepassingen', title: 'Typen toepassingen', desc: 'Welke ABRO-eisen gelden voor uw situatie.' },
    { url: 'diamond.html', title: 'Kennisbank',           desc: 'Diamond Model, TBB Stelsel, NCSC-methode, Zero Trust.' },
    { url: 'bronnen.html', title: 'Bronnen & Referenties', desc: 'Alle gebruikte bronnen, normen en frameworks.' },
    { url: 'handleiding.html', title: 'Gebruikershandleiding', desc: 'Uitleg van alle functies: filters, gap-analyse, notities, export, PWA-installatie en FAQ.' }
  ];

  var FW_LABELS = {
    iso27002: { label: 'ISO 27002', cls: 'gs-iso' },
    nist:     { label: 'NIST CSF',  cls: 'gs-nist' },
    ccm:      { label: 'CSA CCM',   cls: 'gs-ccm' },
    bio:      { label: 'BIO 2.0',   cls: 'gs-bio' },
    iso45001: { label: 'ISO 45001', cls: 'gs-45001' },
    jscu:     { label: 'JSCU',      cls: 'gs-jscu' }
  };

  var index = null;

  function buildIndex() {
    if (index) return index;
    index = [];

    // ABRO requirements
    if (typeof ABRO_REQUIREMENTS !== 'undefined') {
      ABRO_REQUIREMENTS.forEach(function(r) {
        index.push({
          cat: 'ABRO',
          catCls: 'gs-abro',
          title: r.id + ' \u2014 ABRO 2026',
          snippet: (r.description || '').slice(0, 240),
          haystack: (r.id + ' ' + (r.description || '')).toLowerCase(),
          url: 'index.html?req=' + encodeURIComponent(r.id),
          score: 0
        });
      });
    }

    // JSCU events
    if (typeof JSCU_EVENTS !== 'undefined') {
      JSCU_EVENTS.forEach(function(ev) {
        var title = 'Event ' + ev.event_id + ' \u2014 ' + (ev.subcategory || ev.category || '');
        var snip = (ev.notes || '') + (ev.channel ? ' \u00B7 ' + ev.channel : '');
        index.push({
          cat: 'JSCU',
          catCls: 'gs-jscu',
          title: title,
          snippet: snip.slice(0, 240),
          haystack: (ev.event_id + ' ' + (ev.subcategory||'') + ' ' + (ev.category||'') + ' ' + (ev.notes||'') + ' ' + (ev.channel||'') + ' ' + (ev.provider||'')).toLowerCase(),
          url: 'jscu.html?q=' + encodeURIComponent(ev.event_id),
          score: 0
        });
      });
    }

    // Framework controls
    if (typeof FRAMEWORK_REFERENCES !== 'undefined') {
      Object.keys(FRAMEWORK_REFERENCES).forEach(function(fwKey) {
        var fw = FRAMEWORK_REFERENCES[fwKey];
        if (!fw || !fw.controls) return;
        var label = (FW_LABELS[fwKey] && FW_LABELS[fwKey].label) || (fw.name || fwKey);
        var cls   = (FW_LABELS[fwKey] && FW_LABELS[fwKey].cls)   || 'gs-iso';
        fw.controls.forEach(function(c) {
          var title = (c.id || '') + ' \u2014 ' + (c.name || '');
          var snip  = c.summary || '';
          index.push({
            cat: label,
            catCls: cls,
            title: title,
            snippet: snip.slice(0, 240),
            haystack: ((c.id||'') + ' ' + (c.name||'') + ' ' + (c.summary||'') + ' ' + (c.theme||'')).toLowerCase(),
            url: 'index.html?view=reference&fw=' + encodeURIComponent(fwKey) + '&q=' + encodeURIComponent(c.id || ''),
            score: 0
          });
        });
      });
    }

    // Pages
    PAGES.forEach(function(p) {
      index.push({
        cat: 'Pagina',
        catCls: 'gs-page',
        title: p.title,
        snippet: p.desc,
        haystack: (p.title + ' ' + p.desc).toLowerCase(),
        url: p.url,
        score: 0
      });
    });

    return index;
  }

  function search(query, limit) {
    limit = limit || 25;
    var idx = buildIndex();
    var q = (query || '').trim().toLowerCase();
    if (q.length < 2) return [];
    var terms = q.split(/\s+/).filter(Boolean);
    var results = [];
    for (var i = 0; i < idx.length; i++) {
      var item = idx[i];
      var allMatch = true;
      var score = 0;
      for (var t = 0; t < terms.length; t++) {
        var pos = item.haystack.indexOf(terms[t]);
        if (pos < 0) { allMatch = false; break; }
        // Score: earlier position is better; title hit boosts
        score += 100 - Math.min(pos, 99);
        if (item.title.toLowerCase().indexOf(terms[t]) >= 0) score += 50;
      }
      if (allMatch) {
        // Category boost: pages > ABRO > JSCU > controls
        if (item.cat === 'Pagina') score += 30;
        else if (item.cat === 'ABRO') score += 10;
        results.push({ item: item, score: score });
      }
    }
    results.sort(function(a, b) { return b.score - a.score; });
    return results.slice(0, limit).map(function(r) { return r.item; });
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  function highlight(text, terms) {
    var out = escapeHtml(text);
    terms.forEach(function(t) {
      if (!t) return;
      var safe = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      out = out.replace(new RegExp('(' + safe + ')', 'gi'), '<mark style="background:rgba(217,119,6,0.25);color:inherit;padding:0 1px;border-radius:2px">$1</mark>');
    });
    return out;
  }

  function render(input, results, query) {
    var dropdown = input.parentElement.querySelector('.global-search-results');
    if (!dropdown) return;
    if (!query || query.length < 2) {
      dropdown.classList.remove('open');
      dropdown.innerHTML = '';
      return;
    }
    if (!results.length) {
      dropdown.innerHTML = '<div class="gs-empty">Geen resultaten voor &ldquo;' + escapeHtml(query) + '&rdquo;</div>';
      dropdown.classList.add('open');
      return;
    }
    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    var grouped = {};
    var order = [];
    results.forEach(function(r) {
      if (!grouped[r.cat]) { grouped[r.cat] = []; order.push(r.cat); }
      grouped[r.cat].push(r);
    });
    var html = '';
    order.forEach(function(cat) {
      html += '<div class="gs-group-label">' + escapeHtml(cat) + ' (' + grouped[cat].length + ')</div>';
      grouped[cat].forEach(function(r) {
        html += '<a class="gs-result" href="' + escapeHtml(r.url) + '">' +
          '<span class="gs-cat ' + escapeHtml(r.catCls) + '">' + escapeHtml(r.cat) + '</span>' +
          '<span class="gs-title">' + highlight(r.title, terms) + '</span>' +
          (r.snippet ? '<div class="gs-snippet">' + highlight(r.snippet, terms) + '</div>' : '') +
          '</a>';
      });
    });
    dropdown.innerHTML = html;
    dropdown.classList.add('open');
  }

  function init() {
    var input = document.getElementById('globalSearch');
    if (!input) return;

    var debounce;
    input.addEventListener('input', function() {
      clearTimeout(debounce);
      var q = input.value;
      debounce = setTimeout(function() {
        var res = search(q);
        render(input, res, q);
      }, 80);
    });

    input.addEventListener('focus', function() {
      if (input.value.trim().length >= 2) {
        var res = search(input.value);
        render(input, res, input.value);
      }
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      var holder = input.closest('.global-search');
      if (!holder) return;
      if (!holder.contains(e.target)) {
        var dd = holder.querySelector('.global-search-results');
        if (dd) dd.classList.remove('open');
      }
    });

    // Keyboard nav
    input.addEventListener('keydown', function(e) {
      var dd = input.parentElement.querySelector('.global-search-results');
      if (!dd) return;
      var items = dd.querySelectorAll('.gs-result');
      if (!items.length) return;
      var current = dd.querySelector('.gs-result.active');
      var idx = -1;
      items.forEach(function(it, i) { if (it === current) idx = i; });

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        idx = (idx + 1) % items.length;
        items.forEach(function(it){ it.classList.remove('active'); });
        items[idx].classList.add('active');
        items[idx].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        idx = idx <= 0 ? items.length - 1 : idx - 1;
        items.forEach(function(it){ it.classList.remove('active'); });
        items[idx].classList.add('active');
        items[idx].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        if (current) { e.preventDefault(); window.location.href = current.getAttribute('href'); }
      } else if (e.key === 'Escape') {
        dd.classList.remove('open');
        input.blur();
      }
    });

    // Apply ?req=... or ?q=... when arriving on a page
    applyIncomingQuery();
  }

  function applyIncomingQuery() {
    try {
      var url = new URL(window.location.href);
      var req = url.searchParams.get('req');
      if (req) {
        // Switch SPA to the requirements view (index.html only)
        var navBtn = document.querySelector('.nav-item[data-view="requirements"][data-chapter="all"]') ||
                     document.querySelector('.nav-item[data-view="requirements"]');
        if (navBtn) navBtn.click();
        // Try to wire to ABRO requirements page search box
        var box = document.getElementById('searchBox');
        if (box) {
          box.value = req;
          box.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
      var q = url.searchParams.get('q');
      if (q) {
        var jscu = document.getElementById('searchInput') || document.getElementById('jscuSearch');
        if (jscu) {
          jscu.value = q;
          jscu.dispatchEvent(new Event('input', { bubbles: true }));
        }
        var refBox = document.getElementById('refSearchBox');
        if (refBox) {
          refBox.value = q;
          refBox.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
      var view = url.searchParams.get('view');
      if (view) {
        var navView = document.querySelector('.nav-item[data-view="' + view + '"]');
        if (navView) navView.click();
      }
      var fw = url.searchParams.get('fw');
      if (fw) {
        var sel = document.getElementById('refFrameworkSelect');
        if (sel) {
          sel.value = fw;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    } catch(e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
