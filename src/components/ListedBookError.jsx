import { Link } from "react-router-dom";

const ListedBookError = () => {
    return (
      <div className="font-work-sans flex flex-col justify-center items-center h-[calc(100vh-70px)]">
        <h1 className="text-3xl font-bold py-5">There Are No Elements </h1>
        <Link to={-1}>
          {" "}
          <button className="btn border-none outline-none hover:scale-95 duration-300 btn-success text-white bg-[#23BE0A]">
           Go Back
          </button>
        </Link>
      </div>
    );
};

export default ListedBookError;