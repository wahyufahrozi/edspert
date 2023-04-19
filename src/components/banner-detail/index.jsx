import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import sideLogo from "../../assets/image 7.png";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/product/action";
const BannerDetail = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { entity } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  console.log(entity);
  return (
    <div className=" relative pl-16 background" style={{ height: "350px" }}>
      <div className=" pt-14" key={entity.id}>
        <div className="pb-10">
          <h1 className="text-5xl text-white pb-2"> {entity.title}</h1>
          <h1 className="text-3xl text-white" style={{ width: "997px" }}>
            {entity.description}
          </h1>
        </div>
        {/* <div className="text-white">
          <h1 className="pb-2">Mentor</h1>
          <div className="flex gap-16">
            <div className="flex flex-col">
              <h1 className="text-2xl">{entity.mentor[0]}</h1>
              <h1>Developer at Widya edu</h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl">{entity.mentor[1]}</h1>
              <h1>Developer at Widya edu</h1>
            </div>
          </div>
        </div> */}
      </div>

      <div className="absolute right-0 bottom-0">
        <img src={sideLogo} alt="side-logo" style={{ height: "250px" }} />
      </div>
    </div>
  );
};

export default BannerDetail;
