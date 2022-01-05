const mongoose = require('mongoose');

const connection = (URL) => {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log(`Connection to database sucessfull...`);
    }).catch(() => {
        console.log(`Failed to connect to database...`);
    })
};

module.exports = connection;