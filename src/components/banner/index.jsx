import React from "react";

const Banner = ({ text }) => {
  return (
    <div
      className="flex flex-col justify-center items-center text-white gap-y-10 "
      style={{ height: "386px", backgroundColor: "#2B3E58" }}
    >
      <h1 className="text-3xl">{text}</h1>
      <button
        className=" rounded-full"
        style={{
          padding: "10px 24px",
          backgroundColor: "#FFCD29",
          color: "white",
          width: "262px",
        }}
      >
        Daftar Kelas
      </button>
    </div>
  );
};

export default Banner;
