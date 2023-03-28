import React from "react";
import people from "../../assets/people.png";
import { data } from "../../helper/data";
const PaymentSummary = () => {
  return (
    <div className="bg-white rounded-2xl p-10 " style={{ height: "847px" }}>
      <h1 className="text-xl font-bold mb-10">Ringkasan Pesanan</h1>
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
      <h1 className="font-bold mb-4">Kode Promo</h1>
      <div className="flex gap-3 items-center mb-5">
        <input
          type="text"
          placeholder="Masukan kode promo"
          className=" w-full h-11 pl-2"
          style={{ border: "2px solid #BBBFC3 " }}
        />
        <button
          className="p-3 rounded-md text-white"
          style={{ backgroundColor: "#2A61A8" }}
        >
          Terapkan
        </button>
      </div>
      <div className="mb-7">
        <h1 className="text-bold mb-3">Metode Pembayaran</h1>
        <h1>Bank Transfer (verifikasi manual) - Mandiri</h1>
      </div>
      <h1 className="text-bold mb-3">Ringkasan Pembayaran</h1>
      <div className="flex justify-between border-b-2 mb-4">
        <div className="flex flex-col gap-2">
          <h1>Harga Kelas</h1>
          <h1>Potongan</h1>
          <h1>Promo</h1>
          <h1>Kode Unik</h1>
        </div>
        <div className=" flex flex-col gap-2 mb-4">
          <h1>Rp. 700.000</h1>
          <h1>Rp. 200.000</h1>
          <h1>-</h1>
          <h1>Rp. 100.0000</h1>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <h1 className="text-bold mb-3">Total Pembayaran</h1>
        <h1>Rp. 400.000</h1>
      </div>
      <div className="text-sm mb-10">
        <p>
          Dengan menekan tombol Bayar kamu telah menyetujui syarat dan ketentuan
          yang berlaku, silahkan baca kembali{" "}
          <a
            href="/#"
            style={{ color: "#1097E7", textDecoration: "underline" }}
          >
            Syarat & ketentuan
          </a>{" "}
          yang berlaku.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <h1 className="text-sm" style={{ fontWeight: 600 }}>
            Batalkan
          </h1>
        </div>
        <div>
          <button
            className="p-2 rounded-full text-white"
            style={{ backgroundColor: "#2A61A8", width: "205px" }}
          >
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
