import { CiLocationOn } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { TbPageBreak } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ReadSingleBook = ({ book }) => {
  const {
    bookId,
    totalPages,
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="font-work-sans flex md:flex-row flex-col items-center gap-8 border border-[#131313] border-opacity-15 rounded-xl p-6 text-[#131313]">
      <div className="bg-base-300 py-6 px-12 rounded-xl">
        <img className="h-[172px] w-[130px]" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-2xl font-bold font-playfair pb-2">{bookName}</h1>
        <p className="font-medium opacity-80 pt-2 md:pt-0 md:py-3">By: {author}</p>
        <div className="flex md:flex-row flex-col items-center md:gap-8">
          <p className="space-x-5 md:pt-0 pt-6">
            <b>Tag: </b>
            {tags.map((tag, index) => (
              <span className="text-[#23BE0A] font-semibold" key={index}>
                #{tag}
              </span>
            ))}
          </p>
          <p className="flex font-medium py-3 opacity-80 items-center gap-2">
            <CiLocationOn size={20}></CiLocationOn>
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-4 py-3 font-medium opacity-80">
          <div className="flex items-center gap-3">
            <LuUsers size={20}></LuUsers>
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex items-center gap-3">
            <TbPageBreak size={20}></TbPageBreak>
            <p>Page: {totalPages}</p>
          </div>
        </div>
        <hr className="w-full mt-1 mb-4" />
        <div className="md:space-x-3 flex md:flex-row flex-col gap-4 md:gap-0">
          <button className="px-5 py-2 font-medium  text-[#328EFF] bg-[#328EFF26] rounded-full border-none outline-none hover:scale-95 duration-300">
            Category: {category}
          </button>
          <button className="px-5 py-2 font-medium  text-[#FFAC33] bg-[#FFAC3326] rounded-full border-none outline-none hover:scale-95 duration-300">
            {" "}
            Rating: {rating}
          </button>
          <Link to={`/books/${bookId}`} className="">
            <button className="px-5 py-2 text-white w-full bg-[#23BE0A]  border-none outline-none hover:scale-95 duration-300 rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadSingleBook;

ReadSingleBook.propTypes={
  book:PropTypes.object.isRequired
}