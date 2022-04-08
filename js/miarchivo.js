// FUNCIONES MATEMATICAS
const suma = (a, b) => a + b
const resta = (a, b) => a - b
const mult = (a, b) => a * b
const sumIva = x => x * 1.21
const desc = x => x * 0.90 

// Declaro mi lista de productos con sus caracteristicas
class Producto {
    constructor(nombre, precio, volumen) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.volumen = volumen;
    }
}

// Formo un array para almacenar mis datos / objetos
const productos = [];
productos.push(new Producto("cocacola","550","2.5l"));
productos.push(new Producto("pepsi","500","2.5l"));
productos.push(new Producto("sevenup","450","2.5l"));
productos.push(new Producto("baggio","120","1l"));
productos.push(new Producto("agua","100","1.5l"));
productos.push(new Producto("fernet","850","750ml"));
productos.push(new Producto("gancia","620","980ml"));
productos.push(new Producto("smirnoff","770","750ml"));
productos.push(new Producto("frizze","630","1l"));
productos.push(new Producto("campari","670","750ml"));
productos.push(new Producto("monster","230","500ml"));
productos.push(new Producto("redbull","220","500ml"));
productos.push(new Producto("ipa","300","500ml"));
productos.push(new Producto("sky","840","750ml"));
productos.push(new Producto("corona","340","330ml"));
productos.push(new Producto("absolut","1400","1l"));

// Productos con suma de IVA
const productosIva = productos.map((p) => {
    return {
        nombre: p.nombre,
        precio: p.precio * 1.21,
        volumen: p.volumen,
    }
})
console.log(productosIva)

// Productos con descuento de 10%
const productosDesc = productos.map((p) => {
    return {
        nombre: p.nombre,
        precio: p.precio * 0.90,
        volumen: p.volumen,
    }
})
console.log(productosDesc)

// Filtrado de precios
const filtrobarato = productos.filter((p) => p.precio <= 600)
console.log(filtrobarato)
const filtrocaro = productos.filter((p) => p.precio > 600)
console.log(filtrocaro)

// Filtrado albabetico
productos.sort((a,b) => {
    if(a.nombre > b.nombre) {return 1}
    if(a.nombre < b.nombre) {return -1}

    return 0
})
console.log(productos)

// Filtro de busqueda con prompt
const busqueda = prompt("¿Que producto esta buscando?").toUpperCase()
const search = productos.some(p => p.nombre.toUpperCase() == busqueda)
alert(search)