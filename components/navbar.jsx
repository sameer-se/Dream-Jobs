import React from "react";

export default function NavBar() {
  return (
    <div className="bg-white flex justify-around text-sky-500 ">
      <div className="font-bold text-2xl">Dream Jobs</div>
      <div className="flex gap-4">
        <button className="text-sky-500" type="submit">
          Login
        </button>
        <button className="text-sky-500" type="submit">
          Signup
        </button>
      </div>
    </div>
  );
}
