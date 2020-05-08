const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const googleApi = require("../../controllers/googleAPI");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .get(googleApi.findGoogleBooks)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
