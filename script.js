const primary = document.getElementsByClassName('primary')
const secundary = document.querySelector(".secundary")

function minhaFuncao() {
    console.log('ola')
    primary.style.display = 'none'
}

document.getElementById("button").onclick = function() {
    minhaFuncao();
  };
