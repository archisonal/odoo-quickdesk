const express = require('express');
const connDB = require('./config/db');
const app = require('./app')

connDB();

const PORT = ProcessingInstruction.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server running on port ${PORT}');
});