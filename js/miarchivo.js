// Mi proyecto final quiero que sea un carrito de compras de una tienda virtual y que tenga varios productos.

// Precios de los productos iniciales
let cocaCola = 550;
let pepsi = 500;
let sevenUp = 450;

// Variable
let cantidad = 0;

// Funciones de operaciones matemáticas
const resultado = x => x * cantidad;

// Algoritmo
do {
    cantidad = parseInt(prompt("¿Cuantas Coca-Cola quiere? Si no quiere este producto o quiere seguir ponga 0"))
    if(cantidad == "0") {
        break
    }
    let nuevoPrecioA = resultado(cocaCola)
    alert("Tu compra de " + cantidad + " Coca-Cola tiene un valor de " + nuevoPrecioA)
} while(true)
alert("Sigamos la compra...")

do {
    cantidad = parseInt(prompt("¿Cuantas Pepsi quiere? Si no quiere este producto o quiere seguir la compra ponga 0"))
    if(cantidad == "0") {
        break
    }
    let nuevoPrecioB = resultado(pepsi)
    alert("Tu compra de " + cantidad + " Pepsi tiene un valor de " + nuevoPrecioB)
} while(true)
alert("Sigamos la compra...")

do {
    cantidad = parseInt(prompt("¿Cuantas 7up quiere? Si no quiere este producto o quiere terminar la compra ponga 0"))
    if(cantidad == "0") {
        break
    }
    let nuevoPrecioC = resultado(sevenUp)
    alert("Tu compra de " + cantidad + " 7up tiene un valor de " + nuevoPrecioC)
} while(true)
alert("FIN DE LA COMPRA :)")