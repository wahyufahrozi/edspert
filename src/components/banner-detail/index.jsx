import React from "react";

import sideLogo from "../../assets/image 7.png";
const BannerDetail = ({ data }) => {
  return (
    <div className=" relative pl-16 background" style={{ height: "350px" }}>
      {data.map((item, index) => {
        return (
          <div className=" pt-14" key={index}>
            <div className="pb-10">
              <h1 className="text-5xl text-white pb-2"> {item.subtitle}</h1>
              <h1 className="text-3xl text-white tracking-wider">
                {item.description}
              </h1>
            </div>
            <div className="text-white">
              <h1 className="pb-2">Mentor</h1>
              <div className="flex gap-16">
                <div className="flex flex-col">
                  <h1 className="text-2xl">{item.mentor[0]}</h1>
                  <h1>Developer at Widya edu</h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl">{item.mentor[1]}</h1>
                  <h1>Developer at Widya edu</h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="absolute right-0 bottom-0">
        <img src={sideLogo} alt="side-logo" style={{ height: "250px" }} />
      </div>
    </div>
  );
};

export default BannerDetail;
