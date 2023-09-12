import React from "react";

export default function NavBar() {
  return (
    <div className="container mt-5 mb-5 bg-white flex justify-between text-primary ">
      <div className="font-bold text-base">Dream Jobs</div>
      <div className="flex gap-4 text-black text-sm t-w-[400px]">
        <button>Home</button>
        <button>Find Jobs</button>
        <button>Find Candidates</button>
        <button>Articles</button>
      </div>
      <div className="flex gap-4">
        <button className="text-primary" type="submit">
          Login
        </button>
        <button
          className="text-white  bg-primary pt-2 pb-2 pl-4 pr-4 rounded-lg"
          type="submit"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
