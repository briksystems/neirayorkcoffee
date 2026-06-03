/* ================================================================
   sections/nav.js — Navegación (usada por cafes.html y servicios.html)
   El logo y los links apuntan a páginas completas, no a anchors.
   ================================================================ */
(function(){
document.getElementById('s-nav').innerHTML = `
<style>
#navbar{position:fixed;top:0;left:0;right:0;z-index:700;transition:background .35s ease,box-shadow .35s ease}
#navbar.scrolled{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);box-shadow:0 1px 0 var(--border)}
.nav-wrap{max-width:1280px;margin:0 auto;padding:0 2.5rem;height:68px;display:flex;align-items:center;justify-content:space-between}
.nav-logo{display:flex;align-items:center;gap:0}
.nav-logo-img{height:46px;width:auto;transition:opacity .25s}
.logo-dark{display:block}
.logo-light{display:none}
#navbar.scrolled .logo-dark{display:none}
#navbar.scrolled .logo-light{display:block}

/* Botón de volver */
.nav-back{
  display:flex;align-items:center;gap:6px;
  font-size:.73rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;
  color:rgba(255,255,255,.6);
  transition:color .2s;
  border:none;background:none;cursor:pointer;
}
.nav-back:hover{color:var(--white)}
#navbar.scrolled .nav-back{color:var(--ink2)}
#navbar.scrolled .nav-back:hover{color:var(--red)}
.nav-back svg{width:14px;height:14px;transition:transform .2s}
.nav-back:hover svg{transform:translateX(-2px)}

/* Links */
#navMenu{display:flex;align-items:center;gap:1.8rem;list-style:none}
.nav-link{font-size:.8rem;font-weight:500;letter-spacing:.06em;color:rgba(255,255,255,.8);transition:color .2s;position:relative;padding-bottom:3px;text-decoration:none}
.nav-link::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1.5px;background:var(--red);transition:width .25s}
.nav-link:hover{color:var(--white)}
.nav-link:hover::after{width:100%}
.nav-link.active{color:var(--white)}
.nav-link.active::after{width:100%}
#navbar.scrolled .nav-link{color:var(--ink2)}
#navbar.scrolled .nav-link:hover{color:var(--red)}
#navbar.scrolled .nav-link.active{color:var(--red)}
.nav-cta{
  background:var(--red)!important;color:var(--white)!important;
  padding:8px 18px;border-radius:var(--r);
  font-size:.76rem;font-weight:500;letter-spacing:.08em;
  transition:background .2s;
}
.nav-cta::after{display:none!important}
.nav-cta:hover{background:var(--red2)!important}

/* Hamburger */
.hamburger{display:none;flex-direction:column;gap:4px;background:none;border:none;cursor:pointer;padding:4px}
.hamburger span{width:22px;height:1.5px;background:rgba(255,255,255,.9);display:block;transition:all .25s}
#navbar.scrolled .hamburger span{background:var(--ink)}

@media(max-width:768px){
  #navMenu{display:none}
  .hamburger{display:flex}
  #navMenu.open{
    display:flex;flex-direction:column;
    position:fixed;top:68px;left:0;right:0;
    background:var(--white);padding:1.5rem 2rem;gap:1.2rem;
    border-top:1px solid var(--border);box-shadow:0 8px 24px rgba(0,0,0,.1);z-index:699;
  }
  #navMenu.open .nav-link{color:var(--ink2)}
  #navMenu.open .nav-link:hover{color:var(--red)}
}
</style>

<nav id="navbar">
  <div class="nav-wrap">

    <!-- Logo (cambia según el fondo) -->
    <a href="index.html" class="nav-logo">
      <img class="nav-logo-img logo-dark"  src="assets/img/logo-navy.png"  alt="Neira York Coffee"/>
      <img class="nav-logo-img logo-light" src="assets/img/logo-white.png" alt="Neira York Coffee"/>
    </a>

    <!-- Menú de navegación -->
    <ul id="navMenu">
      <li><a href="cafes.html"     class="nav-link">Nuestros Cafés</a></li>
      <li><a href="servicios.html" class="nav-link">Para Caficultores</a></li>
      <li>
        <a href="https://wa.me/573137663905?text=Hola%20Neira%20York%20Coffee!"
           target="_blank" rel="noopener" class="nav-link nav-cta">
          Contactar
        </a>
      </li>
    </ul>

    <button class="hamburger" id="hamburger" aria-label="Menú" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

  </div>
</nav>

<script>
// Marcar el link activo según la página actual
(function(){
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();
</script>
`; })();
