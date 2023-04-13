import React from "react";

const Banner = ({ text, variant, textButton }) => {
  return (
    <div
      className={variant}
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
        {textButton}
      </button>
    </div>
  );
};

export default Banner;
