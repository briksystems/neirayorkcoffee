/* ================================================================
   sections/hero.js — Sección Hero / Portada
   EDITAR: título, descripción, imagen de fondo, estadísticas
   ================================================================ */
(function () {
  document.getElementById('s-hero').innerHTML = `

<style>
#hero {
  min-height: 92vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-top: 68px;
  overflow: hidden;
  background: var(--white);
}
.hero-left {
  padding: 5rem 3rem 5rem 6rem;
  display: flex; flex-direction: column; gap: 2rem;
}
.hero-eyebrow {
  display: flex; align-items: center; gap: 12px;
  animation: fadeUp .7s .1s both;
}
.hero-eyebrow .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--red); }
.hero-eyebrow span {
  font-size: .7rem; font-weight: 500; letter-spacing: .2em;
  text-transform: uppercase; color: var(--ink2);
}
.hero-title { animation: fadeUp .7s .25s both; }
.hero-title h1 {
  font-family: var(--f-head);
  font-size: clamp(4rem, 7vw, 7.5rem);
  line-height: .88; letter-spacing: .04em; color: var(--ink);
}
.hero-title .red  { color: var(--red); }
.hero-title .gold {
  font-family: var(--f-script);
  font-size: clamp(2.2rem, 4vw, 4.2rem);
  color: var(--gold); display: block; line-height: 1.1;
}
.hero-desc {
  font-family: var(--f-serif); font-size: 1.15rem; line-height: 1.72;
  color: var(--ink2); max-width: 400px;
  animation: fadeUp .7s .4s both;
}
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; animation: fadeUp .7s .55s both; }
.hero-right { position: relative; height: 100%; min-height: 500px; overflow: hidden; }
.hero-right img {
  position: absolute; inset: 0;
  width: 100%; height: 100%; object-fit: cover;
}
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(255,255,255,.12), transparent); }
.hero-tag {
  position: absolute; bottom: 2.5rem; left: 0;
  background: var(--navy); color: var(--white);
  padding: 1.2rem 2rem; min-width: 160px;
}
.hero-tag .big { font-family: var(--f-head); font-size: 2.2rem; color: var(--red); line-height: 1; }
.hero-tag .small {
  font-size: .62rem; font-weight: 500; letter-spacing: .15em;
  text-transform: uppercase; opacity: .7; line-height: 1.5; margin-top: 2px;
}

@media (max-width: 900px) {
  #hero { grid-template-columns: 1fr; min-height: auto; }
  .hero-left { padding: 6rem 1.5rem 3rem; }
  .hero-right { height: 280px; min-height: 0; }
}
</style>

<section id="hero">
  <div class="hero-left">

    <!-- ── BADGE SUPERIOR ── -->
    <div class="hero-eyebrow">
      <div class="dot"></div>
      <span>Neira, Caldas — Colombia · Desde 2021</span>
    </div>

    <!-- ── TÍTULO — edita las 3 líneas aquí ── -->
    <div class="hero-title">
      <h1>
        NEIRA<br>
        <span class="red">YORK</span><br>
        <span class="gold">coffee</span>
      </h1>
    </div>

    <!-- ── DESCRIPCIÓN CORTA ── -->
    <p class="hero-desc">
      De la semilla a tu mesa. Café especial del Eje Cafetero,
      tostado con pasión y despachado a todo Colombia.
    </p>

    <!-- ── BOTONES ── -->
    <div class="hero-actions">
      <a href="#cafes" class="btn btn-red">Ver todos los cafés</a>
      <a href="#servicios" class="btn btn-outline">Nuestros servicios</a>
    </div>

  </div>

  <div class="hero-right">
    <!-- ── IMAGEN DE FONDO — reemplaza el src por tu foto real ── -->
    <img
      src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=85"
      alt="Tostión de café Neira York Coffee"
    />
    <div class="hero-overlay"></div>

    <!-- ── BADGE — estadística clave ── -->
    <div class="hero-tag">
      <div class="big">16+</div>
      <div class="small">Variedades<br>especiales</div>
    </div>
  </div>
</section>

<!-- ── FRANJA ROJA ANIMADA ── -->
<div class="stripe">
  <div class="stripe-track">
    <span>CAFÉ ESPECIAL</span><span class="sep">·</span>
    <span>EJE CAFETERO</span><span class="sep">·</span>
    <span>DESPACHOS NACIONALES</span><span class="sep">·</span>
    <span>TOSTIÓN ARTESANAL</span><span class="sep">·</span>
    <span>MÁS DE 20 AÑOS DE EXPERIENCIA</span><span class="sep">·</span>
    <span>CAFÉ ESPECIAL</span><span class="sep">·</span>
    <span>EJE CAFETERO</span><span class="sep">·</span>
    <span>DESPACHOS NACIONALES</span><span class="sep">·</span>
    <span>TOSTIÓN ARTESANAL</span><span class="sep">·</span>
    <span>MÁS DE 20 AÑOS DE EXPERIENCIA</span><span class="sep">·</span>
  </div>
</div>

`;
})();
