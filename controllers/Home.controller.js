const {response, request} = require('express');
const HomeGet = (req = request, res = response) =>{
    res.send("Entro al get de Home");
}

module.exports = {
    HomeGet
}