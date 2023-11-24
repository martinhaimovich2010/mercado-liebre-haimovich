const path = require("path");

const express = require("express");
const app = express();

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Servidor corriendo en el puerto http://localhost:3001");
});

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

// Defino rutas del resto de las paginas que no son el home.html

// Register
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.post("/register", (req, res) => {
    res.send("Llegó el formulario de register");
});

// Login
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
app.post("/login", (req, res) => {
    res.send("Llegó el formulario de login");
});