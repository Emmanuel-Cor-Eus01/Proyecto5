const {Router} = require('express');
const router = Router();
const {CheckGet} = require('../controllers/CheckOut.controller')
router.get("/checkout", CheckGet);

module.exports = router;