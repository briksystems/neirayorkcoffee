/* sections/quienes.js — Quiénes Somos con badge decorativo */
(function(){
document.getElementById('s-quienes').innerHTML = `
<style>
#quienes{padding:6rem 0;background:var(--navy);position:relative;overflow:hidden}
/* Badge como marca de agua decorativa */
#quienes::after{
  content:'';
  position:absolute;right:-80px;top:50%;transform:translateY(-50%);
  width:400px;height:400px;
  background:url('assets/img/logo-badge.png') center/contain no-repeat;
  opacity:.05;pointer-events:none;
}
.q-wrap{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;position:relative;z-index:1}
.q-img-slot{aspect-ratio:3/4;border-radius:var(--r);overflow:hidden}
.q-img-slot .img-slot{width:100%;height:100%}
.q-img-slot .img-placeholder{background:rgba(255,255,255,.05)}
.q-img-slot .ph-icon,.q-img-slot .ph-name,.q-img-slot .ph-file{color:rgba(255,255,255,.35)!important;opacity:1!important}
.q-text .sec-rule{background:rgba(255,255,255,.3)}
.q-text h2{color:var(--white)}
.q-text p{font-family:var(--f-serif);font-size:1.05rem;color:rgba(255,255,255,.65);line-height:1.8;margin-bottom:1rem}
.q-tl{margin-top:2rem;padding-left:1.5rem;border-left:2px solid rgba(200,16,46,.5)}
.q-tl-item{position:relative;padding-left:1.2rem;margin-bottom:1.2rem}
.q-tl-item::before{content:'';position:absolute;left:-1.34rem;top:6px;width:10px;height:10px;border-radius:50%;background:var(--red);border:2px solid var(--navy)}
.q-year{font-family:var(--f-head);font-size:1rem;letter-spacing:.1em;color:var(--red)}
.q-fact{font-size:.88rem;color:rgba(255,255,255,.6);line-height:1.6}
/* Mom banner */
#mom-banner{background:var(--cream2);border-top:1px solid var(--border);padding:2.5rem 0}
.mb-wrap{display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap}
.mb-text h3{font-family:var(--f-head);font-size:1.5rem;letter-spacing:.08em;color:var(--ink)}
.mb-text h3 em{font-family:var(--f-script);font-size:1.1rem;color:var(--gold);font-style:normal}
.mb-text p{font-size:.88rem;color:var(--ink2);margin-top:.3rem}
@media(max-width:900px){.q-wrap{grid-template-columns:1fr;gap:3rem}#quienes::after{display:none}}
</style>

<section id="quienes">
  <div class="container">
    <div class="q-wrap">

      <div class="q-img-slot reveal">
        <!-- IMAGEN → assets/img/quienes.jpg -->
        <div class="img-slot">
          <div class="img-placeholder">
            <div class="ph-icon">📷</div>
            <div class="ph-name">FOTO EQUIPO / TIENDA</div>
            <div class="ph-file">assets/img/quienes.jpg</div>
          </div>
          <img src="assets/img/quienes.jpg" alt="Neira York Coffee"/>
        </div>
      </div>

      <div class="q-text reveal d2">
        <div class="sec-rule"></div>
        <h2>QUIÉNES<br><em>somos</em></h2>
        <p>Somos una empresa comercializadora de café comprometida con el reconocimiento de los caficultores de nuestra región. Con más de 20 años de experiencia brindamos acompañamiento en todas las etapas de producción.</p>
        <p>Nuestros servicios van desde la consultoría en siembra, hasta la experiencia en mesa — todo en un mismo lugar.</p>
        <div class="q-tl">
          <div class="q-tl-item"><div class="q-year">2020</div><div class="q-fact">Nace la <strong>Asociación Mom Coffee</strong> con 20 mujeres caficultoras.</div></div>
          <div class="q-tl-item"><div class="q-year">2021</div><div class="q-fact">Apertura de <strong>Neira York Coffee</strong>. Inicio de tostión y laboratorio.</div></div>
          <div class="q-tl-item"><div class="q-year">2022</div><div class="q-fact">Se incorpora el <strong>Coffee Shop</strong> y nuevas unidades de negocio.</div></div>
          <div class="q-tl-item"><div class="q-year">2025</div><div class="q-fact">Exportación a <strong>Canadá y España</strong>. Referentes del Eje Cafetero.</div></div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Banner Mom Coffee -->
<div id="mom-banner">
  <div class="container">
    <div class="mb-wrap">
      <div class="mb-text reveal">
        <h3>Mom Coffee — <em>Mujeres de otro mundo del café</em></h3>
        <p>Asociación de 20 familias cafeteras. Cada compra apoya directamente a su comunidad.</p>
      </div>
      <button class="btn btn-outline reveal d2" onclick="abrirModal('modal-mom')">Conocer el proyecto</button>
    </div>
  </div>
</div>

<!-- Modal Mom Coffee -->
<div class="modal-overlay" id="modal-mom" onclick="overlayClick(event,this)">
  <div class="modal-box">
    <button class="modal-close" onclick="cerrarModal('modal-mom')">&times;</button>
    <div class="modal-tag">Causa Social</div>
    <div class="modal-title">MOM COFFEE</div>
    <div class="modal-sub">Mujeres de otro mundo del café</div>
    <div class="modal-rule"></div>
    <div class="modal-highlight">"¿Qué sería de la caficultura sin el amor, el compromiso y la delicadeza de la mujer rural cafetera?"</div>
    <div class="modal-body">
      <p>Mom Coffee nació en 2021 con 20 mujeres caficultoras de la región como homenaje a su trabajo, compromiso y dedicación por el campo y sus familias.</p>
      <p>Desde Neira York Coffee se asesora y acompaña a las mujeres, garantizando calidad en su producción. El café es procesado por NYCoffee para exportación a Canadá y España.</p>
      <p>Hoy Mom Coffee es una asociación de unidad familiar — esposos e hijos se convirtieron en sus mejores aliados.</p>
    </div>
    <div class="modal-navy">
      <div class="m-stat"><div class="n">20</div><div class="l">Familias asociadas</div></div>
      <div class="m-stat"><div class="n">2</div><div class="l">Países exportación</div></div>
      <div class="m-stat"><div class="n">2021</div><div class="l">Año fundación</div></div>
    </div>
    <a href="https://wa.me/573137663905?text=Hola!%20Me%20interesa%20el%20proyecto%20Mom%20Coffee." target="_blank" class="btn btn-wa">
      Consultar sobre Mom Coffee
    </a>
  </div>
</div>
`; })();
