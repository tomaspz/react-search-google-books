module.exports = {
// Search book in Google Books
  findGoogleBooks: function(searchTerm) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.GOOGLE_BOOKS_API}`)
  }
};

