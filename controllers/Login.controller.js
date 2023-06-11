const {response, request} = require('express');
const LoginGet = (req = request, res = response) =>{
    res.send("Entro al get de Login");
}

module.exports = {
    LoginGet
}