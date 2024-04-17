
import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

 

  return (
    <div className="font-work-sans md:my-10">
      <h2 className="text-center text-3xl font-bold py-10 font-playfair">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <BookCard book={book} key={index}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
