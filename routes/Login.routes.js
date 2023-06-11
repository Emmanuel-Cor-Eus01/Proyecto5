const {Router} = require('express');
const router = Router();
const {LoginGet} = require('../controllers/Login.controller')
router.get("/login", LoginGet);

module.exports = router;