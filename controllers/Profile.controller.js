const {response, request} = require('express');
const ProfileGet = (req = request, res = response) =>{
    res.send("Entro al get de Profile");
}

module.exports = {
    ProfileGet
}