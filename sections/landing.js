/* ================================================================
   sections/landing.js — Entrada dividida en dos paneles
   EDITAR:
   - Panel izquierdo: foto en assets/img/landing-cafes.jpg
   - Panel derecho:   foto en assets/img/landing-campo.jpg
   - Textos de cada panel
   ================================================================ */
(function(){
document.getElementById('s-landing').innerHTML = `
<style>
#landing{
  height: 100vh; min-height: 600px;
  display: flex;
  padding-top: 68px;
}

/* ── Cada panel ── */
.lp {
  position: relative;
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 3.5rem;
  cursor: pointer;
  transition: flex .6s cubic-bezier(.4,0,.2,1);
  text-decoration: none;
}
.lp:hover { flex: 1.35; }

/* Imagen de fondo de cada panel */
.lp-bg {
  position: absolute; inset: 0;
  transition: transform .6s cubic-bezier(.4,0,.2,1);
}
.lp-bg .img-slot {
  width: 100%; height: 100%;
}
.lp-bg .img-slot .img-placeholder {
  background: transparent;
}
.lp-bg .img-slot .img-placeholder .ph-icon,
.lp-bg .img-slot .img-placeholder .ph-name,
.lp-bg .img-slot .img-placeholder .ph-file {
  color: rgba(255,255,255,.5);
  opacity: 1;
}
.lp:hover .lp-bg { transform: scale(1.03); }

/* Overlay de color sobre la imagen */
.lp-overlay {
  position: absolute; inset: 0;
  transition: opacity .4s;
}
.lp-left  .lp-overlay { background: linear-gradient(160deg, rgba(13,27,62,.15) 0%, rgba(13,27,62,.75) 100%); }
.lp-right .lp-overlay { background: linear-gradient(160deg, rgba(13,27,62,.5)  0%, rgba(13,27,62,.88) 100%); }

/* Fondo de color de respaldo (cuando no hay imagen) */
.lp-left  .lp-bg .img-slot { background: #2C3E50; }
.lp-right .lp-bg .img-slot { background: var(--navy); }

/* Divisor vertical */
.lp-divider {
  position: absolute; top: 10%; bottom: 10%;
  right: 0; width: 1px;
  background: rgba(255,255,255,.2);
  z-index: 2;
}

/* Contenido del panel */
.lp-content {
  position: relative; z-index: 3;
  color: var(--white);
  max-width: 420px;
}
.lp-tag {
  font-size: .68rem; font-weight: 500; letter-spacing: .25em;
  text-transform: uppercase; color: rgba(255,255,255,.6);
  margin-bottom: .75rem;
  transform: translateY(8px); opacity: 0;
  transition: transform .5s .1s var(--ease), opacity .5s .1s var(--ease);
}
.lp-title {
  font-family: var(--f-head);
  font-size: clamp(2.5rem, 4.5vw, 4.8rem);
  letter-spacing: .04em; line-height: .92;
  margin-bottom: 1.1rem;
  transform: translateY(10px); opacity: 0;
  transition: transform .5s .2s var(--ease), opacity .5s .2s var(--ease);
}
.lp-title em {
  font-family: var(--f-script);
  font-size: clamp(1.6rem, 3vw, 3rem);
  color: var(--gold); font-style: normal;
  display: block; line-height: 1.2;
}
.lp-desc {
  font-family: var(--f-serif); font-size: 1rem; line-height: 1.7;
  color: rgba(255,255,255,.7); max-width: 340px;
  margin-bottom: 2rem;
  transform: translateY(10px); opacity: 0;
  transition: transform .5s .3s var(--ease), opacity .5s .3s var(--ease);
}
.lp-cta {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--f-body); font-size: .82rem; font-weight: 500;
  letter-spacing: .12em; text-transform: uppercase;
  color: var(--white); border-bottom: 1.5px solid rgba(255,255,255,.5);
  padding-bottom: 3px; transition: border-color .25s, gap .25s;
  transform: translateY(10px); opacity: 0;
  transition: transform .5s .4s var(--ease), opacity .5s .4s var(--ease), border-color .25s, gap .25s;
}
.lp:hover .lp-cta { border-color: var(--white); gap: 14px; }
.lp-arrow { font-size: 1.1rem; transition: transform .25s; }
.lp:hover .lp-arrow { transform: translateX(4px); }

/* Número grande decorativo */
.lp-num {
  position: absolute; top: 2rem; right: 2.5rem;
  font-family: var(--f-head); font-size: 8rem;
  line-height: 1; letter-spacing: .05em;
  color: rgba(255,255,255,.06); z-index: 2;
  pointer-events: none; user-select: none;
}

/* Animación de entrada al cargar */
.lp-ready .lp-tag,
.lp-ready .lp-title,
.lp-ready .lp-desc,
.lp-ready .lp-cta { opacity: 1; transform: none; }

/* Responsive */
@media(max-width: 768px){
  #landing { flex-direction: column; height: auto; min-height: auto; }
  .lp { min-height: 55vh; padding: 2.5rem 1.5rem; }
  .lp:hover { flex: 1; }
  .lp-num { font-size: 5rem; }
  .lp-divider { display: none; }
}
</style>

<section id="landing">

  <!-- ══ PANEL IZQUIERDO: NUESTROS CAFÉS ══ -->
  <a href="#cafes" class="lp lp-left" id="lp-left">

    <!-- Imagen de fondo -->
    <!-- FOTO: sube tu imagen a assets/img/landing-cafes.jpg -->
    <div class="lp-bg">
      <div class="img-slot" style="height:100%">
        <div class="img-placeholder">
          <div class="ph-icon">☕</div>
          <div class="ph-name">FOTO TIENDA / CAFÉ</div>
          <div class="ph-file">assets/img/landing-cafes.jpg</div>
        </div>
        <img src="assets/img/landing-cafes.jpg" alt="Nuestros Cafés"/>
      </div>
    </div>
    <div class="lp-overlay"></div>
    <div class="lp-divider"></div>
    <div class="lp-num">01</div>

    <div class="lp-content">
      <div class="lp-tag">Tienda online</div>
      <div class="lp-title">
        NUESTROS<br>
        <em>cafés</em>
      </div>
      <p class="lp-desc">
        Más de 16 variedades de café especial seleccionadas del corazón del Eje Cafetero. Despachos a todo Colombia.
      </p>
      <div class="lp-cta">
        Ver catálogo <span class="lp-arrow">→</span>
      </div>
    </div>

  </a>

  <!-- ══ PANEL DERECHO: PARA CAFICULTORES Y EMPRENDEDORES ══ -->
  <a href="#servicios" class="lp lp-right" id="lp-right">

    <!-- Imagen de fondo -->
    <!-- FOTO: sube tu imagen a assets/img/landing-campo.jpg -->
    <div class="lp-bg">
      <div class="img-slot" style="height:100%">
        <div class="img-placeholder">
          <div class="ph-icon">🌱</div>
          <div class="ph-name">FOTO CAFETAL / CAMPO</div>
          <div class="ph-file">assets/img/landing-campo.jpg</div>
        </div>
        <img src="assets/img/landing-campo.jpg" alt="Para Caficultores"/>
      </div>
    </div>
    <div class="lp-overlay"></div>
    <div class="lp-num">02</div>

    <div class="lp-content">
      <div class="lp-tag">Servicios especializados</div>
      <div class="lp-title">
        PARA<br>CAFICULTORES<br>
        <em>y emprendedores</em>
      </div>
      <p class="lp-desc">
        Laboratorio, maquila, consultoría, cursos y más. Todo lo que necesitas para impulsar tu café o tu negocio.
      </p>
      <div class="lp-cta">
        Ver servicios <span class="lp-arrow">→</span>
      </div>
    </div>

  </a>

</section>

<!-- Franja roja -->
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

<script>
// Animar contenido al cargar
setTimeout(() => {
  document.querySelectorAll('.lp').forEach(p => p.classList.add('lp-ready'));
}, 200);
</script>
`; })();
