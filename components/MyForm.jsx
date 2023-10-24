"use client";

import { useRef } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import emailjs from "@emailjs/browser";

const MyForm = ({ isOpen, onClose, children }) => {
  const form = useRef();
  if (!isOpen) return null;

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission here (e.g., send data to server)

    const serviceID = "service_af3v7t8";
    const templateID = "template_gif1k1j";
    const userID = "GV-ckDolXb83wb-WY";

    emailjs.send(serviceID, templateID, values, userID).then(
      (response) => {
        console.log("Email sent successfully!", response);
        resetForm();
      },
      (error) => {
        console.error("Email send error:", error);
      }
    );

    console.log(values);
    resetForm();
  };

  return (
    <div className="flex justify-center items-center h-screen w-full absolute bg-slate-700/70 z-40">
      <div className="bg-slate-400/80 w-[350px] rounded-lg">
        <div className="flex justify-end">
          <button
            className="text-black hover:text-red-700 mr-3 mt-1 border pr-3 pl-3 rounded-sm"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <h1 className="text-center font-semibold">Apply Now</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="max-w-xs mx-auto mt-8 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="mt-1 text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="mt-1 text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  autoComplete="phone"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />

                <ErrorMessage
                  name="phone"
                  component="p"
                  className="mt-1 text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  autoComplete="message"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="mt-1 text-red-500 text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-2 px-4 mb-2 rounded-md hover:bg-indigo-700"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MyForm;
