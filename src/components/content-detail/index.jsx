import React from "react";
import DetailSummary from "../detail-summary";
import SideSummary from "../side-summary";

const ContentDetail = ({ data, dataDetailSummary, dataFasilitas }) => {
  return (
    <div className="px-11 grid grid-cols-[23%_77%]  mt-10 mb-10">
      <SideSummary />
      <DetailSummary
        dataDetailSummary={dataDetailSummary}
        dataFasilitas={dataFasilitas}
      />
    </div>
  );
};

export default ContentDetail;
