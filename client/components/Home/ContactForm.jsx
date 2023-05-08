import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion'


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Direct phone number is required'),
  address: Yup.string().required('Address is required'),
  postalCode: Yup.string().required('Postal code is required'),
  location: Yup.string().required('State or Country of interest is required'),
  referralSource: Yup.string().required('Referral source is required'),
  liquidCapital: Yup.string().required('Liquid capital is required'),
  message: Yup.string().required('Message is required'),
});
const ContactForm = () => (
  <section className="text-gray-600 body-font bg-[#F3E5F6]">
    <div className="container flex flex-col items-center px-5 py-24 mx-auto overflow-x-hidden md:flex-row">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 capitalize title-font sm:text-4xl">
          RUN YOUR BUSINESS FROM THE PALM OF YOUR HAND. WE WILL SHOW YOU HOW.
        </h1>
        <p className="mb-8 text-[18px] leading-relaxed">
          If our concept interests you, fill out the form to learn more about our franchise opportunities. We speak English, Spanish and French. But our chatbot can answer you in almost any language. You can write or speak to it.
        </p>
      </motion.div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
          postalCode: "",
          location: "",
          referralSource: "",
          liquidCapital: "",
          message: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {

          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mail`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({data:values}),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              alert("Form submitted successfully, we'll be in touch soon!");
              resetForm();
            })
            .catch((error) => {
              console.error(
                "There was a problem with the fetch operation:",
                error.message
              );
            });
        }}

      >

        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
              }}
              className="flex flex-wrap -m-2">
              <Form onSubmit={handleSubmit}>
                <div className='flex flex-col'>

                  <div className='flex flex-row'>

                    <div className="w-1/2 p-2 sm:w-1/3">
                      <div className="relative">
                        <label htmlFor="name"
                          className="text-sm font-semibold leading-7 text-gray-600">
                          Name
                        </label>

                        <Field name="name"
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded shadow outline-none appearance-none focus:outline-none focus:shadow-outline focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                          placeholder="Enter name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="name" component="div" className="mt-1 text-sm text-red-600"/>

                      </div>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/3">
                      <div className="relative">
                        <label htmlFor="email"
                          className="text-sm font-semibold leading-7 text-gray-600">
                          Email
                        </label>


                        <Field name="email"
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded shadow outline-none appearance-none focus:outline-none focus:shadow-outline focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                          placeholder="Enter email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600"/>
                      </div>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/3">
                      <div className="relative">
                        <label htmlFor="phone"
                          className="text-sm font-semibold leading-7 text-gray-600">
                          Direct Phone No.
                        </label>

                        <Field name="phone"
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded shadow outline-none appearance-none focus:outline-none focus:shadow-outline focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                          placeholder="Enter Direct Phone No."
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="phone" component="div" className="mt-1 text-sm text-red-600"/>

                      </div>
                    </div>
                  </div>

                  <div className='flex flex-row'>

                    <div className="w-1/2 p-2 sm:w-1/3">
                      <div className="relative">
                        <label htmlFor="address"
                          className="text-sm font-semibold leading-7 text-gray-600">
                          Address Area of Interest
                        </label>

                        <Field name="address"
                          className="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded shadow outline-none appearance-none focus:outline-none focus:shadow-outlinetext-gray-700 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                          placeholder="Enter Address Area of Interest"
                          values={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="address" component="div" className="mt-1 text-sm text-red-600"/>

                      </div>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/3">
                      <div className="relative">
                        <label htmlFor="postalCode"
                          className="text-sm font-semibold leading-7 text-gray-600">
                          Postal Code
                        </label>

                        <Field name="postalCode"
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded shadow outline-none appearance-none focus:outline-none focus:shadow-outline focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                          placeholder="Enter postal code"
                          value={values.postalCode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="postalCode" component="div" className="mt-1 text-sm text-red-600"/>

                      </div>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/3">
                      <div className="relative">
                        <label htmlFor="location"
                          className="text-sm font-semibold leading-7 text-gray-600">
                          State or Country of interest
                        </label>

                        <Field name="location"
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded shadow outline-none appearance-none focus:outline-none focus:shadow-outline focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                          placeholder="Enter the State or Country of interest"
                          value={values.location}
                          onChange={handleChange}
                          onBlur={handleBlur}

                        />
                        <ErrorMessage name="location" component="div" className="mt-1 text-sm text-red-600" />

                      </div>
                    </div>
                  </div>

                  <div className='flex flex-row'>

                    <div className="w-1/2 p-2 sm:w-1/3">
                      <div className="relative">
                        <label htmlFor="referralSource"
                          className="text-sm font-semibold leading-7 text-gray-600">
                          How did you hear about us
                        </label>

                        <Field name="referralSource"
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded shadow outline-none appearance-none focus:outline-none focus:shadow-outline focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                          placeholder="Enter referral source"
                          value={values.referralSource}
                          onChange={handleChange}
                          onBlur={handleBlur}

                        />
                        <ErrorMessage name="referralSource" component="div" className="mt-1 text-sm text-red-600" />

                      </div>
                    </div>

                    <div className="w-1/2 p-2 sm:w-1/3">
                      <div className="relative">
                        <label htmlFor="liquidCapital"
                          className="text-sm font-semibold leading-7 text-gray-600">
                          Liquid Capital
                        </label>

                        <Field name="liquidCapital"
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded shadow outline-none appearance-none focus:outline-none focus:shadow-outline focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                          placeholder="Enter liquid capital"
                          value={values.liquidCapital}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="liquidCapital" component="div" className="mt-1 text-sm text-red-600"/>

                      </div>
                    </div>

                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label htmlFor="message"
                      className="text-sm font-semibold leading-7 text-gray-600">
                      Message
                    </label>

                    <Field name="message"
                      component="textarea"
                      rows="4"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded shadow outline-none appearance-none focus:outline-none focus:shadow-outline focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                      placeholder="Enter message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="message" component="div" className="mt-1 text-sm text-red-600 "/>

                  </div>
                </div>
                <div className="w-full p-2">

                  <button type="submit"
                    className="px-8 py-2 text-lg text-white transition duration-300 ease-in-out delay-150 bg-pink-500 rounded hover:bg-pink-400 focus:outline-none focus:shadow-outline "
                  >
                    Submit
                  </button>

                </div>

              </Form>
            </motion.div>
          </div>







        )}
      </Formik>
    </div>
  </section>
);

export default ContactForm;