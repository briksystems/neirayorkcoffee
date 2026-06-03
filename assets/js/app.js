/* ================================================================
   NEIRA YORK COFFEE — app.js
   Lógica compartida por cafes.html y servicios.html
   ================================================================ */
(function(){
  /* Loader */
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('done');

  /* Navbar scroll */
  const nav = document.getElementById('navbar');
  if (nav) {
    const upd = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', upd, {passive:true});
    upd();
  }

  /* Hamburger */
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('navMenu');
  if (ham && menu) {
    ham.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      ham.setAttribute('aria-expanded', open);
    });
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => { menu.classList.remove('open'); ham.setAttribute('aria-expanded','false'); })
    );
    document.addEventListener('click', e => {
      if (nav && !nav.contains(e.target)) { menu.classList.remove('open'); ham.setAttribute('aria-expanded','false'); }
    });
  }

  /* Scroll reveal */
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('on'); ro.unobserve(e.target); } });
  }, {threshold:0.08, rootMargin:'0px 0px -24px 0px'});
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

  /* Imágenes — mostrar cuando cargan */
  document.querySelectorAll('.img-slot img').forEach(img => {
    const show = () => {
      img.classList.add('loaded');
      const ph = img.previousElementSibling;
      if (ph && ph.classList.contains('img-placeholder')) ph.style.display = 'none';
    };
    if (img.complete && img.naturalWidth > 0) show();
    else { img.addEventListener('load', show); img.addEventListener('error', () => img.style.display='none'); }
  });

  /* Filtros catálogo */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.cafe-card').forEach(c => {
        c.style.display = (f === 'all' || c.dataset.cat === f) ? '' : 'none';
      });
    });
  });

  /* WhatsApp — pedir café */
  window.pedirCafe = (nombre, peso, precio) => {
    const msg = `Hola Neira York Coffee! Me interesa el café *${nombre}* (${peso}) — ${precio}. ¿Está disponible?`;
    window.open('https://wa.me/573137663905?text=' + encodeURIComponent(msg), '_blank');
  };

  /* Toggle detalles de servicio */
  window.toggleDetalle = btn => {
    const det = btn.closest('.sv-card').querySelector('.sv-detail');
    const open = det.classList.toggle('open');
    btn.textContent = open ? 'Cerrar' : btn.dataset.label;
  };

  /* Modales */
  window.abrirModal  = id => { const m=document.getElementById(id); if(m){m.classList.add('open');document.body.style.overflow='hidden';} };
  window.cerrarModal = id => { const m=document.getElementById(id); if(m){m.classList.remove('open');document.body.style.overflow='';} };
  window.overlayClick = (e,el) => { if(e.target===el) cerrarModal(el.id); };
  document.addEventListener('keydown', e => {
    if(e.key==='Escape') document.querySelectorAll('.modal-overlay.open').forEach(m=>cerrarModal(m.id));
  });
})();
