import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaHeart, FaLock, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar flex w-9/10 h-18 m-8 bg-[#012A4A] rounded-2xl mx-auto text-center justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          <span className="text-green-500">Threft</span>
          <span className="text-pink-500">Store</span>
        </Link>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center px-4 w-400">
          <div className="flex items-center bg-[#89C2D9] rounded-full px-3 py-2 w-full max-w-md">
            <input
              type="text"
              placeholder="Tshirt"
              className="flex-grow bg-transparent outline-none text-sky-900 placeholder-sky-600"
            />
            <svg
              width="25"
              height="25"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2029_26)">
                <circle
                  cx="8.07654"
                  cy="7.67356"
                  r="5.5"
                  transform="rotate(-26.1101 8.07654 7.67356)"
                  stroke="#013A63"
                  stroke-width="1.5"
                />
                <path
                  d="M13.6704 10.6471L16.3768 11.9579"
                  stroke="#013A63"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M6.05174 9.22279C5.32256 7.73501 5.93752 5.93782 7.4253 5.20864"
                  stroke="#013A63"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2029_26">
                  <rect width="19" height="19" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 bg-[#89C2D9] rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2029_33)">
                <path
                  d="M11 0.916668C11.6019 0.916668 12.1979 1.03522 12.754 1.26555C13.31 1.49589 13.8153 1.83349 14.2409 2.2591C14.6665 2.6847 15.0041 3.18996 15.2344 3.74604C15.4648 4.30211 15.5833 4.89811 15.5833 5.5V7.33333H18.3333C18.5764 7.33333 18.8096 7.42991 18.9815 7.60182C19.1534 7.77373 19.25 8.00689 19.25 8.25V19.25C19.25 19.4931 19.1534 19.7263 18.9815 19.8982C18.8096 20.0701 18.5764 20.1667 18.3333 20.1667H3.66667C3.42355 20.1667 3.19039 20.0701 3.01849 19.8982C2.84658 19.7263 2.75 19.4931 2.75 19.25V8.25C2.75 8.00689 2.84658 7.77373 3.01849 7.60182C3.19039 7.42991 3.42355 7.33333 3.66667 7.33333H6.41667V5.5C6.41667 4.28443 6.89955 3.11864 7.75909 2.2591C8.61864 1.39955 9.78442 0.916668 11 0.916668ZM15.5833 10.0833H13.75V11C13.7503 11.2336 13.8397 11.4584 14.0001 11.6283C14.1605 11.7981 14.3797 11.9004 14.6129 11.9141C14.8462 11.9278 15.0758 11.8519 15.255 11.7019C15.4342 11.552 15.5493 11.3393 15.5769 11.1073L15.5833 11V10.0833ZM8.25 10.0833H6.41667V11C6.41693 11.2336 6.50639 11.4584 6.66678 11.6283C6.82717 11.7981 7.04637 11.9004 7.27961 11.9141C7.51285 11.9278 7.74251 11.8519 7.92168 11.7019C8.10085 11.552 8.21599 11.3393 8.24358 11.1073L8.25 11V10.0833ZM11 2.75C10.2986 2.74996 9.62361 3.01797 9.11326 3.49918C8.60291 3.98039 8.29573 4.63843 8.25458 5.33867L8.25 5.5V7.33333H13.75V5.5C13.75 4.79856 13.482 4.12361 13.0008 3.61326C12.5196 3.10291 11.8616 2.79574 11.1613 2.75458L11 2.75Z"
                  fill="#01497C"
                />
              </g>
              <defs>
                <clipPath id="clip0_2029_33">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="p-2 bg-[#89C2D9] rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2029_35)">
                <path
                  d="M11.0011 4.15158C13.1543 2.21833 16.4818 2.2825 18.5563 4.36058C20.6298 6.43958 20.7013 9.75058 18.7726 11.9103L10.9993 19.6946L3.22775 11.9103C1.29908 9.75058 1.3715 6.43408 3.44409 4.36058C5.52033 2.28525 8.84142 2.21558 11.0011 4.15158Z"
                  fill="#B20003"
                />
              </g>
              <defs>
                <clipPath id="clip0_2029_35">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className="flex items-center bg-white px-3 py-1 h-12 w-40 rounded-full">
            <span className="text-sm font-medium">Nirmal Patidar</span>
            <button className="p-2 bg-[#89C2D9] rounded-full h-10 w-10 relative left-2 items-center text-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2029_35)">
                  <path
                    d="M11.0011 4.15158C13.1543 2.21833 16.4818 2.2825 18.5563 4.36058C20.6298 6.43958 20.7013 9.75058 18.7726 11.9103L10.9993 19.6946L3.22775 11.9103C1.29908 9.75058 1.3715 6.43408 3.44409 4.36058C5.52033 2.28525 8.84142 2.21558 11.0011 4.15158Z"
                    fill="#B20003"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2029_35">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mx-10 flex  bg-[#89C2D9] w-10 h-10 items-center justify-center rounded-md relative left-25">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-3">
          {/* Search bar in mobile */}
          <div className="flex items-center bg-sky-300 rounded-full px-3 py-2">
            <input
              type="text"
              placeholder="Tshirt"
              className="flex-grow bg-transparent outline-none text-sky-900 placeholder-sky-600"
            />
            <FaSearch className="text-sky-900" />
          </div>

          {/* Icons */}
          <div className="flex space-x-3">
            <button className="p-2 bg-sky-300 rounded-full">
              <FaLock />
            </button>
            <button className="p-2 bg-[#89C2D9] rounded-full">
              <FaHeart className="text-red-600" />
            </button>
          </div>

          {/* User */}
          <div className="flex items-center bg-white px-3 py-1 rounded-full">
            <span className="text-sm font-medium">Nirmal Patidar</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
