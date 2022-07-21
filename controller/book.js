const { bookstore } = require('../database/db');
const { ObjectId } = require('mongodb');

exports.index = async (req, res, next) => {
    let books = [];
    await bookstore('books')
        .find()
        .sort({ author: 1 })
        .forEach((book) => books.push(book));

    return res.status(200).json(books);
};

// throw error not work in callback
exports.show = async (req, res, next) => {
    try {
        let book = await bookstore('books').findOne({
            _id: ObjectId(req.params.id),
        });
        return res.status(200).json(book);
    } catch (error) {
        next(error);
    }
};
