import React from "react";
import logomandiri from "../../assets/mandiri-logo.png";
import logobca from "../../assets/bca-logo.png";
const PaymentMethod = () => {
  return (
    <div className="bg-white rounded-2xl p-10">
      <h1 className="text-xl font-bold mb-10">Pilih Metode Pembayaran</h1>
      <h1 className="" style={{ fontWeight: 600 }}>
        Bank Transfer (verifikasi manual)
      </h1>
      <div className="border-b-2 flex ">
        <div>
          <p className="mb-3">
            Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar ini
            memerlukan verifikasi pembayaran manual melalui Whatsapp
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="mt-3 flex flex-col">
        <div className="flex border p-2  justify-between mb-3 items-center">
          <img src={logomandiri} alt="logo mandiri" />
          <label className="cursor-pointer  w-full p-3 " for="bank-mandiri">
            Bank Transfer ke Rek Bank Mandiri
          </label>
          <input type="radio" name="radio-bank" id="bank-mandiri" />
        </div>
        <div className="flex border p-2 justify-between items-center mb-10">
          <img src={logobca} alt="logo bca" />

          <label className="cursor-pointer  w-full p-3 " for="bank-bca">
            Bank Transfer ke Rek Bank BCA
          </label>
          <input type="radio" name="radio-bank" id="bank-bca" />
        </div>
      </div>
      <h1 className="" style={{ fontWeight: 600 }}>
        Virtual Account (verifikasi otomatis)
      </h1>
      <div className="border-b-2 flex">
        <div>
          <p className="mb-3">
            Pembayaran melalui virtual account berbagai bank. Metode bayar ini
            akan diverifikasi secara otomatis.
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="mt-3 flex flex-col">
        <div className="flex border p-2  justify-between mb-3 items-center">
          <img src={logomandiri} alt="logo mandiri" />
          <label className="cursor-pointer  w-full p-3 " for="virtual-mandiri">
            Virtual Account Mandiri
          </label>
          <input type="radio" name="radio-bank" id="virtual-mandiri" />
        </div>
        <div className="flex border p-2 justify-between items-center">
          <img src={logobca} alt="logo bca" />

          <label className="cursor-pointer  w-full p-3 " for="virtual-bca">
            Virtual Account BCA
          </label>
          <input type="radio" name="radio-bank" id="virtual-bca" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
