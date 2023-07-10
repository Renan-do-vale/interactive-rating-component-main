const secundary = document.querySelector(".secundary")

const numbers = document.querySelectorAll(".check-number span")

let rate = null


function mark(event) {
    const ativo = document.querySelector(".ativo")
    if(ativo){
        event.classList.remove("ativo")
        rate = null
    }else {
        event.classList.add("ativo")   
        rate = event.innerText
    }
}




function minhaFuncao() {
    const primary = document.querySelector('.primary')
    const secundary = document.querySelector(".secundary")
    const chosen = document.querySelector(".chosen")
    if(rate) {
        primary.style.display = 'none'
        secundary.style.display = 'flex'
    }
    chosen.innerText = rate
    console.log(rate)

}
