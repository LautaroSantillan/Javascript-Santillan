// FUNCIONES MATEMATICAS

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const mult = (a, b) => a * b
const sumIva = x => x * 1.21
const desc = x => x * 0.90 

// Declaro las caracteristicas que van a tener los productos

class producto {
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
productos.push(new producto("1", "cocacola","350","2.5lt", "img/cocacola.jpg"));
productos.push(new producto("2", "pepsi","300","2.5lt", "img/pepsi.jpg"));
productos.push(new producto("3", "sevenup","250","2.5lt", "img/7up.jpg"));
productos.push(new producto("4", "baggio","120","1lt", "img/baggio.jpg"));
productos.push(new producto("5", "agua","100","1.5lt", "img/agua.jpg"));
productos.push(new producto("6", "fernet","850","750ml", "img/fernet.jpg"));
productos.push(new producto("7", "gancia","620","980ml", "img/gancia.jpg"));
productos.push(new producto("8", "smirnoff","770","750ml", "img/smirnoff.jpg"));
productos.push(new producto("9", "frizze","630","1lt", "img/frizze.jpg"));
productos.push(new producto("10", "campari","670","750ml", "img/campari.jpg"));
productos.push(new producto("11", "monster","230","500ml", "img/monster2.jpg"));
productos.push(new producto("12", "redlabel","2800","750ml", "img/redlabel.jpg"));
productos.push(new producto("13", "ipa","300","500ml", "img/ipa.jpg"));
productos.push(new producto("14", "sky","840","750ml", "img/sky.jpg"));
productos.push(new producto("15", "corona","340","330ml", "img/corona.jpg"));
productos.push(new producto("16", "absolut","1400","1lt", "img/absolut.jpg"));
productos.push(new producto("17", "redbull","220","500ml", "img/redbull.jpg"));
productos.push(new producto("18", "drlemon","340","1lt", "img/drlemon.jpg"));
productos.push(new producto("19", "termidor","200","1lt", "img/termidor.jpg"));
productos.push(new producto("20", "quilmes","170","1lt", "img/quilmes.jpg"));

// Plantillas literales e InnerHTML

let htmlCatalogo = ''
for(const producto of productos) {
    htmlCatalogo += `
                    <div class="producto--ind" data-aos="zoom-in">
                        <img src="${producto.img}" alt="ImagenDe${producto.nombre}">
                        <h3> ${producto.nombre} </h3>
                        <h3> ${producto.volumen} </h3>
                        <div class="producto--precios">
                        <p> $ ${producto.precio}</p>
                        </div>
                        <button type="button" class="btnAddCart" id="producto-${producto.id}">Agregar al Carrito</button>
                    </div>
                    `
    document.getElementById('productos--contenedor').innerHTML = htmlCatalogo
}

// Mostrar todos los productos

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
})

function mostrarProductos(){
    productos.forEach(producto => {
        console.log(producto.id, producto.nombre, producto.volumen, producto.precio, producto.img)
    })
}

// Carrito

const cart = []

const btncart = document.getElementsByClassName('btnAddCart')
for (const btn of btncart) {
    btn.onclick = addToCart
}

function addToCart(e) {
    const btn = e.target
    const id = btn.id.split('-')[1] 
    const producto = productos.find(p => p.id == id)
    swal({
        title: "Producto Agregado!",
        text: "¡Bien Hecho! Usted acaba de añadir un producto al carrito.",
        icon: "success",
        button: "CONTINUAR LA COMPRA",
    });
    console.log("Se agrego el producto:", producto.nombre, producto.volumen, "al carrito")
}

// Filtrado de orden alfabetico A-Z

const btnOrderA = document.getElementsByClassName('ordenA')
for (const btn of btnOrderA) {
    btn.onclick = orderAtoZ
}

function orderAtoZ(e){
    const btn = e.target
    const producto = productos.sort((a,b) => {
        if(a.nombre > b.nombre) {return 1}
        if(a.nombre < b.nombre) {return -1}
        return 0
    })
    console.log("Se ordeno alfabetica la lista de la A a la Z:", productos)
}

// Filtrado de orden alfabetico Z-A

const btnOrderZ = document.getElementsByClassName('ordenZ')
for (const btn of btnOrderZ) {
    btn.onclick = orderZtoA
}

function orderZtoA(e){
    const btn = e.target
    const producto = productos.sort((a,b) => {
        if(a.nombre < b.nombre) {return 1}
        if(a.nombre > b.nombre) {return -1}
        return 0
    })
    console.log("Se ordeno alfabetica la lista de la Z a la A:", productos)
}

// Filtrado de precios de menor a mayor

const btnCheap = document.getElementsByClassName('precioBarato')
for (const btn of btnCheap) {
    btn.onclick = precioBarato
}

function precioBarato(e){
    const btn = e.target
    const producto = productos.sort((p1, p2) => {
        if(p1.precio < p2.precio) {
            return -1;
        } else {
            return 0;
        }
    })
    console.log("Se ordenaron los precios de menor a mayor:", productos)
}

// Filtrado de precios de mayor a menor

const btnExpensive = document.getElementsByClassName('precioCaro')
for (const btn of btnExpensive) {
    btn.onclick = precioCaro
}

function precioCaro(e){
    const btn = e.target
    const producto = productos.sort((p1, p2) => {
        if(p1.precio > p2.precio) {
            return -1;
        } else {
            return 0;
        }
    })
    console.log("Se ordenaron los precios de mayor a menor:", productos)
}