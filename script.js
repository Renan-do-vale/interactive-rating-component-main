let rate = null


function mark(event) {
    const numbers = document.querySelectorAll(".check-number span")
    numbers.forEach((e) => {
        e.classList.remove("ativo")
    })
    event.classList.add("ativo")   
    rate = event.innerText
}




function submitCheck() {
    const primary = document.querySelector('.primary')
    const secundary = document.querySelector(".secundary")
    const chosen = document.querySelector(".chosen")
    if(rate) {
        primary.style.display = 'none'
        secundary.style.display = 'flex'
    }
    chosen.innerText = rate

}
