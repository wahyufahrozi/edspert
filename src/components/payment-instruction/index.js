import React from "react";
import people from "../../assets/people.png";
import { data } from "../../helper/data";
import logomandiri from "../../assets/mandiri-logo.png";

import iconCopy from "../../assets/Group 1353.png";
import Tabs from "../tabs";
const PaymentInstruction = () => {
  return (
    <div className="bg-white rounded-2xl p-10">
      <div className="grid grid-cols-[50%,40%]">
        <div>
          <div className="flex gap-3 mb-5">
            <div
              className=" flex p-3 border justify-center items-center background rounded-2xl "
              style={{ width: "119px" }}
            >
              <img
                src={people}
                style={{ width: "68px", height: "91px" }}
                alt="logo"
              />
            </div>
            <div>
              {data.map((item, index) => (
                <div key={index}>
                  <h1 className="font-bold text-lg">{item.subtitle}</h1>
                  <h1 className="font-bold text-md">{item.description}</h1>
                  <div className="flex mt-3">
                    <div className="flex flex-col">
                      <span className="text-xs">Batch</span>
                      <span className="text-xs">Mentor </span>
                    </div>
                    <div className="flex flex-col ml-5 ">
                      <span className="text-xs">{item.date}</span>
                      <span className="text-xs">
                        {item.mentor[0]}, {item.mentor[1]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-7">
            <h1 className="text-bold mb-3 text-xl">Metode Pembayaran</h1>
            <h1 style={{ color: "#6D7175" }}>
              Bank Transfer (verifikasi manual) - Mandiri
            </h1>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logomandiri} alt="logo" />
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <h1>No Rek. 137000299089</h1>
                <div className="flex items-center gap-2">
                  <img
                    src={iconCopy}
                    style={{ width: "10px", height: "13px" }}
                    alt="icon"
                  />
                  <h1 className="text-xs" style={{ color: "#1097E7" }}>
                    Salin
                  </h1>
                </div>
              </div>
              <h1 style={{ color: "#6D7175" }}>a.n. PT Widya Kreasi Bangsa</h1>
            </div>
          </div>
          <h1 className="text-lg" style={{ color: "#6D7175" }}>
            Nominal yang harus dibayar senilai:
          </h1>
          <h1 className="text-xl">Rp. 400.000</h1>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-10">Instruksi Pembayaran</h1>
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default PaymentInstruction;
