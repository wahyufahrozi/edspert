import React, { useEffect } from "react";
// import people from "../../assets/people.png";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/product/action";
import { Link } from "react-router-dom";
const Card = () => {
  const { entities } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  // console.log(entities);
  return (
    <>
      {entities.map((item, index) => {
        const { title, description, image, price, id } = item;
        return (
          <div style={{ maxWidth: "393px" }}>
            <Link to={`/detail/${id}`}>
              <div
                className="flex px-5 flex-col items-center bg-white  border-gray-200 rounded-t-xl   md:flex-row background"
                key={index}
              >
                <img src={image} alt="people" style={{ height: "150px" }} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-bold" style={{ color: "#FFCD29" }}>
                    {title}
                  </h5>

                  <h5 className="mb-3 font-normal text-white ">
                    {`${description.substring(0, 50)} ...`}
                  </h5>
                </div>
              </div>
              <div className="px-5 bg-grey shadow rounded-b-xl">
                <h5
                  className="mb-2 text-bold truncate"
                  style={{ fontSize: "18px" }}
                >
                  {description}
                </h5>

                <div className="flex justify-end gap-5">
                  <div
                    style={{
                      color: "#0ACF83",
                      fontSize: "25px",
                      marginBottom: "16px",
                    }}
                  >
                    Rp. {price}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Card;
