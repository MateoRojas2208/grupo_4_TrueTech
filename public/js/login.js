


window.addEventListener("load", function () {
    var uEmail = document.querySelector("input.uEmail");
    var uPasword = document.querySelector("input.uPassword");

    uEmail.addEventListener("change", function (e) {
        e.preventDefault();
        if (uEmail.value == "") {
            alert("El email es obligatorio");
        } else if (uEmail.value.length < 5) {
            alert("El email debe tener al menos 5 caracteres");
        }
    })

    uPasword.addEventListener("change", function (e) {
        e.preventDefault();
        if (uPasword.value == "") {
            alert("La constraseña no puede estar vacia");
        }
    })

});