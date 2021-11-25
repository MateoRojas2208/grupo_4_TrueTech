var items = [
    {
      type: "text",
      title: "Text title",
      description: "<b>Text item</b> with description.",
      position: {
        left: 100,
        top: 50
      }
    },
    {
      type: "provider",
      providerName: "youtube",
      parameters: {
        videoId: "iPRiQ6SBntQ"
      },
      position: {
        left: 300,
        top: 200
      },
      sticky: false
    }
  ];
  console.log("hola")
  var options = {
    allowHtml: true
  };
  
  $(document).ready(function () {
    $("#my-interactive-image").interactiveImage(items, options);
  });