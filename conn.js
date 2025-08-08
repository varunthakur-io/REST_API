// Connecting to MongoDB using Mongoose
import { connect } from 'mongoose';

async function connectDB(url) {
    return connect(url);
}

export default {
    connectDB
};