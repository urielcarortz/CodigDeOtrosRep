 //Integrantes Ximena, Uriel. En calif Avanzado! 
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./asset/img/taco-negro.jpg"},//Se cambio
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/img/taco-azul.jpg"},//la ruta 
{nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/img/bota-negra.jpg"},//de las imagenes 
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/img/bota-azul.jpg"},//para
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assest/img/zapato-rojo.jpg"}//ordenar los archivos
];

// Obtén la referencia al ul de productos por su id
const ul = document.getElementById("lista-de-productos");

const $i = document.querySelector('.input');

function displayProductos(productos) {
  for (let i = 0; i < productos.length; i++) {
    var li = document.createElement("li"); // Cambiado a li en lugar de div
    li.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    li.appendChild(ti);
    li.appendChild(imagen);

    ul.appendChild(li);   // Agregamos ul con el método appendChild y cambiamos el parámetro por li
  }
}

displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  const texto = $i.value.toLowerCase(); // Convertido a minúsculas para hacer la comparación insensible a mayúsculas
  const productosFiltrados = filtrado(productos, texto);

  displayProductos(productosFiltrados);
};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};