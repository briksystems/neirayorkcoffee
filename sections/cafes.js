/* ================================================================
   sections/cafes.js — Catálogo de Cafés
   Cada café tiene botón "Saber más" que abre modal con info detallada
   y botón "Pedir por WhatsApp"

   CÓMO EDITAR LA DESCRIPCIÓN DE UN CAFÉ:
   Busca el nombre del café (ej: "BLEND NEIRA YORK")
   y edita el texto dentro de modal_desc: `...`
   ================================================================ */
(function(){

/* ── DATOS DE CADA CAFÉ ──────────────────────────────────────────
   Edita aquí la información detallada de cada café.
   modal_desc: texto largo que aparece en la ventana emergente.
   ──────────────────────────────────────────────────────────────── */
const cafes = [
  {
    id: 'blend-neira-york',
    cat: 'blend',
    nombre: 'Blend Neira York',
    variedad: 'Mezcla de la casa',
    desc: 'Nuestra mezcla insignia. Intensidad, carácter y el alma del Eje Cafetero en cada taza.',
    notas: 'Caramelo, frutos secos, cacao',
    precio: '$38.000',
    peso: '250g · Tostado medio',
    badge: '',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Blend Neira York -->
    Descripción detallada próximamente.`
  },
  {
    id: 'bourbon-rojo',
    cat: 'origen',
    nombre: 'Bourbon Rojo',
    variedad: 'Variedad Bourbon · Origen',
    desc: 'Acidez brillante y dulzura natural característica de esta variedad histórica cultivada en Neira.',
    notas: 'Frutos rojos, ciruela, panela',
    precio: '$42.000',
    peso: '250g · Tostado medio-claro',
    badge: 'Exclusivo',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Bourbon Rojo -->
    Descripción detallada próximamente.`
  },
  {
    id: 'bourbon-rosado',
    cat: 'origen',
    nombre: 'Bourbon Rosado',
    variedad: 'Variedad Bourbon · Origen',
    desc: 'Perfil suave y elegante. Una variedad poco común ideal para quienes buscan una experiencia refinada.',
    notas: 'Durazno, flores blancas, miel',
    precio: '$42.000',
    peso: '250g · Tostado claro',
    badge: 'Exclusivo',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Bourbon Rosado -->
    Descripción detallada próximamente.`
  },
  {
    id: 'casanare',
    cat: 'origen',
    nombre: 'Casanare',
    variedad: 'Café de origen · Llanero',
    desc: 'Cultivado en el Casanare, expresa la riqueza de suelos únicos con un perfil corpulento y redondo.',
    notas: 'Chocolate oscuro, nuez, cuerpo pleno',
    precio: '$38.000',
    peso: '250g · Tostado medio',
    badge: '',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Casanare -->
    Descripción detallada próximamente.`
  },
  {
    id: 'caturra-natural',
    cat: 'especial',
    nombre: 'Caturra Natural',
    variedad: 'Proceso natural · Especial',
    desc: 'El grano seca dentro de la cereza, concentrando azúcares y aromas. Dulzor intenso y gran complejidad.',
    notas: 'Frutas tropicales, uvas pasas',
    precio: '$40.000',
    peso: '250g · Tostado medio',
    badge: '',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Caturra Natural -->
    Descripción detallada próximamente.`
  },
  {
    id: 'chinchina-chambacu',
    cat: 'origen',
    nombre: 'Chinchina Chambacu',
    variedad: 'Café de origen · Caldas',
    desc: 'De los cafetales de Chinchiná, cuna de la caficultura caldense. Perfil clásico y reconfortante.',
    notas: 'Avellana, miel, caramelo',
    precio: '$38.000',
    peso: '250g · Tostado medio',
    badge: '',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Chinchina Chambacu -->
    Descripción detallada próximamente.`
  },
  {
    id: 'dark-inkwell',
    cat: 'especial',
    nombre: 'Dark Inkwell',
    variedad: 'Tostado oscuro · Edición especial',
    desc: 'Para los amantes del café intenso. Resalta los sabores más profundos. Ideal para espresso.',
    notas: 'Chocolate amargo, tabaco, especias',
    precio: '$45.000',
    peso: '340g · Tostado oscuro',
    badge: 'Edición limitada',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Dark Inkwell -->
    Descripción detallada próximamente.`
  },
  {
    id: 'descafeinado',
    cat: 'especial',
    nombre: 'Descafeinado',
    variedad: 'Sin cafeína · Especial',
    desc: 'Toda la experiencia de un café especial colombiano sin la cafeína. Para disfrutar en cualquier momento.',
    notas: 'Caramelo, almendra, suavidad',
    precio: '$44.000',
    peso: '250g · Tostado medio',
    badge: '',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Descafeinado -->
    Descripción detallada próximamente.`
  },
  {
    id: 'exotico-nyc',
    cat: 'especial',
    nombre: 'Exótico NYC',
    variedad: 'Selección premium · Neira York',
    desc: 'La selección más exclusiva de la casa. Procesados innovadores que sorprenden en cada sorbo.',
    notas: 'Jazmín, frutas exóticas, miel',
    precio: 'Desde $48.000',
    peso: '250g / 500g',
    badge: 'Selección especial',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Exótico NYC -->
    Descripción detallada próximamente.`
  },
  {
    id: 'filadelfia',
    cat: 'origen',
    nombre: 'Filadelfia',
    variedad: 'Café de origen · Caldas',
    desc: 'De Filadelfia, Caldas. Alta montaña que imprime carácter a este café floral y de gran limpieza.',
    notas: 'Cítrico, flores, azúcar morena',
    precio: '$42.000',
    peso: '250g · Tostado medio-claro',
    badge: '',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Filadelfia -->
    Descripción detallada próximamente.`
  },
  {
    id: 'geisha',
    cat: 'especial',
    nombre: 'Geisha',
    variedad: 'Variedad Geisha · Premium',
    desc: 'La variedad más codiciada del mundo. Cultivada en las alturas del Eje Cafetero. Disponibilidad limitada.',
    notas: 'Bergamota, jazmín, durazno',
    precio: '$65.000',
    peso: '250g · Tostado claro',
    badge: 'Premium',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Geisha -->
    Descripción detallada próximamente.`
  },
  {
    id: 'mom-coffee',
    cat: 'especial',
    nombre: 'MOM Coffee',
    variedad: 'Mujeres cafeteras · Social',
    desc: 'Producido por las mujeres de la Asociación Mom Coffee. Cada bolsa apoya directamente a 20 familias.',
    notas: 'Caramelo, fruta dulce, final cálido',
    precio: '$42.000',
    peso: '250g · Tostado medio',
    badge: 'Causa social',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del MOM Coffee -->
    Descripción detallada próximamente.`
  },
  {
    id: 'orgasmo',
    cat: 'especial',
    nombre: 'Orgasmo',
    variedad: 'Experiencia sensorial · Especial',
    desc: 'Una experiencia sensorial completa — intensidad, complejidad y un final que se queda en la memoria.',
    notas: 'Frutos del bosque, cacao, especias',
    precio: 'Desde $45.000',
    peso: '250g / 500g',
    badge: '',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Orgasmo -->
    Descripción detallada próximamente.`
  },
  {
    id: 'regional-inkwell',
    cat: 'blend',
    nombre: 'Regional Inkwell',
    variedad: 'Blend regional · Caldas',
    desc: 'La esencia de la región cafetera en una sola taza. Lo mejor de los municipios cafeteros de Caldas.',
    notas: 'Miel, panela, frutos secos',
    precio: '$40.000',
    peso: '250g · Tostado medio',
    badge: '',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Regional Inkwell -->
    Descripción detallada próximamente.`
  },
  {
    id: 'salamina',
    cat: 'origen',
    nombre: 'Salamina',
    variedad: 'Café de origen · Caldas',
    desc: 'De Salamina, Patrimonio Cultural de Colombia. Perfil limpio, dulce y de gran elegancia.',
    notas: 'Naranja, toffee, vainilla',
    precio: '$38.000',
    peso: '250g · Tostado medio',
    badge: '',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Salamina -->
    Descripción detallada próximamente.`
  },
  {
    id: 'tipica',
    cat: 'origen',
    nombre: 'Típica',
    variedad: 'Variedad Típica · Tradicional',
    desc: 'La variedad que definió el café colombiano por generaciones. El café de nuestros abuelos cafeteros.',
    notas: 'Chocolate con leche, caramelo, nuez',
    precio: '$38.000',
    peso: '250g · Tostado medio',
    badge: '',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada del Típica -->
    Descripción detallada próximamente.`
  },
  {
    id: 'drips',
    cat: 'drip',
    nombre: 'Drips Neira York',
    variedad: 'Filtro individual · Portátil',
    desc: 'Café especial en formato drip. Solo necesitas agua caliente. Perfecto para donde estés.',
    notas: '13g individual · Pack x5 (65g)',
    precio: 'Desde $8.000',
    peso: '13g / 65g ×5',
    badge: 'Práctico',
    modal_desc: `<!-- EDITA AQUÍ la descripción detallada de los Drips -->
    Descripción detallada próximamente.`
  }
];

/* ── HTML ─────────────────────────────────────────────────────── */
const tarjetas = cafes.map((c, i) => `
  <div class="cafe-card reveal d${(i%4)+1}" data-cat="${c.cat}">
    <div class="cc-img">
      ${c.badge ? `<div class="cc-badge">${c.badge}</div>` : ''}
      <div class="img-slot">
        <div class="img-placeholder">
          <div class="ph-icon">☕</div>
          <div class="ph-name">${c.nombre.toUpperCase()}</div>
          <div class="ph-file">${c.id}.jpg</div>
        </div>
        <img src="assets/img/cafes/${c.id}.jpg" alt="${c.nombre}"/>
      </div>
    </div>
    <div class="cc-body">
      <div class="cc-name">${c.nombre}</div>
      <div class="cc-variedad">${c.variedad}</div>
      <p class="cc-desc">${c.desc}</p>
      <div class="cc-notas">${c.notas}</div>
    </div>
    <div class="cc-footer">
      <div>
        <div class="cc-price">${c.precio}</div>
        <div class="cc-size">${c.peso}</div>
      </div>
      <div class="cc-btns">
        <button class="btn-saber" onclick="abrirModalCafe('${c.id}')">Saber más</button>
        <button class="btn-pedir" onclick="pedirCafe('${c.nombre}','${c.peso}','${c.precio}')">Pedir</button>
      </div>
    </div>
  </div>
`).join('');

/* Modales de cada café */
const modales = cafes.map(c => `
  <div class="modal-overlay" id="modal-${c.id}" onclick="overlayClick(event,this)">
    <div class="modal-cafe-box">
      <button class="modal-cafe-close" onclick="cerrarModal('modal-${c.id}')">&times;</button>

      <div class="modal-cafe-img">
        <div class="img-slot" style="width:100%;height:100%">
          <div class="img-placeholder">
            <div class="ph-icon">☕</div>
            <div class="ph-name">${c.nombre.toUpperCase()}</div>
          </div>
          <img src="assets/img/cafes/${c.id}.jpg" alt="${c.nombre}"/>
        </div>
      </div>

      <div class="modal-cafe-body">
        <div class="modal-cafe-variedad">${c.variedad}</div>
        <div class="modal-cafe-nombre">${c.nombre}</div>
        <div class="modal-cafe-rule"></div>

        <div class="modal-cafe-notas">
          <span class="notas-label">Notas de cata</span>
          <span class="notas-val">${c.notas}</span>
        </div>

        <div class="modal-cafe-desc">
          ${c.modal_desc}
        </div>

        <div class="modal-cafe-footer">
          <div>
            <div class="modal-cafe-price">${c.precio}</div>
            <div class="modal-cafe-size">${c.peso}</div>
          </div>
          <button class="btn-pedir btn-pedir-lg"
            onclick="pedirCafe('${c.nombre}','${c.peso}','${c.precio}')">
            Pedir por WhatsApp
          </button>
        </div>
      </div>

    </div>
  </div>
`).join('');

document.getElementById('s-cafes').innerHTML = `

<style>
/* ── FONDO FIJO ── */
#cafes-bg {
  position: fixed; inset: 0; z-index: 0;
  background: url('assets/img/landing-bg.jpg') center/cover no-repeat;
  filter: blur(3px) brightness(0.5);
  transform: scale(1.05);
}

/* ── CONTENIDO SCROLLABLE ── */
#cafes-content { position: relative; z-index: 1; }

/* ── HERO ── */
#cafes-hero { padding: 7rem 0 3.5rem; text-align: center; }
.ch-label { font-size:.7rem;font-weight:500;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:.75rem; }
.ch-title { font-family:'Cormorant Garamond',serif;font-size:clamp(3rem,6vw,5.5rem);font-weight:600;line-height:.95;color:#fff;margin-bottom:.75rem; }
.ch-title em { font-family:'Dancing Script',cursive;font-size:clamp(2rem,4vw,3.5rem);color:#B8952A;font-style:normal;display:block; }
.ch-desc { font-family:'Cormorant Garamond',serif;font-size:1.1rem;color:rgba(255,255,255,.75);max-width:520px;margin:0 auto 2.5rem;line-height:1.75; }

/* ── FILTROS ── */
.cafe-filters { display:flex;gap:.6rem;flex-wrap:wrap;justify-content:center;margin-bottom:3rem; }
.filter-btn { font-size:.72rem;font-weight:500;letter-spacing:.12em;text-transform:uppercase;padding:8px 20px;border-radius:20px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:rgba(255,255,255,.75);cursor:pointer;transition:all .2s;backdrop-filter:blur(8px); }
.filter-btn.active,.filter-btn:hover { background:#C8102E;color:#fff;border-color:#C8102E; }

/* ── GRID ── */
.cafes-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;padding-bottom:4rem; }

/* ── TARJETA ── */
.cafe-card { background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);overflow:hidden;transition:all .3s ease;display:flex;flex-direction:column; }
.cafe-card:hover { background:rgba(255,255,255,.15);border-color:rgba(200,16,46,.5);transform:translateY(-4px);box-shadow:0 20px 60px rgba(0,0,0,.5); }

.cc-img { aspect-ratio:4/3;position:relative;overflow:hidden;background:rgba(0,0,0,.3); }
.cc-img .img-slot { width:100%;height:100%; }
.cc-img .img-slot img { position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .3s,transform .4s; }
.cc-img .img-slot img.loaded { opacity:1; }
.cafe-card:hover .cc-img .img-slot img { transform:scale(1.05); }
.cc-img .img-placeholder { position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px; }
.ph-icon { font-size:2rem;opacity:.2; }
.ph-name { font-size:.75rem;letter-spacing:.1em;color:rgba(255,255,255,.35); }
.ph-file { font-size:.6rem;color:rgba(255,255,255,.2);font-family:monospace; }
.cc-badge { position:absolute;top:10px;left:10px;z-index:2;background:#C8102E;color:#fff;font-size:.6rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;padding:3px 10px; }

.cc-body { padding:1.4rem 1.5rem;flex:1;display:flex;flex-direction:column;gap:.4rem; }
.cc-name { font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:600;color:#fff;line-height:1.1; }
.cc-variedad { font-size:.68rem;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:#C8102E; }
.cc-desc { font-family:'Cormorant Garamond',serif;font-size:.95rem;color:rgba(255,255,255,.75);line-height:1.65;flex:1;margin-top:.3rem; }
.cc-notas { font-size:.78rem;color:rgba(255,255,255,.6);border-left:2px solid #B8952A;padding-left:.75rem;font-style:italic; }

.cc-footer { padding:1rem 1.5rem 1.3rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid rgba(255,255,255,.1);gap:.75rem; }
.cc-price { font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:600;color:#fff;line-height:1; }
.cc-size { font-size:.68rem;color:rgba(255,255,255,.5);margin-top:2px; }
.cc-btns { display:flex;gap:.5rem; }

/* Botones tarjeta */
.btn-saber { background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.25);padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:.7rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:all .2s;white-space:nowrap; }
.btn-saber:hover { background:rgba(255,255,255,.22);border-color:rgba(255,255,255,.5); }
.btn-pedir { background:#C8102E;color:#fff;border:none;padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:.7rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:all .2s;white-space:nowrap; }
.btn-pedir:hover { background:#9B0D22;transform:translateY(-1px); }
.btn-pedir-lg { padding:12px 24px;font-size:.78rem; }

/* CTA final */
.cafes-cta { text-align:center;padding-bottom:5rem; }
.cafes-cta p { font-family:'Cormorant Garamond',serif;font-size:1.1rem;color:rgba(255,255,255,.7);margin-bottom:1.25rem; }

/* ── MODAL CAFÉ ── */
.modal-overlay { position:fixed;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(6px);z-index:800;display:flex;align-items:center;justify-content:center;padding:1.5rem;opacity:0;pointer-events:none;transition:opacity .3s ease; }
.modal-overlay.open { opacity:1;pointer-events:all; }
.modal-cafe-box { background:#0D1B3E;max-width:700px;width:100%;max-height:90vh;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr;position:relative;transform:translateY(16px);transition:transform .3s ease; }
.modal-overlay.open .modal-cafe-box { transform:none; }
.modal-cafe-close { position:absolute;top:1rem;right:1rem;background:rgba(255,255,255,.1);border:none;color:#fff;width:32px;height:32px;font-size:1.2rem;cursor:pointer;z-index:2;transition:background .2s;display:flex;align-items:center;justify-content:center; }
.modal-cafe-close:hover { background:rgba(200,16,46,.7); }
.modal-cafe-img { aspect-ratio:1;overflow:hidden;position:relative; }
.modal-cafe-img .img-slot { width:100%;height:100%; }
.modal-cafe-img .img-slot img { position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .3s; }
.modal-cafe-img .img-slot img.loaded { opacity:1; }
.modal-cafe-img .img-placeholder { position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(255,255,255,.05); }
.modal-cafe-body { padding:2rem 2rem 2rem; display:flex;flex-direction:column;gap:.75rem; }
.modal-cafe-variedad { font-size:.65rem;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:#C8102E; }
.modal-cafe-nombre { font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:600;color:#fff;line-height:1; }
.modal-cafe-rule { width:36px;height:2px;background:#C8102E; }
.modal-cafe-notas { background:rgba(255,255,255,.06);padding:.75rem 1rem;border-left:2px solid #B8952A; }
.notas-label { display:block;font-size:.62rem;font-weight:500;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:.25rem; }
.notas-val { font-family:'Cormorant Garamond',serif;font-size:.95rem;font-style:italic;color:rgba(255,255,255,.8); }
.modal-cafe-desc { font-family:'Cormorant Garamond',serif;font-size:1rem;color:rgba(255,255,255,.7);line-height:1.75;flex:1; }
.modal-cafe-footer { display:flex;align-items:center;justify-content:space-between;padding-top:1rem;border-top:1px solid rgba(255,255,255,.1);gap:1rem;flex-wrap:wrap; }
.modal-cafe-price { font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:600;color:#fff; }
.modal-cafe-size { font-size:.7rem;color:rgba(255,255,255,.45);margin-top:2px; }

@media(max-width:1024px){ .cafes-grid{grid-template-columns:repeat(2,1fr)} }
@media(max-width:640px){ .cafes-grid{grid-template-columns:1fr} .modal-cafe-box{grid-template-columns:1fr} .modal-cafe-img{aspect-ratio:16/9} }
</style>

<div id="cafes-bg"></div>

<div id="cafes-content">
  <div class="container">

    <div id="cafes-hero" class="reveal">
      <p class="ch-label">Tienda online</p>
      <h1 class="ch-title">Nuestros<br><em>cafés especiales</em></h1>
      <p class="ch-desc">Solo los mejores granos del Eje Cafetero son merecedores del sello Neira York.</p>
      <div class="cafe-filters">
        <button class="filter-btn active" data-filter="all">Todos</button>
        <button class="filter-btn" data-filter="blend">Blends</button>
        <button class="filter-btn" data-filter="origen">Origen</button>
        <button class="filter-btn" data-filter="especial">Especiales</button>
        <button class="filter-btn" data-filter="drip">Drips</button>
      </div>
    </div>

    <div class="cafes-grid">${tarjetas}</div>

    <div class="cafes-cta reveal">
      <p>¿Tienes dudas sobre qué café es el indicado para ti?</p>
      <button class="btn-pedir btn-pedir-lg"
        onclick="window.open('https://wa.me/573205224531?text=Hola%20Neira%20York%20Coffee!%20Quiero%20que%20me%20recomienden%20un%20caf%C3%A9.','_blank')">
        Pedir asesoría por WhatsApp
      </button>
    </div>

  </div>
</div>

${modales}

`;

/* Función para abrir modal de café */
window.abrirModalCafe = function(id) {
  abrirModal('modal-' + id);
  /* Activar imágenes del modal */
  const m = document.getElementById('modal-' + id);
  if (m) {
    m.querySelectorAll('.img-slot img').forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('loaded');
        const ph = img.previousElementSibling;
        if (ph) ph.style.display = 'none';
      }
    });
  }
};

})();