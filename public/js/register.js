


window.addEventListener("load", function () {
    var uName = document.querySelector("input.uName");
    var uEmail = document.querySelector("input.uEmail");
    let uPassword = document.querySelector("input.uPassword");
    let uImage = document.querySelector("input.uImage");

    uName.addEventListener("change", function (e) {
        e.preventDefault();
        if (uName.value.length < 5) {
            alert("El nombre debe tener al menos 5 caracteres");
        }
    })

    uEmail.addEventListener("change", function (e) {
        e.preventDefault();
        if (uEmail.value.length < 5) {
            alert("El Email no es valido");
        }
    })

    uPassword.addEventListener("change", function (e) {
        e.preventDefault();
        if (uPassword.value.length < 8) {
            alert("La contraseña es muy corta");
        }
    })

    uImage.addEventListener("change", function (e) {
        e.preventDefault();
        if (uImage.file != "JPG", "JPEG", "PNG") {
            alert("El formato del archivo debe ser válido (JPG, JPEG, PNG)");
        }
    })

});