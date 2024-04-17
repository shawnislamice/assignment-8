import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
    toast.success("Logged out successfully");
  };
  return (
    <div className="navbar font-work-sans ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 space-y-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/listed-books">Listed Books</NavLink>
            <NavLink to="/pages-read">Pages To Read</NavLink>
            <NavLink to="/upbooks">Upcoming Books</NavLink>
            <NavLink to="/about">About</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-[#23BE0A]">BookishBuzz</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-8 font-semibold items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] ml-3 border px-2 py-2 border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white duration-300 rounded-lg "
                : "px-2 py-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A]  border px-2 py-2 border-[#23BE0A] rounded-lg hover:bg-[#23BE0A] hover:text-white duration-300"
                : "px-2 py-2"
            }
            to="/listed-books"
          >
            Listed Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border px-2 py-2 border-[#23BE0A] rounded-lg hover:bg-[#23BE0A] hover:text-white duration-300"
                : "px-2 py-2"
            }
            to="/pages-read"
          >
            Pages To Read
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white duration-300 border px-2 py-2 border-[#23BE0A] rounded-lg"
                : "px-2 py-2"
            }
            to="/upbooks"
          >
            Upcoming Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white duration-300 border px-2 py-2 border-[#23BE0A] rounded-lg"
                : "px-2 py-2"
            }
            to="/about"
          >
            About
          </NavLink>
        </ul>
      </div>
      <div className={`navbar-end gap-4`}>
        <div className={user ? "hidden":'space-x-5' }>
          <Link to="/signin">
            <button className="btn border-none outline-none hover:scale-95 duration-300 btn-success text-white bg-[#23BE0A]">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="btn border-none outline-none hover:scale-95 duration-300 btn-success text-white bg-[#59C6D2]">
              Sign Up
            </button>
          </Link>
        </div>
        <div className={user ? "block" : "hidden"}>
          <span>{user?.email || user?.displayName}</span>
          <Link onClick={handleLogout}>
            <button className="btn border-none outline-none hover:scale-95 duration-300 btn-success text-white bg-[#59C6D2]">
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
