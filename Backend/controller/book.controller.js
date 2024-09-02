import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

export const addBook = async (req, res) => {
  const { name, price, category, image, title } = req.body;

  try {
    const newBook = new Book({
      name,
      price,
      category,
      image,
      title,
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};
