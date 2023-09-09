const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://ramesh04244:js7D89tnUwb5aAgp@cluster0.xczqqns.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

//if error then pritnt message
db.on('error', console.error.bind(console, 'error in connectin DB'));

// server is up then run a message 
db.once('open', () => {
    console.log('Succesfully !! Connected to the DataBase');
})
module.export = db;