class Burger {

    product = []

    addCabbage(e) {
        const id = e.dataset.id
        localStorage.setItem("material", JSON.stringify(this.product))
        const arr = this.product.push(JSON.parse(localStorage.getItem('material')))
        
        // const cabbegediv = document.querySelector(".burger-material")
        // const cabbage = document.createElement('div')
        // cabbage.classList.add("cabbage")
        // cabbegediv.append(cabbage)
    }

    addCutlet(e) {
        const id = e.dataset.id

        const cabbegediv = document.querySelector(".burger-material")
        const cabbage = document.createElement('div')
        cabbage.classList.add("cutlet")
        cabbegediv.append(cabbage)
    }

    addChease(e) {
        const id = e.dataset.id

        const cabbegediv = document.querySelector(".burger-material")        
        const cabbage = document.createElement('div')
        cabbage.classList.add("chease")
        cabbegediv.append(cabbage)
    }

    card() {

    }
}

const burger = new Burger()