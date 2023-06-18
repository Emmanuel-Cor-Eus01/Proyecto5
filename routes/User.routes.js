const {Router} = require('express');
const router = Router();

const {usuariosGet, signUp, logIn, validarTokenPost} = require('../controllers/Usuarios.controller')

router.get("/Usuarios", usuariosGet);
router.post("/Signup", signUp);
router.post("/Login", logIn);
router.post("/validar_token", validarTokenPost);

module.exports = router;