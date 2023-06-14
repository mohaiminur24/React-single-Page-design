import React from "react";
import logo from "../../public/logo.png";

const Header = () => {
  const navlink = (
    <>
      <li>
        <button>Home</button>
      </li>
      <li>
        <button>service</button>
      </li>
      <li>
        <button>Protfolio</button>
      </li>
      <li>
        <button>Community</button>
      </li>
      <li>
        <button>Blog</button>
      </li>
    </>
  );
  return (
    <div className="w-full text-white bg-black mx-auto py-5">
      <div className="navbar w-11/12 mx-auto font-Railway">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu-sm text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <img className="w-28" src={logo} alt="" />
          <div className="ml-10 hidden lg:flex">
            <ul className="menu-horizontal px-1 gap-5 text-xs">{navlink}</ul>
          </div>
        </div>
        <div className="navbar-end">
          <button className="px-5 py-2 bg-[#4E99A4] hover:bg-[#004D58] rounded-full text-xs">
            SignUp
          </button>
          <button className="px-5 py-2 bg-[#4E99A4] hover:bg-[#004D58] rounded-full text-xs ml-5">
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
