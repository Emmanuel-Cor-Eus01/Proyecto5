const {response, request} = require('express');
const CheckGet = (req = request, res = response) =>{
    res.send("Entro al get de check");
}

module.exports = {
    CheckGet
}