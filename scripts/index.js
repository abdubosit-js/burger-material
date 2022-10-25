const products = JSON.parse(localStorage.getItem('material')) || []
let cardDiv = document.querySelector(".price-cnt")
let length = document.querySelector(".length")
let burgerDiv = document.querySelector(".burger-material");
let openCard = document.querySelector(".open-card")

function renderProduct() {
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
    openCard.style.left = "0px"
}

document.querySelector("#close").addEventListener("click", () => {
    openCard.style.left = "-300px"
})

function removeProduct({dataset}) {
    const index = products.findIndex(product => product === dataset.id)
    if (index !== -1) {
        products.splice(index, 1)
    }
    localStorage.setItem("material", JSON.stringify(products))

    renderProduct()
    cartLength()
}

function cartLength() {
    length.innerText = products.length
    cardDiv.innerHTML = ""
    const cutletLength = products.filter(product => product === "1")
    const cheaseLength = products.filter(product => product === "2")
    const cabbageLength = products.filter(product => product === "3")

    const cutletdiv = document.createElement("div")
    const cheasediv = document.createElement("div")
    const cabbagediv = document.createElement("div")
    cutletdiv.classList.add("cutlet-price")
    cheasediv.classList.add("cutlet-price")
    cabbagediv.classList.add("cutlet-price")
    cutletdiv.innerHTML =  "Cutlet" + " - " + cutletLength.length
    cheasediv.innerHTML =  "Chease" + " - " + cheaseLength.length
    cabbagediv.innerHTML =  "Cabbage" + " - " + cabbageLength.length
    cardDiv.appendChild(cutletdiv)
    cardDiv.appendChild(cheasediv)
    cardDiv.appendChild(cabbagediv)
}

cartLength()
renderProduct()