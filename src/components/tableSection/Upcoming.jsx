"use client";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [

  { field: "firstName", headerName: "First name",width:140 },
  { field: "lastName", headerName: "Last name",width:140 },
  
 
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width:10,
    
  },

  
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,

    width: 150,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function Upcoming() {
  return (
    <div className='w-full h-auto p-2'>
      <div className='flex justify-center relative left-[60px] h-auto'>
      <div className='grid grid-cols-2 gap-4 '>
      <div>
        <p className='font-semibold text-base leading-7'>Upcoming Followship</p>
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
    
      />
      </div>
      <div>
         <p className='font-semibold text-base leading-7'>Last 5 follow up</p>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
       
      />
      </div>
    
    </div>
      </div>
           
    </div>
   
  );
}
export default Upcoming;
