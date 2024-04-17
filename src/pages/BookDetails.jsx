import { useLoaderData, useParams } from "react-router-dom";
import { getWishBooks, saveBooks } from "../utilities/localStorage";
import toast, { Toaster } from "react-hot-toast";

import { getBooks } from "../utilities/localStorage";
const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId == id);
  const {
    bookId,
    totalPages,
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    review,
    publisher,
    yearOfPublishing,
  } = book;

  const handleRead = (book) => {
    saveBooks(book);
  };
  const handleWishlist = (bookItem) => {
    const books = getBooks();
    const wishBooks = getWishBooks();
    const isWishExist = wishBooks.find(
      (book) => book.bookId == bookItem.bookId
    );
    const isExist = books.find((book) => book.bookId == bookItem.bookId);
    if (isExist) {
      toast.error("This book was alreary in read!");
    } else {
      if (isWishExist) {
        toast.error("This book was alreary in wishlist!");
      } else {
        wishBooks.push(bookItem);
        localStorage.setItem("wish-books", JSON.stringify(wishBooks));
        toast.success("Book added to your wish list");
      }
    }
  };

  return (
    <div className="flex md:flex-row flex-col items-center gap-10  font-work-sans md:my-10 my-5">
      <div className="md:w-[48%] w-full bg-base-300 py-8 rounded-xl">
        <img
          className=" md:h-[90vh] h-[350px] mx-auto object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="md:w-[48%]">
        <h1 className="text-2xl md:text-4xl font-bold font-playfair">
          {bookName}
        </h1>

        <p className=" text-[#131313CC] font-md py-4">By: {author}</p>
        <hr />
        <p className=" text-[#131313CC] font-md py-4">{category}</p>

        <hr />
        <p className="text-[#131313] opacity-80 text-justify py-6">
          <b>Review: </b>
          {review}
        </p>
        <div className="space-x-5">
          <span>
            <b>Tag:</b>
          </span>
          {tags.map((tag) => (
            <span
              className="font-semibold bg-opacity-10 bg-[#23BE0A] px-4 py-2 rounded-full text-[#23BE0A]"
              key={tag}>
              #{tag}
            </span>
          ))}
        </div>
        <hr className="my-8" />
        <div className="flex gap-3 items-center justify-between max-w-[300px] py-2">
          <p>Number of Pages: </p>
          <span>
            <b>{totalPages}</b>
          </span>
        </div>
        <div className="flex gap-3  items-center justify-between max-w-[300px] py-2">
          <p>Publisher: </p>
          <span >
            <b>{publisher}</b>
          </span>
        </div>
        <div className="flex gap-3 items-center justify-between max-w-[300px] py-2">
          <p>Year Of Publishing: </p>
          <span>
            <b>{yearOfPublishing}</b>
          </span>
        </div>
        <div className="flex gap-3 items-center justify-between max-w-[300px] py-2">
          <p>Rating: </p>
          <span>
            <b>{rating}</b>
          </span>
        </div>
        <div className="space-x-6 md:mt-3">
          <button
            className="btn px-8 bg-white border text-black font-semibold border-[#1313134D]"
            onClick={() => handleRead(book)}>
            Read
          </button>
          <button
            onClick={() => handleWishlist(book)}
            className="btn px-10 font-semibold bg-[#50B1C9] text-white">
            Wishlist
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default BookDetails;
