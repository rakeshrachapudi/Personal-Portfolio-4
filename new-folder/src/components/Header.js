import React from "react";
// images
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="mx-auto p-2">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="/" className="flex items-center ml-10">
            <img src={Logo} alt="" className="h-[50px] w-[50px]" />
            <h1 className="font-secondary font-semibold ml-4  text-[30px] text-gradient">
              Rakesh | Vicky
            </h1>
          </a>
          {/* button */}
          <a href="https://rakeshrachapudi.onrender.com/" target="blank">
            <button className="btn btn-sm mr-6">Work with me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
