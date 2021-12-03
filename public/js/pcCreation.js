fetch("http://localhost:3030/api/pcCreation")
  .then(response => {
    response.json()
      .then(response => {
        console.log(response)
        var items = [
          {
            type: "text",
            title: "Placa Madre",
            description: `<ul class="descUl">` + `<li>` + `<div class="boxItem cyan"><img src="` + response.motherboard[0].image + `" class="itemImage"><h4>` + response.motherboard[0].name + `</h2><div class="buttons" ><a href="/product/detail/${response.motherboard[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="mother0()">Agregar Producto</button></div></div>` + "</li>" + `<li>` + `<div class="boxItem cyan"><img src="` + response.motherboard[1].image + `" class="itemImage"><h4>` + response.motherboard[1].name + `</h2><div class="buttons"><a href="/product/detail/${response.motherboard[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="mother1()">Agregar Producto</button></div></div>` + "</ul>",
            position: {
              left: 148,
              top: 70
            },
            customClassName: "placasMadres",
            sticky: true
          },
          {
            type: "text",
            title: "Fuente",
            description: `<ul class="descUl">` + `<li>` + `<div class="boxItem cyan"><img src="` + response.powerSupply[0].image + `" class="itemImage"><h4>` + response.powerSupply[0].name + `</h2><div class="buttons"><a href="/product/detail/${response.powerSupply[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="powerSupply0()">Agregar Producto</button></div></div>` + "</li>" + `<li>` + `<div class="boxItem cyan"><img src="` + response.powerSupply[1].image + `" class="itemImage"><h4>` + response.powerSupply[1].name + `</h2><div class="buttons"><a href="/product/detail/${response.powerSupply[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="powerSupply1()">Agregar Producto</button></div></div>` + "</ul>",
            position: {
              left: 550,
              top: 70
            },
            customClassName: "asdasdasd",
            sticky: true
          },
          {
            type: "text",
            title: "Procesador",
            description: `<ul class="descUl">` + `<li>` + `<div class="boxItem cyan"><img src="` + response.processor[0].image + `" class="itemImage"><h4>` + response.processor[0].name + `</h2><div class="buttons"><a href="/product/detail/${response.processor[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="processor0()">Agregar Producto</button></div></div>` + "</li>" + `<li>` + `<div class="boxItem cyan"><img src="` + response.processor[1].image + `" class="itemImage"><h4>` + response.processor[1].name + `</h2><div class="buttons"><a href="/product/detail/${response.processor[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="processor1()">Agregar Producto</button></div></div>` + "</ul>",
            position: {
              left: 312,
              top: 100
            },
            sticky: true
          },
          {
            type: "text",
            title: "Ram 1",
            description: `<ul class="descUl">` + `<li>` + `<div class="boxItem cyan"><img src="` + response.ram[0].image + `" class="itemImage"><h4>` + response.ram[0].name + `</h2><div class="buttons"><a href="/product/detail/${response.ram[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="ram0()">Agregar Producto</button></div></div>` + "</li>" + `<li>` + `<div class="boxItem cyan"><img src="` + response.ram[1].image + `" class="itemImage"><h4>` + response.ram[1].name + `</h2><div class="buttons"><a href="/product/detail/${response.ram[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="ram1()">Agregar Producto</button></div></div>` + "</ul>",
            position: {
              left: 75,
              top: 260
            },
            sticky: true
          },
          {
            type: "text",
            title: "Ram2",
            description: `<ul class="descUl">` + "</ul>",
            position: {
              left: 75,
              top: 325
            },
            sticky: true
          },
          {
            type: "text",
            title: "Gabinete",
            description: `<ul class="descUl">` + `<li>` + `<div class="boxItem cyan"><img src="` + response.cabinet[0].image + `" class="itemImage"><h4>` + response.cabinet[0].name + `</h2><div class="buttons"><a href="/product/detail/${response.cabinet[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="cabinet0()">Agregar Producto</button></div></div>` + "</li>" + `<li>` + `<div class="boxItem cyan"><img src="` + response.cabinet[1].image + `" class="itemImage"><h4>` + response.cabinet[1].name + `</h2><div class="buttons"><a href="/product/detail/${response.cabinet[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="cabinet1()">Agregar Producto</button></div></div>` + "</ul>",
            position: {
              left: 535,
              top: 340
            },
            sticky: true
          },
          {
            type: "text",
            title: "Almacenamiento 1",
            description: `<ul class="descUl">` + `<li>` + `<div class="boxItem cyan"><img src="` + response.storage[0].image + `" class="itemImage"><h4>` + response.storage[0].name + `</h2><div class="buttons"><a href="/product/detail/${response.storage[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="storage0()">Agregar Producto</button></div></div>` + "</li>" + `<li>` + `<div class="boxItem cyan"><img src="` + response.storage[1].image + `" class="itemImage"><h4>` + response.storage[1].name + `</h2><div class="buttons"><a href="/product/detail/${response.storage[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="storage1()">Agregar Producto</button></div></div>` + "</ul>",
            position: {
              left: 480,
              top: 570
            },
            sticky: true
          },
          {
            type: "text",
            title: "Almacenamiento 2",
            description: `<ul class="descUl">` + "</ul>",
            position: {
              left: 575,
              top: 570
            },
            sticky: true
          },
          {
            type: "text",
            title: "Monitores",
            description: `<ul class="descUl">` + `<li>` + `<div class="boxItem cyan"><img src="` + response.monitor[0].image + `" class="itemImage"><h4>` + response.monitor[0].name + `</h2><div class="buttons"><a href="/product/detail/${response.monitor[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="monitor0()">Agregar Producto</button></div></div>` + "</li>" + `<li>` + `<div class="boxItem cyan"><img src="` + response.monitor[1].image + `" class="itemImage"><h4>` + response.monitor[1].name + `</h2><div class="buttons"><a href="/product/detail/${response.monitor[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="monitor1()">Agregar Producto</button></div></div>` + "</ul>",
            position: {
              left: 307,
              top: 396
            },
            sticky: true
          },
          {
            type: "text",
            title: "Teclados",
            description: `<ul class="descUl">` + `<li>` + `<div class="boxItem cyan"><img src="` + response.keyboard[0].image + `" class="itemImage"><h4>` + response.keyboard[0].name + `</h2><div class="buttons"><a href="/product/detail/${response.keyboard[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="keyboard0()">Agregar Producto</button></div></div>` + "</li>" + `<li>` + `<div class="boxItem cyan"><img src="` + response.keyboard[1].image + `" class="itemImage"><h4>` + response.keyboard[1].name + `</h2><div class="buttons"><a href="/product/detail/${response.keyboard[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="keyboard1()">Agregar Producto</button></div></div>` + "</ul>",
            position: {
              left: 307,
              top: 475
            },
            sticky: true
          },
          {
            type: "text",
            title: "Placa de video",
            description: `<ul class="descUl">` + `<li>` + `<div class="boxItem cyan"><img src="` + response.graficCard[0].image + `" class="itemImage"><h4>` + response.graficCard[0].name + `</h2><div class="buttons"><a href="/product/detail/${response.graficCard[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="graficCard0()">Agregar Producto</button></div></div>` + "</li>" + `<li>` + `<div class="boxItem cyan"><img src="` + response.graficCard[1].image + `" class="itemImage"><h4>` + response.graficCard[1].name + `</h2><div class="buttons"><a href="/product/detail/${response.graficCard[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="graficCard1()">Agregar Producto</button></div></div>` + "</ul>",
            position: {
              left: 153,
              top: 575
            },
            sticky: true
          },
          {
            type: "text",
            title: "Mouse",
            description: `<ul class="descUl">` + `<li>` + `<div class="boxItem cyan"><img src="` + response.mouse[0].image + `" class="itemImage"><h4>` + response.mouse[0].name + `</h2><div class="buttons"><a href="/product/detail/${response.mouse[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="mouse0()">Agregar Producto</button></div></div>` + "</li>" + `<li>` + `<div class="boxItem cyan"><img src="` + response.mouse[1].image + `" class="itemImage"><h4>` + response.mouse[1].name + `</h2><div class="buttons"><a href="/product/detail/${response.mouse[0].id} " target=”_blank”><button class="boton1">Ir a la pagina del producto</button></a><button class="boton2" onclick="mouse1()">Agregar Producto</button></div></div>` + "</ul>",
            position: {
              left: 430,
              top: 200
            },
            sticky: true
          }
        ];
        var options = {
          allowHtml: true
        };

        $(document).ready(function () {
          $("#my-interactive-image").interactiveImage(items, options);
        });
        // document.getElementById("PM1").addEventListener("click", agregarSpec);
        // document.getElementById("PM2").addEventListener("click", removeSpec);
        // function agregarSpec() {
        //   alert("Solo puedes tener 10 Especificaciones")
        // }
        // function removeSpec() {
        //   alert("Al menos tienes que tener 1 Especificacion")
        // }





        window.addEventListener("load", function () {
          var PM1 = document.getElementById("PM1");
          var PM2 = document.getElementById("PM2");
          let pColour = document.querySelector("input.colour");
          let pImage = document.querySelector("input.pImage");
          var specsRow = document.getElementById("specsRow")

          PM1.addEventListener("click", function (e) {
            alert("click en PM1")
          })
          PM2.addEventListener("click", function (e) {
            +
              alert("click en PM2")
          })
        });
      })
  })
function mother0() {
  document.getElementById("mother0").classList.remove("hidden")
}
function mother1() {
  document.getElementById("mother1").classList.remove("hidden")
}
function powerSupply0(){
  document.getElementById("powerSupply0").classList.remove("hidden")
}
function powerSupply1(){
  document.getElementById("powerSupply1").classList.remove("hidden")
}
function processor0(){
  document.getElementById("processor0").classList.remove("hidden")
}
function processor1(){
  document.getElementById("processor1").classList.remove("hidden")
}
function ram0(){
  document.getElementById("ram0").classList.remove("hidden")
}
function ram1(){
  document.getElementById("ram1").classList.remove("hidden")
}
function cabinet0(){
  document.getElementById("cabinet0").classList.remove("hidden")
}
function cabinet1(){
  document.getElementById("cabine0").classList.remove("hidden")
}
function storage0(){
  document.getElementById("storage0").classList.remove("hidden")
}
function storage1(){
  document.getElementById("storage1").classList.remove("hidden")
}
function monitor0(){
  document.getElementById("monitor0").classList.remove("hidden")
}
function monitor1(){
  document.getElementById("monitor1").classList.remove("hidden")
}
function keyboard0(){
  document.getElementById("keyboard0").classList.remove("hidden")
}
function keyboard1(){
  document.getElementById("keyboard1").classList.remove("hidden")
}
function graficCard0(){
  document.getElementById("graficCard0").classList.remove("hidden")
}
function graficCard1(){
  document.getElementById("graficCard1").classList.remove("hidden")
}
function mouse0(){
  document.getElementById("mouse0").classList.remove("hidden")
}
function mouse1(){
  document.getElementById("mouse1").classList.remove("hidden")
}