import React from "react";
import Banner from "../../components/banner";
import BannerDetail from "../../components/banner-detail";
import ContentDetail from "../../components/content-detail";
import { data, dataDetailSummary, dataFasilitas } from "../../helper/data";
const ProductDetail = () => {
  // console.log(data);
  return (
    <>
      <BannerDetail data={data} />
      <ContentDetail
        data={data}
        dataDetailSummary={dataDetailSummary}
        dataFasilitas={dataFasilitas}
      />
      <Banner text={"Sudah siap bergabung ?"} />
    </>
  );
};

export default ProductDetail;
