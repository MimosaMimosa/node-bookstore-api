const express = require('express');
const book = require('./routes/book');
const { connectToDb } = require('./database/db');
const app = express();

app.use(express.json());
app.use('/api/books', book);

app.use((error, req, res, next) => {
    let status = error.status || 500;
    let message = error.message || 'Sever Error';
    let success = false;

    return res.status(status).json({ message, success });
});

connectToDb((error) => {
    if (!error) {
        app.listen(5000, () => {
            console.log('server is running at port 5000');
        });
    }
});
