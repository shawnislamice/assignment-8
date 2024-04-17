import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const BookCard = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
 
  return (
    <Link
      to={`/books/${bookId}`}
      className="border-2 shadow-xl p-6 rounded-xl hover:scale-105 duration-300 border-[#13131326]   space-y-3 ">
      <div className="bg-gray-200 py-3 rounded-lg">
        <img
          src={image}
          alt=""
          className="object-cover  w-[100px] h-[200px] my-6 block mx-auto rounded-lg "
        />
      </div>

      <div className="mt-6 mb-2">
        <div className="flex gap-4">
          {tags.map((tag, index) => (
            <p
              className="text-[#23BE0A]  py-2 px-3  bg-opacity-10 bg-[#23BE0A] rounded-full font-medium mt-1"
              key={index}>
              {tag}
            </p>
          ))}
        </div>

        <h2 className="text-2xl  font-bold text-[#131313] tracking-wide font-playfair py-4">
          {bookName}
        </h2>
        <p className="text-[#131313CC] font-semibold">BY: {author}</p>
        <hr className="mt-3 border-dashed border" />
      </div>
      <div className="flex  justify-between items-center text-[#131313CC] font-semibold pt-3">
        <p>{category}</p>
        <div className="flex items-center  gap-2">
          <p className="pt-1">{rating}</p>
          <CiStar size={24}></CiStar>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;

BookCard.propTypes={
  book:PropTypes.shape({
    bookId:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    tags:PropTypes.array.isRequired,
    bookName:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired
  }).isRequired
}
