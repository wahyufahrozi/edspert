import React from "react";
import people from "../../assets/people.png";
const Card = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        const { title, subtitle, description, date, mentor, exprice, price } =
          item;
        return (
          <div style={{ maxWidth: "393px" }}>
            <div
              className="flex px-5 flex-col items-center bg-white  border-gray-200 rounded-t-xl   md:flex-row background"
              key={index}
            >
              <img src={people} alt="people" style={{ height: "150px" }} />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-bold" style={{ color: "#FFCD29" }}>
                  {title}
                </h5>
                <h5
                  className="mb-2  text-white "
                  style={{ fontWeight: "800", fontSize: "20px" }}
                >
                  {subtitle}
                </h5>
                <p className="mb-3 font-normal text-white">({description})</p>
              </div>
            </div>
            <div className="px-5 bg-grey shadow rounded-b-xl">
              <h5 className="mb-2 text-bold " style={{ fontSize: "20px" }}>
                {subtitle}
              </h5>
              <h5 className="mb-2 text-bold " style={{ fontSize: "18px" }}>
                {description}
              </h5>
              <div className="flex">
                <div className="flex flex-col">
                  <span>Batch</span>
                  <span>Mentor </span>
                </div>
                <div className="flex flex-col ml-5 ">
                  <span>{date}</span>
                  <span>
                    {mentor[0]}, {mentor[1]}
                  </span>
                </div>
              </div>
              <div className="flex justify-end gap-5">
                <div className="line-through " style={{ color: "gray" }}>
                  {exprice}
                </div>
                <div
                  style={{
                    color: "#0ACF83",
                    fontSize: "25px",
                    marginBottom: "16px",
                  }}
                >
                  {price}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
