let modal = document.getElementById("dialog")

function abrir(){
    modal.showModal()
}
function fechar(){
    
    modal.close()
}

var root = document.querySelector(':root');
var darkmode = false;
function darkmodeToggle(){
    var corpo = document.body
    corpo.classList.toggle("darkmode");
}