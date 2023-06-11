const {response, request} = require('express');
const UserGet = (req = request, res = response) =>{
    res.send("Entro al get de user");
}

module.exports = {
    UserGet
}