const {Router} = require('express');
const router = Router();
const {HomeGet} = require('../controllers/Home.controller')
router.get("/home", HomeGet);

module.exports = router;