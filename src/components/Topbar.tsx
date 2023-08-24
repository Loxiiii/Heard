import Image from "next/image";
import OnlyArrow from "../media/onlyarrow-PhotoRoom.png-PhotoRoom.png";
import { BiSearch, BiMessageSquareDots } from "react-icons/bi";
import { TbSmartHome, TbTriangleInvertedFilled } from "react-icons/tb";
import { HiHashtag } from "react-icons/hi";
import { GoPeople } from "react-icons/go";
import ProfilePic from "../media/close-up-portrait-young-man-isolated-black-studio-background.jpg";
import React from "react";

export default function Topbar() {
  return (
    <div>
      <div className="w-full h-20 text-white border-white flex flex-row items-center">
        <div
          id="left"
          className="w-1/3 pl-5 border-white flex flex-row space-x-10 items-center"
        >
          <Image src={OnlyArrow} width={50} alt={""} />
          <div
            id="search-input"
            className="flex flex-row items-center w-80 h-10 bg-gray2 rounded-2xl hover:bg-graylight active:bg-graylight focus:outline-none focus:ring-0"
          >
            <BiSearch size={20} className="ml-2 text-txtgray" />
            <input
              className={`placeholder:italic placeholder:text-text-txtgray font-sans w-full focus:outline-none focus:ring-0 bg-gray2 text-txtgray ml-3`}
              placeholder="Search for Song, Artist, User..."
            ></input>
          </div>
        </div>
        <div
          id="middle"
          className="w-1/3 border-white flex flex-row items-center justify-center text-txtgray space-x-12"
        >
          <TbSmartHome className="text-txtgray hover:text-accent hover:cursor-pointer" size={25} />
          <BiMessageSquareDots
            className="text-txtgray hover:text-accent hover:cursor-pointer"
            size={25}
          />
          <HiHashtag className="text-txtgray hover:text-accent hover:cursor-pointer" size={25} />
          <GoPeople className="text-txtgray hover:text-accent hover:cursor-pointer" size={25} />
        </div>
        <div
          id="right"
          className="w-1/3 h-full flex flex-row items-center justify-end pr-5"
        >
          <div className="flex flex-row bg-gray2 w-72 h-10 rounded-2xl items-center space-x-3 hover:bg-graylight">
            <div
              id="profilepicture"
              className=" border-white h-7 w-7 rounded-lg ml-2 relative"
            >
              <Image
                src={ProfilePic}
                fill={true}
                objectFit="contain"
                className="rounded-lg" alt={""}/>
            </div>
            <div className="text-txtgray">Javier Campos</div>
          </div>
        </div>
        <TbTriangleInvertedFilled className="text-txtgray" size={10} />
      </div>
    </div>
  );
}
