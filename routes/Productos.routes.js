const {Router} = require('express');
const router = Router();
const {prodGet, prodPost} = require('../controllers/Productos.controller')
router.get("/productos", prodGet);
router.post("/productos", prodPost);

module.exports = router;