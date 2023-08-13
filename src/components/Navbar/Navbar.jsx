"use client";
import React, { useState, useEffect, useRef } from "react";
import { BsFullscreen } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Navar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownVendor, setIsDropdownVendor] = useState(false);
  const [isDropdownSetting, setIsDropdownSetting] = useState(false);
  const [isDropdownPrintDocument, setIsDropdownPrintDocument] = useState(false);
  const closeTimeout = useRef(null);

  {
    /*account holder */
  }
  const handleMenuEnter = () => {
    clearTimeout(closeTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMenuLeave = () => {
    clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100); // Adjust the delay as needed
  };

  const closeDropdown = () => {
    clearTimeout(closeTimeout.current);
    setIsDropdownOpen(false);
  };

  {
    /* master */
  }
  const handleMenuEnterVendor = () => {
    clearTimeout(closeTimeout.current);
    setIsDropdownVendor(true);
  };

  const handleMenuLeaveVendor = () => {
    clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => {
      setIsDropdownVendor(false);
    }, 100); // Adjust the delay as needed
  };

  const closeDropdownVendor = () => {
    clearTimeout(closeTimeout.current);
    setIsDropdownVendor(false);
  };

  {
    /* setting */
  }
  const handleMenuEnterSetting = () => {
    clearTimeout(closeTimeout.current);
    setIsDropdownSetting(true);
  };

  const handleMenuLeaveSetting = () => {
    clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => {
      setIsDropdownSetting(false);
    }, 100); // Adjust the delay as needed
  };

  const closeDropdownSetting = () => {
    clearTimeout(closeTimeout.current);
    setIsDropdownSetting(false);
  };

  {
    /* print document */
  }
  const handleMenuEnterPrintDocument = () => {
    clearTimeout(closeTimeout.current);
    setIsDropdownPrintDocument(true);
  };

  const handleMenuLeavePrintDocument = () => {
    clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => {
      setIsDropdownPrintDocument(false);
    }, 100); // Adjust the delay as needed
  };

  const closeDropdownPrintDocument = () => {
    clearTimeout(closeTimeout.current);
    setIsDropdownPrintDocument(false);
  };
  return (
    <div className="w-full sticky z-10 ">
      {/* first Navbar */}
      <div className="bg-[#556ee6] flex justify-between items-center  p-5 place-items-center w-full h-auto">
        {/* logo section */}
        <div className="relative left-10 text-white ">Logo</div>
        <div className="relative  text-white ">Dashboard</div>
        <div className="flex justify-center mr-10">
          <div className="flex items-center gap-4">
            {/* icons sections */}
            <div className="flex  gap-4 text-white ">
              <BsFullscreen size={20} className="" />
              <IoIosNotificationsOutline size={20} />
            </div>
            {/* profile section and name section */}
            <div className="flex gap-4 items-center text-white">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg"
                alt="image"
                className="rounded-full h-[40px] w-[40px]"
              />
              <p>Khatri</p>
              <RiArrowDropDownLine />
            </div>
            {/* icons section with setting */}
            <div className="text-white font-bold">
              <AiOutlineSetting size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* second Navbar */}
      <div className="w-full shadow-md  h-auto p-5  ">
        <div className="w-[90vw]">
          <div className="relative  flex justify-center gap-x-10 font-normal text-base font-quicksand  text-slate-500  items-center ">
            <Link className="hover:text-[#7a85dc]  " href="/">
              Dashboard
            </Link>
            {/* Card Section */}
            <div
              className="relative inline-block"
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              <button className=" flex items-center  text-base cursor-pointer">
                Account Holder
                {isDropdownOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
              </button>
              {isDropdownOpen && (
                <div className="relative  top-[10px]">
                  <div className="absolute  ml-auto mr-auto bg-gray-100 shadow-md z-10 mt-2 p-5 ">
                    <a
                      href="#home"
                      className="block text-black no-underline w-[10vw]"
                    >
                      Digital Banking
                    </a>
                    <a
                      href="#home"
                      className="block text-black no-underline w-[10vw]"
                    >
                      Loan Account
                    </a>
                  </div>
                </div>
              )}
            </div>
            {/* setting */}
            <div
              className="relative inline-block"
              onMouseEnter={handleMenuEnterSetting}
              onMouseLeave={handleMenuLeaveSetting}
            >
              <button className=" flex items-center  text-base cursor-pointer">
                Setting
                {isDropdownSetting ? (
                  <IoMdArrowDropdown />
                ) : (
                  <IoMdArrowDropup />
                )}
              </button>
              {isDropdownSetting && (
                <div className="relative  top-[10px]">
                  <div className="absolute  ml-auto mr-auto bg-gray-100 shadow-md z-10 mt-2 p-5 ">
                    <a
                      href="/userRole"
                      className="block text-black no-underline w-[10vw]"
                    >
                      User Role
                    </a>
                    <a
                      href="/branchRight"
                      className="block text-black no-underline w-[10vw]"
                    >
                     Branch Right
                    </a>
                    <a
                      href="#home"
                      className="block text-black no-underline w-[12vw]"
                    >
                    Document Numbering 
                    </a>
                  </div>
                </div>
              )}
            </div>
            {/* master section */}
            <div
              className="relative inline-block"
              onMouseEnter={handleMenuEnterVendor}
              onMouseLeave={handleMenuLeaveVendor}
            >
              <button className=" flex items-center  text-base cursor-pointer">
                Master
                {isDropdownVendor ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
              </button>
              {isDropdownVendor && (
                <div className="relative  top-[10px]">
                  <div className="absolute  ml-auto mr-auto bg-gray-100 shadow-md z-10 mt-2 h-[50px] ">
                    <a
                      href="/master"
                      className="flex justify-center p-2 text-black no-underline w-[12vw]   "
                  
                    >
                      Vendor Lists
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* print document */}
            <div
              className="relative inline-block"
              onMouseEnter={handleMenuEnterPrintDocument}
              onMouseLeave={handleMenuLeavePrintDocument}
            >
              <button className=" flex items-center  text-base cursor-pointer">
                Print Document
                {isDropdownPrintDocument ? (
                  <IoMdArrowDropdown />
                ) : (
                  <IoMdArrowDropup />
                )}
              </button>
              {isDropdownPrintDocument && (
                <div className="relative  top-[10px]">
                  <div className="absolute  ml-auto mr-auto bg-gray-100 shadow-md z-10 mt-2 h-[50px] w-[15vw]">
                    <a
                      href="#home"
                      className="flex justify-center p-2 text-black no-underline w-[15vw] items-center  "
                    >
                      Warning Letter Print
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navar;
