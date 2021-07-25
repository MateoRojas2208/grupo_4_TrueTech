const express = require("express")
const path = require("path")

const app = express()

const publicPath = path.resolve(__dirname, "./public")
app.use( express.static(publicPath) )

app.listen(3030, () =>{
    console.log("servidor corriendo en el puerto 3030")
})

// Paginas
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/detalle-producto", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/detalle-producto.html"))
})
app.get("/prueba", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/prueba.html"))
})