let specNumber = 1

document.getElementById("addSpec").addEventListener("click", agregarSpec);
document.getElementById("removeSpec").addEventListener("click", removeSpec);


function agregarSpec(){
    if(specNumber <10){
        specNumber = specNumber + 1
        document.getElementById("spec"+specNumber).classList.remove("specHidden");
    }
    else{
        alert("Solo puedes tener 10 Especificaciones")
    }
}
function removeSpec(){
    if(specNumber > 1){
        specNumber = specNumber - 1
        document.getElementById("spec"+specNumber).classList.add("specHidden");
    }
    else{
        alert("Al menos tienes que tener 1 Especificacion")
    }
}
