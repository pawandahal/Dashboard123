"use client"
import EditUserForm from '@/components/userForm/EditUserForm'
import React,{useState} from 'react'

const page = () => {
   const[editUser,setEditUser]=useState(false)
  return (
    <div>
       {/* Edit section */}
       <div>
       <div className="float-right p-2  ">
          
          <button    onClick={() => setEditUser(true)}
         
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded w-[100px]">
            Edit
          </button>
        </div>
        <div className='flex justify-center relative top-[50px] p-2'>
        <div className='shadow-md grid grid-cols-1 gap-2 p-2'> 
          <p>Branch Code :<span>234</span></p>
             <p>Name:<span>Laxmi bank Limited</span></p>
             <p>Status:<span>Active</span></p>
        </div>
        </div>

        
       </div>

       {/* click the event handler */}
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
  )
}

export default page
