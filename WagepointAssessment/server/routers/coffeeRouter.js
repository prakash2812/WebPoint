const express = require('express');
const router = express.Router();

const {
    getPaymentsData,
    getOrdersData,
    getPricesData,
    getCoffeeReport,
} = require('../contollers/coffeeControllers');

router.route('/payments').get(getPaymentsData);
router.route('/orders').get(getOrdersData);
router.route('/prices').get(getPricesData);
router.route('/reports').post(getCoffeeReport);

module.exports = router;
