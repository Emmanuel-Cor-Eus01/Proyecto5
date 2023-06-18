const express = require('express');
const cors = require('cors');
const {dbConection} = require('./database/config');
require('dotenv').config();
const rutasProd = require('./routes/Productos.routes');
const rutasUser = require('./routes/User.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res )=>{
    res.send("Proyecto 5");
});

(async()=>{
    await dbConection();
    app.use(rutasProd);
    app.use(rutasUser);
    app.listen(process.env.PORT, ()=>{
        console.log(`La aplicacion esta corriendo den el puerto: ${process.env.PORT}`);
    });
})();