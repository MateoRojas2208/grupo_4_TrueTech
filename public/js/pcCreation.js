var items = [
    {
      type: "text",
      title: "Placa Madre",
      description: "<% for(let i=1;i<ram.lenght;i++){ %>",
      position: {
        left: 148,
        top: 70
      }
    },
    {
      type: "text",
      title: "Fuente",
      description: "<b>Text item</b> with description.",
      position: {
        left: 550,
        top: 70
      }
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
  console.log("hola")
  var options = {
    allowHtml: true
  };
  
  $(document).ready(function () {
    $("#my-interactive-image").interactiveImage(items, options);
  });