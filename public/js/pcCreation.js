fetch("http://localhost:3030/api/pcCreation")
  .then(response => {
    response.json()
      .then(response => {
        console.log(response)

        var items = [
          {
            type: "text",
            title: "Placa Madre",
            description: `<ul class="descUl">` + `<li>` + `<div class="box cyan"><img src="` + response.motherboard[0].image +`" class="itemImage"><h4>` + response.motherboard[0].name + `</h2><p>Monitors activity to identify project roadblocks</p><div class="buttons"><button class="boton1">Ir a la pagina del producto</button><button class="boton2">Agregar Producto</button></div></div>` + "</li>" + `<li>` + `<div class="box cyan"><img src="` + response.motherboard[1].image +`" class="itemImage"><h4>` + response.motherboard[1].name + `</h2><p>Monitors activity to identify project roadblocks</p><div class="buttons"><button class="boton1">Ir a la pagina del producto</button><button class="boton2">Agregar Producto</button></div></div>` + "</ul>",
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
            description: `<ul class="descUl">` + `<li>` + `<div class="box cyan"><img src="` + response.powerSupply[0].image +`" class="itemImage"><h4>` + response.powerSupply[0].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</li>" + `<li>` + `<div class="box cyan"><img src="` + response.powerSupply[1].image +`" class="itemImage"><h4>` + response.powerSupply[1].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</ul>",
            position: {
              left: 550,
              top: 70
            },
            customClassName: "asdasdasd"
          },
          {
            type: "text",
            title: "Procesador",
            description: `<ul class="descUl">` + `<li>` + `<div class="box cyan"><img src="` + response.processor[0].image +`" class="itemImage"><h4>` + response.processor[0].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</li>" + `<li>` + `<div class="box cyan"><img src="` + response.processor[1].image +`" class="itemImage"><h4>` + response.processor[1].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</ul>",
            position: {
              left: 312,
              top: 100
            },
            sticky: false
          },
          {
            type: "text",
            title: "Ram 1",
            description: `<ul class="descUl">` + `<li>` + `<div class="box cyan"><img src="` + response.ram[0].image +`" class="itemImage"><h4>` + response.ram[0].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</li>" + `<li>` + `<div class="box cyan"><img src="` + response.ram[1].image +`" class="itemImage"><h4>` + response.ram[1].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</ul>",
            position: {
              left: 75,
              top: 260
            }
          },
          {
            type: "text",
            title: "Ram2",
            description: `<ul class="descUl">` + "</ul>",
            position: {
              left: 75,
              top: 325
            }
          },
          {
            type: "text",
            title: "Gabinete",
            description: `<ul class="descUl">` + `<li>` + `<div class="box cyan"><img src="` + response.cabinet[0].image +`" class="itemImage"><h4>` + response.cabinet[0].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</li>" + `<li>` + `<div class="box cyan"><img src="` + response.cabinet[1].image +`" class="itemImage"><h4>` + response.cabinet[1].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</ul>",
            position: {
              left: 535,
              top: 340
            }
          },
          {
            type: "text",
            title: "Almacenamiento 1",
            description: `<ul class="descUl">` + `<li>` + `<div class="box cyan"><img src="` + response.storage[0].image +`" class="itemImage"><h4>` + response.storage[0].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</li>" + `<li>` + `<div class="box cyan"><img src="` + response.storage[1].image +`" class="itemImage"><h4>` + response.storage[1].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</ul>",
            position: {
              left: 480,
              top: 570
            }
          },
          {
            type: "text",
            title: "Almacenamiento 2",
            description: `<ul class="descUl">` + "</ul>",
            position: {
              left: 575,
              top: 570
            }
          },
          {
            type: "text",
            title: "Monitores",
            description: `<ul class="descUl">` + `<li>` + `<div class="box cyan"><img src="` + response.monitor[0].image +`" class="itemImage"><h4>` + response.monitor[0].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</li>" + `<li>` + `<div class="box cyan"><img src="` + response.monitor[1].image +`" class="itemImage"><h4>` + response.monitor[1].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</ul>",
            position: {
              left: 307,
              top: 396
            }
          },
          {
            type: "text",
            title: "Teclados",
            description: `<ul class="descUl">` + `<li>` + `<div class="box cyan"><img src="` + response.keyboard[0].image +`" class="itemImage"><h4>` + response.keyboard[0].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</li>" + `<li>` + `<div class="box cyan"><img src="` + response.keyboard[1].image +`" class="itemImage"><h4>` + response.keyboard[1].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</ul>",
            position: {
              left: 307,
              top: 475
            }
          },
          {
            type: "text",
            title: "Placa de video",
            description: `<ul class="descUl">` + `<li>` + `<div class="box cyan"><img src="` + response.graficCard[0].image +`" class="itemImage"><h4>` + response.graficCard[0].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</li>" + `<li>` + `<div class="box cyan"><img src="` + response.graficCard[1].image +`" class="itemImage"><h4>` + response.graficCard[1].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</ul>",
            position: {
              left: 153,
              top: 575
            }
          },
          {
            type: "text",
            title: "Mouse",
            description: `<ul class="descUl">` + `<li>` + `<div class="box cyan"><img src="` + response.mouse[0].image +`" class="itemImage"><h4>` + response.mouse[0].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</li>" + `<li>` + `<div class="box cyan"><img src="` + response.mouse[1].image +`" class="itemImage"><h4>` + response.mouse[1].name + `</h2><p>Monitors activity to identify project roadblocks</p><button>Ir a la pagina del producto</button></div>` + "</ul>",
            position: {
              left: 430,
              top: 200
            }
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
