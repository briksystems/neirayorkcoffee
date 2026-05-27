/* sections/clientes.js — Clientes y Aliados
   EDITAR: agrega o quita nombres de .cl-pill y .aliado */
(function () {
  document.getElementById('s-clientes').innerHTML = `
<style>
#clientes { padding: 5rem 0; background: var(--cream); }
.cl-logos { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin-top: 2rem; }
.cl-pill { background: var(--white); border: 1px solid var(--border); padding: 12px 24px; font-size: .8rem; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; color: var(--ink); transition: all .2s; }
.cl-pill:hover { background: var(--navy); color: var(--white); border-color: var(--navy); }
.aliados-wrap { margin-top: 3rem; }
.aliados-wrap h3 { font-family: var(--f-head); font-size: 1rem; letter-spacing: .2em; color: var(--ink2); margin-bottom: 1rem; }
.aliados-list { display: flex; flex-wrap: wrap; gap: .7rem; }
.aliado { padding: 7px 16px; border: 1px solid var(--border); font-size: .75rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; color: var(--ink2); background: var(--white); transition: all .2s; }
.aliado:hover { background: var(--red); color: var(--white); border-color: var(--red); }
</style>
<section id="clientes">
  <div class="container">
    <div class="sec-head c reveal">
      <div class="sec-rule c"></div>
      <h2>CLIENTES &<br><em>aliados</em></h2>
    </div>
    <!-- ── CLIENTES — agrega o quita tarjetas aquí ── -->
    <div class="cl-logos reveal">
      <div class="cl-pill">Café Tinto</div>
      <div class="cl-pill">Laderas del Tapias</div>
      <div class="cl-pill">Mister Coffee</div>
      <div class="cl-pill">El Roble</div>
      <div class="cl-pill">Café Chela</div>
    </div>
    <!-- ── ALIADOS — agrega o quita tags aquí ── -->
    <div class="aliados-wrap reveal d2">
      <h3>ALIADOS ESTRATÉGICOS</h3>
      <div class="aliados-list">
        <div class="aliado">Invercafe</div>
        <div class="aliado">Métodos Típica</div>
        <div class="aliado">PAC Vision</div>
        <div class="aliado">Bayer</div>
        <div class="aliado">Yara</div>
        <div class="aliado">Rio Claro</div>
      </div>
    </div>
  </div>
</section>
`;
})();
