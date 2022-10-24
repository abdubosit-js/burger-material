const products = JSON.parse(localStorage.getItem('material')) || []

function renderProduct() {
    const burgerDiv = document.querySelector(".burger-material");
    burgerDiv.innerHTML = "";

    for(let product of products) {        
        const div = document.createElement('div')

        if(Number(product) === 1){
            div.classList.add("cutlet")
        }
        
        if(Number(product) === 2){
            div.classList.add("chease")
        }
        
        if(Number(product) === 3){
            div.classList.add("cabbage")
        }

        burgerDiv.appendChild(div)
    }
}

function addProduct({dataset}) {
    products.push(dataset.id)
    
    localStorage.setItem("material", JSON.stringify(products))
    renderProduct();
    cartLength();
}

function card() {
    const openCard = document.querySelector(".open-card")
    openCard.style.left = "0px"
}

document.querySelector("#close").addEventListener("click", () => {
    const openCard = document.querySelector(".open-card")
    openCard.style.left = "-300px"
})

function removeProduct({dataset}) {
    const index = products.findIndex(product => product === dataset.id)
    products.splice(index, 1)
    localStorage.setItem("material", JSON.stringify(products))
    renderProduct()
    cartLength()
}

function cartLength() {
    const cardDiv = document.querySelector(".price-cnt")
    const length = document.querySelector(".length")
    length.innerText = products.length
    cardDiv.innerHTML = ""

    const div = document.createElement("div")
    div.classList.add("cutlet-price")
    div.innerHTML =  "Products" + " - " + products.length
    cardDiv.appendChild(div)
}

cartLength()
renderProduct()