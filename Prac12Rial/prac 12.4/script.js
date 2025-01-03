

let derecha = false;
const div = document.getElementById('pillame');
div.addEventListener('mouseover', function(){
    if (!derecha){
        div.style.transform = 'translateX(220px)';
        derecha = true;
    }else{
        div.style.transform = 'translateX(0px)';
        derecha = false;
    }
});
function gracias(texto){
    if (texto.innerHTML === "Haz click"){
        texto.innerHTML = "Gracias!";
    } else{
        texto.innerHTML = "Haz click";
    }
}