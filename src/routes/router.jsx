import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PagesToRead from "../pages/PagesToRead";
import ListedBooks from "../pages/ListedBooks";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import Books from "../components/Books";
import ReadBooks from "../components/ReadBooks";
import WishlistBooks from "../components/WishlistBooks";
import ErrorPage from "../components/ErrorPage";
import ListedBookError from "../components/ListedBookError";
import Gallery from "../pages/UpcomingBooks";
import About from "../pages/About";
import UpcomingBooks from "../pages/UpcomingBooks";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Books></Books>,
          },
        ],
      },
      {
        path: "/pages-read",
        errorElement: <ListedBookError></ListedBookError>,
        element: <PagesToRead></PagesToRead>,
      },

      {
        path: "/books/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("./books.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        errorElement: <ListedBookError></ListedBookError>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlist-books",
            element: <WishlistBooks></WishlistBooks>,
          },
        ],
      },
      {
        path: "/upbooks",
        element: <UpcomingBooks></UpcomingBooks>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
