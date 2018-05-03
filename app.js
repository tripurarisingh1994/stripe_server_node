const  express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const productRoutes = require('./api/routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())


app.use('/products', productRoutes);

module.exports = app;