import ListedBookError from "./ListedBookError";
import ReadSingleBook from "./ReadSingleBook";
import { useState,useEffect } from "react";
const ReadBooks = () => {
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState(""); 

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  const handleSort = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);

    if (selectedSortBy === "Rating") {
      const sortedBooks = [...books].sort((a, b) => b.rating - a.rating);
      setBooks(sortedBooks);
    }else if(selectedSortBy==='Published Year'){
        const sortedBooks = [...books].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setBooks(sortedBooks);
    }else if(selectedSortBy==='Number of Pages'){
        const sortedBooks = [...books].sort((a, b) => b.totalPages - a.totalPages);
        setBooks(sortedBooks);
    }
  };
  if(books.length==0){
    return <ListedBookError></ListedBookError>
  }
  return (
    <div className="my-5 space-y-6">
      <select
        onChange={handleSort}
        className="select select-bordered bg-[#23BE0A] border-none outline-none text-white font-semibold block mx-auto my-5 px-10 ">
        <option disabled selected>
          Sort By
        </option>
        <option>Rating</option>
        <option>Number of Pages</option>
        <option>Published Year</option>
      </select>
      {books.map((book, index) => (
        <ReadSingleBook book={book} key={index}></ReadSingleBook>
      ))}
    </div>
  );
};

export default ReadBooks;
