const fs = require('fs');

/* Global read file methods */
const readFile = (file) => {
    return new Promise((res, rej) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) console.log('File not found', err.message);
            res(data);
        });
    });
};

/* Global write file methods */
const writeFile = (file, data) => {
    return new Promise((res, rej) => {
        fs.writeFile(file, data, 'utf8', (error) => {
            if (error) console.log('write file not found', error.message);
            res('sucess');
        });
    });
};

/* Get Orders data asynchrously  */
exports.getOrdersData = async (req, res) => {
    try {
        const readOrdersFile = await readFile(
            `${__dirname}/../../data/orders.json`
        );
        const orders = JSON.parse(readOrdersFile);
        res.status(200).json({
            status: 'sucess',
            results: orders.length,
            orders,
        });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error });
    }
};

/* Get prices data asynchrously  */
exports.getPricesData = async (req, res) => {
    try {
        const readPricesFile = await readFile(
            `${__dirname}/../../data/prices.json`
        );
        const prices = JSON.parse(readPricesFile);
        res.status(200).json({
            status: 'sucess',
            results: prices.length,
            prices,
        });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error });
    }
};

/* Get payments data asynchrously  */
exports.getPaymentsData = async (req, res) => {
    try {
        const readPaymentsFile = await readFile(
            `${__dirname}/../../data/payments.json`
        );
        const payments = JSON.parse(readPaymentsFile);
        res.status(200).json({
            status: 'sucess',
            results: payments.length,
            payments,
        });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error });
    }
};
/* write final coffee report data asynchrously  */
exports.getCoffeeReport = async (req, res) => {
    try {
        const write_Coffee_Report_File = await writeFile(
            `${__dirname}/../../data/coffee_Reports.json`,
            JSON.stringify(req.body)
        );
        res.status(200).json({
            status: write_Coffee_Report_File,
            reports: req.body,
        });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error });
    }
};
