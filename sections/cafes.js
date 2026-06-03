/* ================================================================
   sections/cafes.js — NUESTROS CAFÉS (catálogo completo)

   CÓMO AGREGAR LAS FOTOS REALES:
   1. Nombra cada imagen exactamente como se indica en cada tarjeta
   2. Súbela a la carpeta assets/img/cafes/
   3. La página la muestra automáticamente sin tocar el código

   CÓMO EDITAR UN CAFÉ:
   - Descripción:  línea .cc-desc
   - Notas de cata: línea .cc-notas
   - Precio:        línea .cc-price  (también en onclick de pedirCafe)
   - Peso:          línea .cc-size   (también en onclick de pedirCafe)

   CÓMO AGREGAR UN CAFÉ NUEVO:
   - Copia el bloque completo de una tarjeta existente
   - Cambia todos los valores y el nombre del archivo de imagen
   ================================================================ */
(function(){
document.getElementById('s-cafes').innerHTML = `
<style>
#cafes { padding: 6rem 0; background: var(--white); }

/* Filtros */
.cafe-filters { display: flex; gap: .6rem; flex-wrap: wrap; margin-top: 1.5rem; }
.filter-btn {
  font-size: .74rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase;
  padding: 7px 16px; border-radius: 20px; border: 1.5px solid var(--border);
  background: var(--white); color: var(--ink2); cursor: pointer; transition: all .2s;
}
.filter-btn.active, .filter-btn:hover { background: var(--red); color: var(--white); border-color: var(--red); }

/* Grid */
.cafes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
}

/* Tarjeta individual */
.cafe-card {
  display: flex; flex-direction: column;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
  transition: all .25s var(--ease);
}
.cafe-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-4px); border-color: transparent; }

/* Zona de imagen */
.cc-img-wrap {
  aspect-ratio: 4/3;
  position: relative;
  overflow: hidden;
}
.cc-img-wrap .img-slot { width: 100%; height: 100%; }
.cc-img-wrap .img-placeholder { background: var(--cream2); }
.cc-badge {
  position: absolute; top: 12px; left: 12px; z-index: 2;
  background: var(--red); color: var(--white);
  font-size: .62rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase;
  padding: 3px 10px; border-radius: 2px;
}
.cc-img-wrap img { transition: transform .4s var(--ease); }
.cafe-card:hover .cc-img-wrap img { transform: scale(1.05); }

/* Información */
.cc-body { padding: 1.4rem 1.3rem; flex: 1; display: flex; flex-direction: column; gap: .5rem; }
.cc-name { font-family: var(--f-head); font-size: 1.15rem; letter-spacing: .06em; color: var(--ink); line-height: 1.1; }
.cc-variedad { font-size: .72rem; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; color: var(--red); }
.cc-desc { font-family: var(--f-serif); font-size: .95rem; line-height: 1.65; color: var(--ink2); flex: 1; margin-top: .25rem; }
.cc-notas {
  font-size: .75rem; color: var(--ink2);
  background: var(--cream); padding: .5rem .75rem;
  border-left: 2px solid var(--gold);
  font-style: italic;
}
.cc-notas strong { font-style: normal; font-weight: 500; color: var(--ink); }

/* Footer de tarjeta */
.cc-footer {
  padding: 1rem 1.3rem 1.3rem;
  display: flex; align-items: center; justify-content: space-between;
  border-top: 1px solid var(--border);
  gap: 1rem;
}
.cc-price-wrap {}
.cc-price { font-family: var(--f-head); font-size: 1.3rem; letter-spacing: .05em; color: var(--red); line-height: 1; }
.cc-size { font-size: .68rem; color: var(--ink2); margin-top: 2px; }

@media(max-width:1100px){ .cafes-grid{ grid-template-columns: repeat(2,1fr); } }
@media(max-width:640px) { .cafes-grid{ grid-template-columns: 1fr; gap: 1.5rem; } }
</style>

<section id="cafes">
  <div class="container">

    <div class="sec-head reveal">
      <div class="sec-rule"></div>
      <h2>NUESTROS<br><em>cafés especiales</em></h2>
      <p>Solo los mejores granos de nuestra región son merecedores del sello Neira York.
         Haz clic en "Pedir" para ordenar directo por WhatsApp.</p>

      <!-- FILTROS -->
      <div class="cafe-filters">
        <button class="filter-btn active" data-filter="all">Todos</button>
        <button class="filter-btn" data-filter="blend">Blends</button>
        <button class="filter-btn" data-filter="origen">Origen</button>
        <button class="filter-btn" data-filter="especial">Especiales</button>
        <button class="filter-btn" data-filter="drip">Drips</button>
      </div>
    </div>

    <!-- ════════════════════════════════════════════════════
         CATÁLOGO DE CAFÉS
         Imagen de cada café: assets/img/cafes/[nombre-archivo]
         ════════════════════════════════════════════════════ -->
    <div class="cafes-grid">

      <!-- ══ BLEND NEIRA YORK ══ -->
      <div class="cafe-card reveal d1" data-cat="blend">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/blend-neira-york.jpg -->
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">BLEND NEIRA YORK</div>
              <div class="ph-file">blend-neira-york.jpg</div>
            </div>
            <img src="assets/img/cafes/blend-neira-york.jpg" alt="Blend Neira York"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">BLEND NEIRA YORK</div>
          <div class="cc-variedad">Mezcla de la casa</div>
          <p class="cc-desc">Nuestra mezcla insignia. Una composición equilibrada que representa todo lo que Neira York Coffee es: intensidad, carácter y el alma del Eje Cafetero en cada taza.</p>
          <div class="cc-notas"><strong>Notas:</strong> caramelo, frutos secos, cacao</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$38.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado medio</div>
          </div>
          <button onclick="pedirCafe('Blend Neira York','250g','$38.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ BOURBON ROJO ══ -->
      <div class="cafe-card reveal d2" data-cat="origen">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/bourbon-rojo.jpg -->
          <div class="cc-badge">Exclusivo</div>
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">BOURBON ROJO</div>
              <div class="ph-file">bourbon-rojo.jpg</div>
            </div>
            <img src="assets/img/cafes/bourbon-rojo.jpg" alt="Bourbon Rojo"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">BOURBON ROJO</div>
          <div class="cc-variedad">Variedad Bourbon · Origen</div>
          <p class="cc-desc">Uno de los cafés más apreciados del mundo. El Bourbon Rojo cultivado en las laderas de Neira ofrece una acidez brillante y una dulzura natural característica de esta variedad histórica.</p>
          <div class="cc-notas"><strong>Notas:</strong> frutos rojos, ciruela, panela, acidez cítrica</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$42.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado medio-claro</div>
          </div>
          <button onclick="pedirCafe('Bourbon Rojo','250g','$42.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ BOURBON ROSADO ══ -->
      <div class="cafe-card reveal d3" data-cat="origen">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/bourbon-rosado.jpg -->
          <div class="cc-badge">Exclusivo</div>
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">BOURBON ROSADO</div>
              <div class="ph-file">bourbon-rosado.jpg</div>
            </div>
            <img src="assets/img/cafes/bourbon-rosado.jpg" alt="Bourbon Rosado"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">BOURBON ROSADO</div>
          <div class="cc-variedad">Variedad Bourbon · Origen</div>
          <p class="cc-desc">Una variedad poco común que se distingue por su perfil suave y elegante. El Bourbon Rosado es un café de carácter delicado, ideal para quienes buscan una experiencia refinada.</p>
          <div class="cc-notas"><strong>Notas:</strong> durazno, flores blancas, miel, suavidad persistente</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$42.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado claro</div>
          </div>
          <button onclick="pedirCafe('Bourbon Rosado','250g','$42.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ CASANARE ══ -->
      <div class="cafe-card reveal d1" data-cat="origen">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/casanare.jpg -->
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">CASANARE</div>
              <div class="ph-file">casanare.jpg</div>
            </div>
            <img src="assets/img/cafes/casanare.jpg" alt="Casanare"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">CASANARE</div>
          <div class="cc-variedad">Café de origen · Llanero</div>
          <p class="cc-desc">Un café que lleva en su nombre la tierra que lo vio nacer. Cultivado en la región del Casanare, expresa la riqueza de suelos únicos con un perfil corpulento y redondo.</p>
          <div class="cc-notas"><strong>Notas:</strong> chocolate oscuro, tabaco suave, nuez, cuerpo pleno</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$38.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado medio</div>
          </div>
          <button onclick="pedirCafe('Casanare','250g','$38.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ CATURRA NATURAL ══ -->
      <div class="cafe-card reveal d2" data-cat="especial">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/caturra-natural.jpg -->
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">CATURRA NATURAL</div>
              <div class="ph-file">caturra-natural.jpg</div>
            </div>
            <img src="assets/img/cafes/caturra-natural.jpg" alt="Caturra Natural"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">CATURRA NATURAL</div>
          <div class="cc-variedad">Proceso natural · Especial</div>
          <p class="cc-desc">Procesado con la técnica natural donde el grano seca dentro de la cereza, concentrando azúcares y aromas. El resultado es un café de dulzor intenso y gran complejidad frutal.</p>
          <div class="cc-notas"><strong>Notas:</strong> frutas tropicales, fermentación dulce, uvas pasas</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$40.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado medio</div>
          </div>
          <button onclick="pedirCafe('Caturra Natural','250g','$40.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ CHINCHINA CHAMBACU ══ -->
      <div class="cafe-card reveal d3" data-cat="origen">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/chinchina-chambacu.jpg -->
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">CHINCHINA CHAMBACU</div>
              <div class="ph-file">chinchina-chambacu.jpg</div>
            </div>
            <img src="assets/img/cafes/chinchina-chambacu.jpg" alt="Chinchina Chambacu"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">CHINCHINA CHAMBACU</div>
          <div class="cc-variedad">Café de origen · Caldas</div>
          <p class="cc-desc">Proveniente de los cafetales de Chinchiná, cuna de la caficultura caldense. Un café que honra la tradición cafetera de la región con un perfil clásico y reconfortante.</p>
          <div class="cc-notas"><strong>Notas:</strong> avellana, miel, caramelo, final limpio</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$38.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado medio</div>
          </div>
          <button onclick="pedirCafe('Chinchina Chambacu','250g','$38.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ DARK INKWELL ══ -->
      <div class="cafe-card reveal d1" data-cat="especial">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/dark-inkwell.jpg -->
          <div class="cc-badge">Edición limitada</div>
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">DARK INKWELL</div>
              <div class="ph-file">dark-inkwell.jpg</div>
            </div>
            <img src="assets/img/cafes/dark-inkwell.jpg" alt="Dark Inkwell"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">DARK INKWELL</div>
          <div class="cc-variedad">Tostado oscuro · Edición especial</div>
          <p class="cc-desc">Para los amantes del café intenso. Dark Inkwell es una tostión oscura que resalta los sabores más profundos y ahumados del grano. Ideal para espresso y preparaciones con leche.</p>
          <div class="cc-notas"><strong>Notas:</strong> chocolate amargo, tabaco, especias, madera</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$45.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">340g · Tostado oscuro</div>
          </div>
          <button onclick="pedirCafe('Dark Inkwell','340g','$45.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ DESCAFEINADO ══ -->
      <div class="cafe-card reveal d2" data-cat="especial">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/descafeinado.jpg -->
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">DESCAFEINADO</div>
              <div class="ph-file">descafeinado.jpg</div>
            </div>
            <img src="assets/img/cafes/descafeinado.jpg" alt="Descafeinado"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">DESCAFEINADO</div>
          <div class="cc-variedad">Sin cafeína · Especial</div>
          <p class="cc-desc">Toda la experiencia de un café especial colombiano sin la cafeína. Perfecto para disfrutar en cualquier momento del día sin renunciar al sabor y los aromas que te mereces.</p>
          <div class="cc-notas"><strong>Notas:</strong> caramelo, almendra, suavidad, cuerpo equilibrado</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$44.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado medio</div>
          </div>
          <button onclick="pedirCafe('Descafeinado','250g','$44.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ EXÓTICO NYC ══ -->
      <div class="cafe-card reveal d3" data-cat="especial">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/exotico-nyc.jpg -->
          <div class="cc-badge">Selección especial</div>
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">EXOTICO NYC</div>
              <div class="ph-file">exotico-nyc.jpg</div>
            </div>
            <img src="assets/img/cafes/exotico-nyc.jpg" alt="Exótico NYC"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">EXOTICO NYC</div>
          <div class="cc-variedad">Selección premium · Neira York</div>
          <p class="cc-desc">La selección más exclusiva de la casa. El Exótico NYC es resultado de una minuciosa búsqueda de los mejores lotes de la región, con procesados innovadores que sorprenden en cada sorbo.</p>
          <div class="cc-notas"><strong>Notas:</strong> jazmín, frutas exóticas, miel, final prolongado</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">Desde $48.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g / 500g</div>
          </div>
          <button onclick="pedirCafe('Exótico NYC','250g / 500g','desde $48.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ FILADELFIA ══ -->
      <div class="cafe-card reveal d1" data-cat="origen">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/filadelfia.jpg -->
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">FILADELFIA</div>
              <div class="ph-file">filadelfia.jpg</div>
            </div>
            <img src="assets/img/cafes/filadelfia.jpg" alt="Filadelfia"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">FILADELFIA</div>
          <div class="cc-variedad">Café de origen · Caldas</div>
          <p class="cc-desc">Proveniente del municipio de Filadelfia en Caldas, una región de alta montaña que imprime carácter a este café. Un perfil equilibrado, floral y de gran limpieza en taza.</p>
          <div class="cc-notas"><strong>Notas:</strong> cítrico, flores, azúcar morena, acidez elegante</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$42.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado medio-claro</div>
          </div>
          <button onclick="pedirCafe('Filadelfia','250g','$42.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ GEISHA ══ -->
      <div class="cafe-card reveal d2" data-cat="especial">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/geisha.jpg -->
          <div class="cc-badge">Premium</div>
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">GEISHA</div>
              <div class="ph-file">geisha.jpg</div>
            </div>
            <img src="assets/img/cafes/geisha.jpg" alt="Geisha"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">GEISHA</div>
          <div class="cc-variedad">Variedad Geisha · Premium</div>
          <p class="cc-desc">La variedad más codiciada del mundo del café especial. Cultivada con cuidado extremo en las alturas del Eje Cafetero, la Geisha de Neira York es una experiencia de colección. Disponibilidad limitada.</p>
          <div class="cc-notas"><strong>Notas:</strong> bergamota, jazmín, durazno, acidez fina y prolongada</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$65.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado claro</div>
          </div>
          <button onclick="pedirCafe('Geisha','250g','$65.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ MOM COFFEE ══ -->
      <div class="cafe-card reveal d3" data-cat="especial">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/mom-coffee.jpg -->
          <div class="cc-badge">Causa social</div>
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">MOM COFFEE</div>
              <div class="ph-file">mom-coffee.jpg</div>
            </div>
            <img src="assets/img/cafes/mom-coffee.jpg" alt="MOM Coffee"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">MOM COFFEE</div>
          <div class="cc-variedad">Asociación de mujeres · Social</div>
          <p class="cc-desc">Producido con amor por las mujeres de la Asociación Mom Coffee. Cada bolsa que compras apoya directamente a 20 familias cafeteras del Eje Cafetero. Un café con historia y propósito.</p>
          <div class="cc-notas"><strong>Notas:</strong> caramelo, fruta dulce, acidez suave, final cálido</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$42.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado medio</div>
          </div>
          <button onclick="pedirCafe('MOM Coffee','250g','$42.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ ORGASMO ══ -->
      <div class="cafe-card reveal d1" data-cat="especial">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/orgasmo.jpg -->
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">ORGASMO</div>
              <div class="ph-file">orgasmo.jpg</div>
            </div>
            <img src="assets/img/cafes/orgasmo.jpg" alt="Orgasmo"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">ORGASMO</div>
          <div class="cc-variedad">Experiencia sensorial · Especial</div>
          <p class="cc-desc">Un nombre que lo dice todo. Este café está diseñado para ser una experiencia sensorial completa — intensidad, complejidad y un final que se queda en la memoria. No apto para los que prefieren lo ordinario.</p>
          <div class="cc-notas"><strong>Notas:</strong> frutos del bosque, cacao, especias suaves, retrogusto largo</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">Desde $45.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g / 500g</div>
          </div>
          <button onclick="pedirCafe('Orgasmo','250g / 500g','desde $45.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ REGIONAL INKWELL ══ -->
      <div class="cafe-card reveal d2" data-cat="blend">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/regional-inkwell.jpg -->
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">REGIONAL INKWELL</div>
              <div class="ph-file">regional-inkwell.jpg</div>
            </div>
            <img src="assets/img/cafes/regional-inkwell.jpg" alt="Regional Inkwell"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">REGIONAL INKWELL</div>
          <div class="cc-variedad">Blend regional · Caldas</div>
          <p class="cc-desc">La esencia de la región cafetero en una sola taza. Este blend reúne lo mejor de los municipios cafeteros de Caldas, creando un perfil representativo y auténtico de nuestro territorio.</p>
          <div class="cc-notas"><strong>Notas:</strong> miel, panela, frutos secos, madera noble</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$40.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado medio</div>
          </div>
          <button onclick="pedirCafe('Regional Inkwell','250g','$40.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ SALAMINA ══ -->
      <div class="cafe-card reveal d3" data-cat="origen">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/salamina.jpg -->
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">SALAMINA</div>
              <div class="ph-file">salamina.jpg</div>
            </div>
            <img src="assets/img/cafes/salamina.jpg" alt="Salamina"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">SALAMINA</div>
          <div class="cc-variedad">Café de origen · Caldas</div>
          <p class="cc-desc">Salamina, Patrimonio Cultural de Colombia, también es cuna de cafés extraordinarios. Este café captura el espíritu de ese municipio histórico con un perfil limpio, dulce y de gran elegancia.</p>
          <div class="cc-notas"><strong>Notas:</strong> naranja, toffee, vainilla, acidez brillante</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$38.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado medio</div>
          </div>
          <button onclick="pedirCafe('Salamina','250g','$38.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ TÍPICA ══ -->
      <div class="cafe-card reveal d1" data-cat="origen">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/tipica.jpg -->
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">TÍPICA</div>
              <div class="ph-file">tipica.jpg</div>
            </div>
            <img src="assets/img/cafes/tipica.jpg" alt="Típica"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">TÍPICA</div>
          <div class="cc-variedad">Variedad Típica · Tradicional</div>
          <p class="cc-desc">La variedad que definió el café colombiano por generaciones. La Típica es el café de nuestros abuelos cafeteros, cultivada con el respeto que se merece su historia y su sabor inconfundible.</p>
          <div class="cc-notas"><strong>Notas:</strong> chocolate con leche, caramelo, nuez, dulzor natural</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">$38.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">250g · Tostado medio</div>
          </div>
          <button onclick="pedirCafe('Típica','250g','$38.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

      <!-- ══ DRIPS ══ -->
      <div class="cafe-card reveal d2" data-cat="drip">
        <div class="cc-img-wrap">
          <!-- IMAGEN → assets/img/cafes/drips.jpg -->
          <div class="cc-badge">Práctico</div>
          <div class="img-slot">
            <div class="img-placeholder">
              <div class="ph-icon">☕</div>
              <div class="ph-name">DRIPS</div>
              <div class="ph-file">drips.jpg</div>
            </div>
            <img src="assets/img/cafes/drips.jpg" alt="Drips"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">DRIPS NEIRA YORK</div>
          <div class="cc-variedad">Filtro individual · Portátil</div>
          <p class="cc-desc">Café especial Neira York en formato drip: solo necesitas agua caliente. Perfecto para la oficina, el viaje o cualquier lugar donde quieras disfrutar un café de verdad sin equipos.</p>
          <div class="cc-notas"><strong>Presentación:</strong> 13g individual · Pack x5 (65g)</div>
        </div>
        <div class="cc-footer">
          <div class="cc-price-wrap">
            <div class="cc-price">Desde $8.000</div> <!-- ← ACTUALIZA PRECIO -->
            <div class="cc-size">13g unitario / 65g ×5</div>
          </div>
          <button onclick="pedirCafe('Drips','13g unitario / pack x5','desde $8.000')" class="btn btn-wa btn-sm">Pedir</button>
        </div>
      </div>

    </div><!-- /cafes-grid -->

    <!-- CTA final -->
    <div style="text-align:center; margin-top:3.5rem" class="reveal">
      <p style="font-family:var(--f-serif);color:var(--ink2);font-size:1rem;margin-bottom:1.1rem">
        ¿Tienes dudas sobre qué café es el indicado para ti?
      </p>
      <a href="https://wa.me/573137663905?text=Hola%20Neira%20York%20Coffee!%20Quiero%20que%20me%20recomienden%20un%20caf%C3%A9%20especial."
         target="_blank" class="btn btn-wa">
        Pedir asesoría por WhatsApp
      </a>
    </div>

  </div>
</section>
`; })();
