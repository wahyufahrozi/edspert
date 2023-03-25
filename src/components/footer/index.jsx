import React from "react";
import { dataFooter } from "../../helper/data";
import elipse from "../../assets/Ellipse 1.png";
const Footer = () => {
  return (
    <footer clasname="min-h-screen" style={{ backgroundColor: "white" }}>
      <div className="px-20 py-20 flex justify-between">
        <div className="py-10 flex flex-col" style={{ color: "grey" }}>
          TAGLINE edspert disini
          <br />
          Jl. Watugede No.58, Wonorejo, Sariharjo, Kec.
          <br /> Ngaglik, Kabupaten Sleman, Daerah Istimewa
          <br /> Yogyakarta 55581
        </div>
        <div className="flex gap-20">
          {dataFooter.map((item) => {
            return (
              <div className="flex flex-col ">
                <h1 className="text-bold">{item.title}</h1>
                <h1 style={{ color: "gray" }}>{item.course}</h1>
                <h1 style={{ color: "gray" }}>{item.subtitle}</h1>
                <h1 style={{ color: "gray" }}>{item.description}</h1>
                <h1 style={{ color: "gray" }}>{item.program}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end px-20 relative">
        <div style={{ position: "absolute", bottom: "60px" }}>
          Edspert, copyright Jl. Watugede No.58, Wonorejo, Sariharjo, Kec.
          Yogyakarta 55581
        </div>
        <div className="absolute right-0 bottom-0">
          <img src={elipse} alt="elipse" style={{ height: "282px" }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
