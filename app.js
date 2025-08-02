const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'))

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tkt', require('./routes/tkt'));

module.exports = app;