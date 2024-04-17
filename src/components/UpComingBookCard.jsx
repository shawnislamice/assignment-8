import { CiStar } from "react-icons/ci";
import toast from "react-hot-toast";

import PropTypes from "prop-types";
const UpComingBookCard = ({ item }) => {
  const {  image, tags, bookName, author, category, rating } = item;

  const handlePreOrder = () => {
    const loadingToast = toast.loading(
      "Wait Until We Are Processing Your Order"
    );

    setTimeout(() => {
      toast.dismiss(loadingToast.id);
    }, 2000);

    setTimeout(() => {
      toast.success("Pre Order Placed Successfully");
    }, 2000);

    setTimeout(() => {
      toast.dismiss();
    }, 4000);
  };

  return (
    <div className="border-2 shadow-xl p-6 rounded-xl hover:scale-105 duration-300 border-[#13131326]   space-y-3 font-work-sans">
      <div className="bg-gray-200 py-3 rounded-lg">
        <img
          src={image}
          alt=""
          className="object-cover  w-[150px] h-[250px] my-6 block mx-auto rounded-lg "
        />
      </div>

      <div className="mt-6 mb-2">
        <div className="flex gap-4">
          {tags.map((tag, index) => (
            <p
              className="text-[#23BE0A] bg-[#23BE0A] rounded-full bg-opacity-10 font-medium px-4 my-3 py-2"
              key={index}>
              {tag}
            </p>
          ))}
        </div>

        <h2 className="text-2xl  font-bold text-[#131313] tracking-wide font-playfair py-4">
          {bookName}
        </h2>
        <p className="text-[#131313CC] font-semibold">BY: {author}</p>
      </div>
      <hr className="border-dashed border" />
      <div className="flex  justify-between items-center text-[#131313CC] font-semibold ">
        <p>{category}</p>
        <div className="flex items-center  gap-2">
          <p className="pt-1">{rating}</p>
          <CiStar size={20}></CiStar>
        </div>
      </div>
      <div className="my-3">
        <button
          onClick={handlePreOrder}
          className="btn w-full  border-none outline-none hover:scale-95 duration-300 btn-success text-white bg-[#23BE0A]">
          PreOrder Now
        </button>
      </div>
    </div>
  );
};

export default UpComingBookCard;

UpComingBookCard.propTypes = {
  item: PropTypes.object.isRequired,
};
