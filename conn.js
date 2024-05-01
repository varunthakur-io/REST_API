// Connecting to MongoDB using Mongoose
const mongoose = require('mongoose');

async function connectDB(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectDB
};