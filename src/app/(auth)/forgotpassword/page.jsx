"use client";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const initialValues = {
    email,
    password,
  };


  //validation for email and password
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").required("Required*"),
    password: Yup.string()
      .min(8, "Password must be atleat 8 character")
      .max(20)
      .required("Required*"),
  });

  return (
    <div className="w-full  ">
      {/* Main container */}
      <div className=''>
      <div className='flex justify-center p-2 '>
      <div className="w-[40vw] bg-[#5c5387] relative p-5
      top-[200px] rounded-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="w-full p-2 flex flex-col items-center gap-7">
            <Field
              name="password"
              placeholder="Password"
              className="w-full text-sm p-3 rounded-md outline-none border-b-2 font-poppins tracking-wide "
            />
            {/* Remember me & Forgot password*/}
         
            <div className="p-5">
              <Link href="/editPassword">
                <Field
                  className="h-10 bg-gradient-to-r to-blue-200 from-blue-600  hover:bg-[#729af0] cursor-pointer w-36 p-2 rounded-md font-poppins text-sm tracking-wide text-white"
                  type="submit"
                  value="Sign in"
                />
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
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
        draggables
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ForgotPassword;
