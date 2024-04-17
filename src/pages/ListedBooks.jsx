import { Outlet, useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState([]);

 
  

 
  return (
    <div className="font-work-sans md:my-5">
      <div className="bg-gray-200 py-5 md:mb-10 mb-5 rounded-xl">
        <h1 className="text-center text-3xl font-bold ">Books</h1>
      </div>
      
      <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start  flex-nowrap ">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${
            tabIndex == 0 ? "border-b-0 border rounded" : "border-b"
          } dark:border-gray-600 dark:text-gray-600`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          rel="noopener noreferrer"
          to="wishlist-books"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex == 1 ? "border-b-0 border rounded" : "border-b"
          } dark:border-gray-600 dark:text-gray-600`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>
      <div className="my-10">
        <Outlet></Outlet>
      </div>
      <div></div>
    </div>
  );
};

export default ListedBooks;
