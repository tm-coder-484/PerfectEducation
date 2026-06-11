export default {
  async fetch(request) {
    const hosts = [
      "rivers-savannah-mutual-consultancy.trycloudflare.com",
      "word-levy-succesful-statistical.trycloudflare.com"
    ];

    const url = new URL(request.url);

    // ── Launch date: Saturday 5 April 2026, 10:00 AM AEST = 00:00 UTC ─────────
    const LAUNCH_TIME = new Date("2026-04-05T00:00:00Z");

    // ── Shared page builder ────────────────────────────────────────────────────
    function makePage({ title, badge, badgeColor, headline, sub, extraCSS = '', extraHTML = '', extraJS = '' }) {
      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title} — RK Games</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">
  <style>
    :root {
      --mainbg: #0a0e27;
      --maincomp: #00d9ff;
      --maincomp-glow: rgba(0,217,255,0.45);
      --purple: #8a2be2;
      --pink: #ff0080;
      --textcolor: #ffffff;
      --border: rgba(0,217,255,0.18);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #060916;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      min-height: 100vh;
      display: flex; align-items: center; justify-content: center;
      color: var(--textcolor); overflow: hidden;
    }
    .aurora { position: fixed; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
    .blob { position: absolute; border-radius: 50%; filter: blur(90px); animation: drift 14s ease-in-out infinite; }
    .blob-1 { width: 650px; height: 650px; background: radial-gradient(circle, rgba(0,217,255,0.16) 0%, transparent 70%); top: -20%; left: -12%; }
    .blob-2 { width: 520px; height: 520px; background: radial-gradient(circle, rgba(138,43,226,0.18) 0%, transparent 70%); top: 15%; right: -12%; animation-delay: -5s; }
    .blob-3 { width: 420px; height: 420px; background: radial-gradient(circle, rgba(255,0,128,0.1) 0%, transparent 70%); bottom: -12%; left: 28%; animation-delay: -9s; }
    @keyframes drift {
      0%,100% { transform: translate(0,0) scale(1); }
      33%      { transform: translate(25px,-18px) scale(1.04); }
      66%      { transform: translate(-18px,25px) scale(0.96); }
    }
    .card {
      position: relative; z-index: 10;
      background: rgba(6,10,28,0.85);
      border: 1px solid var(--border);
      border-radius: 24px; padding: 52px 56px;
      text-align: center; max-width: 540px; width: 92%;
      backdrop-filter: blur(40px) saturate(160%);
      animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both;
    }
    .card::before {
      content: ''; position: absolute; top: 0; left: 15%; right: 15%; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0,217,255,0.5), rgba(138,43,226,0.4), transparent);
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px) scale(0.97); filter: blur(4px); }
      to   { opacity: 1; transform: none; filter: none; }
    }
    .logo {
      font-size: 2.2rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
      background: linear-gradient(135deg, var(--maincomp) 0%, var(--purple) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      filter: drop-shadow(0 0 20px var(--maincomp-glow));
      margin-bottom: 4px;
    }
    .eyebrow {
      font-size: 0.58rem; letter-spacing: 3px; text-transform: uppercase;
      color: var(--maincomp); opacity: 0.55; margin-bottom: 28px;
    }
    .badge {
      display: inline-block; font-size: 0.62rem; letter-spacing: 2px; text-transform: uppercase;
      padding: 4px 14px; border-radius: 99px; margin-bottom: 22px; border: 1px solid;
      color: ${badgeColor}; border-color: ${badgeColor}44; background: ${badgeColor}11;
    }
    .headline { font-size: 1.25rem; font-weight: 700; margin-bottom: 10px; }
    .sub { font-size: 0.82rem; color: rgba(255,255,255,0.42); line-height: 1.8; margin-bottom: 28px; }
    .btn {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 11px 24px; border-radius: 12px; border: none; cursor: pointer;
      background: linear-gradient(135deg, var(--maincomp), var(--purple));
      color: #fff; font-size: 0.85rem; font-weight: 600;
      font-family: inherit; text-decoration: none; letter-spacing: 0.3px;
      box-shadow: 0 4px 20px rgba(0,217,255,0.2);
      transition: opacity 0.2s, transform 0.15s;
    }
    .btn:hover { opacity: 0.85; transform: translateY(-1px); }
    .ms {
      font-family: 'Material Symbols Rounded'; font-size: 17px;
      font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20;
    }
    ${extraCSS}
  </style>
</head>
<body>
  <div class="aurora">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>
  <div class="card">
    <div class="logo">RK Games</div>
    <div class="eyebrow">School Gaming Platform</div>
    <div class="badge">${badge}</div>
    <div class="headline">${headline}</div>
    <div class="sub">${sub}</div>
    ${extraHTML}
  </div>
  ${extraJS ? `<script>${extraJS}<\/script>` : ''}
</body>
</html>`;
    }

    // ── Debug page ─────────────────────────────────────────────────────────────
    if (url.pathname === '/debug1234') {
      let debugResults = '';
      let activeServer = null;

      for (let i = 0; i < hosts.length; i++) {
        const host = hosts[i];
        let status = '';
        try {
          const testUrl = `https://${host}/`;
          const startTime = Date.now();
          const response = await fetch(testUrl, { method: 'GET', redirect: 'manual', cf: { cacheEverything: false } });
          const responseTime = Date.now() - startTime;
          if (response.status >= 200 && response.status < 400) {
            if (activeServer === null) {
              activeServer = i + 1;
              status = `<div class="status active"><span class="host">Server ${i + 1}: ${host}</span><br>✅ <strong>ONLINE & ACTIVE</strong> (Status: ${response.status}, Response: ${responseTime}ms)<br>⭐ <strong style="color:#ff0;">THIS SERVER IS CURRENTLY SERVING THIS SITE</strong></div>`;
            } else {
              status = `<div class="status success"><span class="host">Server ${i + 1}: ${host}</span><br>✅ <strong>ONLINE</strong> (Status: ${response.status}, Response: ${responseTime}ms)<br>💤 Standby</div>`;
            }
          } else {
            status = `<div class="status fail"><span class="host">Server ${i + 1}: ${host}</span><br>❌ <strong>OFFLINE</strong> (Status: ${response.status})</div>`;
          }
        } catch (error) {
          status = `<div class="status fail"><span class="host">Server ${i + 1}: ${host}</span><br>❌ <strong>ERROR</strong> (${error.message})</div>`;
        }
        debugResults += status;
      }

      const summary = activeServer
        ? `<div class="status" style="margin-top:30px;border-left-color:#00f;color:#fff;"><strong>📋 Status:</strong> Served by <strong style="color:#ff0;">Server ${activeServer}</strong>. Servers tried in priority order.</div>`
        : `<div class="status fail" style="margin-top:30px;"><strong>⚠️ All servers offline.</strong></div>`;

      return new Response(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Debug — RK Games</title><style>body{margin:0;padding:20px;background:#1a1a1a;font-family:'Courier New',monospace;color:#0f0;}.container{max-width:800px;margin:0 auto;background:#000;border:2px solid #0f0;border-radius:8px;padding:20px;}h1{color:#0f0;text-align:center;margin-top:0;}.status{margin:20px 0;padding:15px;background:#1a1a1a;border-left:4px solid #0f0;}.status.fail{border-left-color:#f00;color:#f00;}.status.success{border-left-color:#0f0;color:#0f0;}.status.active{border-left-color:#ff0;background:#2a2a00;}.host{font-weight:bold;color:#fff;}button{background:#0f0;color:#000;border:none;padding:10px 20px;font-family:'Courier New',monospace;font-weight:bold;cursor:pointer;border-radius:4px;margin-top:10px;}.timestamp{color:#888;font-size:12px;margin-top:10px;}</style></head><body><div class="container"><h1>🔍 Server Debug Panel</h1>${debugResults}${summary}<button onclick="location.reload()">🔄 Refresh</button><div class="timestamp">${new Date().toISOString()}</div></div></body></html>`, {
        headers: { "content-type": "text/html; charset=UTF-8" }
      });
    }

    // ── WebSocket proxy ────────────────────────────────────────────────────────
    // Must be handled before the HTTP path — fetch() can't do WS upgrades.
    if (request.headers.get("Upgrade") === "websocket") {
      for (const host of hosts) {
        try {
          const u = new URL(request.url);
          u.hostname = host;
          u.protocol = "https:"; // Cloudflare internally handles the WS upgrade

          const resp = await fetch(u.toString(), {
            headers: request.headers,
            cf: { cacheEverything: false }
          });

          // 101 Switching Protocols = successful WS handshake
          if (resp.status === 101) {
            return resp;
          }
        } catch {
          continue; // Try next host
        }
      }
      // All hosts failed the WS upgrade
      return new Response("WebSocket unavailable", { status: 503 });
    }

    // ── Read body once (HTTP requests only) ───────────────────────────────────
    let requestBody = null;
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      requestBody = await request.clone().arrayBuffer();
    }

    async function tryHost(host) {
      try {
        const u = new URL(request.url);
        u.hostname = host;
        const newReq = new Request(u.toString(), {
          method: request.method,
          headers: request.headers,
          body: requestBody,
          redirect: 'manual',
          cf: { cacheEverything: false }
        });
        const response = await fetch(newReq);
        if (response.status >= 200 && response.status < 400) return { response, status: response.status };
        return { response: null, status: response.status };
      } catch {
        return { response: null, status: 0 };
      }
    }

    // ── Try all hosts first — ALWAYS, regardless of countdown ─────────────────
    let lastStatus = 0;
    for (const host of hosts) {
      const { response, status } = await tryHost(host);
      if (response) return response;
      if (status > lastStatus) lastStatus = status;
    }

    // All hosts are down. Now decide what to show.
    const now = new Date();

    // ── Pre-launch + all servers offline → countdown screen ───────────────────
    if (now < LAUNCH_TIME) {
      const SEASON_START = new Date(LAUNCH_TIME.getTime() - 7 * 24 * 60 * 60 * 1000);
      const totalMs = LAUNCH_TIME - SEASON_START;
      const elapsedMs = Math.max(0, now - SEASON_START);
      const initialProgress = Math.min(100, (elapsedMs / totalMs) * 100).toFixed(2);

      const countdownCSS = `
        .countdown { display: flex; gap: 14px; justify-content: center; margin-bottom: 24px; }
        .unit {
          background: rgba(0,217,255,0.05); border: 1px solid rgba(0,217,255,0.12);
          border-radius: 14px; padding: 16px 10px 12px; min-width: 68px;
          position: relative; overflow: hidden;
        }
        .unit::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,217,255,0.4), transparent);
        }
        .unit-num {
          display: block; font-size: 2rem; font-weight: 700; line-height: 1;
          background: linear-gradient(135deg, #fff, var(--maincomp));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          font-variant-numeric: tabular-nums;
          transition: transform 0.15s cubic-bezier(0.34,1.56,0.64,1);
        }
        .unit-num.pop { transform: scale(1.2); }
        .unit-lbl { display: block; font-size: 0.55rem; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-top: 6px; }
        .progress-wrap { background: rgba(255,255,255,0.06); border-radius: 99px; height: 3px; margin-bottom: 20px; overflow: hidden; }
        .progress-bar { height: 100%; border-radius: 99px; background: linear-gradient(90deg, var(--maincomp), var(--purple)); box-shadow: 0 0 8px var(--maincomp-glow); transition: width 1s linear; }
        .launch-label { font-size: 0.7rem; color: rgba(255,255,255,0.28); letter-spacing: 0.5px; }
        .pulse { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--maincomp); box-shadow: 0 0 6px var(--maincomp); animation: blink 2s ease-in-out infinite; vertical-align: middle; margin-right: 6px; }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
      `;

      const countdownHTML = `
        <div class="countdown">
          <div class="unit"><span class="unit-num" id="cd-d">--</span><span class="unit-lbl">Days</span></div>
          <div class="unit"><span class="unit-num" id="cd-h">--</span><span class="unit-lbl">Hours</span></div>
          <div class="unit"><span class="unit-num" id="cd-m">--</span><span class="unit-lbl">Mins</span></div>
          <div class="unit"><span class="unit-num" id="cd-s">--</span><span class="unit-lbl">Secs</span></div>
        </div>
        <div class="progress-wrap"><div class="progress-bar" id="prog" style="width:${initialProgress}%"></div></div>
        <p class="launch-label"><span class="pulse"></span>Saturday, 5 April 2026 &middot; 10:00 AM AEST</p>
      `;

      const countdownJS = `
        const LAUNCH = new Date("2026-04-05T00:00:00Z").getTime();
        const START  = LAUNCH - 7 * 24 * 60 * 60 * 1000;
        function pad(n) { return String(Math.floor(n)).padStart(2,'0'); }
        let prevS = -1;
        function tick() {
          const diff = LAUNCH - Date.now();
          if (diff <= 0) { location.reload(); return; }
          const d = Math.floor(diff / 86400000);
          const h = Math.floor((diff % 86400000) / 3600000);
          const m = Math.floor((diff % 3600000) / 60000);
          const s = Math.floor((diff % 60000) / 1000);
          document.getElementById('cd-d').textContent = pad(d);
          document.getElementById('cd-h').textContent = pad(h);
          document.getElementById('cd-m').textContent = pad(m);
          if (s !== prevS) {
            const el = document.getElementById('cd-s');
            el.textContent = pad(s);
            el.classList.add('pop');
            setTimeout(() => el.classList.remove('pop'), 180);
            prevS = s;
          }
          document.getElementById('prog').style.width = Math.min(100, ((Date.now() - START) / (LAUNCH - START)) * 100).toFixed(3) + '%';
        }
        tick();
        setInterval(tick, 1000);
      `;

      return new Response(makePage({
        title: "Season 2 Coming Soon",
        badge: "⚡ Season 2 launching soon",
        badgeColor: "#00d9ff",
        headline: "Something big is coming.",
        sub: "RK Games Season 2 is on its way — new games, features, and more.",
        extraCSS: countdownCSS,
        extraHTML: countdownHTML,
        extraJS: countdownJS,
      }), { status: 200, headers: { "content-type": "text/html; charset=UTF-8" } });
    }

    // ── Post-launch, all hosts down → error pages ─────────────────────────────
    const status = lastStatus || 503;
    let pageConfig;

    if (status === 404) {
      pageConfig = {
        title: "404 Not Found",
        badge: "404 · Not Found",
        badgeColor: "#ffb300",
        headline: "Page not found.",
        sub: "That page doesn't exist, or may have been moved. Double-check the URL and try again.",
        extraHTML: `<a class="btn" href="/"><span class="ms">home</span> Go home</a>`,
      };
    } else if (status === 401 || status === 403) {
      pageConfig = {
        title: `${status} Unauthorized`,
        badge: `${status} · Restricted`,
        badgeColor: "#ff0080",
        headline: "You shouldn't be here.",
        sub: "You don't have permission to access this page. If you think this is a mistake, try logging in again.",
        extraHTML: `<a class="btn" href="/"><span class="ms">home</span> Go home</a>`,
      };
    } else if (status >= 500 && status < 600) {
      pageConfig = {
        title: "Server Error",
        badge: `${status} · Server Error`,
        badgeColor: "#ff6b6b",
        headline: "The server has failed.",
        sub: "Something went wrong on our end. This is on us — please try again in a moment.",
        extraCSS: `
          @keyframes spin { to { transform: rotate(360deg); } }
          .spinner { width: 28px; height: 28px; border: 3px solid rgba(255,107,107,0.15); border-top-color: #ff6b6b; border-radius: 50%; animation: spin 0.9s linear infinite; margin: 0 auto 20px; }
        `,
        extraHTML: `<div class="spinner"></div><button class="btn" onclick="location.reload()"><span class="ms">refresh</span> Try again</button>`,
      };
    } else {
      pageConfig = {
        title: "Server Offline",
        badge: "Offline · Please wait",
        badgeColor: "#888",
        headline: "Server is offline.",
        sub: "RK Games is temporarily unavailable. We'll be back up shortly — please try again in a few minutes.",
        extraCSS: `
          @keyframes spin { to { transform: rotate(360deg); } }
          .spinner { width: 28px; height: 28px; border: 3px solid rgba(255,255,255,0.07); border-top-color: rgba(255,255,255,0.35); border-radius: 50%; animation: spin 1.2s linear infinite; margin: 0 auto 20px; }
        `,
        extraHTML: `<div class="spinner"></div><button class="btn" onclick="location.reload()"><span class="ms">refresh</span> Try again</button>`,
      };
    }

    return new Response(makePage(pageConfig), {
      status,
      headers: { "content-type": "text/html; charset=UTF-8" }
    });
  }
};
