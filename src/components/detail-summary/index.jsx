import React from "react";

const DetailSummary = ({ dataDetailSummary, dataFasilitas }) => {
  return (
    <div>
      <div
        className="rounded-2xl p-7 mb-5"
        style={{ minHeight: "200px", backgroundColor: "white" }}
      >
        <div>
          <h1 className="text-xl mb-2 font-bold" style={{ color: "#2B3E58" }}>
            Materi
          </h1>
          {dataDetailSummary.map((item, index) => (
            <div className="flex mb-6">
              <div className="flex items-center h-5">
                <input
                  id="helper-checkbox"
                  aria-describedby="helper-checkbox-text"
                  type="checkbox"
                  style={{ accentColor: "#FFCD29" }}
                  checked
                />
              </div>
              <div className="ml-2 -mt-1 text-xl ">
                <label
                  for="helper-checkbox"
                  className="font-medium text-gray-900 dark:text-gray-300 "
                >
                  {item.title}
                </label>

                <div
                  id="helper-checkbox-text"
                  className="text-sm font-normal text-gray-500 dark:text-gray-300 mt-2"
                >
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="rounded-2xl p-7 mb-10"
        style={{ minHeight: "200px", backgroundColor: "white" }}
      >
        <h1 className="text-xl mb-2 font-bold" style={{ color: "#2B3E58" }}>
          Fasilitas
        </h1>
        {dataFasilitas.map((item, index) => (
          <div className="flex mb-6">
            <div className="flex items-center h-5">
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="checkbox"
                style={{ accentColor: "#FFCD29" }}
                checked
              />
            </div>
            <div className="ml-2 -mt-1 text-xl ">
              <label
                for="helper-checkbox"
                className="text-gray-900 dark:text-gray-300 font-bold "
              >
                {item}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailSummary;
