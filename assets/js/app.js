/* ================================================================
   NEIRA YORK COFFEE — app.js
   Lógica global: navbar, reveal, filtros, modales, WhatsApp.
   Se ejecuta DESPUÉS de que todas las secciones han cargado.
   ================================================================ */

(function () {

  /* ── Ocultar loader ── */
  const loader = document.getElementById('page-loader');
  if (loader) loader.classList.add('done');

  /* ── Navbar scroll ── */
  const nav = document.getElementById('navbar');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Hamburger ── */
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('navMenu');
  if (ham && menu) {
    ham.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      ham.setAttribute('aria-expanded', open);
    });
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false');
      })
    );
    document.addEventListener('click', e => {
      if (!nav.contains(e.target)) {
        menu.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Scroll Reveal ── */
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('on'); ro.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

  /* ── Filtros del catálogo de cafés ── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.cafe-card').forEach(card => {
        card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
      });
    });
  });

  /* ── Pedir café por WhatsApp ── */
  window.pedirCafe = function (nombre, peso, precio) {
    const msg = `Hola Neira York Coffee! Me interesa el café *${nombre}* (${peso}) — ${precio}. ¿Está disponible para pedido?`;
    window.open('https://wa.me/573137663905?text=' + encodeURIComponent(msg), '_blank');
  };

  /* ── Toggle detalles de servicio ── */
  window.toggleDetalle = function (btn) {
    const det  = btn.closest('.sv-card').querySelector('.sv-detail');
    const open = det.classList.toggle('open');
    btn.textContent = open ? 'Cerrar' : btn.dataset.label;
  };

  /* ── Sistema de Modales ── */
  window.abrirModal = function (id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.cerrarModal = function (id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.remove('open');
    document.body.style.overflow = '';
  };
  window.overlayClick = function (e, el) {
    if (e.target === el) cerrarModal(el.id);
  };
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape')
      document.querySelectorAll('.modal-overlay.open').forEach(m => cerrarModal(m.id));
  });

  /* ── Active nav link ── */
  window.addEventListener('scroll', () => {
    let cur = '';
    document.querySelectorAll('section[id]').forEach(s => {
      if (window.scrollY >= s.offsetTop - 130) cur = s.id;
    });
    document.querySelectorAll('.nav-link').forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--red)' : '';
    });
  }, { passive: true });

})();
