const {Router} = require('express');
const router = Router();
const {UserGet} = require('../controllers/Usuarios.controller');
router.get("/user", UserGet);

module.exports = router;