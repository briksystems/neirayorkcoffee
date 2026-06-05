/* ================================================================
   sections/cafes.js — Página Nuestros Cafés
   Fondo fijo con foto, catálogo hace scroll encima
   ================================================================ */
(function(){
document.getElementById('s-cafes').innerHTML = `

<style>
/* ── FONDO FIJO ── */
#cafes-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  background:
    url('assets/img/landing-bg.jpg') center/cover no-repeat;
  filter: blur(3px) brightness(0.55);
  transform: scale(1.05);
}
#cafes-bg::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(
    180deg,
    rgba(8, 15, 36, 0.60) 0%,
    rgba(8, 15, 36, 0.45) 40%,
    rgba(8, 15, 36, 0.70) 100%
  );
}

/* ── CONTENIDO QUE HACE SCROLL ── */
#cafes-content {
  position: relative;
  z-index: 1;
}

/* ── HERO DEL CATÁLOGO ── */
#cafes-hero {
  padding: 7rem 0 4rem;
  text-align: center;
}
.ch-label {
  font-size: .7rem;
  font-weight: 500;
  letter-spacing: .25em;
  text-transform: uppercase;
  color: rgba(255,255,255,.5);
  margin-bottom: .75rem;
}
.ch-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 600;
  line-height: .95;
  color: #fff;
  margin-bottom: .75rem;
}
.ch-title em {
  font-family: 'Dancing Script', cursive;
  font-size: clamp(2rem, 4vw, 3.5rem);
  color: #B8952A;
  font-style: normal;
  display: block;
}
.ch-desc {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  color: rgba(255,255,255,.75);
  max-width: 520px;
  margin: 0 auto 2.5rem;
  line-height: 1.75;
}

/* ── FILTROS ── */
.cafe-filters {
  display: flex;
  gap: .6rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3.5rem;
}
.filter-btn {
  font-size: .72rem;
  font-weight: 500;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.25);
  background: rgba(255,255,255,.08);
  color: rgba(255,255,255,.75);
  cursor: pointer;
  transition: all .2s;
  backdrop-filter: blur(8px);
}
.filter-btn.active,
.filter-btn:hover {
  background: #C8102E;
  color: #fff;
  border-color: #C8102E;
}

/* ── GRID DE CAFÉS ── */
.cafes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-bottom: 6rem;
}

/* ── TARJETA ── */
.cafe-card {
  background: rgba(255,255,255,.1);
  border: 1px solid rgba(255,255,255,.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  overflow: hidden;
  cursor: pointer;
  transition: all .3s ease;
  display: flex;
  flex-direction: column;
}
.cafe-card:hover {
  background: rgba(255,255,255,.16);
  border-color: rgba(200,16,46,.5);
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0,0,0,.5);
}

/* Imagen */
.cc-img {
  aspect-ratio: 4/3;
  position: relative;
  overflow: hidden;
  background: rgba(0,0,0,.3);
}
.cc-img .img-slot {
  width: 100%;
  height: 100%;
}
.cc-img .img-slot img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity .3s, transform .4s;
}
.cc-img .img-slot img.loaded { opacity: 1; }
.cafe-card:hover .cc-img .img-slot img { transform: scale(1.05); }
.cc-img .img-placeholder {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 6px;
}
.ph-icon { font-size: 2rem; opacity: .2; }
.ph-name {
  font-size: .75rem;
  letter-spacing: .1em;
  color: rgba(255,255,255,.35);
}
.ph-file {
  font-size: .6rem;
  color: rgba(255,255,255,.2);
  font-family: monospace;
}
.cc-badge {
  position: absolute;
  top: 10px; left: 10px; z-index: 2;
  background: #C8102E;
  color: #fff;
  font-size: .6rem;
  font-weight: 500;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 3px 10px;
}

/* Info */
.cc-body {
  padding: 1.4rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: .4rem;
}
.cc-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.1;
}
.cc-variedad {
  font-size: .68rem;
  font-weight: 500;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #C8102E;
}
.cc-desc {
  font-family: 'Cormorant Garamond', serif;
  font-size: .95rem;
  color: rgba(255,255,255,.75);
  line-height: 1.65;
  flex: 1;
  margin-top: .3rem;
}
.cc-notas {
  font-size: .78rem;
  color: rgba(255,255,255,.6);
  border-left: 2px solid #B8952A;
  padding-left: .75rem;
  font-style: italic;
  margin-top: .25rem;
}

/* Footer tarjeta */
.cc-footer {
  padding: 1rem 1.5rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255,255,255,.1);
}
.cc-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  line-height: 1;
}
.cc-size {
  font-size: .68rem;
  color: rgba(255,255,255,.5);
  margin-top: 2px;
}
.btn-pedir {
  background: #C8102E;
  color: #fff;
  border: none;
  padding: 9px 20px;
  font-family: 'DM Sans', sans-serif;
  font-size: .72rem;
  font-weight: 500;
  letter-spacing: .1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .2s;
}
.btn-pedir:hover {
  background: #9B0D22;
  transform: translateY(-1px);
}

/* CTA final */
.cafes-cta {
  text-align: center;
  padding-bottom: 5rem;
}
.cafes-cta p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  color: rgba(255,255,255,.7);
  margin-bottom: 1.25rem;
}

@media(max-width: 1024px) { .cafes-grid { grid-template-columns: repeat(2,1fr); } }
@media(max-width: 600px)  { .cafes-grid { grid-template-columns: 1fr; } }
</style>

<!-- Fondo fijo -->
<div id="cafes-bg"></div>

<!-- Todo el contenido hace scroll -->
<div id="cafes-content">
  <div class="container">

    <!-- Hero -->
    <div id="cafes-hero" class="reveal">
      <p class="ch-label">Tienda online</p>
      <h1 class="ch-title">Nuestros<br><em>cafés especiales</em></h1>
      <p class="ch-desc">Solo los mejores granos del Eje Cafetero son merecedores del sello Neira York. Haz clic en cualquier café para pedirlo por WhatsApp.</p>
      <div class="cafe-filters">
        <button class="filter-btn active" data-filter="all">Todos</button>
        <button class="filter-btn" data-filter="blend">Blends</button>
        <button class="filter-btn" data-filter="origen">Origen</button>
        <button class="filter-btn" data-filter="especial">Especiales</button>
        <button class="filter-btn" data-filter="drip">Drips</button>
      </div>
    </div>

    <!-- Grid -->
    <div class="cafes-grid">

      <div class="cafe-card reveal d1" data-cat="blend">
        <div class="cc-img">
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">BLEND NEIRA YORK</div><div class="ph-file">blend-neira-york.jpg</div></div>
            <img src="assets/img/cafes/blend-neira-york.jpg" alt="Blend Neira York"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Blend Neira York</div>
          <div class="cc-variedad">Mezcla de la casa</div>
          <p class="cc-desc">Nuestra mezcla insignia. Intensidad, carácter y el alma del Eje Cafetero en cada taza.</p>
          <div class="cc-notas">Notas: caramelo, frutos secos, cacao</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$38.000</div><div class="cc-size">250g · Tostado medio</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Blend Neira York','250g','$38.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d2" data-cat="origen">
        <div class="cc-img">
          <div class="cc-badge">Exclusivo</div>
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">BOURBON ROJO</div><div class="ph-file">bourbon-rojo.jpg</div></div>
            <img src="assets/img/cafes/bourbon-rojo.jpg" alt="Bourbon Rojo"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Bourbon Rojo</div>
          <div class="cc-variedad">Variedad Bourbon · Origen</div>
          <p class="cc-desc">Acidez brillante y dulzura natural característica de esta variedad histórica cultivada en Neira.</p>
          <div class="cc-notas">Notas: frutos rojos, ciruela, panela</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$42.000</div><div class="cc-size">250g · Tostado medio-claro</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Bourbon Rojo','250g','$42.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d3" data-cat="origen">
        <div class="cc-img">
          <div class="cc-badge">Exclusivo</div>
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">BOURBON ROSADO</div><div class="ph-file">bourbon-rosado.jpg</div></div>
            <img src="assets/img/cafes/bourbon-rosado.jpg" alt="Bourbon Rosado"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Bourbon Rosado</div>
          <div class="cc-variedad">Variedad Bourbon · Origen</div>
          <p class="cc-desc">Perfil suave y elegante. Una variedad poco común ideal para quienes buscan una experiencia refinada.</p>
          <div class="cc-notas">Notas: durazno, flores blancas, miel</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$42.000</div><div class="cc-size">250g · Tostado claro</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Bourbon Rosado','250g','$42.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d1" data-cat="origen">
        <div class="cc-img">
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">CASANARE</div><div class="ph-file">casanare.jpg</div></div>
            <img src="assets/img/cafes/casanare.jpg" alt="Casanare"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Casanare</div>
          <div class="cc-variedad">Café de origen · Llanero</div>
          <p class="cc-desc">Cultivado en el Casanare, expresa la riqueza de suelos únicos con un perfil corpulento y redondo.</p>
          <div class="cc-notas">Notas: chocolate oscuro, nuez, cuerpo pleno</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$38.000</div><div class="cc-size">250g · Tostado medio</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Casanare','250g','$38.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d2" data-cat="especial">
        <div class="cc-img">
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">CATURRA NATURAL</div><div class="ph-file">caturra-natural.jpg</div></div>
            <img src="assets/img/cafes/caturra-natural.jpg" alt="Caturra Natural"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Caturra Natural</div>
          <div class="cc-variedad">Proceso natural · Especial</div>
          <p class="cc-desc">El grano seca dentro de la cereza, concentrando azúcares y aromas. Dulzor intenso y gran complejidad.</p>
          <div class="cc-notas">Notas: frutas tropicales, uvas pasas</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$40.000</div><div class="cc-size">250g · Tostado medio</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Caturra Natural','250g','$40.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d3" data-cat="origen">
        <div class="cc-img">
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">CHINCHINA CHAMBACU</div><div class="ph-file">chinchina-chambacu.jpg</div></div>
            <img src="assets/img/cafes/chinchina-chambacu.jpg" alt="Chinchina Chambacu"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Chinchina Chambacu</div>
          <div class="cc-variedad">Café de origen · Caldas</div>
          <p class="cc-desc">De los cafetales de Chinchiná, cuna de la caficultura caldense. Perfil clásico y reconfortante.</p>
          <div class="cc-notas">Notas: avellana, miel, caramelo</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$38.000</div><div class="cc-size">250g · Tostado medio</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Chinchina Chambacu','250g','$38.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d1" data-cat="especial">
        <div class="cc-img">
          <div class="cc-badge">Edición limitada</div>
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">DARK INKWELL</div><div class="ph-file">dark-inkwell.jpg</div></div>
            <img src="assets/img/cafes/dark-inkwell.jpg" alt="Dark Inkwell"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Dark Inkwell</div>
          <div class="cc-variedad">Tostado oscuro · Edición especial</div>
          <p class="cc-desc">Para los amantes del café intenso. Resalta los sabores más profundos. Ideal para espresso.</p>
          <div class="cc-notas">Notas: chocolate amargo, tabaco, especias</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$45.000</div><div class="cc-size">340g · Tostado oscuro</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Dark Inkwell','340g','$45.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d2" data-cat="especial">
        <div class="cc-img">
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">DESCAFEINADO</div><div class="ph-file">descafeinado.jpg</div></div>
            <img src="assets/img/cafes/descafeinado.jpg" alt="Descafeinado"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Descafeinado</div>
          <div class="cc-variedad">Sin cafeína · Especial</div>
          <p class="cc-desc">Toda la experiencia de un café especial colombiano sin la cafeína. Para disfrutar en cualquier momento.</p>
          <div class="cc-notas">Notas: caramelo, almendra, suavidad</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$44.000</div><div class="cc-size">250g · Tostado medio</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Descafeinado','250g','$44.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d3" data-cat="especial">
        <div class="cc-img">
          <div class="cc-badge">Selección especial</div>
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">EXOTICO NYC</div><div class="ph-file">exotico-nyc.jpg</div></div>
            <img src="assets/img/cafes/exotico-nyc.jpg" alt="Exótico NYC"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Exótico NYC</div>
          <div class="cc-variedad">Selección premium · Neira York</div>
          <p class="cc-desc">La selección más exclusiva de la casa. Procesados innovadores que sorprenden en cada sorbo.</p>
          <div class="cc-notas">Notas: jazmín, frutas exóticas, miel</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">Desde $48.000</div><div class="cc-size">250g / 500g</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Exótico NYC','250g / 500g','desde $48.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d1" data-cat="origen">
        <div class="cc-img">
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">FILADELFIA</div><div class="ph-file">filadelfia.jpg</div></div>
            <img src="assets/img/cafes/filadelfia.jpg" alt="Filadelfia"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Filadelfia</div>
          <div class="cc-variedad">Café de origen · Caldas</div>
          <p class="cc-desc">De Filadelfia, Caldas. Alta montaña que imprime carácter a este café floral y de gran limpieza.</p>
          <div class="cc-notas">Notas: cítrico, flores, azúcar morena</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$42.000</div><div class="cc-size">250g · Tostado medio-claro</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Filadelfia','250g','$42.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d2" data-cat="especial">
        <div class="cc-img">
          <div class="cc-badge">Premium</div>
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">GEISHA</div><div class="ph-file">geisha.jpg</div></div>
            <img src="assets/img/cafes/geisha.jpg" alt="Geisha"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Geisha</div>
          <div class="cc-variedad">Variedad Geisha · Premium</div>
          <p class="cc-desc">La variedad más codiciada del mundo. Cultivada en las alturas del Eje Cafetero. Disponibilidad limitada.</p>
          <div class="cc-notas">Notas: bergamota, jazmín, durazno</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$65.000</div><div class="cc-size">250g · Tostado claro</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Geisha','250g','$65.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d3" data-cat="especial">
        <div class="cc-img">
          <div class="cc-badge">Causa social</div>
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">MOM COFFEE</div><div class="ph-file">mom-coffee.jpg</div></div>
            <img src="assets/img/cafes/mom-coffee.jpg" alt="MOM Coffee"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">MOM Coffee</div>
          <div class="cc-variedad">Mujeres cafeteras · Social</div>
          <p class="cc-desc">Producido por las mujeres de la Asociación Mom Coffee. Cada bolsa apoya directamente a 20 familias.</p>
          <div class="cc-notas">Notas: caramelo, fruta dulce, final cálido</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$42.000</div><div class="cc-size">250g · Tostado medio</div></div>
          <button class="btn-pedir" onclick="pedirCafe('MOM Coffee','250g','$42.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d1" data-cat="especial">
        <div class="cc-img">
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">ORGASMO</div><div class="ph-file">orgasmo.jpg</div></div>
            <img src="assets/img/cafes/orgasmo.jpg" alt="Orgasmo"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Orgasmo</div>
          <div class="cc-variedad">Experiencia sensorial · Especial</div>
          <p class="cc-desc">Una experiencia sensorial completa — intensidad, complejidad y un final que se queda en la memoria.</p>
          <div class="cc-notas">Notas: frutos del bosque, cacao, especias</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">Desde $45.000</div><div class="cc-size">250g / 500g</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Orgasmo','250g / 500g','desde $45.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d2" data-cat="blend">
        <div class="cc-img">
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">REGIONAL INKWELL</div><div class="ph-file">regional-inkwell.jpg</div></div>
            <img src="assets/img/cafes/regional-inkwell.jpg" alt="Regional Inkwell"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Regional Inkwell</div>
          <div class="cc-variedad">Blend regional · Caldas</div>
          <p class="cc-desc">La esencia de la región cafetera en una sola taza. Lo mejor de los municipios cafeteros de Caldas.</p>
          <div class="cc-notas">Notas: miel, panela, frutos secos</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$40.000</div><div class="cc-size">250g · Tostado medio</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Regional Inkwell','250g','$40.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d3" data-cat="origen">
        <div class="cc-img">
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">SALAMINA</div><div class="ph-file">salamina.jpg</div></div>
            <img src="assets/img/cafes/salamina.jpg" alt="Salamina"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Salamina</div>
          <div class="cc-variedad">Café de origen · Caldas</div>
          <p class="cc-desc">De Salamina, Patrimonio Cultural de Colombia. Perfil limpio, dulce y de gran elegancia.</p>
          <div class="cc-notas">Notas: naranja, toffee, vainilla</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$38.000</div><div class="cc-size">250g · Tostado medio</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Salamina','250g','$38.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d1" data-cat="origen">
        <div class="cc-img">
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">TÍPICA</div><div class="ph-file">tipica.jpg</div></div>
            <img src="assets/img/cafes/tipica.jpg" alt="Típica"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Típica</div>
          <div class="cc-variedad">Variedad Típica · Tradicional</div>
          <p class="cc-desc">La variedad que definió el café colombiano por generaciones. El café de nuestros abuelos cafeteros.</p>
          <div class="cc-notas">Notas: chocolate con leche, caramelo, nuez</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">$38.000</div><div class="cc-size">250g · Tostado medio</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Típica','250g','$38.000')">Pedir</button>
        </div>
      </div>

      <div class="cafe-card reveal d2" data-cat="drip">
        <div class="cc-img">
          <div class="cc-badge">Práctico</div>
          <div class="img-slot">
            <div class="img-placeholder"><div class="ph-icon">☕</div><div class="ph-name">DRIPS</div><div class="ph-file">drips.jpg</div></div>
            <img src="assets/img/cafes/drips.jpg" alt="Drips"/>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-name">Drips Neira York</div>
          <div class="cc-variedad">Filtro individual · Portátil</div>
          <p class="cc-desc">Café especial en formato drip. Solo necesitas agua caliente. Perfecto para donde estés.</p>
          <div class="cc-notas">13g individual · Pack x5 (65g)</div>
        </div>
        <div class="cc-footer">
          <div><div class="cc-price">Desde $8.000</div><div class="cc-size">13g / 65g ×5</div></div>
          <button class="btn-pedir" onclick="pedirCafe('Drips','13g / pack x5','desde $8.000')">Pedir</button>
        </div>
      </div>

    </div><!-- /cafes-grid -->

    <!-- CTA final -->
    <div class="cafes-cta reveal">
      <p>¿Tienes dudas sobre qué café es el indicado para ti?</p>
      <button class="btn-pedir" style="font-size:.82rem;padding:13px 32px"
        onclick="window.open('https://wa.me/573137663905?text=Hola%20Neira%20York%20Coffee!%20Quiero%20que%20me%20recomienden%20un%20caf%C3%A9.','_blank')">
        Pedir asesoría por WhatsApp
      </button>
    </div>

  </div><!-- /container -->
</div><!-- /cafes-content -->
`; })();