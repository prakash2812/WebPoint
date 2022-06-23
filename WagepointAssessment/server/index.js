const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const coffeeRouter = require('./routers/coffeeRouter');

// app.configure(function () {
app.use(express.json());
app.use(cors());
// });
app.use('/api/v1', coffeeRouter);

console.log('ran node');
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
