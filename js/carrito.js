// CONSTANTES Y VARIABLES
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = []

// ESCUCHA DE EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    // LOCALSTORAGE
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})

cards.addEventListener('click', e => {
    addCarrito(e)
})

items.addEventListener('click', e => {
    btnSumar(e)
})

// ENLAZAR EL JSON
const fetchData = async () => {
    try {
        const res = await fetch('js/data.json')
        const data = await res.json()
        console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error + "\nNo se han podido encontrar los productos")
    }
}

// AGREGAR ITEMS PRODUCTOS
const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h3').textContent = producto.title + " " + producto.vol
        templateCard.querySelector('.precio').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.img)
        templateCard.querySelector('.btn-add').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

// AGREGAR AL CARRITO
const addCarrito = e => {
    if(e.target.classList.contains('btn-add')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-add').dataset.id,
        title: objeto.querySelector('h3').textContent,
        precio: objeto.querySelector('.precio').textContent,
        cantidad: 1 
    }
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto}
    pintarCarrito()
}

// AGREGAR PRODUCTOS AL CARRITO
const pintarCarrito = () => {
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    pintarFooter()
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

// AGREGAR PRODUCTOS EN LA PARTE INFERIOR DEL CARRITO
const pintarFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `
                            <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
                            `
        return
    }

    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)
    // VACIAR CARRITO - BOTON
    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        swal({
            title: "Compra eliminada!",
            text: "Usted ha rechazado el pedido de compra.",
            icon: "error",
            button: "CONTINUAR VIENDO...",
        });
        carrito = {}
        pintarCarrito()
        console.log("Se elimino la compra y se vacio el carrito")
    })
    // COMPRAR CARRITO - BOTON
    const btn = document.querySelector('#comprar-carrito')
    btn.addEventListener('click', () => {
        swal({
            title: "Compra realizada!",
            text: "¡Bien Hecho! Usted acaba de realizar su pedido.",
            icon: "success",
            button: "CONTINUAR LA COMPRA",
        });
        carrito = {}
        pintarCarrito()
        console.log("Se realizo la compra y se vacio el carrito")
    })
}
// SUMAR/RESTAR PRODUCTOS - BOTON
const btnSumar = e => {
    if(e.target.classList.contains('btn-info')){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad ++
        carrito[e.target.dataset.id] = {...producto}
        console.log(carrito[e.target.dataset.id])
        pintarCarrito()
        Toastify({
            text: "PRODUCTO AGREGADO!",
            duration: 2000,
            gravity: "bottom",
            position: "center",
            style: {
                background: "linear-gradient(to bottom, #e48f65, #ecdcbe)",
                color: "black",
            },
        }).showToast()
    }
    if(e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad --
        if(producto.cantidad == 0){
            delete carrito[e.target.dataset.id]
        }
        console.log(carrito[e.target.dataset.id])
        pintarCarrito()
        Toastify({
            text: "PRODUCTO ELIMINADO!",
            duration: 2000,
            gravity: "bottom",
            position: "center",
            style: {
                background: "linear-gradient(to bottom, #e48f65, #ecdcbe)",
                color: "black",
            },
        }).showToast()
    }
    e.stopPropagation()
}