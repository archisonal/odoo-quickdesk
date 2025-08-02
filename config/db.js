const mongoose = require('mongoose')

 // connecting to db with error handling
 const conn = async () => {
    try{
        await mongoose.connect();
        console.log('Database connected');
    }
    catch (e){
        console.log(e.message);
        process.exit(1);
    }
 };

 module.exports = conn;