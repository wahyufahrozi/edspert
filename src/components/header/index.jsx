import React from "react";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <nav className="background px-11  ">
      <div className=" flex justify-between ">
        <img src={logo} alt="logo" style={{ height: "100px" }} />
        <div className="flex items-center gap-10 px-8">
          <div className="text-white">Program</div>
          <div className="text-white">Bidang Ilmu</div>
          <div className="text-white">Tentang edspert</div>
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
