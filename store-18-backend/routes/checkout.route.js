const express = require('express')
const {checkoutSession} = require("../resources/checkout-session.controller");

const router = express.Router()

router.route('/create-checkout-session').post(checkoutSession)

module.exports = router