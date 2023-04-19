import React from "react";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <nav className="background px-11  ">
      <div className=" flex justify-between ">
        <img src={logo} alt="logo" style={{ height: "100px" }} />
        <div className="flex items-center gap-10 px-8">
          <button className="text-white text-sm px-4 py-2.5 text-center inline-flex items-center ">
            Program
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <button className="text-white text-sm px-4 py-2.5 text-center inline-flex items-center ">
            Bidang Ilmu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 ml-2 white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
          <button className="text-white text-sm px-4 py-2.5 text-center inline-flex items-center ">
            Tentang Edspert
          </button>
          <button
            className="primary rounded-full text-white"
            style={{ padding: "10px 24px" }}
          >
            Masuk/Daftar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
