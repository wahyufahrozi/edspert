import React from "react";

const SideSummary = ({ data }) => {
  return (
    <div
      className="rounded-2xl"
      style={{ height: "200px", width: "250px", backgroundColor: "white" }}
    >
      <div className="mt-5 border-b-2">
        <button
          className="w-full pr-32 p-2 "
          style={{
            backgroundColor: "rgb(241, 247, 255)",
            color: "#0C58CA",
            borderRight: "2px solid #197BFF",
          }}
        >
          Materi
        </button>
        <button className="w-full pr-32 p-2 ">Fasilitas</button>
      </div>
      {data.map((item, index) => (
        <div className="flex px-5 gap-10 pt-2 mb-3" key={index}>
          <h1 className="line-through" style={{ color: "gray" }}>
            {item.exprice}
          </h1>
          <h1 style={{ color: "#FF6A28" }}>{item.price}</h1>
        </div>
      ))}
      <div className="flex justify-center items-center">
        <button
          className="w-9/12 rounded-full secondary text-white "
          style={{
            padding: "10px 24px",
          }}
        >
          Daftar Kelas
        </button>
      </div>
    </div>
  );
};

export default SideSummary;
