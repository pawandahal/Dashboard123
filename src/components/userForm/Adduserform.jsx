import React from "react";
import { Field, Form, Formik } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adduserform = () => {
  return (
    <div className="w-full">
      {/* Main container */}
      <div className="flex justify-center items-center relative top-[10px]">
        <div className="grid grid-cols-1 w-[40vw] shadow-md p-5">
          <Formik>
            {({ values, setFieldValue }) => (
              <Form className="w-full bg-red-300p pr-5  ">
                <div className="w-full flex flex-col gap-5">
                  <div className="w-full flex flex-col gap-5">
                    {/* Hostel  Name */}
                    <div className="flex flex-col gap-2">
                    
                      <div className="">
                        <div className="grid grid-cols-3 gap-4 ">
                            <div className='grid grid-cols-1'>
                            <label className="font-poppins text-base font-semibold">
                         First  Name
                          </label>
                          <Field
                            type="text"
                            required
                            name="  First"
                            placeholder="Enter the blog title"
                            className="p-2 rounded-md text-base font-poppins  border-[1px] border-primary-gray"
                          />
                            </div>
                            <div>
                            <div  className='grid grid-cols-1'>
                            <label className="font-poppins text-base font-semibold">
                           Middle Name
                          </label>
                          <Field
                            type="text"
                            required
                            name="  First"
                            placeholder="Enter the blog title"
                            className="p-2 rounded-md text-base font-poppins  border-[1px] border-primary-gray"
                          />
                            </div>
                            </div>

                            <div>
                            <div  className='grid grid-cols-1'>
                            <label className="font-poppins text-base font-semibold">
                          Last Name
                          </label>
                          <Field
                            type="text"
                            required
                            name="  First"
                            placeholder="Enter the blog title"
                            className="p-2 rounded-md text-base font-poppins  border-[1px] border-primary-gray"
                          />
                            </div>
                            </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="grid grid-cols-1 ">
                          <label className="font-poppins text-base font-semibold">
                           Email 
                          </label>
                          <Field
                            type="text"
                            required
                            name="  First"
                            placeholder="xyz@gmail.com"
                            className="p-2 
                             rounded-md text-base font-poppins  border-[1px] border-primary-gray"
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="">
                        <div className="grid grid-cols-1 ">
                          <label className="font-poppins text-base font-semibold">
                           User Name
                          </label>
                          <Field
                            type="text"
                            required
                            name="  First"
                            placeholder="pawan"
                            className="p-2 
                             rounded-md text-base font-poppins  border-[1px] border-primary-gray"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="grid grid-cols-1 ">
                          <label className="font-poppins text-base font-semibold">
                           Phone
                          </label>
                          <Field
                            type="text"
                            required
                            name="  First"
                            placeholder="xyz@gmail.com"
                            className="p-2 
                             rounded-md text-base font-poppins  border-[1px] border-primary-gray"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="grid grid-cols-1 ">
                          <label className="font-poppins text-base font-semibold">
                           Address
                          </label>
                          <Field
                            type="text"
                            required
                            name="  First"
                            placeholder="Kathmandu"
                            className="p-2 
                             rounded-md text-base font-poppins  border-[1px] border-primary-gray"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="grid grid-cols-1 ">
                          <label className="font-poppins text-base font-semibold">
                      Location
                          </label>
                          <Field
                            type="text"
                            required
                            name="  First"
                            placeholder="sukedhara"
                            className="p-2 
                             rounded-md text-base font-poppins  border-[1px] border-primary-gray"
                          />
                        </div>
                      </div>
                  <div className="relative top-[10px]">
                    <Field
                      className="w-32 font-poppins text-base p-2 bg-[#1e40af] hover:bg-primary-lightblue rounded-md text-white "
                      type="submit"
                      id="outlined-required"
                      value="Submit"
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Adduserform;
