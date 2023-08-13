

"use client";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ImBin } from "react-icons/im";
import { BiPencil } from "react-icons/bi";
import { AiOutlineFilePdf, AiOutlineFileExcel } from "react-icons/ai";
import axios from "axios";
import AddUserForm from "@/components/userForm/Adduserform";
import EditUserForm from "@/components/userForm/EditUserForm";
import Adduserform from "@/components/userForm/Adduserform";
import Link from "next/link";
const page = ({ rowsPerPage, page }) => {
  const [course, setCourses] = useState([]);
  const [addUser, setAddUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  //adding university
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log("Hello", res.data);
      setCourses(res.data);
    });
  }, []);

  return (
    <div className=" w-full relative ">
      <div className=" ">
        <div className="float-right gap-2 grid grid-cols-2 p-2 pr-[95px] ">
          <button
            onClick={() => setAddUser(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px]"
          >
            Add
          </button>
          <button    onClick={() => setEditUser(true)}
         
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px]">
            Edit
          </button>
        </div>
        <TableContainer className="relative ">
          <Table
            aria-label="simple table"
            className="font-Poppins font-normal text-base w-[90vw] relative left-[60px] items-center "
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F4F4F4" }}>
                <TableCell className="text-center">Branch Role</TableCell>
                <TableCell className="text-center">Branch Name</TableCell>
                <TableCell className="text-center">Status</TableCell>

              

                <TableCell className="text-center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {course.map((user, index) => (
                <TableRow
                  key={user}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <div className="text-center">
                    <Link href={`/branchRight/${user.id}`} >{index + 1}</Link>
               
                    </div>
                   </TableCell>
                  <TableCell>
                    <div className="text-center">
                    <Link href={`/branchRight/${user.id}`} >{user.name}</Link>
                
                    </div>

                    </TableCell>
                  <TableCell>
                    <div className="text-center">
                    <Link href={`/branchRight/${user.id}`} >{user.username}</Link>
                
                    </div>
                   </TableCell>
                
               
               

                  <TableCell>
                    <div className="text-center flex justify-center  gap-2">
                      <ImBin />
                      <AiOutlineFilePdf />
                      <BiPencil />
                      <AiOutlineFileExcel />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
     
      {addUser && (
        <div className="bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center">
          {/* Form container */}
          <div className="w-[800px] opacity-100 bg-white p-10 rounded-md">
            {/* Form heading */}
            <div className="w-full flex items-center justify-between sticky">
              <h1 className="text-base font-poppins justify-center  flex  relative left-[10px] font-bold text-gray-600 tracking-wide">
                User Information
              </h1>
              <p
                onClick={() => setAddUser(false)}
                className="text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md"
              >
                Close
              </p>
            </div>
            <div
              id="sidebarDropdown"
              className="w-full max-h-[70vh] mt-5 overflow-y-auto"
            >
              <Adduserform/>
            </div>
          </div>
        </div>
      )}
        {editUser && (
        <div className="bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center">
          {/* Form container */}
          <div className="w-[800px] opacity-100 bg-white p-10 rounded-md">
            {/* Form heading */}
            <div className="w-full flex items-center justify-between sticky">
              <h1 className="text-base font-poppins justify-center  flex  relative left-[10px] font-bold text-gray-600 tracking-wide">
              Edit  User Information
              </h1>
              <p
                onClick={() => setEditUser(false)}
                className="text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md"
              >
                Close
              </p>
            </div>
            <div
              id="sidebarDropdown"
              className="w-full max-h-[70vh] mt-5 overflow-y-auto"
            >
              <EditUserForm/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
