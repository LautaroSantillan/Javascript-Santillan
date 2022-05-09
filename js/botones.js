// CONSTANTES Y VARIABLES
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
const ordenA = document.getElementById('ordenA')
let carrito = []

// ESCUCHA DE EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

ordenA.addEventListener('click', e => {
    OrderA(e)
})

// ENLAZAR EL JSON
const fetchData = async () => {
    try {
        const res = await fetch('js/data.json')
        const data = await res.json()
        console.log(data)
        pintarCards(data)
        OrderA(data)
        OrderZ(data)
        PriceCheap(data)
        PriceExpensive(data)
    } catch (error) {}
}

// AGREGAR ITEMS PRODUCTOS
const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h3').textContent = producto.title + " " + producto.vol
        templateCard.querySelector('.precio').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.img)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const OrderA = data => {
    data.forEach(productos => {
        data.sort((a,b) => {
            if(a.title > b.title) {return 1}
            if(a.title < b.title) {return -1}
            return 0
        })
    })
    console.log("Se ordeno alfabetica la lista desde la A a la Z:", data)
    // pintarCards()
}

// const OrderA = e => {
//     data.forEach(productos => {
//         data.sort((a,b) => {
//             if(a.title > b.title) {return 1}
//             if(a.title < b.title) {return -1}
//             return 0
//             })
//     console.log("Se ordeno alfabetica la lista de la A a la Z:", data)
//     });
//      pintarCards()
// }

// const OrderZ = data => {
//     data.forEach(productos => {
//         data.sort((a,b) => {
//             if(a.title < b.title) {return 1}
//             if(a.title > b.title) {return -1}
//             return 0
//         })
//     })
//     console.log("Se ordeno alfabetica la lista desde la Z a la A:", data)
//     // pintarCards()
// }

// const PriceCheap = data => {
//     data.forEach(productos => {
//         data.sort((p1, p2) => {
//             if(p1.precio < p2.precio) {return -1;} 
//             else {return 0;}
//         })
//     })
//     console.log("Se ordenaron los precios de menor a mayor:", data)
//     // pintarCards()
// }

// const PriceExpensive = data => {
//     data.forEach(productos => {
//         data.sort((p1, p2) => {
//             if(p1.precio > p2.precio) {return -1;} 
//             else {return 0;}
//         })
//     })
//     console.log("Se ordenaron los precios de mayor a menor:", data)
//     // pintarCards()
// }
