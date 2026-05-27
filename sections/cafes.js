/* ================================================================
   sections/cafes.js — Catálogo de Cafés (SECCIÓN PRINCIPAL)
   EDITAR:
   - Precio de cada café: busca "cafe-card-price" y cambia el valor
   - Agregar una variedad: copia un bloque <div class="cafe-card">
     y cambia nombre, categoría, precio y peso
   - data-cat define el filtro: blend | origen | especial | drip
   ================================================================ */
(function () {
  document.getElementById('s-cafes').innerHTML = `

<style>
#cafes { padding: 6rem 0; background: var(--white); }

/* Filtros */
.cafes-filters { display: flex; gap: .6rem; flex-wrap: wrap; margin-top: 1.5rem; }
.filter-btn {
  font-size: .74rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase;
  padding: 7px 16px; border-radius: 20px;
  border: 1.5px solid var(--border);
  background: var(--white); color: var(--ink2);
  cursor: pointer; transition: all .2s;
}
.filter-btn.active, .filter-btn:hover { background: var(--red); color: var(--white); border-color: var(--red); }

/* Grid */
.cafes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
}
.cafe-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
  transition: all .25s var(--ease);
  cursor: pointer;
}
.cafe-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-4px); border-color: transparent; }

/* Imagen */
.cc-img { aspect-ratio: 3/4; position: relative; overflow: hidden; background: var(--cream); }
.cc-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s var(--ease); }
.cafe-card:hover .cc-img img { transform: scale(1.05); }
.cc-badge {
  position: absolute; top: 10px; left: 10px;
  background: var(--red); color: var(--white);
  font-size: .6rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase;
  padding: 3px 9px; border-radius: 2px;
}
.cc-hover {
  position: absolute; inset: 0;
  background: rgba(13,27,62,.58);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity .25s;
}
.cafe-card:hover .cc-hover { opacity: 1; }
.cc-hover span {
  background: var(--white); color: var(--ink);
  font-size: .72rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase;
  padding: 10px 20px; border-radius: var(--r);
}

/* Info */
.cc-info { padding: .9rem 1rem 1.1rem; }
.cc-name {
  font-family: var(--f-head);
  font-size: 1.05rem; letter-spacing: .06em;
  color: var(--ink); line-height: 1.1; margin-bottom: 2px;
}
.cc-sub { font-size: .73rem; color: var(--ink2); margin-bottom: .65rem; }
.cc-footer { display: flex; justify-content: space-between; align-items: center; }
.cafe-card-price { font-family: var(--f-head); font-size: 1.1rem; letter-spacing: .05em; color: var(--red); }
.cc-size {
  font-size: .7rem; color: var(--ink2);
  background: var(--cream); padding: 3px 8px; border-radius: 10px;
}

/* CTA final */
.cafes-cta { text-align: center; margin-top: 3rem; }
.cafes-cta p { font-family: var(--f-serif); color: var(--ink2); font-size: 1rem; margin-bottom: 1.1rem; }

@media (max-width: 1100px) { .cafes-grid { grid-template-columns: repeat(3,1fr); } }
@media (max-width: 768px)  { .cafes-grid { grid-template-columns: repeat(2,1fr); gap: 1rem; } }
@media (max-width: 420px)  { .cafes-grid { grid-template-columns: 1fr; } }
</style>

<section id="cafes">
  <div class="container">

    <div class="sec-head reveal">
      <div class="sec-rule"></div>
      <h2>NUESTROS<br><em>cafés especiales</em></h2>
      <p>Solo los mejores granos de nuestra región son merecedores del sello Neira York.
         Haz clic en cualquier café para pedirlo directo por WhatsApp.</p>

      <!-- ── FILTROS — los data-filter deben coincidir con data-cat de las tarjetas ── -->
      <div class="cafes-filters">
        <button class="filter-btn active" data-filter="all">Todos</button>
        <button class="filter-btn" data-filter="blend">Blends</button>
        <button class="filter-btn" data-filter="origen">Origen</button>
        <button class="filter-btn" data-filter="especial">Especiales</button>
        <button class="filter-btn" data-filter="drip">Drips</button>
      </div>
    </div>

    <!-- ════════════════════════════════════════
         TARJETAS DE CAFÉ
         Para AGREGAR una variedad: copia un bloque
         completo y cambia: nombre, sub, precio, peso,
         data-cat y los argumentos de pedirCafe(...)
         ════════════════════════════════════════ -->
    <div class="cafes-grid">

      <!-- ── BLEND NEIRA YORK ── -->
      <div class="cafe-card reveal d1" data-cat="blend"
           onclick="pedirCafe('Blend Neira York','250g','$38.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80" alt="Blend Neira York"/>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">BLEND NEIRA YORK</div>
          <div class="cc-sub">Mezcla característica de la casa</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$38.000</div> <!-- PRECIO -->
            <div class="cc-size">250g</div>
          </div>
        </div>
      </div>

      <!-- ── BOURBON ROJO ── -->
      <div class="cafe-card reveal d2" data-cat="origen"
           onclick="pedirCafe('Bourbon Rojo','250g','$42.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80" alt="Bourbon Rojo"/>
          <div class="cc-badge">Exclusivo</div>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">BOURBON ROJO</div>
          <div class="cc-sub">Variedad de origen, notas frutales</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$42.000</div> <!-- PRECIO -->
            <div class="cc-size">250g</div>
          </div>
        </div>
      </div>

      <!-- ── BOURBON ROSADO ── -->
      <div class="cafe-card reveal d3" data-cat="origen"
           onclick="pedirCafe('Bourbon Rosado','250g','$42.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" alt="Bourbon Rosado"/>
          <div class="cc-badge">Exclusivo</div>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">BOURBON ROSADO</div>
          <div class="cc-sub">Variedad de origen, perfil suave</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$42.000</div> <!-- PRECIO -->
            <div class="cc-size">250g</div>
          </div>
        </div>
      </div>

      <!-- ── CASANARE ── -->
      <div class="cafe-card reveal d4" data-cat="origen"
           onclick="pedirCafe('Casanare','250g','$38.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1611080987053-5b0b8e2cb0a2?w=400&q=80" alt="Casanare"/>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">CASANARE</div>
          <div class="cc-sub">Café de origen llanero</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$38.000</div> <!-- PRECIO -->
            <div class="cc-size">250g</div>
          </div>
        </div>
      </div>

      <!-- ── CATURRA NATURAL ── -->
      <div class="cafe-card reveal d1" data-cat="especial"
           onclick="pedirCafe('Caturra Natural','250g','$40.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" alt="Caturra Natural"/>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">CATURRA NATURAL</div>
          <div class="cc-sub">Proceso natural, dulzor intenso</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$40.000</div> <!-- PRECIO -->
            <div class="cc-size">250g</div>
          </div>
        </div>
      </div>

      <!-- ── CHINCHINA CHAMBACU ── -->
      <div class="cafe-card reveal d2" data-cat="origen"
           onclick="pedirCafe('Chinchina Chambacu','250g','$38.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80" alt="Chinchina Chambacu"/>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">CHINCHINA CHAMBACU</div>
          <div class="cc-sub">Café de la región de Chinchiná</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$38.000</div> <!-- PRECIO -->
            <div class="cc-size">250g</div>
          </div>
        </div>
      </div>

      <!-- ── DARK INKWELL ── -->
      <div class="cafe-card reveal d3" data-cat="especial"
           onclick="pedirCafe('Dark Inkwell','340g','$45.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80" alt="Dark Inkwell"/>
          <div class="cc-badge">Edición limitada</div>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">DARK INKWELL</div>
          <div class="cc-sub">Tostado oscuro, notas a chocolate</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$45.000</div> <!-- PRECIO -->
            <div class="cc-size">340g</div>
          </div>
        </div>
      </div>

      <!-- ── DESCAFEINADO ── -->
      <div class="cafe-card reveal d4" data-cat="especial"
           onclick="pedirCafe('Descafeinado','250g','$44.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400&q=80" alt="Descafeinado"/>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">DESCAFEINADO</div>
          <div class="cc-sub">Todo el sabor, sin cafeína</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$44.000</div> <!-- PRECIO -->
            <div class="cc-size">250g</div>
          </div>
        </div>
      </div>

      <!-- ── EXÓTICO NYC ── -->
      <div class="cafe-card reveal d1" data-cat="especial"
           onclick="pedirCafe('Exótico NYC','250g / 500g','desde $48.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1559525839-8f275eef5973?w=400&q=80" alt="Exótico NYC"/>
          <div class="cc-badge">Selección especial</div>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">EXOTICO NYC</div>
          <div class="cc-sub">Selección premium de la casa</div>
          <div class="cc-footer">
            <div class="cafe-card-price">Desde $48.000</div> <!-- PRECIO -->
            <div class="cc-size">250g / 500g</div>
          </div>
        </div>
      </div>

      <!-- ── FILADELFIA ── -->
      <div class="cafe-card reveal d2" data-cat="origen"
           onclick="pedirCafe('Filadelfia','250g','$42.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1611480326026-e0e5a2284e32?w=400&q=80" alt="Filadelfia"/>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">FILADELFIA</div>
          <div class="cc-sub">Perfil equilibrado y floral</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$42.000</div> <!-- PRECIO -->
            <div class="cc-size">250g</div>
          </div>
        </div>
      </div>

      <!-- ── GEISHA ── -->
      <div class="cafe-card reveal d3" data-cat="especial"
           onclick="pedirCafe('Geisha','250g','$65.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1606791405792-1004f1718d0c?w=400&q=80" alt="Geisha"/>
          <div class="cc-badge">Premium</div>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">GEISHA</div>
          <div class="cc-sub">La variedad más codiciada del mundo</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$65.000</div> <!-- PRECIO -->
            <div class="cc-size">250g</div>
          </div>
        </div>
      </div>

      <!-- ── REGIONAL INKWELL ── -->
      <div class="cafe-card reveal d4" data-cat="blend"
           onclick="pedirCafe('Regional Inkwell','250g','$40.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=400&q=80" alt="Regional Inkwell"/>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">REGIONAL INKWELL</div>
          <div class="cc-sub">Lo mejor de nuestra región</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$40.000</div> <!-- PRECIO -->
            <div class="cc-size">250g</div>
          </div>
        </div>
      </div>

      <!-- ── MOM COFFEE ── -->
      <div class="cafe-card reveal d1" data-cat="especial"
           onclick="pedirCafe('MOM Coffee','250g','$42.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80" alt="MOM Coffee"/>
          <div class="cc-badge">Causa social</div>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">MOM COFFEE</div>
          <div class="cc-sub">Producido por mujeres cafeteras</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$42.000</div> <!-- PRECIO -->
            <div class="cc-size">250g</div>
          </div>
        </div>
      </div>

      <!-- ── ORGASMO ── -->
      <div class="cafe-card reveal d2" data-cat="especial"
           onclick="pedirCafe('Orgasmo','250g / 500g','desde $45.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80" alt="Orgasmo"/>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">ORGASMO</div>
          <div class="cc-sub">Una experiencia sensorial única</div>
          <div class="cc-footer">
            <div class="cafe-card-price">Desde $45.000</div> <!-- PRECIO -->
            <div class="cc-size">250g / 500g</div>
          </div>
        </div>
      </div>

      <!-- ── SALAMINA ── -->
      <div class="cafe-card reveal d3" data-cat="origen"
           onclick="pedirCafe('Salamina','250g','$38.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80" alt="Salamina"/>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">SALAMINA</div>
          <div class="cc-sub">Café del municipio de Salamina, Caldas</div>
          <div class="cc-footer">
            <div class="cafe-card-price">$38.000</div> <!-- PRECIO -->
            <div class="cc-size">250g</div>
          </div>
        </div>
      </div>

      <!-- ── DRIPS ── -->
      <div class="cafe-card reveal d4" data-cat="drip"
           onclick="pedirCafe('Drips','13g unitario / 65g (x5)','desde $8.000')">
        <div class="cc-img">
          <img src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&q=80" alt="Drips"/>
          <div class="cc-badge">Práctico</div>
          <div class="cc-hover"><span>Pedir por WhatsApp</span></div>
        </div>
        <div class="cc-info">
          <div class="cc-name">DRIPS</div>
          <div class="cc-sub">Para preparar en cualquier lugar</div>
          <div class="cc-footer">
            <div class="cafe-card-price">Desde $8.000</div> <!-- PRECIO -->
            <div class="cc-size">13g / 65g×5</div>
          </div>
        </div>
      </div>

    </div><!-- /cafes-grid -->

    <!-- CTA final -->
    <div class="cafes-cta reveal">
      <p>¿No encuentras lo que buscas? Escríbenos y te asesoramos.</p>
      <a href="https://wa.me/573137663905?text=Hola%20Neira%20York%20Coffee!%20Quiero%20conocer%20m%C3%A1s%20sobre%20sus%20caf%C3%A9s%20especiales."
         target="_blank" class="btn btn-wa">
        Consultar por WhatsApp
      </a>
    </div>

  </div>
</section>

`;
})();
