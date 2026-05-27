/* ================================================================
   sections/nav.js — Barra de Navegación
   EDITAR: enlaces del menú, teléfono del CTA
   ================================================================ */
(function () {
  document.getElementById('s-nav').innerHTML = `

<style>
#navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 700;
  background: transparent;
  transition: background .3s ease, box-shadow .3s ease;
}
#navbar.scrolled {
  background: rgba(255,255,255,.97);
  backdrop-filter: blur(14px);
  box-shadow: 0 1px 0 var(--border);
}
.nav-wrap {
  max-width: 1280px; margin: 0 auto; padding: 0 2rem;
  height: 68px; display: flex; align-items: center; justify-content: space-between;
}
.nav-logo { display: flex; align-items: center; gap: 10px; }
.nav-logo img { height: 42px; width: auto; }
.nav-logo-txt .n1 {
  font-family: var(--f-head); font-size: 1.3rem;
  letter-spacing: .1em; color: var(--ink); line-height: 1;
}
.nav-logo-txt .n2 {
  font-size: .57rem; font-weight: 500; letter-spacing: .38em;
  text-transform: uppercase; color: var(--red); line-height: 1.3;
}
#navMenu { display: flex; align-items: center; gap: 2rem; list-style: none; }
.nav-link {
  font-size: .8rem; font-weight: 500; letter-spacing: .06em;
  color: var(--ink2); transition: color .2s;
}
.nav-link:hover { color: var(--red); }
.nav-cta-btn {
  background: var(--red); color: var(--white) !important;
  padding: 8px 20px; border-radius: var(--r);
  font-size: .78rem; font-weight: 500; letter-spacing: .08em;
  transition: background .2s;
}
.nav-cta-btn:hover { background: var(--red2) !important; color: var(--white) !important; }
.hamburger {
  display: none; flex-direction: column; gap: 4px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.hamburger span { width: 22px; height: 1.5px; background: var(--ink); display: block; transition: all .25s; }

@media (max-width: 768px) {
  #navMenu { display: none; }
  .hamburger { display: flex; }
  #navMenu.open {
    display: flex; flex-direction: column;
    position: fixed; top: 68px; left: 0; right: 0;
    background: var(--white); padding: 1.5rem 2rem; gap: 1.25rem;
    border-top: 1px solid var(--border);
    box-shadow: 0 8px 24px rgba(0,0,0,.1); z-index: 699;
  }
}
</style>

<nav id="navbar">
  <div class="nav-wrap">

    <!-- ── LOGO ── usa el logo real de assets/img/logo.png -->
    <a href="#hero" class="nav-logo">
      <img src="assets/img/logo.png" alt="Neira York Coffee Logo"/>
      <div class="nav-logo-txt">
        <div class="n1">NEIRA YORK</div>
        <div class="n2">c o f f e e</div>
      </div>
    </a>

    <!-- ── ENLACES DEL MENÚ — edita los textos y los href aquí ── -->
    <ul id="navMenu">
      <li><a href="#cafes"       class="nav-link">Nuestros Cafés</a></li>
      <li><a href="#quienes"     class="nav-link">Nosotros</a></li>
      <li><a href="#servicios"   class="nav-link">Servicios</a></li>
      <li><a href="#exportacion" class="nav-link">Exportación</a></li>
      <li>
        <!-- ── CTA — actualiza el número de WhatsApp si cambia ── -->
        <a href="https://wa.me/573137663905?text=Hola%20Neira%20York%20Coffee!%20Quiero%20m%C3%A1s%20informaci%C3%B3n."
           target="_blank" class="nav-link nav-cta-btn">
          Contactar
        </a>
      </li>
    </ul>

    <button class="hamburger" id="hamburger" aria-label="Menú" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

  </div>
</nav>

`;
})();
