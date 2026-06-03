/* ================================================================
   sections/nav.js — Barra de Navegación
   Usa logo-navy.png cuando el fondo es oscuro (inicio)
   Usa logo-white.png cuando el fondo es claro (al hacer scroll)
   ================================================================ */
(function(){
document.getElementById('s-nav').innerHTML = `
<style>
#navbar{position:fixed;top:0;left:0;right:0;z-index:700;transition:background .35s ease,box-shadow .35s ease}
#navbar.scrolled{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);box-shadow:0 1px 0 var(--border)}

.nav-wrap{max-width:1280px;margin:0 auto;padding:0 2.5rem;height:68px;display:flex;align-items:center;justify-content:space-between}

/* Logo — dos versiones que se alternan según el estado del navbar */
.nav-logo{display:flex;align-items:center;gap:0}
.nav-logo-img{height:48px;width:auto;transition:opacity .3s}

/* Cuando navbar es transparente (sobre fondo oscuro): logo navy visible, logo white oculto */
.logo-for-dark { display:block; }
.logo-for-light{ display:none;  }

/* Cuando navbar está scrolled (fondo blanco): logo white visible, logo navy oculto */
#navbar.scrolled .logo-for-dark { display:none;  }
#navbar.scrolled .logo-for-light{ display:block; }

/* Links de navegación */
#navMenu{display:flex;align-items:center;gap:1.8rem;list-style:none}
.nav-link{font-size:.8rem;font-weight:500;letter-spacing:.06em;color:rgba(255,255,255,.85);transition:color .2s;position:relative;padding-bottom:3px}
.nav-link::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1.5px;background:var(--red);transition:width .25s}
.nav-link:hover{color:var(--white)}
.nav-link:hover::after,.nav-link.active::after{width:100%}
.nav-link.active{color:var(--white)}

/* Links cuando navbar es blanco */
#navbar.scrolled .nav-link{color:var(--ink2)}
#navbar.scrolled .nav-link:hover{color:var(--red)}
#navbar.scrolled .nav-link.active{color:var(--red)}

/* Botón CTA */
.nav-cta{background:var(--red)!important;color:var(--white)!important;padding:8px 20px;border-radius:var(--r);font-size:.78rem;font-weight:500;letter-spacing:.08em;transition:background .2s}
.nav-cta::after{display:none!important}
.nav-cta:hover{background:var(--red2)!important}
#navbar.scrolled .nav-cta{color:var(--white)!important}

/* Hamburger */
.hamburger{display:none;flex-direction:column;gap:4px;background:none;border:none;cursor:pointer;padding:4px}
.hamburger span{width:22px;height:1.5px;background:var(--white);display:block;transition:all .25s}
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

    <a href="#landing" class="nav-logo">
      <!-- Logo sobre fondo oscuro (inicio de página) -->
      <img class="nav-logo-img logo-for-dark"
           src="assets/img/logo-navy.png"
           alt="Neira York Coffee"/>
      <!-- Logo sobre fondo blanco (después de hacer scroll) -->
      <img class="nav-logo-img logo-for-light"
           src="assets/img/logo-white.png"
           alt="Neira York Coffee"/>
    </a>

    <ul id="navMenu">
      <li><a href="#cafes"     class="nav-link">Nuestros Cafés</a></li>
      <li><a href="#servicios" class="nav-link">Para Caficultores</a></li>
      <li><a href="#quienes"   class="nav-link">Nosotros</a></li>
      <li>
        <a href="https://wa.me/573137663905?text=Hola%20Neira%20York%20Coffee!%20Quiero%20m%C3%A1s%20informaci%C3%B3n."
           target="_blank" class="nav-link nav-cta">
          Contactar
        </a>
      </li>
    </ul>

    <button class="hamburger" id="hamburger" aria-label="Menú" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

  </div>
</nav>
`; })();
