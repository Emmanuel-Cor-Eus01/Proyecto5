const {response, request} = require('express');
const ProdGet = (req = request, res = response) =>{
    res.send("Entro al get de prod");
}

module.exports = {
    ProdGet
}