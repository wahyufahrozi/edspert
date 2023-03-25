import React from "react";
import sideLogo from "../../assets/image 7.png";

const Hero = () => {
  return (
    <div
      className="px-11 background  relative mb-10"
      style={{ height: "528px" }}
    >
      <div className="text-white pt-52 ">
        <h1 style={{ fontSize: "46px" }}>
          Jadi expert bersama <br />
          edspert.id
        </h1>
      </div>

      <div className=" text-white">
        <p>
          Tingkatkan skill dan pengetahuan bersama para mentor <br />
          terbaik di bidangnya, untuk siapkan karir impian anda.
        </p>
      </div>
      <div className="absolute right-0 bottom-0">
        <img src={sideLogo} alt="side-logo" />
      </div>
    </div>
  );
};

export default Hero;
