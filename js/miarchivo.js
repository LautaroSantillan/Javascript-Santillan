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

// Utilizo la sentencia for...of para modificar sus precios
for(const producto of productos)
    producto.descuento();

// Prueba de algunos metodos
console.log(productos.length);
console.log(productos.includes("manaos"));