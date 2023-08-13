"use client";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const initialValues = {
    email,
    password,
  };


  // validation
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").required("Required*"),
    password: Yup.string()
      .min(8, "Password must be atleat 8 character")
      .max(20)
      .required("Required*"),
  });

  return (
    <div className="w-full">
      {/* Main container */}
      <div className='flex justify-center'>
      <div className="w-[40vw] bg-[#5c5387] p-4 rounded-md shadow-md relative top-[50px]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="w-full flex flex-col items-center gap-7">
            <div className='w-full'>
            <label className='text-white font-semibold text-base '>
              Name
            </label>
            <Field
              type="text"
              name="user"
              placeholder="User Name"
              className="w-full text-sm p-3 rounded-md outline-none border-b-2 font-poppins tracking-wide "

            />
            </div>
           
            <div className='w-full'>
             <label className='text-white font-semibold text-base '>Email</label>
            <Field
              name="email"
              placeholder="Email"
              className="w-full text-sm p-3 rounded-md outline-none border-b-2 font-poppins tracking-wide "

            />
            </div>
            
            <div className='w-full'>
             <label className='text-white font-semibold text-base '>Password</label>
            <Field
              name="password"
              placeholder="Password"
              className="w-full text-sm p-3 rounded-md outline-none border-b-2 font-poppins tracking-wide "

            />
            </div>
            <div className='w-full'>
               <label className='text-white font-semibold text-base '>Confirm Password</label>
            <Field
              name="confirm_password"
              placeholder="Confirm Password"
              className="w-full text-sm p-3 rounded-md outline-none border-b-2 font-poppins tracking-wide "

             />

            </div>
           
          
            {/* Login button */}
            <div className="p-5">
              <Field
                className=" bg-[#5b21b6] h-[50px] w-36 cursor-pointer  p-2 rounded-md font-poppins text-sm tracking-wide text-white "
                type="submit"
                value="Sign in"
              />
            </div>
          </Form>
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

export default Register;
