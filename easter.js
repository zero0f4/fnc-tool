// FNC Tool — Easter Egg
// Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
(function() {
  const code = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let pos = 0;
  let typedBuffer = '';

  document.addEventListener('keydown', (e) => {
    // Konami code
    const key = e.key;
    if (key === code[pos] || key.toLowerCase() === code[pos]) {
      pos++;
      if (pos === code.length) {
        activate();
        pos = 0;
      }
    } else {
      pos = 0;
    }

    // Secret word: zero0f4
    if (key.length === 1) {
      typedBuffer += key.toLowerCase();
      if (typedBuffer.length > 20) typedBuffer = typedBuffer.slice(-20);
      if (typedBuffer.includes('zero0f4')) {
        activate();
        typedBuffer = '';
      }
    }
  });

  // Click logo 7 times
  let logoClicks = 0;
  let logoTimer = null;
  document.addEventListener('click', (e) => {
    const logo = e.target.closest('.logo-icon, .logo');
    if (logo) {
      logoClicks++;
      clearTimeout(logoTimer);
      logoTimer = setTimeout(() => { logoClicks = 0; }, 2000);
      if (logoClicks >= 7) {
        activate();
        logoClicks = 0;
      }
    }
  });

  function activate() {
    if (document.getElementById('egg-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'egg-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);animation:eggFade 0.4s ease';

    overlay.innerHTML = `
      <style>
        @keyframes eggFade { from { opacity:0; } to { opacity:1; } }
        @keyframes eggSpin { from { transform:rotate(0deg) scale(0.5); opacity:0; } to { transform:rotate(360deg) scale(1); opacity:1; } }
        @keyframes eggPulse { 0%,100% { transform:scale(1); } 50% { transform:scale(1.05); } }
        @keyframes matrixRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .matrix-drop {
          position: absolute; top: 0;
          font-family: 'JetBrains Mono', monospace;
          color: #10b981;
          font-size: 14px;
          animation: matrixRain 4s linear infinite;
          text-shadow: 0 0 8px #10b981;
        }
        .egg-box {
          background: linear-gradient(135deg, #0a1628, #1a3050);
          border: 2px solid #10b981;
          border-radius: 12px;
          padding: 40px 50px;
          text-align: center;
          box-shadow: 0 0 60px rgba(16,185,129,0.4);
          max-width: 480px;
          position: relative;
          z-index: 2;
          animation: eggSpin 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .egg-diamond {
          font-family: 'JetBrains Mono', monospace;
          color: #10b981;
          font-size: 10px;
          line-height: 1.2;
          white-space: pre;
          margin-bottom: 20px;
          animation: eggPulse 2s ease-in-out infinite;
        }
        .egg-title {
          color: #e2e8f0;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }
        .egg-sub {
          color: #94a3b8;
          font-size: 12px;
          margin-bottom: 20px;
          font-family: 'JetBrains Mono', monospace;
        }
        .egg-signature {
          color: #10b981;
          font-size: 14px;
          font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
          padding: 10px 20px;
          border: 1px solid #10b981;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 16px;
        }
        .egg-stats {
          color: #64748b;
          font-size: 11px;
          line-height: 1.8;
          font-family: 'JetBrains Mono', monospace;
          text-align: left;
          background: rgba(0,0,0,0.3);
          padding: 12px 16px;
          border-radius: 6px;
          margin-bottom: 20px;
        }
        .egg-stats b { color: #10b981; }
        .egg-close {
          background: transparent;
          border: 1px solid #94a3b8;
          color: #94a3b8;
          padding: 8px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
          font-family: inherit;
          transition: all 0.15s;
        }
        .egg-close:hover { border-color: #10b981; color: #10b981; }
      </style>
      <div class="egg-box">
        <div class="egg-diamond">      /\\
     /  \\
    /    \\
   /  /\\  \\
  /  /  \\  \\
  \\  \\  /  /
   \\  \\/  /
    \\    /
     \\  /
      \\/</div>
        <div class="egg-title">Je hebt iets gevonden!</div>
        <div class="egg-sub">&gt; Welcome to the source, friend.</div>
        <div class="egg-signature">~ zero0f4 ~</div>
        <div class="egg-stats">
<b>&gt; system</b> : FNC Tool
<b>&gt; build </b> : v1.4 · 2026
<b>&gt; tbb   </b> : 4 → 1
<b>&gt; eisen </b> : 445
<b>&gt; events</b> : 194
<b>&gt; frameworks</b> : 10
<b>&gt; status</b> : compliance mapped ✓
<b>&gt; mood  </b> : stay curious</div>
        <button class="egg-close" onclick="this.closest('#egg-overlay').remove();document.querySelectorAll('.matrix-drop').forEach(e=>e.remove());">sluiten</button>
      </div>
    `;

    // Matrix rain
    const chars = 'FNC01ABRO10TBB10JSCUABDOISO27001NISTCSA!@#$%&*';
    for (let i = 0; i < 25; i++) {
      const drop = document.createElement('div');
      drop.className = 'matrix-drop';
      drop.style.left = Math.random() * 100 + '%';
      drop.style.animationDelay = (Math.random() * 4) + 's';
      drop.style.animationDuration = (3 + Math.random() * 3) + 's';
      let text = '';
      for (let j = 0; j < 15; j++) text += chars[Math.floor(Math.random() * chars.length)] + '\n';
      drop.textContent = text;
      overlay.appendChild(drop);
    }

    document.body.appendChild(overlay);

    // Auto-close after 20s
    setTimeout(() => {
      const ov = document.getElementById('egg-overlay');
      if (ov) ov.style.opacity = '0';
      setTimeout(() => {
        const ov2 = document.getElementById('egg-overlay');
        if (ov2) ov2.remove();
      }, 400);
    }, 20000);
  }
})();
