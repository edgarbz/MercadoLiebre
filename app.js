const express = require ('express');
const app = express();
const port = 3030;
const path = require ('path');
app.listen(port, () => console.log("corriendo en: http://localhost:" + port))
app.use(express.static(path.resolve(__dirname, "public")))
app.get("/", (req, res) => res.sendFile(path.join(__dirname,"views","home.html")))
app.get("/", (req, res) => res.sendFile(path.join(__dirname,"views","registrar.html")))
app.get("/", (req, res) => res.sendFile(path.join(__dirname,"views","ingresar.html")))