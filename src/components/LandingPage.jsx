import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const LandingPage = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <div>
          <div className="heading">Eat n Bite</div>
          <div className="tag-line">Order your favorite food!</div>
        </div>
        <div className="bg-[#dbcbcc] h-[73px] w-[73px] rounded-3xl flex">
          <img
            className="h-[73px] w-[73px]"
            src="https://s3-alpha-sig.figma.com/img/2bcd/d2fd/5b5f794902b901ece844d95598b477e1?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYCgxYDN1a6KoDUkfb~FMw0VSjcV-KxxqbGvHKhx9JAyASod8C6o39MWBS-mL1MfeZHjiDMvMChOplk1GcgatWoYjhIxvy7810BkC4Ky37ulXWFOa99Ao19HArmIy5DqfKM94LJsI8NJfzURpHZ46eXWQAoRMCpfVY5yZkgT5VkC5mf240paq64GiAobiaiLBXiduQvK9cLLEaxN~-zb8ezhso2PYxQwiNMBltCmG8vkB0cOXeDT8fn8TKuRWRegE47ZNAQt-ZeWFLGwIkVRoh5ji6rR7-1bHOliHuQTGAOuLzd0zJGq4Am7-qVKXyctaAFjVc~~E9a8vwRywcX0Mw__"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center justify-between py-8">
        <div className="w-4/5 relative">
          <div className="absolute top-2/4 left-3 -translate-y-2/4">
            <FiSearch size={25} color="#777"/>
          </div>
          <input
            className="w-full py-2 pl-12 px-4 rounded-lg shadow-xl text-lg outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <button className="h-[60px] w-[60px] bg-[#ef2a39] flex items-center justify-center rounded-2xl">
          <IoSettingsOutline color="white" size={32} />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
