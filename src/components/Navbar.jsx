import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BiSolidMicrophone } from "react-icons/bi";
import { RiVideoAddLine } from "react-icons/ri"
import { BsBell } from "react-icons/bs";


function Navbar() {
  return (
    <div className="flex justify-between items-center bg-[#212121] px-14 h-14 opacity-95 sticky text-white">
      <div className="flex gap-6 items-center justify-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <FaYoutube className="text-3xl text-red-600 "/>
          <span className="text-2xl">YouTube</span>
        </div>
        </div>
        <div className="flex justify-center items-center gap-3">
            <form className="flex">
                <div className="flex bg-zinc-900 h-10 px-4 items-center pr-0 rounded-3xl">
                <div className="flex gap-5 pr-5">
                    <input type="text" placeholder="Search" className="w-96 focus:outline-none bg-zinc-900 border-none"/>
                    
                </div>
                <button className="h-10 w-16 flex justify-center items-center bg-zinc-800 rounded-r-3xl">
                        <IoIosSearch className="text-xl"/>
                    </button>
                </div>
            </form>
            <div className="p-3 text-xl bg-zinc-900 rounded-full">
                <BiSolidMicrophone />
            </div>
        </div>
        <div className="flex gap-7 items-center text-xl">
            <RiVideoAddLine />
            <div className="relative">
                <BsBell />
                <span className="absolute bottom-2 text-xs left-2 px-1 bg-red-700 rounded-full">3+</span>
            </div>
            <img src="https://th.bing.com/th/id/OIP.keIG-gLYH4XdTkLvAFqI2QHaEo?rs=1&pid=ImgDetMain" alt="profile logo" className="w-9 h-9 rounded-full"/>
        </div>
      </div>
    
  );
}

export default Navbar;
