<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Vanderhall Ventures — Mind Over Muscle</title>
  <meta name="description" content="Vanderhall Ventures: Mind Over Muscle — elite fitness + mental clarity coaching, 8-week challenges, online coaching, and a high-discipline community." />

  <!-- Open Graph (shows nicer previews when shared on IG/FB/iMessage) -->
  <meta property="og:title" content="Vanderhall Ventures — Mind Over Muscle" />
  <meta property="og:description" content="Elite fitness + mental clarity coaching for high-discipline lives." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vanderhallventuresllc.com" />
  <!-- OPTIONAL: Add a real preview image later -->
  <meta property="og:image" content="https://vanderhallventuresllc.com/images/og-preview.jpg" />

  <!-- OPTIONAL: If you add a favicon file later, uncomment these:
  <link rel="icon" href="/images/favicon.ico" />
  <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
  -->

  <style>
    :root {
      --bg:#0a0a0b;
      --card:#121316;
      --ink:#f5f6f8;
      --muted:#a7aab3;
      --edge:#1c1e24;
      --gold:#d4af37;
      --red:#d12b32;
      --good:#2ecc71;
    }
    * { box-sizing:border-box; }
    html, body { margin:0; padding:0; background:var(--bg); color:var(--ink); font:400 16px/1.6 system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif; }
    img { max-width:100%; display:block; }
    a { color:var(--gold); text-decoration:none; }
    .wrap { max-width:1100px; margin-inline:auto; padding:28px; }

    header {
      position:sticky; top:0; z-index:10;
      backdrop-filter:saturate(140%) blur(6px);
      background:linear-gradient(180deg, rgba(0,0,0,.92), rgba(0,0,0,.45));
      border-bottom:1px solid var(--edge);
    }
    header .row { display:flex; align-items:center; gap:14px; }
    .brand { font-weight:900; letter-spacing:.4px; }
    .tag { color:var(--muted); font-size:.9rem; }

    .cta { margin-left:auto; display:flex; gap:10px; flex-wrap:wrap; }
    .btn {
      display:inline-flex; align-items:center; justify-content:center; gap:10px;
      padding:12px 18px; border-radius:12px;
      border:1px solid var(--edge);
      background:linear-gradient(180deg, #1c1d22, #111318);
      color:var(--ink); cursor:pointer; font-weight:800;
      transition:transform .08s ease, filter .15s ease;
    }
    .btn:hover { transform:translateY(-1px); filter:brightness(1.05); }
    .btn.gold { border-color:#3b2a08; background:linear-gradient(180deg, #3d2f0a, #241b05); color:#fff6da; }
    .btn.red { background:linear-gradient(180deg, #351015, #1a0609); border-color:#4b0f15; color:#ffeff1; }
    .btn.ghost { background:transparent; }
    .pill {
      display:inline-flex; align-items:center; gap:8px;
      padding:6px 10px; border:1px solid var(--edge);
      border-radius:999px; font-size:.82rem; color:var(--muted);
    }

    .hero { display:grid; grid-template-columns:1.2fr .8fr; gap:30px; align-items:center; padding:48px 0 12px; }
    .kicker { letter-spacing:.18em; text-transform:uppercase; color:var(--muted); font-weight:800; font-size:.8rem; }
    .hero h1 { font-size:clamp(2.1rem, 3.8vw, 3.25rem); line-height:1.12; margin:0 0 10px; }
    .small { font-size:.95rem; color:var(--muted); }

    .card {
      background:var(--card);
      border:1px solid var(--edge);
      border-radius:18px;
      padding:20px;
    }
    .hero .card {
      background:
        radial-gradient(80% 120% at 0% 0%, rgba(209,43,50,.18), transparent 60%),
        radial-gradient(90% 130% at 100% 100%, rgba(212,175,55,.17), transparent 60%),
        var(--card);
    }

    .grid-2 { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }
    .grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }

    hr.sep { border:none; border-top:1px solid var(--edge); margin:28px 0; }

    ul.clean { list-style:none; padding:0; margin:0; display:grid; gap:10px; }
    .highlight li::before { content:'▹'; margin-right:8px; color:var(--gold); }

    .socials { display:flex; gap:10px; flex-wrap:wrap; margin-top:12px; }
    .socials a { border:1px solid var(--edge); padding:8px 12px; border-radius:999px; color:var(--ink); }

    .logoWrap { display:flex; align-items:center; gap:12px; }
    .logoImg {
      width:56px; height:40px; object-fit:contain;
      border-radius:10px;
      border:1px solid var(--edge);
      background:#0f0f12;
    }
    /* fallback if you don't upload a logo yet */
    .logoFallback {
      width:56px; height:40px;
      border-radius:10px;
      border:1px solid var(--edge);
      background:
        linear-gradient(135deg, rgba(212,175,55,.35), rgba(209,43,50,.25)),
        #0f0f12;
      display:flex; align-items:center; justify-content:center;
      font-weight:900; color:#fff6da;
      letter-spacing:.08em;
    }

    .offer h3 { margin:.2rem 0; }
    .price { font-weight:900; font-size:1.25rem; color:var(--gold); margin-top:6px; }

    .frame16x9 {
      position:relative;
      padding-top:56.25%;
      border:1px solid var(--edge);
      border-radius:14px;
      overflow:hidden;
      background:#0e1014;
    }
    .frame16x9 iframe {
      position:absolute; inset:0; width:100%; height:100%;
      border:0;
    }

    .footerGrid { display:grid; grid-template-columns:1fr 360px; gap:18px; align-items:start; }
    .qr {
      width:100%;
      aspect-ratio:1/1;
      background:#fff;
      border-radius:14px;
      border:1px solid var(--edge);
      background-size:cover;
      background-position:center;
      background-repeat:no-repeat;
    }

    .twoBtn { display:flex; gap:10px; flex-wrap:wrap; margin-top:14px; }
    .mutedLine { color:var(--muted); font-size:.9rem; margin-top:10px; }

    .notice {
      border:1px dashed rgba(212,175,55,.35);
      background:rgba(212,175,55,.06);
      border-radius:14px;
      padding:14px 16px;
      color:#fff6da;
      font-size:.92rem;
    }

    @media (max-width:880px) {
      .hero { grid-template-columns:1fr; }
      .grid-3 { grid-template-columns:1fr; }
      .footerGrid { grid-template-columns:1fr; }
    }
  </style>
</head>

<body>
<header>
  <div class="wrap row">
    <div class="logoWrap" aria-label="Vanderhall Ventures branding">
      <!-- LOGO: If you upload your real logo later, place it at /images/logo.png -->
      <!-- If you don't have it yet, the fallback VV block shows. -->
      <img class="logoImg" src="/images/logo.png" alt="Vanderhall Ventures Logo"
           onerror="this.style.display='none'; document.getElementById('logoFallback').style.display='flex';" />
      <div id="logoFallback" class="logoFallback" style="display:none;">VV</div>

      <div>
        <div class="brand">Vanderhall Ventures</div>
        <div class="tag">Built to Break Barriers. Driven by Discipline.</div>
      </div>
    </div>

    <div class="cta">
      <a class="btn gold" href="#offers">Programs</a>
      <a class="btn" href="#community">Community</a>
      <a class="btn red" href="#contact">Contact</a>
    </div>
  </div>
</header>

<main class="wrap">

  <!-- HERO -->
  <section class="hero" id="top">
    <div>
      <div class="kicker">Mind Over Muscle</div>
      <h1>Elite fitness + mental clarity coaching for high-discipline lives.</h1>

      <p class="small">
        I’m Joseph Vanderhall — Army veteran and behavioral health specialist. This is the home of Vanderhall Ventures:
        training, mindset, and accountability built for people who refuse to stay stuck.
      </p>

      <div class="twoBtn">
        <!-- PRIMARY CTA: Choose ONE destination and paste it here -->
        <a class="btn gold" href="(https://jokervibe3.gumroad.com/)" target="_blank" rel="noopener">
          Apply / Start Here
        </a>
        <a class="btn" href="#video">Watch Intro</a>
      </div>

      <div class="socials">
        <!-- Replace these with YOUR real URLs -->
        <a href="(https://www.instagram.com/Vanderhall_Ventures#)" target="_blank" rel="noopener">Instagram</a>
        <a href="(https://www.instagram.com/Vanderhall_Ventures#)" target="_blank" rel="noopener">Instagram (Alt)</a>
        <a href="(https://www.tiktok.com/@joevanderhall)" target="_blank" rel="noopener">TikTok</a>
        <a href="https://www.youtube.com/channel/UCiy8J_NFMWmtKpNYiLIfjSw" target="_blank" rel="noopener">YouTube</a>
        <a href="(https://www.facebook.com/josephvanderhall)" target="_blank" rel="noopener">Facebook</a>
        <a href="mailto:joseph@vanderhallventuresllc.com">Email</a>
      </div>

      <p class="mutedLine">
        Tip: when you’re ready, upload your photos to <code>/images</code> and we’ll add them into the hero + about section.
      </p>
    </div>

    <div class="card">
      <div class="pill">Quick Start</div>
      <h3 style="margin:.4rem 0 0;">Start the Challenge</h3>
      <p class="small">
        Structured weekly training blocks, mindset prompts, and accountability built for consistency — not perfection.
      </p>

      <div class="notice">
        If you’re building your assets right now (photos/logo/video), that’s perfect.
        This site is designed so you can swap links and images in minutes.
      </div>

      <div class="twoBtn">
        <a class="btn gold" href="#offers">See Programs</a>
        <a class="btn ghost" href="#community">What is Mind Over Muscle?</a>
      </div>
    </div>
  </section>

  <hr class="sep" />

  <!-- COMMUNITY / "AI PREDICTION" EMULATION -->
  <section id="community">
    <div class="card">
      <div class="pill">The Movement</div>
      <h2 style="margin:.35rem 0 8px;">Mind Over Muscle is where mental clarity meets physical power.</h2>
      <p class="small">
        You didn’t just stumble here — you showed up for a reason. This community is built for people who want structure,
        discipline, and real progress. No fluff. No excuses. Just momentum.
      </p>

      <div class="grid-2" style="margin-top:14px;">
        <div class="card" style="background:#0f1116;">
          <div class="pill">What You’ll Get</div>
          <ul class="clean highlight">
            <li>High-yield workouts that fit real schedules</li>
            <li>Mindset tools rooted in behavioral health</li>
            <li>Accountability prompts to keep you locked in</li>
            <li>Progression you can actually follow</li>
          </ul>
        </div>

        <div class="card" style="background:#0f1116;">
          <div class="pill">Conversation Starter</div>
          <p class="small" style="margin-top:10px;">
            What’s ONE habit you’ve been building that’s helping you level up — mentally or physically?
          </p>

          <div class="twoBtn">
            <a class="btn gold" href="mailto:joseph@vanderhallventuresllc.com?subject=Mind%20Over%20Muscle%20Community">
              Join the Community
            </a>
            <a class="btn" href="#contact">Contact Joseph</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <hr class="sep" />

  <!-- OFFERS -->
  <section id="offers">
    <h2 style="margin:0 0 10px;">Coaching Offers</h2>
    <p class="small" style="margin:0 0 14px;">
      Prices shown as “Starting at” to keep it flexible while you finalize packages.
    </p>

    <div class="grid-3">
      <div class="card offer">
        <div class="pill">8-Week Challenge</div>
        <h3>Discipline Builder</h3>
        <p class="small">Structured plan with weekly progressions, mindset drills, and check-ins.</p>
        <div class="price">Starting at $199</div>
        <a class="btn gold" href="(https://jokervibe3.gumroad.com/)" target="_blank" rel="noopener">Join Now</a>
      </div>

      <div class="card offer">
        <div class="pill">Online Coaching</div>
        <h3>1:1 Coaching</h3>
        <p class="small">Custom programming + messaging support. Tailored to your schedule and goals.</p>
        <div class="price">Starting at $299/month</div>
        <a class="btn gold" href="(https://jokervibe3.gumroad.com/)" target="_blank" rel="noopener">Apply</a>
      </div>

      <div class="card offer">
        <div class="pill">Bundle</div>
        <h3>Challenge + Coaching</h3>
        <p class="small">Best of both worlds: the full 8-Week system plus ongoing guidance.</p>
        <div class="price">Starting at $449</div>
        <a class="btn gold" href="(https://jokervibe3.gumroad.com/)" target="_blank" rel="noopener">Secure Spot</a>
      </div>
    </div>
  </section>

  <hr class="sep" />

  <!-- VIDEO -->
  <section id="video">
    <div class="grid-2">
      <div class="card">
        <div class="pill">Intro Video</div>
        <h2 style="margin:.35rem 0 8px;">Your Coach in 60 Seconds</h2>
        <p class="small">
          Replace the embed link with your real YouTube intro video ID.
          If your link is <code>https://www.youtube.com/watch?v=VIDEO_ID</code>,
          then set the iframe src to <code>https://www.youtube.com/embed/VIDEO_ID</code>.
        </p>

        <div class="frame16x9">
          <!-- UCiy8J_NFMWmtKpNYiLIfjSw -->
          <iframe
            src="https://www.youtube.com/embed/(https://www.youtube.com/channel/UCiy8J_NFMWmtKpNYiLIfjSw)"
            title="Vanderhall Ventures Intro"
            allowfullscreen></iframe>
        </div>

        <p class="mutedLine">
          Channel: <a href="https://www.youtube.com/channel/UCiy8J_NFMWmtKpNYiLIfjSw" target="_blank" rel="noopener">Open YouTube</a>
        </p>
      </div>

      <div class="card">
        <div class="pill">Why It Works</div>
        <ul class="clean highlight" style="margin-top:10px;">
          <li>Simple training blocks with high return</li>
          <li>Behavior design rooted in real psychology</li>
          <li>Clear week-to-week progression</li>
          <li>Accountability + community momentum</li>
        </ul>

        <div class="twoBtn">
          <a class="btn gold" href="mailto:joseph@vanderhallventuresllc.com?subject=Coaching%20Inquiry">Message Joseph</a>
          <a class="btn" href="#offers">View Programs</a>
        </div>
      </div>
    </div>
  </section>

  <hr class="sep" />

  <!-- NEWSLETTER (PROFESSIONAL, NON-BROKEN) -->
  <section id="newsletter">
    <div class="card">
      <div class="pill">Newsletter</div>
      <h2 style="margin:.35rem 0 8px;">Get the Mindset & Training Brief</h2>
      <p class="small">
        Newsletter signup is being finalized. For now, click below to email “Subscribe” and you’ll be added manually.
        This avoids broken forms and keeps the site professional.
      </p>

      <div class="twoBtn">
        <a class="btn gold" href="mailto:joseph@vanderhallventuresllc.com?subject=Newsletter%20Signup&body=Please%20add%20me%20to%20the%20Mindset%20%26%20Training%20Brief.">
          Subscribe via Email
        </a>
        <a class="btn" href="#contact">Contact</a>
      </div>
    </div>
  </section>

  <hr class="sep" />

  <!-- TESTIMONIALS (PLACEHOLDER READY) -->
  <section id="testimonials">
    <h2 style="margin:0 0 10px;">Results & Testimonials</h2>
    <p class="small" style="margin:0 0 14px;">Add 2–3 short quotes here as you collect them.</p>

    <div class="grid-3">
      <div class="card">
        <div class="pill">Client Win</div>
        <p class="small" style="margin-top:10px;">“(https://www.instagram.com/reel/DOwei0tEk73/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)”</p>
        <p class="mutedLine">—Averie(https://www.instagram.com/reel/DOwei0tEk73/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)1</p>
      </div>
      <div class="card">
        <div class="pill">Mindset Shift</div>
        <p class="small" style="margin-top:10px;">“(https://www.instagram.com/reel/DOv9HyTkZia/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)”</p>
        <p class="mutedLine">— Larry (https://www.instagram.com/reel/DOv9HyTkZia/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)</p>
      </div>
      <div class="card">
        <div class="pill">Transformation</div>
        <p class="small" style="margin-top:10px;">(https://www.instagram.com/reel/DI-WxoQxVLX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)</p>
        <p class="mutedLine">— ED (https://www.instagram.com/reel/DI-WxoQxVLX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)</p>
      </div>
    </div>
  </section>

  <hr class="sep" />

  <!-- CONTACT / FOOTER -->
  <section id="contact" class="footerGrid">
    <div class="card">
      <div class="pill">Connect</div>
      <h2 style="margin:.35rem 0 8px;">Ready to build discipline?</h2>
      <p class="small">
        Reach out for coaching, the 8-week challenge, or collaboration opportunities.
      </p>

      <div class="twoBtn">
        <a class="btn gold" href="(https://jokervibe3.gumroad.com/)" target="_blank" rel="noopener">Apply / Start Here</a>
        <a class="btn red" href="mailto:joseph@vanderhallventuresllc.com?subject=Vanderhall%20Ventures%20Inquiry">Email Joseph</a>
      </div>

      <div class="socials" style="margin-top:14px;">
        <a href="(https://www.instagram.com/Vanderhall_Ventures#)" target="_blank" rel="noopener">Instagram</a>
        <a href="(https://www.instagram.com/Vanderhall_Ventures#)" target="_blank" rel="noopener">Instagram (Alt)</a>
        <a href="(https://www.tiktok.com/@joevanderhall)" target="_blank" rel="noopener">TikTok</a>
        <a href="https://www.youtube.com/channel/UCiy8J_NFMWmtKpNYiLIfjSw" target="_blank" rel="noopener">YouTube</a>
        <a href="(https://www.facebook.com/josephvanderhall)" target="_blank" rel="noopener">Facebook</a>
      </div>

      <p class="mutedLine">
        © <span id="year"></span> Vanderhall Ventures — “Built to Break Barriers. Driven by Discipline.”
      </p>

      <p class="small">
        <strong>Professional upgrade next:</strong> once you choose your logo + photos, upload them into <code>/images</code>
        and I’ll wire them into the hero + about section clean.
      </p>
    </div>

    <div class="card">
      <div class="pill">QR</div>
      <p class="small" style="margin-top:10px;">
        OPTIONAL: If you want a QR image on-site, upload it to <code>/images/qr.png</code>
        and it will appear automatically.
      </p>

      <div class="qr" id="qrBox"
           style="background-image:url('/images/qr.png');">
      </div>![LOGO SMALL](https://github.com/user-attachments/assets/cd1f174f-7258-4b10-b527-604fcf02416f)


https://github.com/user-attachments/assets/2bf4a9a6-9fec-4d5d-b37f-c92756936c7f



      <p class="mutedLine">
        If you don’t have a QR yet, this box will simply show blank white until you upload <code>qr.png</code>.
      </p>
    </div>
  </section>

</main>

<script>
  document.getElementById('year').textContent = new Date().getFullYear();
</script>

</body>
</html>
