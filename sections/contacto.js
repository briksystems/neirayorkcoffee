/* sections/contacto.js — Footer con logo horizontal */
(function(){
document.getElementById('s-contacto').innerHTML = `
<style>
#contacto{background:var(--navy);padding:5rem 0 0}
.ft-grid{display:grid;grid-template-columns:1.8fr 1fr 1fr;gap:4rem;padding-bottom:4rem;border-bottom:1px solid rgba(255,255,255,.08)}
/* Logo horizontal en footer */
.ft-logo-img{height:60px;width:auto;margin-bottom:.75rem}
.ft-desc{font-size:.87rem;line-height:1.75;color:rgba(255,255,255,.5);margin:0 0 1.5rem;max-width:280px}
.ft-socials{display:flex;gap:.6rem}
.ft-soc{width:38px;height:38px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;transition:all .2s;font-size:.78rem;font-weight:700;color:var(--white);cursor:pointer}
.ft-soc:hover{background:var(--red);border-color:var(--red);transform:translateY(-2px)}
.ft-col-title{font-family:var(--f-head);font-size:.95rem;letter-spacing:.15em;color:var(--white);margin-bottom:1.2rem}
.ft-ci{display:flex;gap:10px;margin-bottom:.9rem}
.ft-ci-icon{width:32px;height:32px;background:rgba(200,16,46,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.78rem;font-weight:700;color:var(--red)}
.ft-ci-lbl{font-size:.61rem;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.35)}
.ft-ci-val{font-size:.84rem;color:rgba(255,255,255,.75);line-height:1.5;margin-top:1px}
.ft-ci-val a{color:rgba(255,255,255,.75);transition:color .2s}
.ft-ci-val a:hover{color:var(--red)}
.ft-nav{list-style:none}
.ft-nav li{margin-bottom:.6rem}
.ft-nav a{font-size:.84rem;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:8px;transition:color .2s}
.ft-nav a::before{content:'';width:16px;height:1px;background:var(--red);flex-shrink:0}
.ft-nav a:hover{color:var(--white)}
/* Badge decorativo en footer */
.ft-badge{
  display:flex;align-items:center;justify-content:center;
  padding:3rem 0 2rem;
  border-top:1px solid rgba(255,255,255,.05);
}
.ft-badge img{width:100px;height:100px;object-fit:contain;opacity:.25;transition:opacity .3s}
.ft-badge img:hover{opacity:.5}
/* Copyright */
.ft-bottom{padding:1.5rem 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.5rem}
.ft-bottom p{font-size:.64rem;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.25)}
@media(max-width:900px){.ft-grid{grid-template-columns:1fr;gap:2.5rem}}
</style>

<section id="contacto">
  <div class="container">
    <div class="ft-grid">

      <!-- Columna marca — logo horizontal -->
      <div class="reveal">
        <img class="ft-logo-img"
             src="assets/img/logo-horizontal.png"
             alt="Neira York Coffee"/>
        <p class="ft-desc">Café especial colombiano desde el corazón de Caldas. Comprometidos con los caficultores y la excelencia en cada taza.</p>
        <div class="ft-socials">
          <a href="https://www.instagram.com/cafetintero"    target="_blank" rel="noopener" class="ft-soc" title="@cafetintero">IG</a>
          <a href="https://www.instagram.com/neirayorkcoffee" target="_blank" rel="noopener" class="ft-soc" title="@neirayorkcoffee">IG</a>
          <a href="https://wa.me/573137663905"               target="_blank" rel="noopener" class="ft-soc" title="WhatsApp">WA</a>
        </div>
      </div>

      <!-- Columna contacto -->
      <div class="reveal d2">
        <div class="ft-col-title">CONTACTO</div>
        <div class="ft-ci">
          <div class="ft-ci-icon">WA</div>
          <div><div class="ft-ci-lbl">WhatsApp</div>
          <div class="ft-ci-val"><a href="https://wa.me/573137663905" target="_blank">(+57) 313 766 3905</a></div></div>
        </div>
        <div class="ft-ci">
          <div class="ft-ci-icon">WA</div>
          <div><div class="ft-ci-lbl">WhatsApp</div>
          <div class="ft-ci-val"><a href="https://wa.me/573146808557" target="_blank">(+57) 314 680 8557</a></div></div>
        </div>
        <div class="ft-ci">
          <div class="ft-ci-icon">IG</div>
          <div><div class="ft-ci-lbl">Instagram</div>
          <div class="ft-ci-val">@cafetintero<br>@neirayorkcoffee</div></div>
        </div>
        <div class="ft-ci">
          <div class="ft-ci-icon">+</div>
          <div><div class="ft-ci-lbl">Dirección</div>
          <div class="ft-ci-val">Km 2 Vía Neira - Manizales<br>Sector Cielito Lindo, Caldas</div></div>
        </div>
      </div>

      <!-- Columna navegación -->
      <div class="reveal d3">
        <div class="ft-col-title">NAVEGACIÓN</div>
        <ul class="ft-nav">
          <li><a href="#cafes">Nuestros Cafés</a></li>
          <li><a href="#servicios">Para Caficultores</a></li>
          <li><a href="#quienes">Quiénes Somos</a></li>
          <li><a href="#clientes">Clientes y Aliados</a></li>
        </ul>
      </div>

    </div>

    <!-- Badge decorativo antes del copyright -->
    <div class="ft-badge">
      <img src="assets/img/logo-badge.png" alt="Neira York Coffee"/>
    </div>

    <div class="ft-bottom">
      <p>© 2025 Neira York Coffee S.A.S. — Neira, Caldas, Colombia</p>
      <p>Todos los derechos reservados</p>
    </div>
  </div>
</section>
`; })();
