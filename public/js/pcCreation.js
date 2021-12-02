fetch("http://localhost:3030/api/pcCreation")
  .then(response => {
    response.json()
      .then(response => {
        console.log(response)

        var items = [
          {
            type: "text",
            title: "Placa Madre",
            description: `<ul>` + `<li>` + `<button id="PM1">` + response.motherboard[0].description + `</button>` +"</li>" + `<li>` + `<button id="PM2">` + response.motherboard[1].name + `</button>` + "</li>" + "</ul>",
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
            description: "<b>hola</b> with description.",
            position: {
              left: 550,
              top: 70
            },
            customClassName: "asdasdasd"
          },
          {
            type: "text",
            title: "Procesador",
            description: "<b>Text item</b> with description.",
            position: {
              left: 312,
              top: 100
            },
            sticky: false
          },
          {
            type: "text",
            title: "Ram 1",
            description: "<b>Text item</b> with description.",
            position: {
              left: 75,
              top: 260
            }
          },
          {
            type: "text",
            title: "Ram2",
            description: "<b>Text item</b> with description.",
            position: {
              left: 75,
              top: 325
            }
          },
          {
            type: "text",
            title: "Gabinete",
            description: "<b>Text item</b> with description.",
            position: {
              left: 535,
              top: 340
            }
          },
          {
            type: "text",
            title: "Almacenamiento 1",
            description: "<b>Text item</b> with description.",
            position: {
              left: 480,
              top: 570
            }
          },
          {
            type: "text",
            title: "Almacenamiento 2",
            description: "<b>Text item</b> with description.",
            position: {
              left: 575,
              top: 570
            }
          },
          {
            type: "text",
            title: "Placa de video",
            description: "<b>Text item</b> with description.",
            position: {
              left: 153,
              top: 575
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
