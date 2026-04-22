// ABRO 2026 ComplianceMapper — Application Logic

(function() {
  'use strict';

  // State
  const state = {
    selectedFrameworks: JSON.parse(localStorage.getItem('abro_frameworks') || '[]'),
    filterChapter: 'all',
    filterTBB: 'all',
    filterCoverage: 'all',
    filterFramework: 'all',
    searchQuery: '',
    expandedRows: new Set(),
    currentView: 'dashboard',
    refFramework: 'iso27002',
    refSearch: ''
  };

  // Framework definitions
  const FRAMEWORKS = {
    iso27001: { id: 'iso27001', name: 'ISO 27001:2022', short: 'ISO', color: 'var(--fw-iso)' },
    iso27002: { id: 'iso27002', name: 'ISO 27002:2022', short: '27002', color: 'var(--fw-27002)' },
    nist: { id: 'nist', name: 'NIST CSF 2.0', short: 'NIST', color: 'var(--fw-nist)' },
    bio: { id: 'bio', name: 'BIO 2.0', short: 'BIO', color: 'var(--fw-bio)' },
    ccm: { id: 'ccm', name: 'CSA CCM v4', short: 'CCM', color: 'var(--fw-ccm)' },
    abdo: { id: 'abdo', name: 'ABDO 2019', short: 'ABDO', color: 'var(--fw-abdo)' },
    iso45001: { id: 'iso45001', name: 'ISO 45001', short: '45001', color: 'var(--fw-45001)' },
    jscu: { id: 'jscu', name: 'JSCU Logging Essentials', short: 'JSCU', color: 'var(--fw-jscu)' },
    fysiek: { id: 'fysiek', name: 'Fysieke Normen', short: 'FYS', color: 'var(--fw-fys)' },
    personeel: { id: 'personeel', name: 'Wpbr/Screening', short: 'PERS', color: 'var(--fw-pers)' },
    fysiek: { id: 'fysiek', name: 'Fysieke Normen', short: 'FYS', color: 'var(--fw-fys)' },
    personeel: { id: 'personeel', name: 'Personeel Normen', short: 'PERS', color: 'var(--fw-pers)' }
  };

  // Init
  document.addEventListener('DOMContentLoaded', () => {
    loadState();
    setupEventListeners();
    render();
  });

  function loadState() {
    const saved = localStorage.getItem('abro_state');
    if (saved) {
      try {
        const s = JSON.parse(saved);
        state.selectedFrameworks = s.selectedFrameworks || [];
      } catch(e) {}
    }
  }

  function saveState() {
    localStorage.setItem('abro_state', JSON.stringify({
      selectedFrameworks: state.selectedFrameworks
    }));
  }

  function setupEventListeners() {
    // Navigation — support chapter-specific navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        state.currentView = btn.dataset.view;
        if (btn.dataset.chapter) {
          state.filterChapter = btn.dataset.chapter;
          const chSelect = document.getElementById('filterChapter');
          if (chSelect) chSelect.value = btn.dataset.chapter;
        }
        render();
      });
    });

    // Chapter cards on dashboard
    document.querySelectorAll('.chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        const ch = card.dataset.goto;
        state.currentView = 'requirements';
        state.filterChapter = ch;
        const chSelect = document.getElementById('filterChapter');
        if (chSelect) chSelect.value = ch;
        render();
      });
    });

    // Print gaps + dedicated Export PDF button
    const printGapsBtn = document.getElementById('printGaps');
    if (printGapsBtn) printGapsBtn.addEventListener('click', () => triggerPrint('Gap Analyse'));
    const exportPdfGapsBtn = document.getElementById('exportPdfGaps');
    if (exportPdfGapsBtn) exportPdfGapsBtn.addEventListener('click', () => triggerPrint('Gap Analyse'));
    const exportPdfReqBtn = document.getElementById('exportPdfReq');
    if (exportPdfReqBtn) exportPdfReqBtn.addEventListener('click', () => triggerPrint('ABRO Eisen'));

    // Framework checkboxes — immediately update dashboard
    document.querySelectorAll('.fw-check').forEach(cb => {
      cb.addEventListener('change', () => {
        const fw = cb.dataset.fw;
        if (cb.checked && !state.selectedFrameworks.includes(fw)) {
          state.selectedFrameworks.push(fw);
        } else if (!cb.checked) {
          state.selectedFrameworks = state.selectedFrameworks.filter(f => f !== fw);
        }
        saveState();
        render();
      });
    });

    // Filters — real-time on change
    document.getElementById('filterChapter').addEventListener('change', e => {
      state.filterChapter = e.target.value;
      renderRequirements();
    });
    document.getElementById('filterTBB').addEventListener('change', e => {
      state.filterTBB = e.target.value;
      renderRequirements();
    });
    document.getElementById('filterCoverage').addEventListener('change', e => {
      state.filterCoverage = e.target.value;
      renderRequirements();
    });
    document.getElementById('filterFramework').addEventListener('change', e => {
      state.filterFramework = e.target.value;
      renderRequirements();
    });
    document.getElementById('searchBox').addEventListener('input', e => {
      state.searchQuery = e.target.value.toLowerCase();
      renderRequirements();
    });

    // Reference view controls
    const refFwSelect = document.getElementById('refFrameworkSelect');
    if (refFwSelect) refFwSelect.addEventListener('change', e => {
      state.refFramework = e.target.value;
      renderReference();
    });
    const refSearch = document.getElementById('refSearchBox');
    if (refSearch) refSearch.addEventListener('input', e => {
      state.refSearch = e.target.value.toLowerCase();
      renderReference();
    });

    // JSCU search
    const jscuSearch = document.getElementById('jscuSearch');
    if (jscuSearch) jscuSearch.addEventListener('input', e => {
      state.jscuSearch = e.target.value.toLowerCase();
      renderJSCU();
    });

    // Export CSV
    const csvBtn = document.getElementById('exportCsv');
    if (csvBtn) csvBtn.addEventListener('click', exportCsv);

    // Export Excel
    const xlsxBtn = document.getElementById('exportXlsx');
    if (xlsxBtn) xlsxBtn.addEventListener('click', exportXlsx);

    // Print
    const printBtn = document.getElementById('printView');
    if (printBtn) printBtn.addEventListener('click', () => triggerPrint('ABRO Eisen'));
  }

  function triggerPrint(label) {
    try {
      const d = new Date();
      const ds = d.toLocaleDateString('nl-NL') + ' ' + d.toLocaleTimeString('nl-NL', {hour:'2-digit',minute:'2-digit'});
      document.body.setAttribute('data-print-date', ds);
      if (label) document.body.setAttribute('data-print-label', label);
    } catch(e) {}
    window.print();
  }

  function getFilteredRequirements() {
    return ABRO_REQUIREMENTS.filter(req => {
      if (state.filterChapter !== 'all' && req.chapter !== parseInt(state.filterChapter)) return false;
      if (state.filterTBB !== 'all' && !req.tbb.includes(parseInt(state.filterTBB))) return false;
      if (state.searchQuery) {
        // NAVO/EU equivalent mapping voor zoeken
        const natoMap = {
          'nato restricted': [4], 'eu restricted': [4], 'restricted': [4],
          'nato confidential': [3], 'eu confidential': [3], 'confidential': [3],
          'nato secret': [2], 'eu secret': [2], 'secret': [2],
          'cosmic top secret': [1], 'eu top secret': [1], 'top secret': [1], 'zeer geheim': [1],
          'geheim': [2], 'confidentieel': [3], 'vertrouwelijk': [4],
          'vgb a': [1], 'vgb b': [2], 'vgb c': [3], 'vog': [4]
        };
        const q = state.searchQuery;
        const natoTBBs = natoMap[q];
        if (natoTBBs) {
          if (!natoTBBs.some(t => req.tbb.includes(t))) return false;
        } else {
          // Zoek ook in framework controls en notes
          let found = req.description.toLowerCase().includes(q) || req.id.toLowerCase().includes(q);
          if (!found) {
            for (const fwId of Object.keys(FRAMEWORKS)) {
              const m = req[fwId];
              if (m) {
                const ctrls = Array.isArray(m.controls) ? m.controls.join(' ') : (m.controls || '');
                if (ctrls.toLowerCase().includes(q) || (m.note || '').toLowerCase().includes(q)) { found = true; break; }
              }
            }
          }
          if (!found) return false;
        }
      }

      if (state.filterCoverage !== 'all') {
        const fw = state.filterFramework !== 'all' ? state.filterFramework : null;
        const coverage = getEffectiveCoverage(req, fw);
        if (state.filterCoverage !== coverage) return false;
      }

      return true;
    });
  }

  function getEffectiveCoverage(req, specificFw) {
    if (specificFw) {
      return req[specificFw] ? req[specificFw].coverage : 'none';
    }
    // Als geen certificering is geselecteerd → geen vergelijking (unset)
    if (state.selectedFrameworks.length === 0) return 'unset';
    let best = 'none';
    for (const fw of state.selectedFrameworks) {
      if (req[fw]) {
        if (req[fw].coverage === 'full') return 'full';
        if (req[fw].coverage === 'partial') best = 'partial';
      }
    }
    return best;
  }

  function getCoverageClass(coverage) {
    return coverage === 'full' ? 'cov-full' : coverage === 'partial' ? 'cov-partial' : 'cov-none';
  }

  function getCoverageLabel(coverage) {
    return coverage === 'full' ? 'Volledig' : coverage === 'partial' ? 'Deels' : 'Gap';
  }

  function getCoverageIcon(coverage) {
    return coverage === 'full' ? '\u2714' : coverage === 'partial' ? '\u25D0' : '\u2716';
  }

  // Statistics
  function calcStats() {
    const reqs = ABRO_REQUIREMENTS;
    const total = reqs.length;
    const stats = { total, full: 0, partial: 0, none: 0, unset: 0, byChapter: {}, byFramework: {} };

    for (const fw of Object.keys(FRAMEWORKS)) {
      stats.byFramework[fw] = { full: 0, partial: 0, none: 0, total };
      for (const req of reqs) {
        const cov = req[fw] ? req[fw].coverage : 'none';
        stats.byFramework[fw][cov]++;
      }
    }

    for (const req of reqs) {
      const cov = getEffectiveCoverage(req, null);
      stats[cov] = (stats[cov] || 0) + 1;

      if (!stats.byChapter[req.chapter]) stats.byChapter[req.chapter] = { full: 0, partial: 0, none: 0, unset: 0, total: 0 };
      stats.byChapter[req.chapter].total++;
      stats.byChapter[req.chapter][cov] = (stats.byChapter[req.chapter][cov] || 0) + 1;
    }

    return stats;
  }

  // Render functions
  function render() {
    document.querySelectorAll('.nav-item').forEach(btn => {
      const isActive = btn.dataset.view === state.currentView &&
        (!btn.dataset.chapter || btn.dataset.chapter === state.filterChapter);
      btn.classList.toggle('active', isActive);
    });

    document.querySelectorAll('.fw-check').forEach(cb => {
      cb.checked = state.selectedFrameworks.includes(cb.dataset.fw);
    });

    console.log('render() currentView:', state.currentView);
    const allViews = document.querySelectorAll('.view');
    console.log('Found views:', [...allViews].map(v => v.id));
    allViews.forEach(v => {
      const shouldBeActive = v.id === state.currentView;
      v.classList.toggle('active', shouldBeActive);
      if (shouldBeActive) console.log('Activating view:', v.id);
    });

    if (state.currentView === 'dashboard') renderDashboard();
    else if (state.currentView === 'requirements') renderRequirements();
    else if (state.currentView === 'gaps') renderGaps();
    else if (state.currentView === 'reference') renderReference();
    else if (state.currentView === 'jscu') renderJSCU();
  }

  function renderDashboard() {
    const stats = calcStats();
    const coveragePct = stats.total > 0 ? Math.round(((stats.full + stats.partial * 0.5) / stats.total) * 100) : 0;

    const noSel = state.selectedFrameworks.length === 0;
    document.getElementById('statTotal').textContent = stats.total;
    document.getElementById('statFull').textContent = noSel ? '—' : stats.full;
    document.getElementById('statPartial').textContent = noSel ? '—' : stats.partial;
    document.getElementById('statGaps').textContent = noSel ? '—' : stats.none;
    document.getElementById('statCoverage').textContent = noSel ? '—' : coveragePct + '%';
    document.getElementById('statSelected').textContent = noSel
      ? 'Selecteer een certificering hierboven'
      : state.selectedFrameworks.map(f => FRAMEWORKS[f].short).join(', ');

    let fwHtml = '';
    for (const fwId of Object.keys(FRAMEWORKS)) {
      const fw = FRAMEWORKS[fwId];
      const s = stats.byFramework[fwId];
      const pct = s.total > 0 ? Math.round(((s.full + s.partial * 0.5) / s.total) * 100) : 0;
      const isSelected = state.selectedFrameworks.includes(fwId);
      fwHtml += `
        <div class="fw-compare-card ${isSelected ? 'selected' : ''}">
          <div class="fw-compare-header" style="border-color:${fw.color}">
            <span class="fw-compare-name">${fw.name}</span>
            <span class="fw-compare-pct" style="color:${fw.color}">${pct}%</span>
          </div>
          <div class="fw-compare-bar">
            <div class="bar-fill bar-full" style="width:${(s.full/s.total*100).toFixed(1)}%"></div>
            <div class="bar-fill bar-partial" style="width:${(s.partial/s.total*100).toFixed(1)}%"></div>
          </div>
          <div class="fw-compare-nums">
            <span class="cov-full">${s.full} volledig</span>
            <span class="cov-partial">${s.partial} deels</span>
            <span class="cov-none">${s.none} gaps</span>
          </div>
        </div>`;
    }
    document.getElementById('fwComparison').innerHTML = fwHtml;

    const noSelection = state.selectedFrameworks.length === 0;
    // Update chapter cards on dashboard
    for (let c = 1; c <= 5; c++) {
      const ch = stats.byChapter[c];
      if (!ch) continue;
      const pct = ch.total > 0 ? Math.round(((ch.full + ch.partial * 0.5) / ch.total) * 100) : 0;
      const cardEl = document.getElementById('chCard' + c);
      if (cardEl) cardEl.textContent = ch.total + ' eisen';
      const barEl = document.getElementById('chBar' + c);
      const statsEl = document.getElementById('chStats' + c);
      if (noSelection) {
        if (barEl) barEl.innerHTML = '';
        if (statsEl) statsEl.innerHTML = `<span style="color:var(--text-muted);font-style:italic">Selecteer een certificering om vergelijking te zien</span>`;
      } else {
        if (barEl) barEl.innerHTML = `<div class="bar-fill bar-full" style="width:${(ch.full/ch.total*100).toFixed(1)}%"></div><div class="bar-fill bar-partial" style="width:${(ch.partial/ch.total*100).toFixed(1)}%"></div>`;
        if (statsEl) statsEl.innerHTML = `<span class="cov-full">${ch.full} volledig</span><span class="cov-partial">${ch.partial} deels</span><span class="cov-none">${ch.none} gaps</span><span style="margin-left:auto;font-weight:600">${pct}%</span>`;
      }
    }

    // Update nav counts
    for (let c = 1; c <= 5; c++) {
      const ch = stats.byChapter[c];
      const navEl = document.getElementById('navCount' + c);
      if (navEl && ch) navEl.textContent = ch.total;
    }
    const navAll = document.getElementById('navCountAll');
    if (navAll) navAll.textContent = stats.total;
  }

  function renderRequirements() {
    const reqs = getFilteredRequirements();
    const container = document.getElementById('reqTableBody');

    // Update title based on chapter filter
    const titleEl = document.getElementById('reqViewTitle');
    const subEl = document.getElementById('reqViewSub');
    if (titleEl) {
      if (state.filterChapter !== 'all') {
        const ch = ABRO_CHAPTERS[parseInt(state.filterChapter)];
        titleEl.textContent = 'H' + state.filterChapter + ': ' + (ch ? ch.name : '');
        subEl.textContent = 'Eisen met framework-mapping';
      } else {
        titleEl.textContent = 'Alle ABRO 2026 Eisen';
        subEl.textContent = '445 eisen met framework-mapping';
      }
    }

    if (reqs.length === 0) {
      container.innerHTML = '<tr><td colspan="5" class="empty-state">Geen eisen gevonden met de huidige filters</td></tr>';
      document.getElementById('reqCount').textContent = '0';
      return;
    }

    document.getElementById('reqCount').textContent = reqs.length;

    let html = '';
    let currentSection = '';

    for (const req of reqs) {
      if (req.section !== currentSection) {
        currentSection = req.section;
        html += `<tr class="section-header-row">
          <td colspan="5">${req.section} — ${ABRO_SECTIONS[req.section] || ''}</td>
        </tr>`;
      }

      const isExpanded = state.expandedRows.has(req.id);

      let fwBadges = '';
      for (const fwId of Object.keys(FRAMEWORKS)) {
        const fw = FRAMEWORKS[fwId];
        const mapping = req[fwId];
        const cov = mapping ? mapping.coverage : 'none';
        fwBadges += `<span class="mapping-badge ${getCoverageClass(cov)}" title="${mapping ? mapping.note : 'Geen mapping'}">${getCoverageIcon(cov)} ${fw.short}</span>`;
      }

      const tbbBadges = req.tbb.map(t => `<span class="tbb-badge tbb-${t}">TBB${t}</span>`).join('');
      const effCov = getEffectiveCoverage(req, state.filterFramework !== 'all' ? state.filterFramework : null);

      html += `<tr class="req-row ${getCoverageClass(effCov)}-row" data-id="${req.id}">
        <td class="req-id-cell">
          <button class="expand-btn" data-id="${req.id}">${isExpanded ? '\u25BC' : '\u25B6'}</button>
          <span class="req-id">${req.id}</span>
        </td>
        <td class="req-desc-cell">${truncate(req.description, 150)}</td>
        <td class="req-tbb-cell">${tbbBadges}</td>
        <td class="req-cov-cell"><span class="cov-badge ${getCoverageClass(effCov)}">${getCoverageLabel(effCov)}</span></td>
        <td class="req-fw-cell">${fwBadges}</td>
      </tr>`;

      if (isExpanded) {
        const note = getNotes(req.id);
        html += `<tr class="detail-row"><td colspan="5">
          <div class="detail-content">
            <div class="detail-desc"><strong>Volledige eis:</strong><br>${req.description}</div>
            <div class="detail-mappings">
              ${Object.keys(FRAMEWORKS).map(fwId => renderDetailMapping(req, fwId)).join('')}
            </div>
            <div class="detail-notes">
              <strong>Notities:</strong>
              <textarea class="note-field" data-req="${req.id}" placeholder="Voeg hier uw opmerkingen toe...">${note}</textarea>
            </div>
          </div>
        </td></tr>`;
      }
    }

    container.innerHTML = html;

    // Click on row to expand/collapse
    container.querySelectorAll('.req-row').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('.expand-btn')) return;
        const id = row.dataset.id;
        if (state.expandedRows.has(id)) state.expandedRows.delete(id);
        else state.expandedRows.add(id);
        renderRequirements();
      });
    });

    container.querySelectorAll('.note-field').forEach(textarea => {
      textarea.addEventListener('input', (e) => {
        saveNote(e.target.dataset.req, e.target.value);
      });
    });

    container.querySelectorAll('.expand-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        if (state.expandedRows.has(id)) state.expandedRows.delete(id);
        else state.expandedRows.add(id);
        renderRequirements();
      });
    });
  }

  function renderDetailMapping(req, fwId) {
    const fw = FRAMEWORKS[fwId];
    const m = req[fwId];
    if (!m) return '';
    return `<div class="detail-fw-block">
      <div class="detail-fw-name" style="color:${fw.color}">${fw.name}</div>
      <div class="detail-fw-controls"><strong>Controls:</strong> ${Array.isArray(m.controls) ? (m.controls.length ? m.controls.join(', ') : 'Geen') : (m.controls || 'Geen')}</div>
      <div class="detail-fw-coverage"><strong>Dekking:</strong> <span class="${getCoverageClass(m.coverage)}">${getCoverageLabel(m.coverage)}</span></div>
      <div class="detail-fw-note">${m.note}</div>
    </div>`;
  }

  function renderGaps() {
    const gaps = ABRO_REQUIREMENTS.filter(req => {
      const cov = getEffectiveCoverage(req, state.filterFramework !== 'all' ? state.filterFramework : null);
      return cov === 'none';
    });

    document.getElementById('gapCount').textContent = gaps.length;

    let html = '';
    let currentChapter = 0;

    for (const req of gaps) {
      if (req.chapter !== currentChapter) {
        currentChapter = req.chapter;
        html += `<div class="gap-chapter-header">${ABRO_CHAPTERS[currentChapter].icon} H${currentChapter}: ${ABRO_CHAPTERS[currentChapter].name}</div>`;
      }
      const tbbBadges = req.tbb.map(t => `<span class="tbb-badge tbb-${t}">TBB${t}</span>`).join('');
      html += `<div class="gap-card">
        <div class="gap-card-header">
          <span class="req-id">${req.id}</span>
          <span class="gap-section">${ABRO_SECTIONS[req.section] || req.section}</span>
          ${tbbBadges}
        </div>
        <div class="gap-card-desc">${req.description}</div>
        <div class="gap-card-notes">
          ${Object.keys(FRAMEWORKS).map(fwId => {
            const m = req[fwId];
            return m && m.note ? `<div class="gap-note"><span style="color:${FRAMEWORKS[fwId].color}">${FRAMEWORKS[fwId].short}:</span> ${m.note}</div>` : '';
          }).join('')}
        </div>
      </div>`;
    }

    if (gaps.length === 0) {
      html = '<div class="empty-state">Geen gaps gevonden — alle eisen worden (deels) gedekt door de geselecteerde frameworks.</div>';
    }

    document.getElementById('gapsList').innerHTML = html;
  }

  // Reference view
  function renderReference() {
    if (typeof FRAMEWORK_REFERENCES === 'undefined') {
      document.getElementById('refContent').innerHTML = '<div class="empty-state">Framework referentiedata niet geladen. Controleer of frameworks-ref.js correct is opgenomen.</div>';
      return;
    }

    const fwKey = state.refFramework;
    const fw = FRAMEWORK_REFERENCES[fwKey];
    if (!fw) {
      document.getElementById('refContent').innerHTML = '<div class="empty-state">Onbekend framework geselecteerd.</div>';
      return;
    }

    const search = state.refSearch;
    const controls = fw.controls.filter(c => {
      if (!search) return true;
      return c.id.toLowerCase().includes(search) ||
        c.name.toLowerCase().includes(search) ||
        c.summary.toLowerCase().includes(search) ||
        (c.theme && c.theme.toLowerCase().includes(search)) ||
        (c.domain && c.domain.toLowerCase().includes(search)) ||
        (c.function && c.function.toLowerCase().includes(search)) ||
        (c.category && c.category.toLowerCase().includes(search));
    });

    document.getElementById('refCount').textContent = controls.length;

    // Build reverse lookup: which ABRO requirements reference each control
    const reverseLookup = buildReverseLookup(fwKey);

    // Group controls by theme/domain/function
    const groupKey = fwKey === 'nist' ? 'function' :
                     fwKey === 'ccm' ? 'domain' :
                     fwKey === 'iso45001' ? null : 'theme';

    let groups = {};
    for (const c of controls) {
      let gName;
      if (fwKey === 'iso45001') {
        // Group by clause number prefix
        const prefix = c.id.split('.')[0];
        const themeObj = fw.themes.find(t => t.name.includes('(' + prefix + ')'));
        gName = themeObj ? themeObj.name : 'Overig';
      } else {
        gName = c[groupKey] || 'Overig';
      }
      if (!groups[gName]) groups[gName] = [];
      groups[gName].push(c);
    }

    let html = '';
    html += `<div class="ref-fw-header">
      <div class="ref-fw-title">${fw.name}</div>
      <div class="ref-fw-desc">${fw.description}</div>
      <div class="ref-fw-themes">
        ${fw.themes.map(t => `<span class="ref-theme-badge">${t.name} <strong>${t.count || ''}</strong></span>`).join('')}
      </div>
    </div>`;

    for (const [groupName, groupControls] of Object.entries(groups)) {
      html += `<div class="ref-group">
        <div class="ref-group-header">${groupName} <span class="ref-group-count">${groupControls.length} controls</span></div>
        <div class="ref-cards">`;

      for (const c of groupControls) {
        const abroRefs = reverseLookup[c.id] || [];
        const abroHtml = abroRefs.length > 0
          ? `<div class="ref-abro-refs"><span class="ref-abro-label">ABRO-eisen:</span> ${abroRefs.map(r => `<span class="ref-abro-badge">${r}</span>`).join(' ')}</div>`
          : '';

        html += `<div class="ref-card">
          <div class="ref-card-header">
            <span class="ref-card-id">${c.id}</span>
            <span class="ref-card-name">${c.name || c.name_nl || ''}</span>
          </div>
          <div class="ref-card-summary">${c.summary || c.summary_nl || ''}</div>
          ${abroHtml}
        </div>`;
      }

      html += '</div></div>';
    }

    if (controls.length === 0) {
      html += '<div class="empty-state">Geen controls gevonden met de huidige zoekterm.</div>';
    }

    document.getElementById('refContent').innerHTML = html;
  }

  function buildReverseLookup(fwKey) {
    const lookup = {};
    // Map framework keys used in ABRO data
    const abroFwKey = fwKey === 'iso27002' ? 'iso27002' : fwKey;

    for (const req of ABRO_REQUIREMENTS) {
      const mapping = req[abroFwKey];
      if (!mapping || !mapping.controls) continue;
      for (const ctrl of mapping.controls) {
        // Normalize control ID for matching
        let normalizedCtrl = ctrl;
        // For ISO 27002, the ABRO data uses "5.1 Informatiebeveiligingsbeleid" format
        if (fwKey === 'iso27002') {
          const match = ctrl.match(/^(\d+\.\d+)/);
          if (match) normalizedCtrl = match[1];
        }
        if (!lookup[normalizedCtrl]) lookup[normalizedCtrl] = [];
        if (!lookup[normalizedCtrl].includes(req.id)) {
          lookup[normalizedCtrl].push(req.id);
        }
      }
    }
    return lookup;
  }

  // JSCU Logging view
  function renderJSCU() {
    console.log('renderJSCU called');
    console.log('JSCU_EVENTS defined:', typeof JSCU_EVENTS !== 'undefined');
    if (typeof JSCU_EVENTS !== 'undefined') console.log('JSCU_EVENTS count:', JSCU_EVENTS.length);
    const search = (state.jscuSearch || '').toLowerCase();
    let html = '';

    html += `<div class="tbb-info-bar" style="margin-bottom:20px">
      <div class="tbb-info-items" style="grid-template-columns:repeat(4,1fr)">
        <div class="tbb-info-item" style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15)">
          <strong style="color:var(--fw-jscu)">194</strong><span>Event IDs</span>
        </div>
        <div class="tbb-info-item" style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15)">
          <strong style="color:var(--fw-jscu)">16</strong><span>Categorieën</span>
        </div>
        <div class="tbb-info-item" style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15)">
          <strong style="color:var(--fw-jscu)">Win 10+</strong><span>Minimaal OS</span>
        </div>
        <div class="tbb-info-item" style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15)">
          <strong style="color:var(--fw-jscu)">6 mnd</strong><span>Retentie</span>
        </div>
      </div>
    </div>`;

    // Full event ID table
    if (typeof JSCU_EVENTS !== 'undefined') {
      const filteredEvents = JSCU_EVENTS.filter(ev => {
        if (!search) return true;
        return ev.event_id.includes(search) ||
          ev.category.toLowerCase().includes(search) ||
          ev.subcategory.toLowerCase().includes(search) ||
          ev.notes.toLowerCase().includes(search) ||
          ev.channel.toLowerCase().includes(search) ||
          ev.provider.toLowerCase().includes(search);
      });

      html += `<div class="section-title" style="margin-top:32px">Alle Event IDs (${filteredEvents.length} van 194)</div>`;
      html += `<div class="req-table-wrap" style="padding:0">
        <table class="req-table">
          <thead><tr>
            <th style="width:70px">Event ID</th>
            <th>Beschrijving</th>
            <th style="width:140px">Categorie</th>
            <th style="width:80px">Channel</th>
            <th style="width:80px">Level</th>
          </tr></thead><tbody>`;

      let currentCat = '';
      for (const ev of filteredEvents) {
        if (ev.category !== currentCat) {
          currentCat = ev.category;
          html += `<tr class="section-header-row"><td colspan="5">${currentCat}</td></tr>`;
        }
        html += `<tr class="req-row" style="cursor:default">
          <td><span class="req-id" style="color:var(--fw-jscu)">${ev.event_id}</span></td>
          <td class="req-desc-cell"><strong>${ev.subcategory}</strong><br><span style="color:var(--text-muted);font-size:11px">${ev.notes}</span>${ev.gpo ? `<br><span style="color:var(--text-muted);font-size:10px;font-family:var(--font-mono)">GPO: ${ev.gpo.substring(0,80)}${ev.gpo.length > 80 ? '...' : ''}</span>` : ''}</td>
          <td><span style="font-size:11px">${ev.category}</span></td>
          <td><span class="tbb-badge tbb-4" style="font-size:10px">${ev.channel}</span></td>
          <td><span style="font-size:11px">${ev.level}</span></td>
        </tr>`;
      }

      html += '</tbody></table></div>';
    }

    if (typeof JSCU_EVENTS === 'undefined' || JSCU_EVENTS.length === 0) {
      html += '<div class="empty-state">JSCU event data niet geladen. Controleer of abro-data.js JSCU_EVENTS bevat.</div>';
    }

    const jscuCountEl = document.getElementById('jscuCount');
    if (jscuCountEl && typeof JSCU_EVENTS !== 'undefined') {
      const total = JSCU_EVENTS.filter(ev => {
        if (!search) return true;
        return ev.event_id.includes(search) || ev.category.toLowerCase().includes(search) ||
          ev.subcategory.toLowerCase().includes(search) || ev.notes.toLowerCase().includes(search);
      }).length;
      jscuCountEl.textContent = total;
    }

    document.getElementById('jscuContent').innerHTML = html;
  }

  // Notities per eis (localStorage)
  const NOTES_KEY = 'fnc_abro_notes';

  function getAllNotes() {
    try { return JSON.parse(localStorage.getItem(NOTES_KEY) || '{}'); }
    catch(e) { return {}; }
  }

  function getNotes(reqId) {
    return getAllNotes()[reqId] || '';
  }

  function saveNote(reqId, text) {
    const notes = getAllNotes();
    if (text.trim()) { notes[reqId] = text; }
    else { delete notes[reqId]; }
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }

  // Export CSV
  function exportCsv() {
    const reqs = getFilteredRequirements();
    const fwIds = Object.keys(FRAMEWORKS);
    const header = ['ID','Sectie','Hoofdstuk','Beschrijving','TBB','Notities'];
    for (const fwId of fwIds) {
      const name = FRAMEWORKS[fwId].name;
      header.push(`${name} Dekking`, `${name} Controls`, `${name} Note`);
    }
    const rows = [header];

    for (const req of reqs) {
      const row = [
        req.id,
        req.section,
        req.chapter,
        '"' + req.description.replace(/"/g, '""') + '"',
        req.tbb.join('/'),
        '"' + getNotes(req.id).replace(/"/g, '""') + '"'
      ];
      for (const fwId of fwIds) {
        const m = req[fwId] || {};
        const ctrls = Array.isArray(m.controls) ? m.controls.join('; ') : (m.controls || '');
        row.push(m.coverage || 'none', ctrls, '"' + (m.note || '').replace(/"/g, '""') + '"');
      }
      rows.push(row);
    }

    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'abro2026_compliance_' + new Date().toISOString().slice(0,10) + '.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  function exportXlsx() {
    if (typeof XLSX === 'undefined') { alert('Excel library niet geladen.'); return; }
    const reqs = getFilteredRequirements();
    const fwIds = Object.keys(FRAMEWORKS);
    const header = ['ID','Sectie','Hoofdstuk','Beschrijving','TBB','Notities'];
    for (const fwId of fwIds) {
      const name = FRAMEWORKS[fwId].name;
      header.push(`${name} Dekking`, `${name} Controls`, `${name} Note`);
    }
    const data = [header];
    for (const req of reqs) {
      const row = [req.id, req.section, req.chapter, req.description, req.tbb.join('/'), getNotes(req.id)];
      for (const fwId of fwIds) {
        const m = req[fwId] || {};
        const ctrls = Array.isArray(m.controls) ? m.controls.join('; ') : (m.controls || '');
        row.push(m.coverage || 'none', ctrls, m.note || '');
      }
      data.push(row);
    }
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);
    // Kolombreedtes
    const widths = [{wch:10},{wch:10},{wch:8},{wch:60},{wch:14},{wch:30}];
    for (let i = 0; i < fwIds.length; i++) widths.push({wch:12},{wch:24},{wch:30});
    ws['!cols'] = widths;
    XLSX.utils.book_append_sheet(wb, ws, 'ABRO 2026');
    XLSX.writeFile(wb, 'abro2026_compliance_' + new Date().toISOString().slice(0,10) + '.xlsx');
  }

  function truncate(str, len) {
    return str.length > len ? str.substring(0, len) + '...' : str;
  }

})();
