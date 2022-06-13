const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
require('./server-alive');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/products.routes')(app); 
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {console.log(`Servidor ${PORT} conectado`)})
