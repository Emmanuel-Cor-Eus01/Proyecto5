const express = require('express');
const cors = require('cors');
require('dotenv').config();
const rutasProd = require('./routes/Productos.routes');
const rutasUser = require('./routes/User.routes');
const rutasHome = require('./routes/Home.routes');
const rutasProfile = require('./routes/Profile.routes');
const rutasLogin = require('./routes/Login.routes');
const rutasCheck = require('./routes/CheckOut.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res )=>{
    res.send("Proyecto 5");
});

(()=>{
    app.use(rutasProd);
    app.use(rutasUser);
    app.use(rutasHome);
    app.use(rutasProfile);
    app.use(rutasLogin);
    app.use(rutasCheck);
    app.listen(process.env.PORT, ()=>{
        console.log(`La aplicacion esta corriendo den el puerto: ${process.env.PORT}`);
    });
})();