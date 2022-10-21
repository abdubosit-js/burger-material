let product = []

function addCabbage(e) {
    const cabbegediv = document.querySelector(".burger-material")
    const cabbage = document.createElement('div')
    
    const id = e.dataset.id
    let arr = product.push(id)
    
    localStorage.setItem("material", JSON.stringify(product))
    const array1 = JSON.parse(localStorage.getItem('material'))
    
    array1.map(e => {
        e == 0
        if (Number(e) === 3) {
            cabbage.classList.add("cabbage")
            cabbegediv.append(cabbage)
        }        
    })

}

function addCutlet(e) {
    const id = e.dataset.id

    const cabbegediv = document.querySelector(".burger-material")
    cabbegediv.insertAdjacentHTML("beforeend", `<div class="cutlet"></div>`)
}

function addChease(e) {
    const id = e.dataset.id

    const cabbegediv = document.querySelector(".burger-material")        
    cabbegediv.insertAdjacentHTML("afterbegin", `<div class="chease"></div>`)
}

function card() {
    const openCard = document.querySelector(".open-card")
    openCard.style.left = "0px"
}

document.querySelector("#close").addEventListener("click", () => {
    const openCard = document.querySelector(".open-card")
    openCard.style.left = "-300px"
})
