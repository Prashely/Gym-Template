import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-bgPrimary">
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl font-bold text-black">LOGO</a>
        </div>
        <div className="navbar-end">
          <a className="btn bg-black text-white px-10 py-4 font-black">
            Join Us
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
