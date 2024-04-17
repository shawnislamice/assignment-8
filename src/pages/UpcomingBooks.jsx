import { useEffect, useState } from "react";
import UpComingBookCard from "../components/UpComingBookCard";
import { Toaster } from "react-hot-toast";
const UpcomingBooks = () => {
  const [upComingBooks, setUpComingBooks] = useState([]);
  useEffect(() => {
    fetch("./UpcomingBooks.json")
      .then((res) => res.json())
      .then((data) => setUpComingBooks(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold font-work-sans pt-3 text-center">Upcoming Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:my-10 my-5 f">
        {upComingBooks.map((item, index) => (
          <UpComingBookCard item={item} key={index}></UpComingBookCard>
        ))}
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default UpcomingBooks;
