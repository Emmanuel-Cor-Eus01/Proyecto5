const {Router} = require('express');
const router = Router();
const {ProfileGet} = require('../controllers/Profile.controller')
router.get("/profile", ProfileGet);

module.exports = router;