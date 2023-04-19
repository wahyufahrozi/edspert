import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BannerDetail from "../../components/banner-detail";
import ContentDetail from "../../components/content-detail";
import { data, dataDetailSummary, dataFasilitas } from "../../helper/data";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/product/action";

import { addItem } from "../../redux/cart/slice";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { entity } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <>
      <BannerDetail />
      <ContentDetail
        data={data}
        dataDetailSummary={dataDetailSummary}
        dataFasilitas={dataFasilitas}
      />
      <div
        className="flex flex-col justify-center items-center text-white gap-y-10"
        style={{ height: "386px", backgroundColor: "#2B3E58" }}
      >
        <h1 className="text-3xl">Sudah siap bergabung ?</h1>
        <Link to={`/checkout`}>
          <button
            className=" rounded-full"
            style={{
              padding: "10px 24px",
              backgroundColor: "#FFCD29",
              color: "white",
              width: "262px",
            }}
            onClick={() => dispatch(addItem(entity))}
          >
            Daftar Kelas
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductDetail;
