const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String },
  author: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;