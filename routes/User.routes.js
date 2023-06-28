const {Router} = require('express');
const router = Router();

const {usuariosGet, signUp, logIn, validarTokenPost, getProfile, editUser} = require('../controllers/Usuarios.controller')
const chkToken = require('../middlewares/auth.middlewares');

router.get("/usuarios", usuariosGet);
router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/validar_token", validarTokenPost);
router.get("/profile", chkToken , getProfile);
router.put("/actualizar_perfil", chkToken , editUser);

module.exports = router;