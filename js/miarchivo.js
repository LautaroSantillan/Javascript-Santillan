// Declaro mi lista de productos con sus caracteristicas
class Producto {
    constructor(nombre, precio, volumen) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.volumen = volumen;
    }
    // Aplico un descuento de 10%
    descuento(){
    this.precio = this.precio * 0.90;
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
productos.push(new Producto("gancia","420","980ml"));
productos.push(new Producto("smirnoff","770","750ml"));
productos.push(new Producto("frizze","230","1l"));
productos.push(new Producto("campari","670","750ml"));
productos.push(new Producto("monster","230","500ml"));
productos.push(new Producto("redbull","220","500ml"));
productos.push(new Producto("ipa","300","500ml"));
productos.push(new Producto("sky","840","750ml"));
productos.push(new Producto("corona","200","330ml"));
productos.push(new Producto("absolut","1700","1l"));

// Utilizo la sentencia for...of para modificar sus precios
for(const producto of productos)
    producto.descuento();

// Prueba de algunos metodos
console.log(productos.length);
console.log(productos.includes("manaos"));