import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="h-[600px] flex flex-col justify-around">
        <div className="text-9xl text-center">
          Get The <span className="text-primary">Right Job</span> <p />
          You Deserve
        </div>
        <div className="text-3xl text-center">
          786 jobs & 110 candidates are registeresd
        </div>
        <div className="flex justify-center rounded-xl">
          <input
            className="border-gray-200 border-4 rounded-s-2xl p-3 w-[450px] h-18"
            type="search"
            name="search"
            id="search"
          />
          <button
            className="bg-primary text-2xl text-white pt-3 pb-3 pl-10 pr-10 rounded-e-2xl"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
