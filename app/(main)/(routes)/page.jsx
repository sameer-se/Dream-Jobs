import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="h-96 flex flex-col justify-around">
        <div className="text-7xl text-center">
          Get The <span className="text-primary">Right Job</span> <p />
          You Deserve
        </div>
        <div className="text-3xl text-center">
          786 jobs & 110 candidates are registeresd
        </div>
        <div className="flex gap-2 justify-center">
          <input
            className="border-secondary border-4 rounded-2xl p-3"
            type="search"
            name="search"
            id="search"
          />
          <button
            className="bg-primary text-white pt-3 pb-3 pl-6 pr-6 rounded-2xl"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
