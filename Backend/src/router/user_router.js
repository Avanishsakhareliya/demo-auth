const express = require("express");
const app = express();
let router = express.Router();
app.use(router);
let bodyParser = require('body-parser')
router.use(bodyParser.json({ limit: '500mb' }))

// controller
const {login,signup} = require("../controller/userController")

router.post('/login',login)
router.post('/signup',signup)



module.exports = router;
