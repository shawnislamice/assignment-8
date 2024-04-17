import banner from '../assets/banner.png'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
      <div className="flex  md:flex-row bg-base-300 py-10 rounded-xl flex-col-reverse md:gap-0 gap-6 items-center justify-evenly font-playfair md:my-10 my-5">
        <div className="space-y-7 ">
          <h1 className="md:text-5xl text-3xl md:max-w-md  text-[#131313] font-bold md:text-start text-center mb-6">
            Dive into Literary  Insights and Discoveries
          </h1>
          <Link to="/listed-books">
            <button className="btn border-none outline-none hover:scale-95 duration-300 btn-success text-white bg-[#23BE0A] block mx-auto md:mx-0 font-work-sans">
              View The List
            </button>
          </Link>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    );
};

export default Hero;