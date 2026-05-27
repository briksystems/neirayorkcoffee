/* ================================================================
   sections/quienes.js — Quiénes Somos + Historia + Mom Coffee
   EDITAR: textos descriptivos, eventos del timeline,
           botón de Mom Coffee abre un modal
   ================================================================ */
(function () {
  document.getElementById('s-quienes').innerHTML = `

<style>
#quienes { padding: 6rem 0; background: var(--cream); }
.q-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 5rem; align-items: center;
}
.q-img { position: relative; }
.q-img img { width: 100%; height: 520px; object-fit: cover; border-radius: var(--r); }
.q-stamp {
  position: absolute; bottom: -18px; right: -18px;
  background: var(--navy); color: var(--white);
  padding: 1.5rem 2rem; min-width: 160px;
}
.q-stamp .big { font-family: var(--f-head); font-size: 2.4rem; color: var(--red); line-height: 1; }
.q-stamp .lbl {
  font-size: .6rem; font-weight: 500; letter-spacing: .15em;
  text-transform: uppercase; opacity: .65; line-height: 1.5; margin-top: 3px;
}
.q-text p { font-family: var(--f-serif); font-size: 1.05rem; line-height: 1.8; color: var(--ink2); margin-bottom: 1rem; }
.q-tl { margin-top: 2rem; padding-left: 1.5rem; border-left: 2px solid var(--red); }
.q-tl-item { margin-bottom: 1.2rem; padding-left: 1.2rem; position: relative; }
.q-tl-item::before {
  content: ''; position: absolute; left: -1.34rem; top: 6px;
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--red); border: 2px solid var(--cream);
}
.q-year { font-family: var(--f-head); font-size: 1rem; letter-spacing: .1em; color: var(--red); }
.q-fact { font-size: .88rem; color: var(--ink2); line-height: 1.6; }

/* Banner Mom Coffee */
#mom-banner { background: var(--cream2); border-top: 1px solid var(--border); padding: 2.5rem 0; }
.mb-inner {
  display: flex; align-items: center; justify-content: space-between;
  gap: 2rem; flex-wrap: wrap;
}
.mb-text h3 { font-family: var(--f-head); font-size: 1.5rem; letter-spacing: .08em; color: var(--ink); }
.mb-text h3 em { font-family: var(--f-script); font-size: 1.1rem; color: var(--gold); font-style: normal; }
.mb-text p { font-size: .88rem; color: var(--ink2); margin-top: .3rem; }

@media (max-width: 900px) {
  .q-grid { grid-template-columns: 1fr; gap: 3rem; }
  .q-img img { height: 300px; }
  .q-stamp { right: 0; }
}
</style>

<section id="quienes">
  <div class="container">
    <div class="q-grid">

      <!-- ── IMAGEN — reemplaza el src por tu foto real ── -->
      <div class="q-img reveal">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=85"
          alt="Neira York Coffee — tostión artesanal"
        />
        <div class="q-stamp">
          <div class="big">2028</div>
          <div class="lbl">Meta líderes<br>café especial</div>
        </div>
      </div>

      <!-- ── TEXTO ── -->
      <div class="reveal d2">
        <div class="sec-head">
          <div class="sec-rule"></div>
          <h2>QUIÉNES<br><em>somos</em></h2>
        </div>
        <p>Somos una empresa comercializadora de café comprometida con el reconocimiento de los caficultores de nuestra región. Con más de 20 años de experiencia en el sector, brindamos acompañamiento en todas las etapas de producción.</p>
        <p>Nuestros servicios abarcan desde consultoría en la siembra, hasta la experiencia del servicio en mesa — todo en un mismo lugar.</p>

        <!-- ── TIMELINE — agrega o edita eventos aquí ── -->
        <div class="q-tl">
          <div class="q-tl-item">
            <div class="q-year">2020</div>
            <div class="q-fact">Nace la <strong>Asociación Mom Coffee</strong> con 20 mujeres caficultoras de la región.</div>
          </div>
          <div class="q-tl-item">
            <div class="q-year">2021</div>
            <div class="q-fact">Apertura del local <strong>Neira York Coffee</strong>. Inicio de tostión y laboratorio.</div>
          </div>
          <div class="q-tl-item">
            <div class="q-year">2022</div>
            <div class="q-fact">Se incorpora el <strong>Coffee Shop</strong> y nuevas unidades de negocio.</div>
          </div>
          <div class="q-tl-item">
            <div class="q-year">2025</div>
            <div class="q-fact">Exportación a <strong>Canadá y España</strong>. Referentes en café especial del Eje Cafetero.</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ── BANNER MOM COFFEE — lleva al modal ── -->
<div id="mom-banner">
  <div class="container">
    <div class="mb-inner">
      <div class="mb-text reveal">
        <h3>Mom Coffee — <em>Mujeres de otro mundo del café</em></h3>
        <p>Asociación de mujeres cafeteras del Eje Cafetero. Cada compra apoya directamente a sus familias.</p>
      </div>
      <button class="btn btn-outline reveal d2" onclick="abrirModal('modal-mom')">
        Conocer el proyecto
      </button>
    </div>
  </div>
</div>

<!-- ══════ MODAL MOM COFFEE ══════ -->
<div class="modal-overlay" id="modal-mom" onclick="overlayClick(event, this)">
  <div class="modal-box">
    <button class="modal-close" onclick="cerrarModal('modal-mom')">&times;</button>
    <div class="modal-label">Causa Social</div>
    <div class="modal-title">MOM COFFEE</div>
    <div class="modal-sub">Mujeres de otro mundo del café</div>
    <div class="modal-rule"></div>
    <div class="modal-highlight">
      "¿Qué sería de la caficultura sin el amor, el compromiso y la delicadeza de la mujer rural cafetera?"
    </div>
    <div class="modal-body">
      <p>Mom Coffee es una asociación de mujeres cafeteras creada en 2021, conformada inicialmente por 20 mujeres. Nace como homenaje a su trabajo, compromiso, amor y dedicación por el campo y sus familias.</p>
      <p>Desde Neira York Coffee se asesora y apoya a las mujeres de la asociación, garantizando que su producción sea de la mejor calidad. El café es procesado por NYCoffee, agregando valor desde la tostión y trilla para optimizarlo para exportación.</p>
      <p>Hoy, Mom Coffee ha evolucionado a una asociación de unidad familiar cafetera — los esposos e hijos se convirtieron en sus mejores aliados.</p>
    </div>
    <div class="modal-navy-block">
      <div class="modal-stat"><div class="n">20</div><div class="l">Familias<br>asociadas</div></div>
      <div class="modal-stat"><div class="n">2</div><div class="l">Países de<br>exportación</div></div>
      <div class="modal-stat"><div class="n">2021</div><div class="l">Año de<br>fundación</div></div>
    </div>
    <a href="https://wa.me/573137663905?text=Hola!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20proyecto%20Mom%20Coffee."
       target="_blank" class="btn btn-wa">
      Consultar sobre Mom Coffee
    </a>
  </div>
</div>

`;
})();
