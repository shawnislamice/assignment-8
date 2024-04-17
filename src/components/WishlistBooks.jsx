
import ReadSingleBook from "./ReadSingleBook";
import { useState, useEffect } from "react";
import ListedBookError from './ListedBookError';
const WishlistBooks = () => {
  const [wishBooks, setWishBooks] = useState([]);
  const [sortWishBy, setSortWishBy] = useState("Rating");

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("wish-books")) || [];
    setWishBooks(storedBooks);
  }, []);

  const handleWishSort = (event) => {
    const selectedSortBy = event.target.value;
    setSortWishBy(selectedSortBy);

    if (selectedSortBy === "Rating") {
      setWishBooks([...wishBooks].sort((a, b) => b.rating - a.rating));
    } else if (selectedSortBy === "Published Year") {
      setWishBooks(
        [...wishBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
      );
    } else if (selectedSortBy === "Number of Pages") {
      setWishBooks([...wishBooks].sort((a, b) => b.totalPages - a.totalPages));
    }
  };

   if (wishBooks.length == 0) {
     return <ListedBookError></ListedBookError>
   }
  return (
    <div className="my-5 space-y-6">
      <select
        onChange={handleWishSort}
        className="select select-bordered bg-[#23BE0A] border-none outline-none text-white font-semibold block mx-auto my-5 px-10 ">
        <option disabled selected>
          Sort By
        </option>
        <option>Rating</option>
        <option>Number of Pages</option>
        <option>Published Year</option>
      </select>
      {wishBooks.map((book, index) => (
        <ReadSingleBook book={book} key={index}></ReadSingleBook>
      ))}
    </div>
  );
};

export default WishlistBooks;
