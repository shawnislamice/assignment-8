import aboutBanner from "../../src/assets/About.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className=" dark:text-gray-800 font-work-sans">
      <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm md:w-[50%] lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-none sm:text-6xl">
            Welcome to
            <span className="dark:text-violet-600"> Bookish</span> Buzz!
          </h1>
          <p className="opacity-70 mt-6 mb-8 text-lg sm:mb-12 text-justify ">
            {" "}
            At Bookish Buzz, we're passionate about books and the stories they
            <br className="hidden md:inline lg:hidden" />
            hold within their pages. Whether you're an avid reader searching for
            your next literary adventure or an author seeking insights into the
            latest releases, you've come to the right place. Our dedicated team
            of bibliophiles is committed to providing honest, insightful, and
            engaging reviews of a wide range of genres, from gripping thrillers
            to heartwarming romances, thought-provoking non-fiction to
            captivating fantasy worlds.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-8 lg:justify-start">
            <Link
              to="/"
              className="font-bold relative inline-flex items-center justify-start px-14 py-4 overflow-hidden transition-all bg-white rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Go Home
              </span>
            </Link>
            <Link
              to="/about"
              className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="font-bold absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative font-bold">Contact Us</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={aboutBanner}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
      <section className="py-6  dark:text-gray-900">
        <div className="grid max-w-6xl gap-4 grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x ">
          <div className="py-6 md:py-0">
            <h1 className="text-3xl md:text-5xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4 opacity-80">
              We're available during business hours, Monday through Friday, and
              strive to respond to all inquiries within 24 hours. Your feedback
              is valuable to us, and we look forward to connecting with you!
            </p>
            <div className="space-y-4 opacity-80">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"></path>
                </svg>
                <span>
                  Road Block-A, House No:14, Uttara Sector-11 Dhaka City
                </span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>01333333333</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@bookishbuzz.com</span>
              </p>
            </div>
          </div>
          <form
            className="flex   flex-col  space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Shawn Islam "
                className="block w-full rounded-xl p-4 shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-base-300 "
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="shawnislam@example.com"
                className="block w-full rounded-xl p-4 shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-base-300 "
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="5"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-base-300 "></textarea>
            </label>
            <button
              type="button"
              className="w-full self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">
              Submit
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default About;
