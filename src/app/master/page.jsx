// "use client";
// import React from "react";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import { AiOutlinePlus, AiOutlineEdit, AiOutlineClose, AiOutlinePrinter, AiOutlineFilePdf, AiOutlineFileExcel } from "react-icons/ai";
// import { MdOutlineUpdate } from "react-icons/md";

// const UserPage = () => {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUserData(data));
//   }, []);

//   return (
//     <div className='w-full h-auto'>
//       <p className="text-2xl text-blue-500">Role List</p>
//       <div className="bg-blue-500">
//       <ButtonGroup
//         size="small"
//         variant="contained"
//         aria-label="outlined primary button group"
//       >
//         <div className="flex justify-center items-center">
//           <Link href="/add">
//             <Button>
//               <AiOutlinePlus />
//               Add
//             </Button>
//           </Link>
//         </div>
//         <div className="flex justify-center items-center">
//           <Link href="/edit">
//             <Button>
//               <AiOutlineEdit />
//               Edit
//             </Button>
//           </Link>
//         </div>
//         <div className="flex justify-center items-center">
//           <Link href="/update">
//             <Button>
//               <MdOutlineUpdate/>
//               Update
//             </Button>
//           </Link>
//         </div>
//         <div className="flex justify-center items-center">
//           <Link href="/cancel">
//             <Button>
//               <AiOutlineClose />
//               Cancel
//             </Button>
//           </Link>
//         </div>
//         <div className="flex justify-center items-center">
//           <Link href="/print">
//             <Button>
//             <AiOutlinePrinter />
//             Print
//             </Button>
//           </Link>
//         </div>
//         <div className="flex justify-center items-center">
//           <Link href="/pdfexport">
//             <Button>
//               <AiOutlineFilePdf />
//               PDF Export
//             </Button>
//           </Link>
//         </div>
//         <div className="flex justify-center items-center">
//           <Link href="/excelexport">
//             <Button>
//               <AiOutlineFileExcel />
//               Excel Export
//             </Button>
//           </Link>
//         </div>
//       </ButtonGroup>
//       </div>
//       <div className="w-full mx-auto p-0">
//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//           <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//             <thead className="text-xs text-white uppercase bg-purple-900 dark:bg-purple-900 dark:text-white">
//               <tr>
//                 <th scope="col" className="px-6 py-3">
//                   Name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   username
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Email
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Remark
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {userData.map((user) => (
//                 <tr
//                   key={user.name}
//                   className="border-b dark:bg-white dark:border-purple-600"
//                 >
//                   <td className="px-6 py-4 text-black">{user.name}</td>
//                   <td className="px-6 py-4 text-black">{user.username}</td>
//                   <td className="px-6 py-4 text-black">{user.email}</td>
//                   <td className="px-6 py-4 text-black">
//                     <a
//                       href="#"
//                       className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//                     >
//                       Edit
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserPage;

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
            className="font-Poppins font-normal text-base w-[90vw] relative left-[100px]"
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F4F4F4" }}>
                <TableCell className="text-center">Supplier</TableCell>
                <TableCell className="text-center">Supplier in Nepali</TableCell>
                <TableCell align="center">Address</TableCell>

                <TableCell className="text-center">Branch</TableCell>
                <TableCell className="text-center">Phone No</TableCell>
                <TableCell className="text-center">Email</TableCell>
                <TableCell className="text-center">Pan</TableCell>
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
                    <div className="text-center">{index + 1}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">{user.name}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">{user.username}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">{user.email}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">{user.address.street}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">{user.phone}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">{user.phone}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">{user.phone}</div>
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
