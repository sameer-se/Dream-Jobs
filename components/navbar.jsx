import React from "react";

export default function NavBar() {
  return (
    <div className="container mt-5 mb-5 bg-white flex justify-between text-primary ">
      <div className="font-bold text-4xl">Dream Jobs</div>
      <div className="flex gap-8 text-black text-lg t-w-[400px]">
        <button className="hover:text-primary">Find Jobs</button>
        <button className="hover:text-primary">Home</button>
        <button className="hover:text-primary">Find Candidates</button>
        <button className="hover:text-primary">Articles</button>
      </div>
      <div className="flex gap-6 text-lg">
        <button className="text-primary  hover:text-teal-400" type="submit">
          Login
        </button>
        <button
          className="text-white  bg-primary pt-2 pb-2 pl-4 pr-4 rounded-lg hover:bg-teal-400"
          type="submit"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
