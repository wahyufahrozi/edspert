import React, { useState } from "react";
import {
  dataPaymentInstructionATM,
  dataPaymentInstructionInternet,
  dataPaymentInstructionMbanking,
} from "../../helper/data";
import "./tabs.css";
const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center "
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li class="mr-2">
            <button
              className={
                "inline-block p-4 border-b-2 " +
                (openTab === 1 ? "border-b-blue-500 rounded-t-lg " : null)
              }
              onClick={() => {
                setOpenTab(1);
              }}
            >
              ATM
            </button>
          </li>
          <li class="mr-2">
            <button
              className={
                "inline-block p-4 border-b-2 " +
                (openTab === 2 ? "border-b-blue-500 rounded-t-lg " : null)
              }
              onClick={() => {
                setOpenTab(2);
              }}
            >
              Internet Banking
            </button>
          </li>
          <li class="mr-2">
            <button
              className={
                "inline-block p-4 border-b-2 " +
                (openTab === 3 ? "border-b-blue-500 rounded-t-lg " : null)
              }
              onClick={() => {
                setOpenTab(3);
              }}
            >
              M-Banking
            </button>
          </li>
        </ul>
      </div>
      <div>
        <div class=" rounded-lg instruction">
          <div className={openTab === 1 ? "block" : "hidden"}>
            <ol>
              {dataPaymentInstructionATM.map((item) => {
                return <li>{item}</li>;
              })}
            </ol>
          </div>
          <div className={openTab === 2 ? "block" : "hidden"}>
            <ol>
              {dataPaymentInstructionInternet.map((item) => {
                return <li>{item}</li>;
              })}
            </ol>
          </div>
          <div className={openTab === 3 ? "block" : "hidden"}>
            <ol>
              {dataPaymentInstructionMbanking.map((item) => {
                return <li>{item}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
