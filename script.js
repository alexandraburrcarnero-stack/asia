// Datos de las obras de Richard Hamilton
const obras = [
  {
    imagen: 'flores.jpg',
    titulo: 'Just what is it that makes today\'s homes so different, so appealing?',
    fecha: '1956',
    descripcion: 'Obra magna del Pop Art británico. Este collage revolucionario combina publicidad, objetos de consumo y figuras humanas para mostrar cómo la sociedad moderna está completamente dominada por el consumo y los medios de comunicación.',
    artista: 'Richard Hamilton'
  },
  {
    imagen: 'descarga.jpg',
    titulo: 'Swingeing London 67',
    fecha: '1968–1969',
    descripcion: 'Serie de imágenes basada en una fotografía de Mick Jagger arrestado. La obra reflexiona sobre la fama, el poder de los medios de comunicación y la relación entre cultura pop y política.',
    artista: 'Richard Hamilton'
  },
  {
    imagen: 'descarga (1).jpg',
    titulo: 'Interior',
    fecha: '1964–1965',
    descripcion: 'Representa un espacio doméstico moderno con elementos de Pop Art. Muestra el interés de Hamilton por el diseño, la arquitectura y la vida cotidiana, combinando arte contemporáneo con la cultura de consumo.',
    artista: 'Richard Hamilton'
  },
  {
    imagen: 'WS_PALG_002_020A-001.jpg',
    titulo: 'Popular Culture Assembly',
    fecha: '1963',
    descripcion: 'Una composición vibrante que representa los elementos icónicos de la cultura popular. Combina figuras abstracts con símbolos del consumismo moderno en tonos llamativos.',
    artista: 'Richard Hamilton'
  },
  {
    imagen: 'casa.jpeg',
    titulo: '$he',
    fecha: '1958–1961',
    descripcion: 'Obra influida por la publicidad y el diseño industrial. Presenta formas y colores que critican la imagen de la mujer en la cultura de consumo contemporánea.',
    artista: 'Richard Hamilton'
  },
  {
    imagen: 'marco.avif',
    titulo: 'The Citizen',
    fecha: '1981–1983',
    descripcion: 'Una obra más política, inspirada en el conflicto de Irlanda del Norte. Refleja el interés de Hamilton por temas sociales y políticos más allá del Pop Art tradicional.',
    artista: 'Richard Hamilton'
  },
  {
    imagen: 'marco.avif',
    titulo: 'The Citizen',
    fecha: '1981–1983',
    descripcion: 'Una obra más política, inspirada en el conflicto de Irlanda del Norte. Refleja el interés de Hamilton por temas sociales y políticos más allá del Pop Art tradicional.',
    artista: 'Richard Hamilton'
  },
  {
    imagen: 'richard-hamilton-poster-mixed-media-available-for-sale-on-composition-gallery1658311989-59880.jpg',
    titulo: 'Mixed Media Composition I',
    fecha: '1960s',
    descripcion: 'Obra experimental que combina técnicas mixtas y elementos del Pop Art. Integra símbolos de la cultura popular con formas abstractas en una composición dinámica.',
    artista: 'Richard Hamilton'
  },
  {
    imagen: 'richard-hamilton-poster-mixed-media-available-for-sale-on-composition-gallery1658311989-59880 (1).jpg',
    titulo: 'Mixed Media Composition II',
    fecha: '1960s',
    descripcion: 'Segunda variación de la serie de composiciones mixtas. Utiliza collage y técnicas de serigrafía para crear una obra que desafía los límites entre arte culto y popular.',
    artista: 'Richard Hamilton'
  }
];

let obraActual = 0;

// Función para cambiar la obra destacada
function cambiarObra(index) {
  obraActual = index;
  const obra = obras[index];
  
  // Actualizar imagen principal
  document.getElementById('imagenPrincipal').src = obra.imagen;
  document.getElementById('imagenPrincipal').alt = obra.titulo;
  
  // Actualizar información
  document.getElementById('tituloPrincipal').textContent = obra.titulo;
  document.getElementById('fechaPrincipal').innerHTML = `<strong>${obra.fecha}</strong>`;
  document.getElementById('descripcionPrincipal').textContent = obra.descripcion;
  
  // Actualizar miniatura activa
  document.querySelectorAll('.miniatura-item').forEach((item, i) => {
    if (i === index) {
      item.style.borderColor = '#000000';
      item.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
    } else {
      item.style.borderColor = '#e0e0e0';
      item.style.boxShadow = 'none';
    }
  });
  
  // Animación suave
  document.querySelector('.obra-destacada').style.opacity = '0.8';
  setTimeout(() => {
    document.querySelector('.obra-destacada').style.opacity = '1';
  }, 100);
}

// Navegación con teclado
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    cambiarObra((obraActual + 1) % obras.length);
  } else if (event.key === 'ArrowLeft') {
    cambiarObra((obraActual - 1 + obras.length) % obras.length);
  }
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
  cambiarObra(0);
});
