/* sections/exportacion.js */
(function () {
  document.getElementById('s-exportacion').innerHTML = `
<style>
#exportacion { padding: 6rem 0; background: var(--navy); }
.exp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
.exp-rule { width: 44px; height: 2px; background: rgba(255,255,255,.3); margin-bottom: 1.1rem; }
.exp-h2 { font-family: var(--f-head); font-size: clamp(3rem,5vw,5rem); letter-spacing: .05em; color: var(--white); line-height: .92; margin-bottom: 1rem; }
.exp-h2 em { font-family: var(--f-script); font-size: clamp(2rem,3.5vw,3.2rem); color: var(--gold); font-style: normal; display: block; }
.exp-p { font-family: var(--f-serif); font-size: 1.05rem; color: rgba(255,255,255,.65); line-height: 1.75; margin-bottom: 1.4rem; }
.exp-countries { display: flex; gap: .75rem; flex-wrap: wrap; margin-bottom: 2rem; }
.exp-country { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12); padding: 9px 18px; font-size: .8rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; color: var(--white); }
.exp-card { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); padding: 2.5rem; }
.exp-card-title { font-family: var(--f-head); font-size: 1.6rem; letter-spacing: .08em; color: var(--white); line-height: 1.1; }
.exp-card-sub { font-family: var(--f-script); font-size: 1rem; color: var(--gold); margin: .3rem 0 1.2rem; }
.exp-card-text { font-size: .88rem; color: rgba(255,255,255,.6); line-height: 1.75; }
.exp-stats { display: flex; gap: 2rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,.08); }
.exp-stat .n { font-family: var(--f-head); font-size: 2.2rem; color: var(--red); line-height: 1; }
.exp-stat .l { font-size: .62rem; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.4); margin-top: 2px; line-height: 1.5; }
@media (max-width: 900px) { .exp-grid { grid-template-columns: 1fr; gap: 3rem; } }
</style>
<section id="exportacion">
  <div class="container">
    <div class="exp-grid">
      <div class="reveal">
        <div class="exp-rule"></div>
        <h2 class="exp-h2">EXPORTACIÓN<br><em>café especial</em></h2>
        <p class="exp-p">Ampliamos tu mercado local al mundo. Nuestros clientes internacionales escogen desde la catación el mejor café de la región.</p>
        <p class="exp-p">El precio varía según el dólar, costos de envío y logística requerida.</p>
        <div class="exp-countries">
          <div class="exp-country">Canada</div>
          <div class="exp-country">España</div>
        </div>
        <a href="https://wa.me/573137663905?text=Hola!%20Quiero%20exportar%20mi%20caf%C3%A9.%20%C2%BFPueden%20informarme%3F" target="_blank" class="btn btn-outline-white">Cotizar exportación</a>
      </div>
      <div class="exp-card reveal d2">
        <div class="exp-card-title">ASOCIACION<br>MOM COFFEE</div>
        <div class="exp-card-sub">Mujeres de otro mundo del café</div>
        <p class="exp-card-text">Las mujeres de Mom Coffee lograron la exportación de sus cafés e historias de vida, creando su propia marca. Hoy sus familias son sus mejores aliadas en este proyecto.</p>
        <div class="exp-stats">
          <div class="exp-stat"><div class="n">20</div><div class="l">Familias<br>cafeteras</div></div>
          <div class="exp-stat"><div class="n">2</div><div class="l">Países de<br>exportación</div></div>
          <div class="exp-stat"><div class="n">100%</div><div class="l">Café<br>especial</div></div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
})();
