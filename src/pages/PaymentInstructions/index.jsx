import React from "react";
import PaymentInstruction from "../../components/payment-instruction";
import Banner from "../../components/banner";
const PaymentInstructions = () => {
  return (
    <div className="p-11">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 mb-5">
        <li className="inline-flex items-center">
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
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </li>
        <li>
          <div class="flex items-center">
            <span
              href="#"
              class="ml-1 text-sm font-medium   md:ml-2 dark:text-gray-400 dark:hover:text-white text-blue-600"
            >
              Checkout
            </span>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              Instruksi Bayar
            </span>
          </div>
        </li>
      </ol>
      <h1 className="text-2xl font-bold mb-10">Instruksi Bayar</h1>
      <PaymentInstruction />
      <Banner
        text="Sudah Transfer? Lakukan verifikasi pembayaran segera!"
        variant={
          "flex flex-col justify-center items-center text-white gap-y-10"
        }
        textButton="Verifikasi Pembayaran"
      />
    </div>
  );
};

export default PaymentInstructions;
