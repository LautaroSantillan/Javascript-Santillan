// FUNCIONES MATEMATICAS
const suma = (a, b) => a + b
const resta = (a, b) => a - b
const mult = (a, b) => a * b
const sumIva = x => x * 1.21
const desc = x => x * 0.90 

// Declaro mi lista de productos con sus caracteristicas
class Producto {
    constructor(id, nombre, precio, volumen, img,) {
        this.id = parseFloat(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.volumen = volumen;
        this.img = img;
    }
}

// Formo un array para almacenar mis datos / objetos
const productos = [];
productos.push(new Producto("1", "cocacola","350","2.5lt", "img/cocacola.jpg"));
productos.push(new Producto("2", "pepsi","300","2.5lt", "img/pepsi.jpg"));
productos.push(new Producto("3", "sevenup","250","2.5lt", "img/7up.jpg"));
productos.push(new Producto("4", "baggio","120","1lt", "img/baggio.jpg"));
productos.push(new Producto("5", "agua","100","1.5lt", "img/agua.jpg"));
productos.push(new Producto("6", "fernet","850","750ml", "img/fernet.jpg"));
productos.push(new Producto("7", "gancia","620","980ml", "img/gancia.jpg"));
productos.push(new Producto("8", "smirnoff","770","750ml", "img/smirnoff.jpg"));
productos.push(new Producto("9", "frizze","630","1lt", "img/frizze.jpg"));
productos.push(new Producto("10", "campari","670","750ml", "img/campari.jpg"));
productos.push(new Producto("11", "monster","230","500ml", "img/monster2.jpg"));
productos.push(new Producto("12", "redlabel","2800","750ml", "img/redlabel.jpg"));
productos.push(new Producto("13", "ipa","300","500ml", "img/ipa.jpg"));
productos.push(new Producto("14", "sky","840","750ml", "img/sky.jpg"));
productos.push(new Producto("15", "corona","340","330ml", "img/corona.jpg"));
productos.push(new Producto("16", "absolut","1400","1lt", "img/absolut.jpg"));
productos.push(new Producto("17", "redbull","220","500ml", "img/redbull.jpg"));
productos.push(new Producto("18", "drlemon","340","1lt", "img/drlemon.jpg"));
productos.push(new Producto("19", "termidor","200","1lt", "img/termidor.jpg"));
productos.push(new Producto("20", "quilmes","170","1lt", "img/quilmes.jpg"));

// Plantillas literales e InnerHTML
let htmlCatalogo = ''
for(const Producto of productos) {
    htmlCatalogo += `
                    <div class="producto--ind">
                        <img src="${Producto.img}" alt="ImagenDe${Producto.nombre}">
                        <h3> ${Producto.nombre} ${Producto.volumen} </h3>
                        <div class="producto--precios">
                        <p> $ ${Producto.precio}</p>
                        </div>
                        <button type="button" class="btn">Agregar al Carrito</button>
                    </div>
                    `
    document.getElementById('productos--contenedor').innerHTML = htmlCatalogo
}

// Productos con suma de IVA
const productosIva = productos.map((p) => {
    return {
        id: p.id,
        nombre: p.nombre,
        precio: p.precio * 1.21,
    }
})
console.log(productosIva)

// Productos con descuento de 10%
const productosDesc = productos.map((p) => {
    return {
        id: p.id,
        nombre: p.nombre,
        precio: p.precio * 0.90,
    }
})
console.log(productosDesc)

// Filtrado de precios
const filtrobarato = productos.filter((p) => p.precio <= 600)
console.log(filtrobarato)
const filtrocaro = productos.filter((p) => p.precio > 600)
console.log(filtrocaro)

// Filtrado albabetico
// productos.sort((a,b) => {
//     if(a.nombre > b.nombre) {return 1}
//     if(a.nombre < b.nombre) {return -1}
//     return 0
// })
// console.log(productos)
