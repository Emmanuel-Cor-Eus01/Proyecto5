const {Router} = require('express');
const router = Router();
const {prodGet, prodPost, prodPut, prodDelete, prodPremium} = require('../controllers/Productos.controller')
const chkToken = require('../middlewares/auth.middlewares');
router.get("/Productos", prodGet);
router.post("/Productos", prodPost);
router.put("/Productos/:id", prodPut);
router.delete("/Productos/:id", prodDelete);
router.get("/productos-premium", chkToken, prodPremium);

module.exports = router;