const {response, request} = require ('express');
const Usuario = require('../models/Usuario.model');
const { hashPass, comparePass, generateToken, validToken, leerToken } = require('../utilities/auth.utilities');
const { hash } = require('bcrypt');
const usuariosGet = (req = request, res = response)=>{
    res.send("Entro a usuarios get de controller del proyecto 5")
}
const signUp = async (req = request, res = response)=>{
    try {
        const body = req.body;
        let usuario = new Usuario(body);
        usuario.password = await hashPass(usuario.password);
        await usuario.save();
        res.status(201).json({
            msg: "El usuario se agrego correctamente",
            detalle: usuario
        });
    } catch (error) {
        res.status(400).json({
            msg: "El usuario no se pudo agregar",
            detalle: error.message
        });
    }
}
const logIn = async (req = request, res = response)=>{
    try {
        const {email, password} = req.body;
        const userInfo = await Usuario.findOne({email: email});
        const isValidPAss = await comparePass(password, userInfo.password);
        // if (userInfo === null){
        //     res.status(400).json({
        //         msg: "Email incorrecto",
        //         detalle: null
        //     });
        // }
        if (isValidPAss) {
            res.status(200).json({
                msg: "Login correcto",
                detalle: generateToken({
                    id: userInfo._id,
                    nombre: userInfo.nombre,
                    email: userInfo.email
                })
            });
        } else {
            res.status(400).json({
                msg: "Credenciales incorrectas",
                detalle: null
            });
        }
    } catch (error) {
        res.status(400).json({
            msg: "Informacion incorrecta",
            detalle: error.message
        });
    }
}


const validarTokenPost = async (req = request, res = response)=>{
    try {
        const {token} = req.body;
        const isValidToken = await validToken(token);
        if (isValidToken) {
            res.status(201).json({
                msg: "Token vaido",
                detalle: null
            });
        } else {
            res.status(400).json({
                msg: "Token invalido",
                detalle: null
            });
        }
    } catch (error) {
        res.status(400).json({
            msg: "Error en validacion del token",
            detalle: error.message
        });
    }
}

const getProfile = async (req = request, res = response)=>{
    const token = req.headers.authorization.split(" ")[1];
    const tokenDecoded = leerToken(token);
    const user_id = tokenDecoded.data.id;
    let usuario = await Usuario.findById(user_id);
    usuario.password = undefined;
    res.json({
        msg: "Perfil de usuario",
        detalle: usuario
    });
}


const editUser = async (req = request, res = response)=>{
    try {
        const body = req.body;
        const tokenDecoded = leerToken(req.headers.authorization.split(" ")[1]);
        const user_id = tokenDecoded.data.id;
        if (body.password) {
            body.password = await hashPass(body.password);
        } else {
            delete body.password;
        }
        await Usuario.findByIdAndUpdate(user_id, body);
        res.status(200).json({
            msg: "Usuario actualizado correctamente",
            detalle: Usuario
        });
    } catch (error) {
        res.status(400).json({
            msg: "No se pudo actualizar usuario",
            detalle: error.message
        });
    }
}

module.exports = {
    usuariosGet,
    signUp,
    logIn,
    validarTokenPost,
    getProfile,
    editUser
}