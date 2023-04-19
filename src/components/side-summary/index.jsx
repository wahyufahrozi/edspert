import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/product/action";
import { addItem } from "../../redux/cart/slice";
const SideSummary = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { entity } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

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

      <div className="flex px-5 gap-10 pt-2 mb-3" key={entity.id}>
        <h1 className="line-through" style={{ color: "gray" }}>
          Rp. 125.000
        </h1>
        <h1 style={{ color: "#FF6A28" }}>Rp. {entity.price}</h1>
      </div>

      <Link to={`/checkout`}>
        <div className="flex justify-center items-center">
          <button
            className="w-9/12 rounded-full secondary text-white "
            style={{
              padding: "10px 24px",
            }}
            onClick={() => dispatch(addItem(entity))}
          >
            Daftar Kelas
          </button>
        </div>
      </Link>
    </div>
  );
};

export default SideSummary;
