const product = [
    {
        id: 0,
        imgUrl: 'assets/img/product1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },

    {
        id: 1,
        imgUrl: 'assets/img/product2.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },

    {
        id: 2,
        imgUrl: 'assets/img/product3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },

    {
        id: 3,
        imgUrl: 'assets/img/product4.jpg',
        title: 'Head Phones',
        price: 100,
    },

    {
        id: 4,
        imgUrl: 'assets/img/product5.jpg',
        title: 'Keyboard Mechanical',
        price: 130,
    },

    {
        id: 5,
        imgUrl: 'assets/img/product6.jpg',
        title: 'GTX 1660 SUPER',
        price: 350,
    }
];

const categories = [...new Set(product.map((item) => {
    return item
}))]

let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    let { imgUrl, title, price } = item;
    return (
        `<div class='box'>
            <div class = 'img-box'>
                <img class = 'images' src=${imgUrl}></img>
            </div>
        <div class = 'bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to card</button>" +
        `</div>
        </div>`
    )
}).join('');


let cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displayCard();
}

function delElement(a) {
    cart.splice(a, 1);
    displayCard();
}

function displayCard(a) {
    let j = 0, total = 0;
    document.getElementById('count').innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cart-item').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById('cart-item').innerHTML = cart.map((items) => {
            var { imgUrl, title, price } = items;
            total += price;
            document.getElementById('total').innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowImg' src=${imgUrl}>
                </div>
                <p style = 'font-size:12px;'>${title}</p>
                <h2 style = 'font-size: 15px;'>$ ${price}.00</h2>` +
                "<h2 class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}

let basketBtn = document.querySelector(".fa-solid");

basketBtn.addEventListener('click', () => {
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector("#root").classList.toggle("active");
})