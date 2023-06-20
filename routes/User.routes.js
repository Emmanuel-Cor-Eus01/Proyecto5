const {Router} = require('express');
const router = Router();

const {usuariosGet, signUp, logIn, validarTokenPost} = require('../controllers/Usuarios.controller')

router.get("/usuarios", usuariosGet);
router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/validar_token", validarTokenPost);

module.exports = router;