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
    let form = document.querySelector("form.productsForm")


    form.addEventListener("change", function (e) {
        e.preventDefault();
        let pName = document.querySelector("input.prodname");
        if (pName.value == "") {
            alert("Este campo es obligatorio");
        } else if (pName.value.length < 5) {
            alert("El título debe tener al menos 5 caracteres");
        }
        let pDescription = document.querySelector("textarea.description");
        if (pDescription.value.length < 20) {
            alert("La descripción debe tener al menos 20 caracteres");
        }
        let pColour = document.querySelector("input.colour");
        let pImage = document.querySelector("input.pImage");
        if (pImage.file != JPG, JPEG, PNG, GIF) {
            alert("El formato del archivo debe ser válido (JPG, JPEG, PNG, GIF)");
        }
        for (let i = 1; i < 11; i++) {
            let specName = document.querySelector(`input.specName${i}`);
            let specDesc = document.querySelector(`input.specDesc${i}`);
            if (specName.value.lenght > 5 && specDesc.value == "") {
                alert(`Tienes que completar ambos campos en la especificacion Nº${i}`)
            }
            else if (specDesc.value.lenght > 5 && specName.value == "") {
                alert(`Tienes que completar ambos campos en la especificacion Nº${i}`)
            }
        }
    });
});
