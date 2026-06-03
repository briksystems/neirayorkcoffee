/* sections/hero-servicios.js — Hero para la página servicios.html */
(function(){
document.getElementById('s-hero-sv').innerHTML = `
<style>
#hero-sv{
  min-height: 55vh;
  display: flex; align-items: flex-end;
  padding-top: 68px;
  position: relative; overflow: hidden;
  background: var(--navy);
}
.hsv-bg{
  position:absolute;inset:0;
  background:
    linear-gradient(160deg, rgba(13,27,62,.7) 0%, rgba(13,27,62,.5) 100%),
    url('assets/img/landing-campo.jpg') center/cover no-repeat;
  background-color: var(--navy);
}
/* Patrón decorativo */
.hsv-bg::after{
  content:'';position:absolute;inset:0;
  background: url('assets/img/logo-badge.png') right -60px center/380px no-repeat;
  opacity:.06;
}
.hsv-content{
  position:relative;z-index:1;
  padding:4rem 0;
}
.hsv-breadcrumb{
  display:flex;align-items:center;gap:8px;
  font-size:.68rem;font-weight:500;letter-spacing:.15em;text-transform:uppercase;
  color:rgba(255,255,255,.45);
  margin-bottom:1.25rem;
}
.hsv-breadcrumb a{color:rgba(255,255,255,.45);transition:color .2s}
.hsv-breadcrumb a:hover{color:rgba(255,255,255,.8)}
.hsv-breadcrumb .sep{color:rgba(255,255,255,.2)}
.hsv-title{
  font-family:var(--f-serif);
  font-size:clamp(2.8rem,6vw,5.5rem);
  font-weight:600; letter-spacing:.01em; line-height:.92;
  color:var(--white);
  margin-bottom:.75rem;
}
.hsv-title em{
  font-family:var(--f-script);
  font-size:clamp(1.8rem,4vw,3.5rem);
  color:var(--gold);font-style:normal;display:block;
}
.hsv-desc{
  font-family:var(--f-serif);font-size:1.05rem;
  color:rgba(255,255,255,.6);line-height:1.75;
  max-width:480px;
}
</style>

<section id="hero-sv">
  <div class="hsv-bg"></div>
  <div class="container">
    <div class="hsv-content reveal">
      <div class="hsv-breadcrumb">
        <a href="index.html">Inicio</a>
        <span class="sep">/</span>
        <span>Para Caficultores y Emprendedores</span>
      </div>
      <h1 class="hsv-title">
        PARA CAFICULTORES<br>
        <em>y emprendedores</em>
      </h1>
      <p class="hsv-desc">
        Más de 20 años de experiencia en el sector cafetero al servicio
        de tu cultivo, tu marca y tu negocio.
      </p>
    </div>
  </div>
</section>

<div class="stripe">
  <div class="stripe-track">
    <span>LABORATORIO SCA</span><span class="sep">·</span>
    <span>MAQUILA Y EMPAQUE</span><span class="sep">·</span>
    <span>CONSULTORÍA DE MARCAS</span><span class="sep">·</span>
    <span>ASISTENCIA AGRONÓMICA</span><span class="sep">·</span>
    <span>CURSOS Y CAPACITACIONES</span><span class="sep">·</span>
    <span>EXPORTACIÓN INTERNACIONAL</span><span class="sep">·</span>
    <span>LABORATORIO SCA</span><span class="sep">·</span>
    <span>MAQUILA Y EMPAQUE</span><span class="sep">·</span>
    <span>CONSULTORÍA DE MARCAS</span><span class="sep">·</span>
    <span>ASISTENCIA AGRONÓMICA</span><span class="sep">·</span>
    <span>CURSOS Y CAPACITACIONES</span><span class="sep">·</span>
    <span>EXPORTACIÓN INTERNACIONAL</span><span class="sep">·</span>
  </div>
</div>
`; })();
