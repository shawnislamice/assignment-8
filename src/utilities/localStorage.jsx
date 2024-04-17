import toast, { Toaster } from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};
export const getWishBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("wish-books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const saveBooks = (bookItem) => {
  let books = getBooks();
  const isExist = books.find((book) => book.bookId == bookItem.bookId);
  if (isExist) {
    toast.error("This book was already read!");
  } else {
    books.push(bookItem);
    localStorage.setItem("books", JSON.stringify(books));
    toast.success("Book added to your list");
  }
};
export const saveWishBooks = (bookItem) => {
  let books = getWishBooks();
  const isExist = books.find((book) => book.bookId == bookItem.bookId);
  if (isExist) {
    toast.error("This book was already in your wish list!");
  } else {
    books.push(bookItem);
    localStorage.setItem("books", JSON.stringify(books));
    toast.success("Book added to your list");
  }
};
