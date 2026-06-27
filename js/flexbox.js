const comidas = [
  {
    nombre: 'Pizza',
    categoria: 'Comida rápida',
    saludable: false,
    descripcion: 'Masa crujiente con queso y diferentes ingredientes.'
  },
  {
    nombre: 'Ensalada César',
    categoria: 'Ensalada',
    saludable: true,
    descripcion: 'Lechuga, pollo, queso y aderezo César.'
  },
  {
    nombre: 'Hamburguesa',
    categoria: 'Comida rápida',
    saludable: false,
    descripcion: 'Carne, queso, lechuga y tomate en pan.'
  },
  {
    nombre: 'Sushi',
    categoria: 'Comida japonesa',
    saludable: true,
    descripcion: 'Rollos de arroz con pescado y vegetales.'
  },
  {
    nombre: 'Pasta',
    categoria: 'Comida italiana',
    saludable: false,
    descripcion: 'Fideos con salsa de tomate y queso.'
  },
  {
    nombre: 'Frutas',
    categoria: 'Postre saludable',
    saludable: true,
    descripcion: 'Selección de frutas frescas de estación.'
  }
];

let comidasMostradas = comidas;

const contenedor = document.getElementById('contenedorTarjetas');
const btnOrdenar = document.getElementById('btnOrdenar');
const btnSaludables = document.getElementById('btnSaludables');
const btnRestaurar = document.getElementById('btnRestaurar');

function mostrarComidas() {
  contenedor.innerHTML = '';

  comidasMostradas.forEach(function(comida) {
    contenedor.innerHTML += `
      <article class="tarjeta">
        <h3>${comida.nombre}</h3>
        <span class="etiqueta">${comida.categoria}</span>
        <p>${comida.descripcion}</p>
        <p><strong>Saludable:</strong> ${comida.saludable ? 'Sí' : 'No'}</p>
      </article>
    `;
  });
}

btnOrdenar.addEventListener('click', function() {
  comidasMostradas = [...comidas].sort(function(a, b) {
    return a.nombre.localeCompare(b.nombre);
  });

  mostrarComidas();
});

btnSaludables.addEventListener('click', function() {
  comidasMostradas = comidas.filter(function(comida) {
    return comida.saludable;
  });

  mostrarComidas();
});

btnRestaurar.addEventListener('click', function() {
  comidasMostradas = comidas;
  mostrarComidas();
});

mostrarComidas();