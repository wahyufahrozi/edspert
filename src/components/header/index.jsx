import React from "react";
import logo from "../../assets/logo.png";
import sideLogo from "../../assets/image 7.png";
const Header = () => {
  return (
    <header>
      <nav className="background px-11 min-h-screen mb-10">
        <div className=" flex justify-between  mb-56">
          <img src={logo} alt="logo" style={{ height: "100px" }} />
          <div className="flex items-center gap-10 px-8">
            <div className="text-white">Program</div>
            <div className="text-white">Bidang Ilmu</div>
            <div className="text-white">Tentand edspert</div>
            <button
              className="primary rounded-full text-white"
              style={{ padding: "10px 24px" }}
            >
              Masuk/Daftar
            </button>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="text-white mb-5">
              <h1 style={{ fontSize: "46px" }}>
                Jadi expert bersama <br />
                edspert.id
              </h1>
            </div>
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
      </nav>
    </header>
  );
};

export default Header;
