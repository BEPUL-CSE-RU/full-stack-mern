const mongoose = require('mongoose');
const mongdata = "mongodb+srv://Bepul:Bepul@cluster0-lo1zs.mongodb.net/test?retryWrites=true&w=majority";
// connects our back end code with the database
mongoose.connect(mongdata, { useNewUrlParser: true,useUnifiedTopology:true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;