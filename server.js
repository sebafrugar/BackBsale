const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
require('./server-alive');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/products.routes')(app); 
app.listen(8000, () => {
console.log("Servidor Conectado")})