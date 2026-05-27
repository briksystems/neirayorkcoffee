/* ================================================================
   sections/servicios.js — Los 9 Servicios
   EDITAR: descripción corta, detalles expandibles, precios,
           número de WhatsApp en cada btn-wa
   ================================================================ */
(function () {
  document.getElementById('s-servicios').innerHTML = `

<style>
#servicios { padding: 6rem 0; background: var(--white); }
.sv-grid {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: 1px; background: var(--border);
  border: 1px solid var(--border);
  margin-top: 3rem;
}
.sv-card {
  background: var(--white); padding: 2rem 1.8rem;
  transition: background .2s;
}
.sv-card:hover { background: var(--cream); }
.sv-num {
  font-family: var(--f-head); font-size: 2.5rem;
  letter-spacing: .05em; color: var(--cream2); line-height: 1;
  margin-bottom: .75rem; transition: color .2s;
}
.sv-card:hover .sv-num { color: var(--red); }
.sv-title {
  font-family: var(--f-head); font-size: 1.05rem;
  letter-spacing: .08em; color: var(--ink); margin-bottom: .55rem;
}
.sv-short { font-size: .87rem; color: var(--ink2); line-height: 1.65; margin-bottom: 1.1rem; }
.sv-actions { display: flex; gap: .6rem; flex-wrap: wrap; align-items: center; }
.sv-ver-btn {
  font-size: .73rem; font-weight: 500; letter-spacing: .08em; text-transform: uppercase;
  color: var(--red); border-bottom: 1px solid var(--red);
  padding-bottom: 1px; cursor: pointer;
  background: none; border-left: none; border-right: none; border-top: none;
  transition: opacity .2s; font-family: var(--f-body);
}
.sv-ver-btn:hover { opacity: .65; }
/* Detalle expandible */
.sv-detail { display: none; margin-top: 1.2rem; padding-top: 1.2rem; border-top: 1px solid var(--border); }
.sv-detail.open { display: block; }
.sv-detail p { font-size: .87rem; color: var(--ink2); line-height: 1.7; margin-bottom: .75rem; }
.sv-detail strong { color: var(--ink); }
/* Mini-tabla de precios dentro del servicio */
.sv-table { width: 100%; border-collapse: collapse; font-size: .82rem; margin: .6rem 0; }
.sv-table th {
  text-align: left; font-size: .62rem; font-weight: 500;
  letter-spacing: .12em; text-transform: uppercase; color: var(--ink2);
  padding: 5px 6px; border-bottom: 1px solid var(--border);
}
.sv-table td { padding: 7px 6px; border-bottom: 1px solid var(--border); }
.sv-table tr:last-child td { border-bottom: none; }
.sv-table .pv { font-weight: 600; color: var(--red); }
.sv-note { font-size: .76rem; color: var(--ink2); font-style: italic; }

@media (max-width: 900px) { .sv-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 600px) { .sv-grid { grid-template-columns: 1fr; } }
</style>

<section id="servicios">
  <div class="container">

    <div class="sec-head reveal">
      <div class="sec-rule"></div>
      <h2>NUESTROS<br><em>servicios</em></h2>
      <p>Desde el cultivo hasta la taza, tenemos todo lo que el mundo del café necesita en un mismo lugar.</p>
    </div>

    <div class="sv-grid">

      <!-- ══ 01 COFFEE SHOP ══ -->
      <div class="sv-card reveal d1">
        <div class="sv-num">01</div>
        <div class="sv-title">COFFEE SHOP</div>
        <div class="sv-short">Experiencia sensorial completa en tienda, con las mejores preparaciones y acompañantes.</div>
        <div class="sv-actions">
          <button class="sv-ver-btn" data-label="Ver detalles" onclick="toggleDetalle(this)">Ver detalles</button>
          <a href="https://wa.me/573137663905?text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20el%20Coffee%20Shop."
             target="_blank" class="btn btn-wa btn-sm">WhatsApp</a>
        </div>
        <div class="sv-detail">
          <p>Disfruta de las mejores preparaciones y vive un ritual con nuestra bebida insignia. Atención a la mesa con preparaciones derivadas del café y acompañantes como tortas, waffles y dulcería.</p>
          <p>Km 2 Vía Neira - Manizales, Sector Cielito Lindo.</p>
        </div>
      </div>

      <!-- ══ 02 MAQUILA + EMPAQUE ══ -->
      <div class="sv-card reveal d2">
        <div class="sv-num">02</div>
        <div class="sv-title">MAQUILA Y EMPAQUE</div>
        <div class="sv-short">Tostión, trilla y empaque con respaldo INVIMA. A partir de 1 arroba (12.5 kg).</div>
        <div class="sv-actions">
          <button class="sv-ver-btn" data-label="Ver precios" onclick="toggleDetalle(this)">Ver precios</button>
          <a href="https://wa.me/573137663905?text=Hola!%20Me%20interesa%20el%20servicio%20de%20maquila%20y%20empaque."
             target="_blank" class="btn btn-wa btn-sm">WhatsApp</a>
        </div>
        <div class="sv-detail">
          <p><strong>Maquila de café</strong></p>
          <table class="sv-table">
            <thead><tr><th>Café inicial</th><th>Trilla $/Kg</th><th>Tostión $/Lb</th></tr></thead>
            <tbody>
              <tr><td>Pergamino seco</td><td class="pv">$1.500</td><td class="pv">$1.800</td></tr>
              <tr><td>Cáscara seca</td><td class="pv">$2.000</td><td class="pv">$1.800</td></tr>
              <tr><td>Verde</td><td>—</td><td class="pv">$1.800</td></tr>
            </tbody>
          </table>
          <p><strong>Empaque por unidad</strong></p>
          <table class="sv-table">
            <thead><tr><th>Gramos</th><th>Tradicional</th><th>Premium</th></tr></thead>
            <tbody>
              <tr><td>250g</td><td class="pv">$2.200</td><td class="pv">$2.500</td></tr>
              <tr><td>340g</td><td class="pv">$2.800</td><td>—</td></tr>
              <tr><td>500g</td><td class="pv">$2.500</td><td class="pv">$2.800</td></tr>
              <tr><td>2.500g</td><td class="pv">$3.000</td><td>—</td></tr>
              <tr><td>5.000g</td><td colspan="2">Por cotización</td></tr>
            </tbody>
          </table>
          <p class="sv-note">Drip 13g: $3.000/unidad · Colores: negro, blanco, rojo, azul, dorado, rosado, verde y más.</p>
        </div>
      </div>

      <!-- ══ 03 LABORATORIO ══ -->
      <div class="sv-card reveal d3">
        <div class="sv-num">03</div>
        <div class="sv-title">LABORATORIO DE CALIDAD</div>
        <div class="sv-short">Catación, perfilado y puntuación SCA. A la vanguardia de la industria mundial.</div>
        <div class="sv-actions">
          <button class="sv-ver-btn" data-label="Ver precios" onclick="toggleDetalle(this)">Ver precios</button>
          <a href="https://wa.me/573137663905?text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20el%20Laboratorio%20de%20Calidad."
             target="_blank" class="btn btn-wa btn-sm">WhatsApp</a>
        </div>
        <div class="sv-detail">
          <p>Con una muestra de tu café catamos, perfilamos y puntuamos para potencializar sabores. Recibimos 1 libra (500g) de café pergamino seco o cereza seca.</p>
          <table class="sv-table">
            <thead><tr><th>Muestras</th><th>Análisis incluidos</th><th>Precio</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Físico + Sensorial + Humedad</td><td class="pv">$150.000</td></tr>
            </tbody>
          </table>
          <p class="sv-note">Para más muestras o análisis diferentes se genera cotización.</p>
        </div>
      </div>

      <!-- ══ 04 CURSOS ══ -->
      <div class="sv-card reveal d1">
        <div class="sv-num">04</div>
        <div class="sv-title">CURSOS Y CAPACITACIONES</div>
        <div class="sv-short">Escuela experta en Agronomía, Catación y Barismo. Dos formatos disponibles.</div>
        <div class="sv-actions">
          <button class="sv-ver-btn" data-label="Ver programas" onclick="toggleDetalle(this)">Ver programas</button>
          <a href="https://wa.me/573137663905?text=Hola!%20Me%20interesa%20inscribirme%20a%20un%20curso."
             target="_blank" class="btn btn-wa btn-sm">WhatsApp</a>
        </div>
        <div class="sv-detail">
          <p><strong>Opción 1 — Programa completo (4 días) — $1.000.000/persona</strong><br>
          Día de campo, laboratorio sensorial, análisis físico con metodología SCA y preparación con métodos de extracción.</p>
          <p><strong>Opción 2 — Intensivo (8 horas) — $400.000/persona</strong><br>
          Historia, variedades, fermentación, cultivos, catación, tostión y métodos de preparación.</p>
          <p><strong>Opción 3 — Personalizado</strong><br>
          Ajustado a los requerimientos de tu empresa u organización. Precio según alcance.</p>
        </div>
      </div>

      <!-- ══ 05 EVENTOS ══ -->
      <div class="sv-card reveal d2">
        <div class="sv-num">05</div>
        <div class="sv-title">EVENTOS EMPRESARIALES Y SOCIALES</div>
        <div class="sv-short">Tu marca en las mejores manos. Aforo hasta 60 personas.</div>
        <div class="sv-actions">
          <button class="sv-ver-btn" data-label="Ver detalles" onclick="toggleDetalle(this)">Ver detalles</button>
          <a href="https://wa.me/573137663905?text=Hola!%20Quiero%20cotizar%20un%20evento."
             target="_blank" class="btn btn-wa btn-sm">Cotizar</a>
        </div>
        <div class="sv-detail">
          <p><strong>Empresariales:</strong> Charlas técnicas, lanzamientos, reuniones gremiales, foros y conversatorios.</p>
          <p><strong>Sociales:</strong> Cumpleaños, grados, baby shower e integraciones familiares.</p>
          <p class="sv-note">Aforo máximo 60 personas. Precio según servicios requeridos.</p>
        </div>
      </div>

      <!-- ══ 06 MÉTODOS ══ -->
      <div class="sv-card reveal d3">
        <div class="sv-num">06</div>
        <div class="sv-title">VENTA DE MÉTODOS</div>
        <div class="sv-short">Chemex, Prensa Francesa, V60, Aeropress, Sifón Japonés y accesorios.</div>
        <div class="sv-actions">
          <button class="sv-ver-btn" data-label="Ver disponibilidad" onclick="toggleDetalle(this)">Ver disponibilidad</button>
          <a href="https://wa.me/573137663905?text=Hola!%20Quiero%20ver%20qu%C3%A9%20m%C3%A9todos%20de%20preparaci%C3%B3n%20tienen."
             target="_blank" class="btn btn-wa btn-sm">WhatsApp</a>
        </div>
        <div class="sv-detail">
          <p>Chemex x3, x4 y x6 tazas · Prensa Francesa x3 y x6 tazas · V60 · Aeropress · Sifón Japonés · Cucharas de catación y más accesorios de barismo.</p>
          <p class="sv-note">Consulta disponibilidad y precios actualizados por WhatsApp.</p>
        </div>
      </div>

      <!-- ══ 07 AGRONOMÍA ══ -->
      <div class="sv-card reveal d1">
        <div class="sv-num">07</div>
        <div class="sv-title">ASISTENCIA AGRONÓMICA</div>
        <div class="sv-short">De la semilla a la mesa. Visitas, asesoría, estudio de suelos y procesos de beneficio.</div>
        <div class="sv-actions">
          <button class="sv-ver-btn" data-label="Ver detalles" onclick="toggleDetalle(this)">Ver detalles</button>
          <a href="https://wa.me/573137663905?text=Hola!%20Necesito%20asistencia%20agron%C3%B3mica%20para%20mi%20cultivo."
             target="_blank" class="btn btn-wa btn-sm">WhatsApp</a>
        </div>
        <div class="sv-detail">
          <p>Visitamos y asesoramos tu cultivo para optimizar los procesos productivos con seguimiento continuo.</p>
          <p>Servicios: Recomendación de variedades según altura y topografía · Asesoría en central de beneficios · Estudio de suelos · Procesos de beneficio del café.</p>
        </div>
      </div>

      <!-- ══ 08 CONSULTORÍA ══ -->
      <div class="sv-card reveal d2">
        <div class="sv-num">08</div>
        <div class="sv-title">CONSULTORÍA DE MARCAS Y COFFEE SHOP</div>
        <div class="sv-short">¿Quieres tu propia marca o tu propio Coffee Shop? Te acompañamos desde cero.</div>
        <div class="sv-actions">
          <button class="sv-ver-btn" data-label="Ver detalles" onclick="toggleDetalle(this)">Ver detalles</button>
          <a href="https://wa.me/573137663905?text=Hola!%20Me%20interesa%20la%20consultor%C3%ADa%20para%20crear%20mi%20propia%20marca%20de%20caf%C3%A9."
             target="_blank" class="btn btn-wa btn-sm">WhatsApp</a>
        </div>
        <div class="sv-detail">
          <p><strong>Tu marca de café:</strong> Perfilamos tu café y te acompañamos en la creación de tu propia marca.</p>
          <p><strong>Tu Coffee Shop:</strong> Consultoría completa desde la conceptualización hasta la puesta en marcha. Nuestra garantía es la experiencia.</p>
          <p class="sv-note">Precio según servicios requeridos. Solicita cotización.</p>
        </div>
      </div>

      <!-- ══ 09 EXPORTACIÓN ══ -->
      <div class="sv-card reveal d3">
        <div class="sv-num">09</div>
        <div class="sv-title">EXPORTACIÓN CAFÉ ESPECIAL</div>
        <div class="sv-short">Amplía tu mercado. Comercializamos café colombiano especial en Canadá y España.</div>
        <div class="sv-actions">
          <button class="sv-ver-btn" data-label="Ver detalles" onclick="toggleDetalle(this)">Ver detalles</button>
          <a href="https://wa.me/573137663905?text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20exportaci%C3%B3n%20de%20caf%C3%A9."
             target="_blank" class="btn btn-wa btn-sm">WhatsApp</a>
        </div>
        <div class="sv-detail">
          <p>Nuestros clientes internacionales escogen desde la catación el mejor café de la región. Tráenos tu café y te damos la oportunidad de que el mundo lo conozca.</p>
          <p class="sv-note">Destinos: Canadá y España. Precio según dólar, flete y logística requerida.</p>
        </div>
      </div>

    </div><!-- /sv-grid -->
  </div>
</section>

`;
})();
