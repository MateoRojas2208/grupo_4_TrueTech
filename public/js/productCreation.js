let specNumber = 1

document.getElementById("addSpec").addEventListener("click", agregarSpec);
document.getElementById("removeSpec").addEventListener("click", removeSpec);


function agregarSpec() {
    if (specNumber < 10) {
        specNumber = specNumber + 1
        document.getElementById("spec" + specNumber).classList.remove("specHidden");
    }
    else {
        alert("Solo puedes tener 10 Especificaciones")
    }
}
function removeSpec() {
    if (specNumber > 1) {
        specNumber = specNumber - 1
        document.getElementById("spec" + specNumber).classList.add("specHidden");
    }
    else {
        alert("Al menos tienes que tener 1 Especificacion")
    }
}

window.addEventListener("load", function () {
    var pName = document.querySelector("input.prodName");
    var pDescription = document.querySelector("textarea.description");
    let pColour = document.querySelector("input.colour");
    let pImage = document.querySelector("input.pImage");
    var specsRow = document.getElementById("specsRow")

    pName.addEventListener("change", function (e) {
        e.preventDefault();
        console.log(pName)
        if (pName.value == "") {
            alert("El nombre del producto es obligatorio");
        } else if (pName.value.length < 5) {
            alert("El título debe tener al menos 5 caracteres");
        }
    })

    pDescription.addEventListener("change", function (e) {
        if (pDescription.value.length < 20) {
            alert("La descripción debe tener al menos 20 caracteres y no puede estar vacia");
        }
    })

    pColour.addEventListener("change", function (e) {
        if (pColour.value == "") {
            alert("El color es obligatorio");
        }})

    pImage.addEventListener("change", function (e) {
        if (pImage.file != "JPG", "JPEG", "PNG") {
            alert("El formato del archivo debe ser válido (JPG, JPEG, PNG)");
        }})
        
    specsRow.addEventListener("change", function (e) {
        for (let i = 1; i < 11; i++) {
            let specName = document.querySelector(`input.specName${i}`);
            let specDesc = document.querySelector(`input.specDesc${i}`);
            if (specName.value.lenght > 1 && specDesc.value == "") {
                alert(`Tienes que completar ambos campos en la especificacion Nº${i}`)
            }
            else if (specDesc.value.lenght > 1 && specName.value == "") {
                alert(`Tienes que completar ambos campos en la especificacion Nº${i}`)
            }
        }
    });
});
