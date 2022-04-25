// CARACTERISTICAS DE LOS PRODUCTOS

class producto {
    constructor(id, nombre, precio, volumen, img,) {
        this.id = parseFloat(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.volumen = volumen;
        this.img = img;
    }
}

// ARRAY DE PRODUCTOS

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

// MOSTRAR PRODUCTOS

// function mostrarProductos(){
//     productos.forEach(producto => {
//     let htmlCatalogo = ''
//     for(const producto of productos) {
//     htmlCatalogo += `
//                 <div class="producto--ind item" data-aos="zoom-in">
//                     <img src="${producto.img}" alt="ImagenDe${producto.nombre}" class="itemimg">
//                     <h3 class="itemtitle"> ${producto.nombre} </h3>
//                     <h3 class="itemvol"> ${producto.volumen} </h3>
//                     <div class="producto--precios">
//                         <p class="itemprice">$${producto.precio}</p>
//                     </div>
//                     <button type="button" class="btnAddCart" id="producto-${producto.id}">Agregar al Carrito</button>
//                 </div>
//                     `
//     document.getElementById('productos--contenedor').innerHTML = htmlCatalogo
// }})}

// document.addEventListener('DOMContentLoaded', () => {
//     mostrarProductos();
// })

// ORDEN ALFABETICO A-Z

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
    mostrarProductos();
}

// ORDEN ALFABETICO Z-A

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
    mostrarProductos();
}

// ORDEN DE PRECIOS DE MENOR A MAYOR

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
    mostrarProductos();
}

// ORDEN DE PRECIOS DE MAYOR A MENOR

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
    mostrarProductos();
}

// CARRITO

let htmlCatalogo = ''
for(const producto of productos) {
    htmlCatalogo += `
                    <div class="producto--ind item" data-aos="zoom-in">
                        <img src="${producto.img}" alt="ImagenDe${producto.nombre}" class="item-img">
                        <h3 class="item-title"> ${producto.nombre} </h3>
                        <h3 class="item-vol"> ${producto.volumen} </h3>
                        <div class="producto--precios">
                            <p class="item-price">$${producto.precio}</p>
                        </div>
                        <button type="button" class="btnAddCart" id="producto-${producto.id}">Agregar al Carrito</button>
                    </div>
                    `
    document.getElementById('productos--contenedor').innerHTML = htmlCatalogo
}

const carrito = []

const btncart = document.querySelectorAll('.btnAddCart')
btncart.forEach(addToCart => {
    addToCart.addEventListener('click', addToCartClicked);
});

const buyButton = document.querySelector('.comprarButton');
buyButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

// AGREGAR ITEM AL CARRITO (BOTON)

function addToCartClicked(e){
    const btn = e.target
    const item = btn.closest('.item');

    const itemTitle = item.querySelector('.item-title').textContent;
    const itemVol = item.querySelector('.item-vol').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImg = item.querySelector('.item-img').src;
    
    addItemToShoppingCart(itemTitle, itemVol, itemPrice, itemImg);
}

// AGREGAR ITEM AL CARRITO

function addItemToShoppingCart(itemTitle, itemVol, itemPrice, itemImg){
    
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
        'shoppingCartItemTitle'
    );
    for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) {let elementQuantity = elementsTitle[
        i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
        elementQuantity.value++;
        $('.toast').toast('show');
        updateShoppingCartTotal();
        return;
        }
    }

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src="${itemImg}" class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle} ${itemVol}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>
    `;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

    updateShoppingCartTotal();
}

// ACTUALIZACION DE PRECIOS

function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
    
    shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    shoppingCartItems.forEach(shoppingCartItem => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$',''));
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity'); 
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
        
        shoppingCartTotal.innerHTML = `$${total}`
        addLocalStorage();
    })
}

// ELIMINAR ITEMS

function removeShoppingCartItem(e){
    const buttonClicked = e.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
} 

// CANTIDAD DE SELECCION DE PRODUCTOS

function quantityChanged(e){
    const input = e.target;
    if(input.value<=0){
        input.value=1;
    }
    updateShoppingCartTotal();
}

// BOTON COMPRAR

function comprarButtonClicked(){
    swal({
        title: "Compra realizada!",
        text: "¡Bien Hecho! Usted acaba de efectuar su pedido.",
        icon: "success",
        button: "CONTINUAR LA COMPRA",
    });
    shoppingCartItemsContainer.innerHTML = ``;
    updateShoppingCartTotal();
}

// LOCALSTORAGE

function addLocalStorage(){
    localStorage.setItem('.shoppingCartTotal', JSON.stringify(carrito));
}

window.onload = function(){
    const localstorage = JSON.parse(localStorage.getItem('.shoppingCartTotal'))
    if(localstorage){
        carrito = localstorage;
        renderCarrito();
    }
}