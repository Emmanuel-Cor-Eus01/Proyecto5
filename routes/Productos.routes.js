const {Router} = require('express');
const router = Router();
const {ProdGet} = require('../controllers/Productos.controller')
router.get("/productos", ProdGet);

module.exports = router;