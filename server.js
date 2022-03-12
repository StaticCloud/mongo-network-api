// require express and mongoose
const express = require('express');
const mongoose = require('mongoose');

// create express application
const app = express();

// JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

const PORT = process.env.PORT || 3001;

// connect to mongodb database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mongo-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

// connect express
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));